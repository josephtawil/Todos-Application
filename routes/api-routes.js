const express = require("express");
const router = express.Router();
//grabbing specific methods from the orm
const { seeAllTodos, showTodo, deleteTodo, addTodo, editTodo } = require("../config/orm");

router.get("/api", (req, res) => {
    // res.send("hello");
    seeAllTodos()
        .then((allTodos) => res.send(allTodos))
        .catch((err) => res.send(err));
});
router.get("/api/get/:id", (req, res) => {
    const id = parseInt(req.params.id);
    showTodo(id)
        .then((todo) => res.send(todo))
        .catch((err) => res.send(err));
});
router.delete("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);

    deleteTodo(id)
        .then((del) => res.json(del))
        .catch((err) => res.json(err));

});

router.post("/api", (req, res) => {
    const text = req.body.todo_text
    addTodo(text)
        .then((todoText) => {
            res.json(todoText);
        });
});

//updating a todo
router.patch("/api", (req, res) => {
    const text = req.body;
    editTodo(text)
        .then((todo) => res.send(todo))
        .catch((err) => res.send(err));
});
module.exports = router;