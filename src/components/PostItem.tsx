import React from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

const PostItem: React.FC<{
	id: string;
	title: string;
}> = ({ title, id }) => {
	return (
		<div className="basis-2/5 border-2 border-rose-200 m-3 p-2">
			<div className="text-lg mb-3">{title}</div>
			<div>
				<div>comments</div>
				<CommentInput postId={id} />
				<CommentList id={id} />
			</div>
		</div>
	);
};

export default PostItem;
