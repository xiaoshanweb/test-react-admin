import React from 'react'
import { Card } from 'antd'
import './index.less'

export default class Model extends React.Component {
	constructor(){
		super()
		this.state = {
			inputValue:'111',
			value1:''
		}
	}

	inputValueChange(value){
		console.log(value,1111)
		this.setState({
			inputValue:value
		})
	}
	handleInput1 (value1) {
		this.setState({
			value1
		})
	}

	render(){
		return (
			<div className="binding_wrapper">
				<Card title="双向绑定" style={{width: '400px',margin: '50px'}}>
					<input type="text" value={this.state.inputValue} onChange={e => {this.inputValueChange(e.target.value)}}/>
					<div>{this.state.inputValue}</div>
				</Card>
				<Card title="双向绑定" style={{width: '400px',margin: '50px'}}>
					<input type="text" value={this.state.value1} onChange={e => {this.handleInput1(e.target.value)}}/>
					<div>{this.state.value1}</div>
				</Card>
			</div>
		)
	}
}