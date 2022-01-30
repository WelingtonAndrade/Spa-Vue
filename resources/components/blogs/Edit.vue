<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Editar Blog</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="updateBLog">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Titulo</label>
                                    <input type="text" class="form-control" v-model="blog.titulo">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-floating">
                                    <textarea id="floatingTextArea" class="form-control" v-model="blog.conteudo" style="height: 100%;" ></textarea>
                                    <label for="floatingTextArea">Conteudo</label>
                                </div>
                            </div>
                            <button class="btn btn-success" type="submit">Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EditBlog",
    data(){
        return{
            blog:{
                titulo : "",
                conteudo : ""
            }
        }
    },
    mounted() {
        this.mostrarBlog()
    },
    methods: {
        async mostrarBlog(){
            axios.get(`/api/blog/${this.$route.params.id}`)
                .then(response => {
                    const {titulo , conteudo }  = response.data
                    this.blog.titulo =  titulo;
                    this.blog.conteudo =  conteudo;
                })
                 .catch(error => {
                     console.log(error)
                 })
        },
        async updateBLog(){
            axios.put(`/api/blog/${this.$route.params.id}`, this.blog)
                .then(response => {
                    this.$router.push({
                        name: "indexBLog"
                    })
                })
                .catch(
                    error => {
                        console.log(error)
                    }
                )
            ;
        }
    }
}
</script>

<style scoped>

</style>
