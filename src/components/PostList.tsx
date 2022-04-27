import React from "react";
import { useQuery } from "react-query";
import { axiosInstance } from "../axiosInstance";
import { queryKeys } from "../react-query/contants";
import PostItem from "./PostItem";

interface PostResult {
	id: number;
	title: string;
}

async function getPosts() {
	const { data } = await axiosInstance.get<PostResult[]>("/posts");
	return data;
}

const Posts: React.FC = () => {
	const { data } = useQuery(queryKeys.post, getPosts);

	const posts = data
		? data.map((post) => <PostItem id={post.id} title={post.title} />)
		: [];

	return <div className="flex">{posts}</div>;
};

export default Posts;
