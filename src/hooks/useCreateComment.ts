import { nanoid } from "nanoid";
import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { axiosInstance } from "../axiosInstance";
import { queryKeys } from "../react-query/contants";

interface PostCommentParam {
	postId: string;
	user: string;
	comment: string;
}

async function postComment({
	postId,
	user,
	comment,
}: PostCommentParam): Promise<void> {
	console.log("postId :", postId);
	await axiosInstance.post(`/comments`, {
		id: nanoid(),
		post_id: postId,
		user,
		comment,
	});
}

export function useCreateComment(
	postId: string
): UseMutateFunction<void, unknown, PostCommentParam, unknown> {
	const queryClient = useQueryClient();

	const { mutate } = useMutation(postComment, {
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.comment, postId]);
		},
	});

	return mutate;
}
