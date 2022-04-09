import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import Container from 'react-bootstrap/Container'

const PostPage =() => {
	const params = useParams()
	const [post, setPost] = useState({});

	const [fetchPostPage, postError] = useFetching(async (id) => {
		const response = await PostService.getById(id)
		setPost(response);
	})

	useEffect(() => {
		fetchPostPage(params.id)
	}, [params.id])

	const image = `https://picsum.photos/1500/1500.jpg?random=${params.id}`

	return (
		<main className="main">
			<section className="PostDetail">
				{postError &&
					<h1>Произошла ошибка: {postError}</h1>
				}
					<article className="PostDetail__container">
						<img className="post__image--img" src={image} alt={post?.page?.title} />
						<Container>
							<h1 className="title">{post?.page?.title}</h1>
							<address>
								<p>Автор: <strong>{post?.page?.userAuthor?.name}</strong></p>
								<p>Компания: <strong>{post?.page?.userAuthor?.company?.name}</strong></p>
							</address>
							<p className="post__body--description">{post?.page?.body}</p>
						</Container>
					</article>
			</section>
		</main>
	)
}

export default PostPage;