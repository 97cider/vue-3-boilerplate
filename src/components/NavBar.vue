<template>
    <div class="nav-bar">
        <router-link class="nav-item" :to="{ path: '/home' }"><h3>home</h3></router-link>
        <router-link class="nav-item" :to="{ path: '/about' }"><h3>about</h3></router-link>
        <div class="nav-item">
            <NavDropDownVue :routes="['test1', 'test2', 'test3']" />
        </div>
    </div>
</template>

<script setup>
import NavDropDownVue from './navDropDown/NavDropDown.vue';
</script>

<style lang="scss">
.nav-bar {
    display: flex;
}
.nav-item {
    padding-left: 10px;
    padding-right: 10px;
}
.nav-item:link {
    text-decoration: none;
    color: inherit;
}
.nav-item.router-link-exact-active {
   cursor: pointer;
 }
</style>