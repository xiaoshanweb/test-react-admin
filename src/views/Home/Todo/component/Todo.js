import React from 'react'
import { connect } from 'react-redux'
import {delTodo} from '../../../Knowledge/Redux/actions/todo'

const Todo = ({id,completed,text,onTodoClick,dispatch}) => {
	return (
		<li>
			<div className="view" onClick={ () => {
				onTodoClick(id)
			}}>
				<input type="checkBox" checked={completed} readOnly className="toggle"/>
				<label className={`wes ${completed ? 'completed' : ''}`}>{text}</label>
				<button className="destroy" onClick={
					e => {
						e.stopPropagation()
						dispatch(delTodo(id))
					}
				}></button>
			</div>
		</li>
	)
}

export default connect()(Todo)