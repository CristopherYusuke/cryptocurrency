<template>
  <div class="dashboard">
    <row>
      <column xs='6' class="cryptoboard">
        <div class="title">
          <h1>> CRYPTOBOARD</h1>
        </div>
        <row class="cryptocoin-container">
          <cryptocoin/>
        </row>
      </column>
      <column xs='6' class="cryptocalculator">
        <div class="title">
          <h1>> CRYPTOCALCULATOR</h1>
        </div>
      </column>
    </row>
  </div>
</template>

<script>
import Cryptocoin from '@/components/Cryptocoin'

export default {
  name: 'Dashboard',
  components: {Cryptocoin},
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    getCoins () {
      fetch('https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=10')
      .then((res) => console.log(res))
      .catch()
    }
  },
  mounted () {
    this.getCoins()
  }
}
</script>

<style scoped>
*{
  font-family: 'Montserrat', sans-serif;
}
.dashboard{
  height: 100%;
}

.dashboard h1{
  letter-spacing: -3px
}

.cryptoboard .title {  
  margin-bottom: 50px;
}


.cryptoboard, .cryptocalculator {
  padding: 50px;
  
}
.cryptocalculator {
  border-left: 1px #696969 solid;
}
</style>
