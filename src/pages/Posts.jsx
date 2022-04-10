import React, {useEffect, useState} from 'react';
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import PostList from "../components/PostList";
import PaginationUI from "../components/UI/pagination/Pagination";
import PostForm from "../components/PostForm"
import Container from 'react-bootstrap/Container'
import {observer} from "mobx-react-lite"

const Posts = observer(() => {
	const [posts, setPosts] = useState([])
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

	const [fetchPosts, postError] = useFetching(async (limit, page) => {
		const response = await PostService.getAll(limit, page);
		setPosts(response.newData)
		const totalCount = response.header.headers['x-total-count']
		setTotalPages(getPageCount(totalCount, limit));
	})

    useEffect(() => {
        fetchPosts(limit, page)
    }, [limit, page])

	const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const changePage = (page) => {
        setPage(page)
    }

	return (
		<main className="main">
			<Container>
				<PostForm create={createPost}/>

				{postError &&
					<h1>Произошла ошибка: {postError}</h1>
				}

				<PostList posts={posts} />

				<PaginationUI
					page={page}
					changePage={changePage}
					totalPages={totalPages}
				/>
			</Container>
		</main>
	)
})

export default Posts;