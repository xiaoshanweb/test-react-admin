import React from 'react'
import {connect} from 'react-redux'
import { setVisibilityFilter, visibilityStatus, clearTodo } from 'views/Knowledge/Redux/actions/todo'

const Footer = ({dispatch, active, len}) => {
	const set = filter => {
		dispatch(setVisibilityFilter(filter))
	}
	return (
		<footer>
			<span className="todo-count">
				<strong>{len}</strong>
				<strong>items</strong>
				<strong>left</strong>
			</span>
			<ul className="filters">
				{visibilityStatus.map( (v,index) => (
					<li key={index}>
						<a href="javascript:;" className={v.filter === active ? 'selected' : ''} onClick={e => {
							// 防止事件冒泡
							e.stopPropagation()
							set(v.filter)
						}}>{v.text}</a>
					</li>
				))}
			</ul>
		</footer>
	)
}

const mapDispatchToProps = (state) => ({
	active: state.visibilityFilter,
	len: state.todos.length || 0
})
export default connect(mapDispatchToProps)(Footer)