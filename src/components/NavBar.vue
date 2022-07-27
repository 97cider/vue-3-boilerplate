<template>
    <div class="nav-bar">
        <router-link class="nav-item" :to="{ path: '/home' }"><h3>home</h3></router-link>
        <router-link class="nav-item" :to="{ path: '/about' }"><h3>about</h3></router-link>
    </div>
</template>

<script setup>
</script>

<style lang="scss">
.nav-bar {
  display: flex;
}

.nav-item {
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  color: inherit;
}

.nav-item:link {
  text-decoration: none;
  color: inherit;
}

.nav-item.router-link-exact-active {
  cursor: pointer;
}
</style>