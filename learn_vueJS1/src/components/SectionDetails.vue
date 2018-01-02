<template>

    <div id="SectionDetails">
        <div class="title">
            {{column.name}}
        </div>
        <img width="98.5%" v-bind:src="column.img">
        <p>{{column.description}}</p>
    </div>
</template>

<script>
export default {
  name: 'SectionDetails',
  data () {
    return {
      id: this.$route.params.id,
      msg: 'Welcome to Your Vue.js App',
      column: {}
    }
  },
  created: function () {
    this.getDataFromFireBase((columns) => {
      for (let i = 0; i < columns.length; i++) {
        if (columns[i].id == this.id) {
          this.column = columns[i]
        }
      }
    })
  },
  methods: {
    getDataFromFireBase: function (callback) {
      this.$http.get('https://vuejs-db-74a8b.firebaseio.com/posts.json').then(
        function (data, status, request) {
          this.columns = data.body['-L1pfSGFMU44QdzDmWZH'].columns
          callback(this.columns)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
    width: 98.5%;
    background: grey;
    color: black;
    margin-top: 2px;
    padding: 10px;
    text-align:  justify;
}
img{
    padding: 10px;
}
.title{
    width: 100%;
    border: black solid 1px;
    height: 40px;
    border-left: solid black 1px;
    border-bottom: solid black 1px;
    text-align: center;
    font-weight: bold;
    font-size: 15;
    display: block;
    background-color: red;
    color: white;
}
</style>
