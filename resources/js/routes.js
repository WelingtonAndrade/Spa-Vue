const Home = () => import('../components/Home.vue')
const Contato = () => import('../components/Contato.vue')


// Rotas para as paginas do Blog

const CreateBlog = () => import('../components/blogs/Create.vue')
const EditBlog = () => import('../components/blogs/Edit.vue')
const IndexBlog = () => import('../components/blogs/Index.vue')

export const routes = [
    {
        name:'home',
        path:'/',
        component:Home
    },
    {
        name:'Contato',
        path:'/contato',
        component:Contato
    },
    {
        name:'createBlog',
        path:'/createBlog',
        component:CreateBlog
    },
    {
        name:'editBlog',
        path:'/editBlog/:id',
        component:EditBlog
    },
    {
        name:'indexBLog',
        path:'/indexBLog',
        component:IndexBlog
    }
]

