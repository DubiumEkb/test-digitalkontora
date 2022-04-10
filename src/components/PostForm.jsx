import React, {useState} from 'react';
import {Form, Button, Row, Col, Container} from 'react-bootstrap'

const PostForm = ({create}) => {
	const [post, setPost] = useState({title: "", body: ""})

	const addPost = (event) => {
		event.preventDefault()
		const newPost = {
			...post,
			id: Date.now(),
		}
		create(newPost)
		setPost({title: "", body: ""})
	}

	return (
		<Form className="form_header">
			<Container>
				<Row>
					<Col>
						<Row>
							<Col>
								<Form.Group className="mb-3" controlId="formName">
									<Form.Label>Название поста</Form.Label>
									<Form.Control
										value={post.title}
										type="text"
										placeholder="Введите название"
										onChange={e => setPost({...post, title: e.target.value})}
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3" controlId="formBody">
									<Form.Label>Текст поста</Form.Label>
									<Form.Control
										type="text"
										value={post.body}
										onChange={e => setPost({...post, body: e.target.value})}
									/>
								</Form.Group>
							</Col>
						</Row>
					</Col>
					<Col className="send">
						<Button onClick={addPost} variant="primary" type="submit">
							Добавить
						</Button>
					</Col>
				</Row>
			</Container>
		</Form>
	)
}

export default PostForm