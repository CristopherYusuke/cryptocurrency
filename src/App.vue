<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'CryptCurrency'
}
</script>

<style >
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,400,600,700,900');

*{
  padding: 0;
  margin: 0;
}
body, html{
  background: #2a2a2a;
  color: white;
  overflow-x: hidden;
  height: 100%;
}

#app {
  display: flex;
  height: 100%;
}
</style>
