<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Criar Blog</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="criarBlog">
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
    name: "CreateBlog",
    data(){
        return{
            blog:{
                titulo:"",
                conteudo:""
            }
        }
    },
    methods: {
        async criarBlog(){
            await axios.post('http://localhost:8000/api/blog', this.blog)
                .then(response => {
                    this.$router.push({
                        name: "indexBLog"
                    })
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>

<style scoped>

</style>
