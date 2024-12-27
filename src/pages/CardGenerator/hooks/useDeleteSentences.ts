import { IPostSentence, IPostWords } from '@/pages/CardGenerator/type';
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import useLocalStorage from '@/shared/hooks/LocalStorage';
import { api } from '@/shared/api/axios';
import { POST_WORDS_KEY } from '@/pages/CardGenerator/hooks/useListNames';

const deleteSentences = async (id: number) => {
	const response = await api.delete(`/generator/phrases/` + id);
	return response.data;
};

export const useDeleteSentences = () => {
	const queryClient = useQueryClient();
	const mutaionParams = useMutation({
		mutationFn: (id: number) => {
			return deleteSentences(id);
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: [POST_WORDS_KEY],
			});
		},
	});

	return { ...mutaionParams, deleteSentences: mutaionParams.mutate };
};
