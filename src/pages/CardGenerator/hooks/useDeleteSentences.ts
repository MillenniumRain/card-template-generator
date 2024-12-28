import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/shared/api/axios';
import { useContext } from 'react';
import { LocalStorageContext } from '@/app';
import { POST_WORDS_KEY } from '@/pages/CardGenerator/queryConstants';

const deleteSentences = async (userId: string | null, id: number) => {
	const response = await api.delete(`/generator/phrases/` + id, {
		params: {
			user_id: userId,
		},
	});
	return response.data;
};

export const useDeleteSentences = () => {
	const queryClient = useQueryClient();
	const { localUserId: userId } = useContext(LocalStorageContext);
	const mutaionParams = useMutation({
		mutationFn: (id: number) => {
			return deleteSentences(userId, id);
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: [POST_WORDS_KEY],
			});
		},
	});

	return { ...mutaionParams, deleteSentences: mutaionParams.mutate };
};
