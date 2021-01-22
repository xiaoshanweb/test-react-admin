import React from 'react'
import { connect } from 'react-redux'
import Todo from '../component/Todo'
import { toggleTodo } from '../actions/todo'
import todo from '../component/Todo'

const TodoList = ({todos,onTodoClick}) => {
	return (
		<section className="todo-list">
			<ul>
				{todos.map( (item,index) => ( <Todo key={item.id} {...item} onTodoClick={onTodoClick}/>))}
			</ul>	
		</section>
	)
}

const getVisibleTodos = (todos,filter) => {
	console.log(todos,filter,'pp--')
	switch(filter){
		case 'SHOW_ALL':
			return todos
		case "SHOW_COMPLETED":
			return todos.filter(todo=>todo.completed)
		case "SHOW_ACTIVE":
			return todos.filter(todo=>!todo.completed)
		default:
			return todos
	}
}
const mapStateToProps = (state) => ({
	todos: getVisibleTodos(state.todos, state.visibilityFilter)
})
const mapDispatchToProps = {
	onTodoClick:toggleTodo
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)