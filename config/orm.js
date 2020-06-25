const connection = require("./connection");
const seeAllTodos = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM todos", (err, data) => {
            // if (err) {
            //     reject(err);
            // }
            // else {
            //     resolve(data);
            // }
            //turnary expression
            err ? reject(err) : resolve(data);
        });
    });
};

const showTodo = (todoId) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM todos WHERE ?", [{ id: todoId }], (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
};

const deleteTodo = (todoId) => {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM todos WHERE ?", [{ id: todoId }], (err, data) => {
            err ? reject(err) : resolve({ msg: "Successfully deleted" });
        });
    });
};

const addTodo = (userText) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO todos SET ?", [{ todo_text: userText }], (err) => {
            err ? reject(err) : resolve({ msg: "success" });
        });
    });
};

const editTodo = (obj) => {
    return new Promise((resolve, reject) => {
        connection.query("UPDATE todos SET ? WHERE ?", [{ todo_text: obj.todo_text, completed: obj.completed }, { id: obj.id }], (err) => {
            err ? reject(err) : resolve({ msg: "Successfully editted todo" });
        });
    });
};

module.exports = { seeAllTodos, showTodo, deleteTodo, addTodo, editTodo };
