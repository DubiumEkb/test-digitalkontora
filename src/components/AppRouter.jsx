import React from 'react';
import {Navigate, Routes, Route} from "react-router-dom";
import Posts from "../pages/Posts"
import PostsDetail from "../pages/PostDetail"


function AppRouter() {
	return (
		<Routes>
			<Route path="/posts" element={<Posts />} />
			<Route path="/posts/post-:id" element={<PostsDetail />} />
			<Route
				path="*"
				element={<Navigate to="/posts" replace />}
			/>
		</Routes>
	);
}

export default AppRouter