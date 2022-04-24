<template>
  <div class="topPage">
    <h2>TopPage</h2>
    <h2>{{ storeCount }}</h2>
  </div>
</template>
<script>
export default{
  name:'TopPage',
  computed: {
    storeCount: function() {
      return this.$store.state.count;
    }
  }, 
}
</script>

<style>

</style>