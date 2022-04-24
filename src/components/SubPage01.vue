<template>
  <div class="page01">
    <h2>Page02</h2>
    <h2>AxiosAjax</h2>
  <div>
    <label>ユーザーID</label>
    <input type="text" v-model="userId"/>
    <button @click="getUserName">検索</button>
  </div>
  <div>ユーザーID:{{ userId}}</div>
  <div>名前:{{ userName}}</div></div>
</template>

<script>
import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/users/'

export default{
  name:'SubPage01',
  data: function() {
  return{
    userId:'',
    userName:'',
  }
  },
  watch: {
    userId: function() {
      this.getUserName()
    },
  },
  methods:{
    getUserName: function() {
    var vm= this
    axios.get(url+ this.userId)
      .then(function(response) {
      vm.userName= response.data.name
    }).catch(function() {
this.userName= '不正なID'
})
    },
  },
  }
</script>