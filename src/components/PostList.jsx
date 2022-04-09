import React from 'react';
import PostItem from './PostItem'

const PostList = ({posts}) => {
	return (
		<section className="postList">
			{posts.map((post, index) =>
				<PostItem key={index + 1} post={post} />
			)}
		</section>
	)
}

export default PostList