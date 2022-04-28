import React from "react";
import { useQuery } from "react-query";
import { axiosInstance } from "../axiosInstance";
import { queryKeys } from "../react-query/contants";

type CommentResult = {
	post_id: string;
	user: string;
	comment: string;
}[];

function getComments(id: string) {
	return async function () {
		const { data } = await axiosInstance.get<CommentResult>(
			`/comments?post_id=${id}`
		);
		return data;
	};
}

const CommentList: React.FC<{
	id: string;
}> = ({ id }) => {
	const { data } = useQuery([queryKeys.comment, id], getComments(id));
	console.log("data :", data);

	const comments =
		(data && data.map((comment) => <li>{comment.comment}</li>)) || null;

	return <ul className="list-disc pl-5">{comments}</ul>;
};

export default CommentList;
