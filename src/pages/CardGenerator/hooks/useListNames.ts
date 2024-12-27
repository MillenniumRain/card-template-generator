import { IListNames } from '@/pages/CardGenerator/type';
import { api } from '@/shared/api/axios';
import useLocalStorage from '@/shared/hooks/LocalStorage';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';

const getListNames = async (userId: string, currentPage: number, limit: number) => {
	return api.get<IListNames>('/generator/phrases/', {
		params: {
			limit,
			offset: (currentPage - 1) * limit,
			user_id: userId,
		},
	});
};
export const POST_WORDS_KEY = 'generatedListNames';

export const useListNames = (currentPage: number = 1, limit: number = 20) => {
	let maxPage = useRef(1);
	const [userId] = useLocalStorage<string>('userId');
	const response = useQuery({
		queryKey: [POST_WORDS_KEY, currentPage],
		queryFn: () => getListNames(userId || '', currentPage, limit),
		select: (response) => response.data,
	});
	if (response.isError) {
		console.error('Error', response.isError);
	}

	if (response.isSuccess) {
		maxPage.current = Math.ceil(response.data.count / limit);
	}
	return { ...response, maxPage: maxPage.current };
};
