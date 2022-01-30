<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 mb-4">
                <router-link :to='{name:"createBlog"}' class="btn btn-success">Criar </router-link>
            </div>
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead class="bg-primary text-white">
                        <tr>
                            <th>ID</th>
                            <th>Titulo</th>
                            <th>Conteudo</th>
                            <th>Ação</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="blog in blogs" :key="blog.id">
                            <td>{{ blog.id }}</td>
                            <td>{{ blog.titulo }}</td>
                            <td>{{ blog.conteudo }}</td>
                            <td>
                                <router-link :to='{name:"editBlog", params:{id:blog.id}}' class="btn btn-info"><i class="far fa-edit"></i><a></a></router-link>
                                <a type="button" @click="deleteBLog(blog.id)" class="btn btn-danger"><i class="fas fa-trash" ></i></a>
                            </td>
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
    name: "indexBLog",
    data(){
        return{
            blogs:[]
        }
    },
    mounted() {
        this.mostrarBlogs()
    },
    methods:{
        async mostrarBlogs(){
            await axios.get('http://localhost:8000/api/blog')
                .then(response => {
                    this.blogs = response.data;
                })
                .catch(error => {
                    this.blog = [];
                })
        },
       deleteBLog(id){
            if (confirm("Deseja deletar o Registro?")){
                axios.delete('api/blog/'+id)
                    .then(response => {this.mostrarBlogs()})
                    .catch(error => {console.log('error')})
            }
       }
    }
}
</script>

<style scoped>

</style>
