import React from 'react';
import PostItem from './PostItem'
import Row from "react-bootstrap/Row"

const PostList = ({posts}) => {
	return (
		<section className="postsList">
			<Row>
				{posts.map((post, index) =>
					<PostItem key={index + 1} post={post} />
				)}
			</Row>
		</section>
	)
}

export default PostList