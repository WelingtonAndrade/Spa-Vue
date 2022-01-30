<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="https://vuejs.org/images/logo.svg" alt="" width="30" height="24">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link exact-active-class="active" class="nav-link active" to="/" aria-current="page">Inicio</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link exact-active-class="active" class="nav-link active" to="/contato" aria-current="page">Contato</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Blog
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><router-link exact-active-class="active" class="dropdown-item" to="/indexBLog" aria-current="page">Index</router-link></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><router-link exact-active-class="active" class="dropdown-item" to="/createBlog" aria-current="page">Criar</router-link></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        <div>
            <router-view></router-view>
        </div>
    </main>
</template>
