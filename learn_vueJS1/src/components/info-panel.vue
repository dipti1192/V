<template>

    <v-container>
        <v-card class="white">
            <v-flex style="width:10%;float:left;color:black;padding:5px">
                <div class="alertCount">99</div><span>ALERTS</span>
                <div class="year"> {{ new Date().getFullYear() }}</div>
                <div class="date"> Wed, Dec,17</div>
            </v-flex>
            
            <v-flex align-center style="width:60%;float:left;marging-left:30%">
                <v-flex v-for="button in buttons" v-bind:key="button.id" style="float:left;width:10%;font-size:10px"> 
                    <v-btn v-bind:color="button.color" style="text-align:center; font-size:10px" fab small dark >
                        {{button.count}}
                    </v-btn>
                    <div style="color:black;width:50px;text-align:center">{{button.title}}</div>
                </v-flex>
            </v-flex>
            <v-flex class="actionButtons" >
                <v-btn round color="primary" small dark>Exports</v-btn>
                <v-btn round color="primary" small dark>Store</v-btn>
            </v-flex>
        </v-card>
    </v-container>
</template>

<script>
export default {
  name: "info-panel",
  data(){
      return{
          buttons: [{
            id: '1',
            title: 'D-Void',
            color: 'green',
            count: '20'
        },{
            id: '2',
            title: 'Inventory',
            color: 'grey',
            count: 24
        },{
            id: '3',
            title: 'Forced',
            color: 'orange',
            count: 27
        },{
            id: '4',
            title: 'Shelf OOS',
            color: 'purple',
            count: 29
        }]
      }
  }
  
//   props: ["show_progress_bar"]
};
</script>

<style>
.actionButtons{
  float: right;
  width:15%;
}
.container{
    max-height: 20%;
}
.mediaCardImg{
    width: 100%;
    float: left;
}
.pageInfoCard{
    width: 100%;
}
.alertCount{
    display:inline-block;
    font-size:25px;
    color:red;
}
.year{
    color:lightgrey;
    font-size:10px;
}
.date{
    color:darkgrey;
    font-size:10px;
}
</style>