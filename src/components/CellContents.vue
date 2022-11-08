<template>
  <div>
    <h3 style="margin-left:5%">2. Input inContents</h3>

    <span v-if="updatePos()">
                <p style="margin-left:5%">input column : {{x }}, input row : {{y}}</p>
                <input type="text" v-model="inContents" style="margin-left:5%" placeholder="input inContents"/>
                <button style="margin-left:10px" @click="saveData">save</button>
                <p style="margin-left:5%">input inContents: {{ inContents }}</p>
        </span>

    <span v-else>
            <p style="margin-left:5%"> input current cell position first! </p>
        </span>
  </div>
</template>

<script>
import {eventBus} from './lib/eventBus';
export default {
  name: "CellContents",
  props: {
    pos: Object
  },

  data(){
    return {
      inContents: null,
      save: false,
      x: '',
      y: '',
      flag_saved: false,
    }
  },

  methods: {
    updatePos(){
      if(this.pos.x > -1 && this.pos.y > -1){
        this.x = this.pos.x;
        this.y = this.pos.y;
        return true;
      }
      else
        return false;
    },
    saveData(){
      this.save = true
    },
    checkSave(){
      console.log("checkSave : ", this.inContents, this.flag_saved)
      let tmp = this.flag_saved && this.inContents
      return tmp
    }
  },
  watch: {
    inContents:function(){
      console.log("save : ", this.save)
      console.log(this.inContents)
    },

    save:function(){
      if(this.save){
        console.log('save start!')

        eventBus.$emit('saveInputX', this.x)
        eventBus.$emit('saveInputY', this.y)
        eventBus.$emit('saveInputText', this.inContents)


        this.flag_saved = true
        this.save = false
      }
    }
  },
}
</script>
