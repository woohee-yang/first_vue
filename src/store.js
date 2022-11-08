import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const COLS = 10
const ROWS =5

let cells = Array.from(Array(COLS).keys()).map((i) =>
    Array.from(Array(ROWS).keys()).map((i) => ''))

export const store = new Vuex.Store({
    state:{
        cells
    },
    mutations: {
        setValue: function(state, data){
            state.cells[data.x][data.y] = data.contents
        }
    },
    actions: {
        // setValue: function(state, data){
        //     state.cells[data.x][data.y] = data.contents
        // }
    },
    getters: {
        getRows() {
            return ROWS
        },
        getCOLS(){
            return COLS
        },
        getValue:state => (x,y) =>{
            return state.cells[x][y]
        }
    }
})





// // import { reactive } from 'vue'
// import Vue from 'vue'
// import Vuex from 'vuex'
// import {createStore} from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
//
// const COLS = 10
// const ROWS =5
//
// Vue.use(Vuex);
//
//
// var arr = Array.from(Array(COLS).keys()).map((i) =>
//     Array.from(Array(ROWS).keys()).map((i) => ''))
//
//
// export const index = new Vuex.Store({
//     state:{
//         arr
//     },
//     mutations: {
//         setValue(state, newValue, i, j){
//             state.arr[i][j] = newValue
//         }
//     },
//     getters: {
//         getValue(){
//             return '${state.arr[i][j]}'
//         }
//     },
//     actions:{
//
//     },
// })


