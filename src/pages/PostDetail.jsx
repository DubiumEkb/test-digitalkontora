import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";

const PostPage =() => {
	const params = useParams()
	const [post, setPost] = useState({});

	const [fetchPostPage, postError] = useFetching(async (id) => {
		const response = await PostService.getById(id)
		setPost(response);
	})

	useEffect(() => {
		fetchPostPage(params.id)
	}, [fetchPostPage, params.id])

	const image = `https://picsum.photos/1500/1500.jpg?random=${post?.id}`

	return (
		<main className="main">
			{postError &&
				<h1>Произошла ошибка: {postError}</h1>
			}
			<section>
				<article>
					<div className="container">
						<h1 className="title">{post?.title}</h1>
						<img className="post__image--img" src={image} alt="" />
						<address>
							<p>Автор: {post?.userAuthor?.name}</p>
							<p>Компания: {post?.userAuthor?.company?.name}</p>
						</address>
						<p className="post__body--description">{post?.body}</p>
					</div>
				</article>
			</section>
		</main>
	)
}

export default PostPage;