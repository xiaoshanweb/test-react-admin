import React from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodoAll } from '../actions/todo'

class AddTodo extends React.Component {
	constructor (){
		super()
		this.state = {
			toggleClick:false
		}
	}
	add(e){
		if(e.keyCode != 13) return false
		this.props.dispatch(addTodo(e.target.value))
		e.target.value = ''
	}
	render(){
		return (
			<header>
				<input type="checkbox" className={this.state.toggleClick?'toggle-all active':'toggle-all'} onClick={ e => {
					this.props.dispatch(toggleTodoAll(this.state.toggleClick))
					this.setState({
						toggleClick:!this.state.toggleClick
					})
				}}></input>
				<input type="text" className="new-todo" placeholder="请输入" onKeyDown={this.add.bind(this)}/>
			</header>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		active: state.toggleTodoStatus
	}
}
export default connect(mapStateToProps)(AddTodo)