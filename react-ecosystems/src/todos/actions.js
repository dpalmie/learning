export const CREATE_TODO = 'CREATE_TODO';
// below is an example of an 'action creator'
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text }
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text }
});

export const MARK_TODO_COMPLETE = 'MARK_TODO_COMPLETE';
export const markTodoComplete = text => ({
    type: MARK_TODO_COMPLETE,
    payload: { text }
});