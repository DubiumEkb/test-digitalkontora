import React from 'react';
import {useNavigate} from 'react-router-dom';

const PostItem = (props) => {
	const navigate = useNavigate();
	const image = `https://picsum.photos/1500/1500.jpg?random=${props?.post?.id}`

	const divStyle = {
		width: '100%',
		height: '20px'
	};
	return (
		<article id={props?.post?.id} className="post">
			<div className="post__image">
				<img className="post__image--img" src={image} alt="" style={divStyle} />
			</div>
			<div className="post__body">
				<h2 className="post__body--header">{props?.post?.id}: {props?.post?.title}</h2>
				<address>
					<p>Автор: {props?.post?.userData.name}</p>
				</address>
				<p className="post__body--description">{props?.post?.body}</p>
				<button className="post__body--more" onClick={() => navigate(`/posts/post-${props?.post?.id}`)}>Подробнее</button>
			</div>
		</article>
	)
}

export default PostItem