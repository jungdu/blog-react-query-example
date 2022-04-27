import React from "react";
import { useQuery } from "react-query";
import { axiosInstance } from "../axiosInstance";
import { queryKeys } from "../react-query/contants";

type CommentResult = {
	post_id: string;
	comments: {
		user: string;
		comment: string;
	}[];
}[];

function getComments(id: string) {
	return async function () {
		const { data } = await axiosInstance.get<CommentResult>(
			`/comments?post_id=${id}`
		);
		return data;
	};
}

const PostItem: React.FC<{
	id: string;
	title: string;
}> = ({ title, id }) => {
	const { data } = useQuery([queryKeys.comment, id], getComments(id));
	console.log("data :", data);

	const comments =
		data && data[0]
			? data[0].comments.map((comment) => <li>{comment.comment}</li>)
			: null;

	return (
		<div className="w-60 border-2 border-rose-200 m-3 p-2">
			<div className="text-lg mb-3">{title}</div>
			<div>
				<div>comments</div>
				<ul className="list-disc pl-5">{comments}</ul>
			</div>
		</div>
	);
};

export default PostItem;
