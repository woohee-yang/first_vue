<template>
  <div>
    <h3 style="margin-left:5%">1. Choose a cell</h3>
    <p style="margin-left:5%">
      column : <input placeholder="column" required minlength="4" maxlength="8" size="10" v-model="x"/>
      row : <input placeholder="row" required minlength="4" maxlength="8" size="10" v-model="y"/>
      <!-- <p style="margin-left:20px" >( column : {{ this.x }}, row : {{ this.y }} )</p> -->
      <button @click="updatePos" style="margin-left:10px">input</button> </p>
    <!-- <p style="margin-left:20px">x : {{ curPos.x }} , y : {{ curPos.y }}</p> -->
    <hr/>
    <CellContents :pos = curPos></CellContents>
  </div>
</template>



<script>
import CellContents from "./CellContents.vue"
import {store} from "../store"
export default {
  name : "CellPosition",
  emits: [
    "inputContents",
  ],
  components:{
    CellContents
  },
  data(){
    return {
      x: '',
      y: '',
      curPos: {
        x: -1,
        y: -1,
      },
      contents : '',
      pickPos: false,
    }
  },
  methods: {
    updatePos(){
      this.pickPos = !this.pickPos;
    },
    inputPosition(){
      if(this.x > 0 && this.x <= this.$store.state.cells.length){
        if(this.y > 0 && this.y <= this.$store.state.cells.length){
          this.curPos.x = this.x-1
          this.curPos.y = this.y-1
        }
      }
      else{
        alert('Invalid cell position!')
      }
    }
  },
  watch: {
    pickPos: function () {
      this.inputPosition();
      // console.log(this.curPos.x, this.curPos.y);
    },
  },

  mounted() {
    console.log('CellPosition Mounted')
  }
}
</script>