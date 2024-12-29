import { LocalStorageContext } from '@/app';
import { POST_WORDS_KEY } from '@/pages/CardGenerator/queryConstants';
import { IListNames } from '@/pages/CardGenerator/type';
import { api } from '@/shared/api/axios';
import { useQuery } from '@tanstack/react-query';
import { useRef, useContext } from 'react';

const getListNames = async (userId: string | null, currentPage: number, limit: number) => {
	try {
		return await api.get<IListNames>('/generator/phrases/', {
			params: {
				limit,
				offset: (currentPage - 1) * limit,
				user_id: userId,
			},
		});
	} catch (error) {
		return { data: { results: [], count: 0, id: '', next: null, previous: null } };
	}
};

export const useGetListNames = (currentPage: number = 1, limit: number = 20) => {
	let maxPage = useRef(1);
	const { localUserId: id } = useContext(LocalStorageContext);

	const response = useQuery({
		queryKey: [POST_WORDS_KEY, currentPage, id],
		queryFn: () => getListNames(id, currentPage, limit),
		select: (response) => response.data,
	});
	if (response.isError) {
	}
	const uData = useRef(response.data);
	if (response.isSuccess) {
		if (response.data?.results.length) {
			uData.current = response.data;
		}
		maxPage.current = Math.ceil(response.data.count / limit);
	}
	return { ...response, maxPage: maxPage.current, limit, data: uData.current };
};
