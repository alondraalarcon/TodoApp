import Todos from "./components/Todos.vue";
import AddTodo from "./components/AddTodo.vue";
import EditTodo from "./components/EditTodo.vue";

export const routes = [
    {
        name: "todos",
        path: "/todos",
        component: Todos,
    },
    {
        name: "addTodo",
        path: "/add-todo",
        component: AddTodo,
    },
    {
        name: "editTodo",
        path: "/todos/edit/:todoID",
        component: EditTodo
    }
];
