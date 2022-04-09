import axios from "axios"

export default class PostService {
	static async getAll(limit = 10, page = 1) {
		const posts = await axios.get(
			"https://jsonplaceholder.typicode.com/posts",
			{
				params: {
					_limit: limit,
					_page: page,
				},
			},
		)
		const users = await axios.get(
			"https://jsonplaceholder.typicode.com/users",
		)

		return await axios.all([posts, users]).then((response) => {
			const header = response[0]
			const Posts = response[0].data
			const Users = response[1].data

			const newData = Posts.map((post) => {
				const userData = Users.find((user) => user.id === post.userId)
				return { ...post, userData }
			})

			return { header, newData }
		})
	}

	static async getById(id) {
		const post = await axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((response) => response.data)
		const user = await axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.data)

		return await axios.all([post, user]).then((response) => {
			const Post = response[0]
			const User = response[1]

			const userAuthor = User.find((user) => user.id === Post.userId)

			const page = { ...post, userAuthor }

			return Post, page
		})
	}
}
