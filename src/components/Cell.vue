<template>
  <div class="cell">
    {{ this.value }}
  </div>
</template>


<script>
export default {
  props: {
    c: Number,
    r: Number,
    value: String,
  },
  data() {
    return{
      editing: false,
    }
  },
  mounted() {
    console.log('Cell Mounted')
  }
}
</script>

<style>
.cell, cell input {
  height: 1.5em;
  line-height: 1.5;
  font-size: 15px;
}

.cell span{
  padding: 0 6px;
}

.cell input{
  width: 100%;
  box-sizing: border-box;
}
</style>