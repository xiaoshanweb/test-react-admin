import React from 'react'
import AddTodo from './container/AddTodo'
import TodoList from './container/TodoList'
import Footer from './container/Footer'
import './styles/index.less'
import { delTodo } from '../../Knowledge/Redux/actions/todo'

const Todo = () => (
	<div id="home-todo">
		<div className="main">
			<AddTodo />
			<TodoList />
			<Footer />
		</div>	
	</div>
)

export default Todo