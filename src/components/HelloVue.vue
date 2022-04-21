<template>
  <h1>テンプレート構文</h1>
  <div class="helloVue">
    <h1>{{ smg }}</h1>
    <button v-on:click="alertClick">クリック</button>
    <button @hover="greet">あいさつ</button>
    <!-- v-bindは変更が反映されない一方向バインディング -->
    <h1>v-bind</h1>
    <h2>{{ inputValBind }}</h2>
    <input type="text" v-bind:value="inputValBind" />
    <!-- v-modelはリアルタイムで変化する双方向バインディング -->
    <h1>v-model</h1>
    <h2>{{ outputValModel }}</h2>
    <input type="text" v-model="outputValModel" />
  </div>
  <div class="separate">
    <h2 v-if="outputValModel === '寺田'">寺田です</h2>
    <h2 v-else-if="outputValModel === '山田'">山田です</h2>
    <h2 v-else>その他</h2>
    <h2 v-show="outputValModel === '寺田'">寺田です</h2>
    <template v-if="outputValModel ==='寺田'">
      <div>入力値は</div>
      <div>寺田です</div>
    </template>
  </div>

  <div class="loop">
  <h2>v-for</h2>
  <ul>
    <li v-for="(music, id) in musicList" :key="music.id">
      <span>No.{{id + 1}}:{{music.genre}}:{{music.title}}</span>
    </li>
  </ul>
  <ol>
    <li v-for="(book, id) in bookList" :key="book.id">
      <h2>{{id + 1}}冊目:{{book.title}}:{{book.title}}</h2>
    </li>
  </ol>
  </div>
  <div class="link" v-html="hplink">
  </div>
</template>

<script>
export default {
  name: 'HelloVue',
  methods: {
    alertClick: function() {
      alert('Click')
    },
    greet: function() {
      alert('Hello')
    }
  },
  data: function() {
    return {
      inputValBind: "入力してください",
      outputValModel: "入力してください",
      musicList: [
        { genre: 'J-pop', title: '愛の歌'},
        { genre: 'J-pop', title: 'Vue.jsの歌'},
        { genre: 'K-pop', title: 'Love Song'},
      ],
      bookList: [
        { title: '赤毛のアン', genre: '小説'},
        { title: '星の王子さま', genre: '小説'},
        { title: 'ライフシフト', genre: 'ビジネス'},
      ],
      hplink: '<a href="http://feeps.co.jp">Feeps</a>'
    }
  }
}
</script>

<style>

</style>
