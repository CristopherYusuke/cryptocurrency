<template>
  <div class="dashboard">
    <div class="cryptoboard">
      <div class="title">
        <h1>> CRYPTOBOARD</h1>
      </div>
      <div class="cryptocoin-container">
        <cryptocoin/>
        <cryptocoin/>
        <cryptocoin/>
        <cryptocoin/>
        <cryptocoin/>
      </div>
    </div>
    <div class="cryptocalculator">
      <div class="title">
        <h1>> CRYPTOCALCULATOR</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Cryptocoin from '@/components/Cryptocoin'

export default {
  name: 'Dashboard',
  components: {Cryptocoin},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
*{
  font-family: 'Montserrat', sans-serif;
}
.dashboard {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100%;
}
.dashboard h1{
  letter-spacing: -3px
}

.cryptocoin-container {
  display: flex;
  flex-wrap: wrap;
}
.cryptocoin-container .cryptocoin{
  flex-grow: 1;
  width: 33%;
}

.cryptocalculator, .cryptoboard{
  flex-grow: 2;
  padding: 50px;
}

.cryptocalculator {
  border-left: 1px #696969 solid;
}
</style>
