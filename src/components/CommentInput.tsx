import React from "react";
import { useCreateComment } from "../hooks/useCreateComment";
import { useInput } from "../hooks/useInput";

const CommentInput: React.FC<{
	postId: string;
}> = ({ postId }) => {
	const { value, handleChange } = useInput();
	const mutate = useCreateComment(postId);

	function handleSubmit() {
		mutate({
			comment: value,
			postId,
			user: "anonymous",
		});
	}

	return (
		<div className="flex ">
			<input
				className="appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
				value={value}
				onChange={handleChange}
			/>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-1"
				onClick={handleSubmit}
			>
				+
			</button>
		</div>
	);
};

export default CommentInput;
