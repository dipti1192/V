<template>
  <div id="app">
    <header></header>
    <div class="middle_section">
      <div @click="user.enableDetails=!user.enableDetails" class="tiles" v-for="user in users">
        <h2>{{user.name}}</h2>
        <h5 v-show="user.enableDetails">{{user.designation}}</h5>
      </div>
    </div>
    <footer>
      <span class="copyrignt">@copyrignt 2017</span>
    </footer>  
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return{
        users: [
              {
                name: 'Dipti',
                designation: 'Sr.Software Engineer',
                enableDetails: false
              },
              {
                name: 'Pooja',
                designation: 'Sr.Software Engineer',
                enableDetails: false
              },
              {
                name: 'Manali',
                designation: 'Software Engineer',
                enableDetails: false
              }
            ]
      }
    }
  }
</script>

<style scoped>
  #app {
    position: absolute;
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  header{
    background : lightgreen;
    height: 15%;
  }

  footer{
    height: 10%;
    background: black;
    text: lightgreen;
    text-align: center;

  }

  .middle_section{
    width: 100%;
    height: 75%;
    background: grey;
  }

  .copyrignt{
    padding: 20px;
  }

  .tiles{
    brorder: solid black 1px;
    background: lightgreen;
  }
  
</style>
