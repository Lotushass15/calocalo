<template>
  <div class="page">
    <h2>Page01</h2>
    <h2>StoreCount:{{storeCount}}</h2>
    <input type="text" v-model="amountNum">
    <button v-on:click.self="amount">インクリメント</button>
  </div>
</template>
<script>
export default {
  name:'SubPage01',
  data: function() {
    return {
      amountNum: 0,
    }
  },
  methods: {
    amount: function() {
      this.$store.commit(
        'increment', {amount: Number(this.amountNum)}
      )
    },
  }
}
</script>

<style scoped>
.page {
  height: 150px;
  width:100%;
  background: orange;
}
</style>