<template>
  <div>{{msg}}</div>
  <div class="calc">
    <input type="number" v-model="number1" />X
    <input type="number" v-model="number2" />=
    {{resultCalc}}
  </div>
</template>

<script>
export default {
  name: "ChildComp2",
  props: {msg: String},
  data: function() {
    return {
      number1:0,
      number2:0,
    }
  },
  computed: {
    resultCalc: function() {
      return (this.number1 * this.number2);
    }
  }
}
</script>

<style>

</style>
