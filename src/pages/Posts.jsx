import React, {useEffect, useState} from 'react';
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
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

    const changePage = (page) => {
        setPage(page)
    }

	return (
		<main className="main">
			{postError &&
				<h1>Произошла ошибка: {postError}</h1>
			}

			<PostList posts={posts} />

			<Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
		</main>
	)
}

export default Posts;