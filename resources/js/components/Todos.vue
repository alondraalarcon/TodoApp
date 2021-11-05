<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                 <h3 class="font-weight-bold">List</h3>
            </div>
            <div class="col-md-6 mb-2">
                <div class="float-right">
                      <router-link :to="{ name: 'addTodo' }" class="btn btn-dark btn-sm">Add Todo</router-link>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(todo, key) of todos">
                                <td>{{key + 1}}</td>
                                <td>{{ todo.title }}</td>
                                <td><router-link class="btn btn-dark btn-sm" :to="{ name: 'editTodo', params: { todoID: todo.id }}">Edit</router-link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            todos: [],
        };
    },
    created() {
        this.getTodos();
    },
    methods: {
        getTodos() {
            this.axios
                .get("http://127.0.0.1:8000/api/todo")
                .then((response) => {
                    this.todos = response.data.todos;
                });
        },
    },
};
</script>
