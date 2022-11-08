<template>
  <div>
    <h1 style="text-align: center;">Welcome to Home!</h1>
    <router-link to="/table"><button style="margin-left: 390px">Table</button></router-link>
    <router-link to="/about"><button style="margin-left: 50px">About</button></router-link>
  </div>
</template>

<script>
export default{
  name: "Home"
};
</script>