import React from "react";
import { axiosInstance } from "../axiosInstance";
import { useInput } from "../hooks/useInput";
import { nanoid } from "nanoid";
import { useCreatePost } from "../hooks/useCreatePost";

const PostInput: React.FC = () => {
	const { value, handleChange } = useInput();
	const createPost = useCreatePost();

	const handleSubmit = () => {
		if (value) {
			createPost({ title: value });
		}
	};

	return (
		<div className="mb-4">
			<h1>CREATE POST</h1>
			<div className="flex">
				<input
					className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
					id="inline-full-name"
					type="text"
					placeholder="Title"
					value={value}
					onChange={handleChange}
				/>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3"
					onClick={handleSubmit}
				>
					CREATE
				</button>
			</div>
		</div>
	);
};

export default PostInput;
