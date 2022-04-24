<template>
  <div>{{msg}}</div>
  <button v-on:click="$emit('ChildClick')">チャイルドクリック</button>
</template>

<script>
export default {
  name: "ChildComp",
  props: {msg: String},
  methods: {
    ChildClick: function() {
      alert("ABCDEF");
    }
  },
}
</script>

<style>

</style>
