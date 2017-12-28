<template>
    <div id="section">
        <div class="title">
            {{column.name}}
        </div>
        <p class="text">
            {{column.description}}        
        </p>
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
  }
//   created: function () {
//     console.log(this.column)
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.parent{
  position: absolute;
  width: 100%;
  height: 80%;
  border: black solid 1px;
}
article{
  width: 33.15%;
  height: 100%;
  display: inline-block;
  background: lightgreen;
  border: solid 1px black;
}
header{
  width: 100%;
  height:  30px;
  text-align: center;
  font-weight: bold;
  font-size: 20;
}
body{
    box-sizing: border-box;
    font-family: sans-serif;
}

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
</style>
