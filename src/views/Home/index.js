import React from 'react'
import Panel from './Panel'
import Step from './Steps'
import Info from './Info'
import Todo from './Todo'
import './index.less'
import { Card, Col, Row } from 'antd'

export default () => (
	<div className="home_wrapper">
		<Panel />
		<Row className="home_body">
			<Col md={9} className="gutter-row">
				<Card bordered={false}>
					<Step></Step>
				</Card>
			</Col>
			<Col md={9} className="gutter-row">
				<Card bordered={false}>
					<Todo />
				</Card>
			</Col>
			<Col md={6} className="gutter-row">
				<Card bordered={false}>
					<Info />
				</Card>
			</Col>
		</Row>
	</div>
)