export class Todo {
    nameTodo;
    todos;
    constructor(nameTodo) {
        this.nameTodo = nameTodo
        this.todos = [
            new GenerateTodo(false,'Give me pussy'),
            new GenerateTodo(false,'Buy bike'),
            new GenerateTodo(false,'Buy car'),
        ]
    }
}
export class GenerateTodo {
    state;
    name;
    id;
    constructor(state,name) {
        this.state = state
        this.name = name
        this.id = Date.now()+Math.floor(Math.random() * 100)
    }
}