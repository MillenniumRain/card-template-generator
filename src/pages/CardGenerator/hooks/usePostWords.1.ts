import { IPostWordsResponse } from './../type';
import { IPostSentence, IPostWords } from '@/pages/CardGenerator/type';
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import useLocalStorage from '@/shared/hooks/LocalStorage';
import { api } from '@/shared/api/axios';
import { POST_WORDS_KEY } from '@/pages/CardGenerator/hooks/useListNames';

const postWords = async (id: string, data: IPostWords): Promise<IPostWordsResponse> => {
	const response = await api.post(`/generator/`, { ...data, id });
	return response.data;
};

export const usePostWords = () => {
	const [id, setUserId] = useLocalStorage<string>('userId');
	const queryClient = useQueryClient();
	const mutaionParams = useMutation({
		mutationFn: (data: IPostWords) => {
			return postWords(id || '', data);
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: [POST_WORDS_KEY],
			});
			!id?.length && setUserId(data.id);
		},
	});

	return { ...mutaionParams, sendWords: mutaionParams.mutate };
};
