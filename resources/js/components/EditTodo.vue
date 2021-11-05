<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                 <h3 class="font-weight-bold">Edit Todo</h3>
            </div>
            <div class="col-md-6">
                <div class="float-right">
                    <router-link :to="{ name: 'todos' }" class="btn btn-sm btn-dark">Back</router-link>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="alert alert-success" role="alert" v-if="isSuccess">
                   {{message}}
                </div>
                <form>
                    <div class="form-group">
                        <label>Title</label>
                        <textarea class="form-control" rows="5" v-model="todo.title"></textarea>
                    </div>
                    <button type="button" class="btn btn-dark btn-sm float-right" @click="edit()">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            todo: {},
            isSuccess: false,
            message: ''
        }
    },
    mounted() {
        this.getTodo(this.$route.params.todoID);
    },
    methods: {
        getTodo(todoID) {
            this.axios.get('http://localhost:8000/api/todo/' + todoID)
           .then((response) => {
                this.todo = response.data
            });
        },
        edit() {
            this.axios.patch('http://localhost:8000/api/todo/'+this.$route.params.todoID, this.todo)
            .then((response) => {
                  this.$router.push({ name: 'todos' });
            });
        }
    }
};
</script>
