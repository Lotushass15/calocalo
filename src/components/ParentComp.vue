<template>
  <ChildComp1 msg="Hello ChildComp1" v-on:ChildClick="parentA"/>
  <ChildComp2 msg="Hello ChildComp2" />
  <ChildComp3 msg="Hello ChildComp3" />
</template>

<script>
import ChildComp1 from "@/components/ChildComp1.vue"
import ChildComp2 from "@/components/ChildComp2.vue"
import ChildComp3 from "@/components/ChildComp3.vue"

 export default {
    name: "ParentComp",
    props: {msg: String},
    components: {
      ChildComp1,
      ChildComp2,
      ChildComp3
    },
    methods: {
      parentA() {
        alert("ParentEvent");
      }
    }
 }
</script>

<style>

</style>
