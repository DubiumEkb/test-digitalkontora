import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Card, Button, Col } from "react-bootstrap"

const PostItem = (props) => {
	const navigate = useNavigate();
	const image = `https://picsum.photos/1500/1500.jpg?random=${props?.post?.id}`

	return (
		<Col sm={12} md={6} xl={4}>
			<Card id={props?.post?.id}>
				<Card.Img src={image} />
				<Card.Body>
					<Card.Title>{props?.post?.id}: {props?.post?.title}</Card.Title>
					<address>
						<p>Автор: <strong>{props?.post?.userData.name}</strong></p>
					</address>
					<Card.Text>
						{props?.post?.body}
					</Card.Text>
					<Button variant="primary" onClick={() => navigate(`/posts/post-${props?.post?.id}`)}>Подробнее</Button>
				</Card.Body>
			</Card>
		</Col>
	)
}

export default PostItem