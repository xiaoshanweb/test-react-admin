import React from 'react'
import { Row , Col, Card, Icon} from 'antd'
const options = [
	{
		icon:'usergroup-add',
		label:"人数",
		value:1111
	},
	{
		icon:'heart',
		label:"收藏",
		value:1643
	},
	{
		icon:'mail',
		label:"邮件",
		value:1234
	},
	{
		icon:'picture',
		label:"图片",
		value:5231
	}
]
class CardItem extends React.Component{
	render(){
		return(
			<div>
				<Col md={6} className='gutter-row'>
					<Card bordered={false}>
						<div className="box">
							<div>
								<Icon type={this.props.item.icon} className="box-icon person_icon"></Icon>
							</div>
							<div>
								<span>{this.props.item.label}</span>
								<h2>{this.props.item.value}</h2>
							</div>
						</div>
					</Card>
				</Col>
			</div>
		)
	}
}
export default () =>(
	<Row>
		<Col md={6} className="gutter-row">
			<Card bordered={false}>
				<div className="box">
					<div>
						<Icon type="usergroup-add" className="box_icon person_icon" />
					</div>
					<div>
						<span>人数</span>
						<h2>1423</h2>
					</div>
				</div>
			</Card>
		</Col>
		<Col md={6} className="gutter-row">
			<Card bordered={false}>
				<div className="box">
					<div>
						<Icon type="heart" className="box_icon like_icon" />
					</div>
					<div>
						<span>收藏</span>
						<h2>3472</h2>
					</div>
				</div>
			</Card>
		</Col>
		<Col md={6} className="gutter-row">
			<Card bordered={false}>
				<div className="box">
					<div>
						<Icon type="mail" className="box_icon email_icon" />
					</div>
					<div>
						<span>邮件</span>
						<h2>1245</h2>
					</div>
				</div>
			</Card>
		</Col>
		<Col md={6} className="gutter-row">
			<Card bordered={false}>
				<div className="box">
					<div>
						<Icon type="picture" className="box_icon picture_icon" />
					</div>
					<div>
						<span>图片</span>
						<h2>1000</h2>
					</div>
				</div>
			</Card>
		</Col>
	</Row>
)