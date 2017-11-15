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
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,900');

*{
  padding: 0;
  margin: 0;
}
body, html{
  background: #2a2a2a;
  color: white;
  height: 100%;
  overflow: hidden;
}

#app {
  height: 100%;
}
</style>
