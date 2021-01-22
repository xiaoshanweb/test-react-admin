let nextTodoId = 8


// 添加
export const addTodo = text => ({
	type: 'ADD_TODO',
	id: nextTodoId ++,
	text
})


// 删除list
export const delTodo = id => ({
	type:'DEL_TODO',
	id
})

// 切换list状态
export const toggleTodo = id => ({
	type:'TOGGLE_TODO',
	id
})

// 清除
export const clearTodo = () => ({
	type: 'CLEAR_TODO'
})

// 设置全选/全不选的状态
export const setToggleTodoStatus = () => {
	type: 'SET_TOGGLE_TODO_STATUS'
}
// 全选/全不选
export const toggleTodoAll = (active) => ({
	type: 'TOGGLE_TODO_ALL',
	active
})

// 切换状态
export const visibilityStatus = [
	{ filter: 'SHOW_ALL',  text: 'All' },
	{ filter: 'SHOW_COMPLETED',  text: 'Completed' },
	{ filter: 'SHOW_ACTIVE',  text: 'Active' }
]

// 过滤
export const setVisibilityFilter = filter => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
})