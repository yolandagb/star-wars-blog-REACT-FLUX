import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Container>
				<Row>
					<Col>
						<Image src="https://th.bing.com/th/id/OIP.FSnkX8Llc-Fs4rMIQmzWuAHaFj?pid=ImgDet&rs=1" fluid />
					</Col>
					<Col>
						<h1>LUKE SKYWALKER</h1>
						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
							architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
							voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
							consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
							dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
							exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
							consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
							molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
};
