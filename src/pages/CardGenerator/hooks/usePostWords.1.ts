import { IPostWordsResponse } from './../type';
import { IPostWords } from '@/pages/CardGenerator/type';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/shared/api/axios';
import { useContext } from 'react';
import { LocalStorageContext } from '@/app';
import { POST_WORDS_KEY } from '@/pages/CardGenerator/queryConstants';

const postWords = async (id: string, data: IPostWords): Promise<IPostWordsResponse> => {
	const response = await api.post(`/generator/`, { ...data, id: id || null });
	return response.data;
};

export const usePostWords = () => {
	const { localUserId: id, setUserId } = useContext(LocalStorageContext);
	const queryClient = useQueryClient();

	const mutaionParams = useMutation({
		mutationFn: (data: IPostWords) => {
			return postWords(id || '', data);
		},
		onSuccess: (data) => {
			setUserId(data.id);
			queryClient.invalidateQueries({
				queryKey: [POST_WORDS_KEY, 1, id],
			});
		},
	});

	return { ...mutaionParams, sendWords: mutaionParams.mutate };
};
