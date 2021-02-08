interface Todo {
    name: string,
    state: TodoState
}

var todo: Todo = {
    name: "Pick up dry cleaning",
    state: TodoState.New
}

enum TodoState {
    New = 1,
    Active,
    Complete,
    Delete
}

function Delete(todo: Todo) {
    if (todo.state != TodoState.Complete) {
        throw "Can't delete incomplete task!"
    }
}