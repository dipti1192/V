<template>
    <div id="section">
        <div class="title">
            {{column.name}}
        </div>
        <p class="text">
            Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since 
            the 1500s, when an unknown printer took a galley 
            of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the 
            leap into electronic typesetting, remaining essentially 
            unchanged. It was popularised in the 1960s with the release 
            of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.    
            Why do we use it?
            It is a long established fact that a reader will be 
            distracted by the readable content of a page when looking at 
            its layout. The point of using Lorem Ipsum is that 
            it has a more-or-less normal distribution of letters, 
            as opposed to using 'Content here, content here', 
            making it look like readable English. 
            Many desktop publishing packages and web page editors now 
            use Lorem Ipsum as their default model text, and a search for 
            'lorem ipsum' will uncover many web sites still in their infancy. 
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).        
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
  },
  created: function () {
    console.log(this.column)
  }
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
