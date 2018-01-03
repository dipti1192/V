<template>
    <div id="section">
      <router-link v-bind:to="getURL(column.id)">
        <div class="title">
            {{column.name}}
        </div> 
        <p class="text">
            <img width="100%" height="250px" v-bind:src="column.img" alt="">
            <h3>State:</h3><span>{{column.state}}</span>
        </p>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'Section',
  props: ['column'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getURL: function (id) {
      return '/sectionDetails/' + id
    }
  }
  // created: function () {
  //   console.log(this.column)
  //   alert(column.img)
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
    float: right;
    width: 98.5%;
    border: black solid 1px;
    height: 30px;
    border-left: solid black 1px;
    border-bottom: solid black 1px;
    text-align: right;
    padding: 2px;
    font-weight: bold;
    font-size: 15;
    display: block;
    background-color: red;
    color: white;
}

.text{
    margin-top: 2px;
    clear: right;
    padding: 10px;
    text-align:  justify;
}
h3{
  display: inline-block;
}
</style>
