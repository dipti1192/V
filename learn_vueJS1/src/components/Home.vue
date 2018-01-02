<template>
  <div id="Home">
    <h1>{{ msg }}</h1>
      <div v-if="columns.length>0" class="section" v-for="column in columns" v-bind:key="column.id">
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
      columns: []
    }
  },
  components: {
    Section
  },
  methods: {
    saveDataToFirebase: function (data) {
      this.ajaxRequest = true
      this.$http.post('https://vuejs-db-74a8b.firebaseio.com/posts.json', data,
        function (data, status, request) {
          console.log(data)
          this.ajaxRequest = false
        })
    },
    getDataFromFireBase: function () {
      this.$http.get('https://vuejs-db-74a8b.firebaseio.com/posts.json').then(
      function (data, status, request) {
        console.log(data)
        this.columns = data.body['-L1pfSGFMU44QdzDmWZH'].columns
        console.log(this.columns)
      })
    }
  },
  created: function () {
    // this.saveDataToFirebase({columns: [{
    //   id: 1,
    //   name: 'Mumbai',
    //   description: `Mumbai (/mʊmˈbaɪ/; also known as Bombay, the official name until 1995) is the capital city of the Indian
    //   state of Maharashtra. It is the most populous city in India with an estimated city proper population of 12.4 million as of
    //   2011. Along with the neighbouring regions of the Mumbai Metropolitan Region, it is second most populous metropolitan
    //   area in India, with a population of 21.3 million as of 2016.[12][13][14] Mumbai lies on the Konkan on the west coast of
    //   India and has a deep natural harbour.`,
    //   state: 'Maharashtra',
    //   img: `https://firebasestorage.googleapis.com/v0/b/vuejs-db-74a8b.appspot.com/o/LearnVueJS1%2FVictoria_Terminus%2C_Mumbai.jpg?alt=media&token=d14947ff-0438-4d7c-bf17-642de4c0b428`
    // },
    // {
    //   id: 2,
    //   name: 'Bangalore',
    //   description: `Bangalore (/bæŋɡəˈlɔːr/), officially known as Bengaluru[13] ([ˈbeŋɡəɭuːɾu] (About this sound listen)), is the
    //   capital of the Indian state of Karnataka. It has a population of over ten million,[14] making it a megacity and the third most
    //   populous city and fifth most populous urban agglomeration in India.[15] It is located in southern India on the Deccan
    //   Plateau. Its elevation is over 900 m (3,000 ft) above sea level, the highest of India's major cities.`,
    //   state: 'Karnataka',
    //   img: `https://firebasestorage.googleapis.com/v0/b/vuejs-db-74a8b.appspot.com/o/LearnVueJS1%2FMysore-Palace-Banglore.jpg?alt=media&token=a750ca0a-9936-46ea-b4da-52c849f0d817`
    // },
    // {
    //   id: 3,
    //   name: 'Chennai',
    //   description: `Chennai (/ˈtʃɛnaɪ/ (About this sound listen); formerly known as Madras /məˈdrɑːs/ (About this sound listen)
    //   or /-ˈdræs/[11]) is the capital of the Indian state of Tamil Nadu. Located on the Coromandel Coast off the Bay of Bengal,
    //   it is one of the biggest cultural, economic and educational centres in South India. According to the 2011 Indian census, it is
    //   the fifth-largest city and fourth-most populous urban agglomeration in India. The city together with the adjoining regions
    //   constitute the Chennai Metropolitan Area, which is the 36th-largest urban area by population in the world.[12] Chennai is
    //   among the most visited Indian cities by foreign tourists. It was ranked 43rd most visited city in the world for year
    //   2015.[13] The Quality of Living Survey rated Chennai as the safest city in India.[14] Chennai attracts 45 percent of health tourists
    //   visiting India, and 30 to 40 percent of domestic health tourists.[15] As such, it is termed "India's health capital". As a growing
    //   metropolitan city in a developing country, Chennai confronts substantial pollution and other logistical and socio-economic
    //   problems.`,
    //   state: 'Tamil Nadu',
    //   img: `https://firebasestorage.googleapis.com/v0/b/vuejs-db-74a8b.appspot.com/o/LearnVueJS1%2FChennai-COC.jpg?alt=media&token=450fd9d1-e0ed-4bbf-939e-7df5b98f958a`
    // }
    // ]})
    this.getDataFromFireBase()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}  

.section{
    float: left;
    height: 500px;
    border: solid black 1px;
    background-color: lightblue;
    overflow-y: auto;
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
        height: 350px;
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
        height: auto;
    }
}
</style>
