<template>
  <header>
    <h1>Vue Router</h1>
    <nav>
    <div><router-link to="/">HOME</router-link></div>
    <div><router-link to="/page">PAGE</router-link></div>
    <div><router-link to="/home">HOME BACK</router-link></div>
    <div><router-link to="/page01">Page01</router-link></div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}

</script>
