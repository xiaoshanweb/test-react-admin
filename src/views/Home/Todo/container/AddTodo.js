import React from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodoAll, setToggleTodoStatus } from 'views/Knowledge/Redux/actions/todo'
// 添加  全选/全不选  设置全选/全不选的状态

class AddTodo extends React.Component{
	constructor(){
		super()
		this.state = {
			toggloeClick:false
		}
	}
	add(e) {
		if(e.keyCode !== 13) return null
		this.props.dispatch(addTodo(e.target.value))
		e.target.value = ''
	}

	render(){
		return (
			<header>
				<input type="checkbox" className={`toggle-all df-c ${this.state.toggloeClick ? 'active' : ''}`} onClick={ (e) => {
					this.props.dispatch(toggleTodoAll(this.state.toggloeClick))
					this.setState({
						toggloeClick:!this.state.toggloeClick
					})
				}}/>
				<input type="text" className="new-todo" placeholder="请输入你要做的！" onKeyDown={this.add.bind(this)}/>
			</header>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		active: state.toggleTodoStatus
	}
}
export default connect()(AddTodo)