import React from 'react'
import AddTodo from './container/AddTodo'
import TodoList from './container/TodoList'
import Footer from './container/Footer'
import './style/index.less'

const ReduxTodo = () => (
    <div id="redux-todo">
        <h1>todos</h1>
        <div className="main">
            <AddTodo />
            <TodoList />
            <Footer />
        </div>
    </div>
)
export default ReduxTodo