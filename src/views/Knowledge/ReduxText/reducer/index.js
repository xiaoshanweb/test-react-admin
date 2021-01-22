import todos from './todo'
import visibilityFilter from './visibilityFilter'

const toggleTodoStatus = (state = false,action) => {
    switch(action.type) {
        case "SETTOGGLE_TODO_STATUS":
            return state = !state
        default:
            return state
    }
}
const TodoApp = {
    todos,
    visibilityFilter,
    toggleTodoStatus
}
export default TodoApp