import { nanoid } from "nanoid";
import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { axiosInstance } from "../axiosInstance";
import { queryKeys } from "../react-query/contants";

async function postPost({ title }: { title: string }): Promise<void> {
	await axiosInstance.post(`/posts`, {
		id: nanoid(),
		title,
	});
}

export function useCreatePost(): UseMutateFunction<
	void,
	unknown,
	{
		title: string;
	},
	unknown
> {
	const queryClient = useQueryClient();

	const { mutate } = useMutation(postPost, {
		onSuccess: () => {
			queryClient.invalidateQueries(queryKeys.post);
		},
	});

	return mutate;
}
