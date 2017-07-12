<template>
    <div id="app">
        <span class="appTitle">Hello World!</span>
        <div>
            <router-link to="/helloWorld">Go to helloWorld</router-link>
            <router-link to="/showDetail">Go to showDetail</router-link>
            <router-link to="/seller">Go to seller</router-link>
        </div>
        <router-view>this is start page</router-view>
    </div>
</template>

<script>
    export default {
      name: 'app'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .appTitle{display: block;font-size: 2em;-webkit-margin-before: 0.67em;-webkit-margin-after: 0.67em;-webkit-margin-start: 0;-webkit-margin-end: 0;}
</style>
