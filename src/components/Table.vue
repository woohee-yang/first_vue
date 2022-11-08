<template>
  <div>
    <h1 style="text-align: center;">Table</h1>
    <table>
      <thead>
      <tr>
        <th></th>
        <th v-for="c in cells[0].length" :key="c">{{ c }}</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(item, indexi) in cells.length" :key="item">
        <th>{{ indexi }}</th>
        <td v-for="(item, indexj) in cells[indexi].length" :key="item">
          <Cell :r="i" :c="j" :value="cells[indexi][indexj]"> </Cell>
        </td>
      </tr>
      </tbody>

    </table>

    <CPosition></CPosition>

  </div>
</template>

<script>
import { eventBus } from './lib/eventBus.js'
import Cell from './Cell.vue'
import CPosition from './CellPosition.vue'

export default {
  components: {
    Cell,
    CPosition,
  },
  data() {
    return {
      x: -1,
      y: -1,
      inText: '',
      immediateMessage: null,
      cells: undefined
    }
  },

  // computed:{
  //   cell(){
  //     return (i, j) => {
  //       return this.$store.state.cells[i][j]
  //     }
  //   }
  // },
  created(){
    const COLS = 10
    const ROWS =5

    let cells = Array.from(Array(COLS).keys()).map((i) =>
        Array.from(Array(ROWS).keys()).map((i) => ''));
    this.cells = cells
  },
  mounted(){
    console.log('Mounted Table!!!!!!!!')
    eventBus.$on('saveInputX', (res) => {
      console.log('x 수신', res, this.x);
      this.x = res;
    });

    eventBus.$on('saveInputY', (res) => {
      console.log('y 수신', res, this.y);
      this.y = res;
    });

    eventBus.$on('saveInputText', (res) => {
      console.log('c 수신', res);
      this.inText = res
      console.log(this.inText, this.x, this.y);
      this.$store.commit('setValue', {contents:this.inText, x:this.x, y:this.y})
      this.cells = this.$store.state.cells;
      console.log(this.$store.state.cells)
      console.log('save end')
    });
    //
  },
}
</script>

<style>
body {
  margin: 0;
}

table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
}

th {
  background-color: #eee;
}

tr:first-of-type th {
  width: 100px;
}

tr:first-of-type th:first-of-type {
  width: 25px;
}

td {
  border: 1px solid #ccc;
  height: 1.5em;
  overflow: hidden;
}
</style>

