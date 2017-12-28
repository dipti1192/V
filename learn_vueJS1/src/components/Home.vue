<template>
  <div id="Home">
    <h1>{{ msg }}</h1>
      <div class="section" v-for="column in columns" v-bind:key="column.id">
        <Section :column="column"></Section>
      </div>
  </div>
</template>

<script>
import Section from './Section'
// Vue.http.options.emulateJSON = true; 
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      columns: [
        {id: 1, name: 'A', text1: 'Dummy Text 1', text2: 'Dummy Text 2'},
        {id: 2, name: 'B', text1: 'Dummy Text 1', text2: 'Dummy Text 2'},
        {id: 3, name: 'C', text1: 'Dummy Text 1', text2: 'Dummy Text 2'}
      ]
    }
  },
  components: {
    Section
  },
  methods: {
    saveDataToFirebase: function ()
    {
      this.ajaxRequest = true;
      this.$http.post('https://vuejs-db-74a8b.firebaseio.com/posts.json', {
        id: 2, 
        name: 'Bangalore', 
        description: `Bangalore (/bæŋɡəˈlɔːr/), officially known as Bengaluru[13] ([ˈbeŋɡəɭuːɾu] (About this sound listen)), is the capital of the Indian state of Karnataka. It has a population of over ten million,[14] making it a megacity and the third most populous city and fifth most populous urban agglomeration in India.[15] It is located in southern India on the Deccan Plateau. Its elevation is over 900 m (3,000 ft) above sea level, the highest of India's major cities.`, 
        state: 'Karnataka',
        }, 
        function (data, status, request) {
              console.log(data)
              this.ajaxRequest = false;
          });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}  

.section{
    border: solid black 1px;
    background-color: lightblue;
}

/* Desktop View */
@media (min-width: 992px){
    .section{
        width: 26%;
        margin: 3%;
        display: inline-block;
    }
}

/* Tablet View  */
@media (min-width: 668px) and (max-width: 991px ){
    .section{
        width: 45%;
        display: inline-block;
        margin-top: 3%;
        margin-left: 3%;
    }
    
    div:nth-child(4){
        width: 94%;
        margin: 3%;
    }

}

/* Mobile View */
@media (max-width: 667px){
    .section{
        width: 100%;
        display: block;
        margin-top: 5%;
    }
}
</style>
