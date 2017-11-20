<template>
  <div class="dashboard">
    <row>
      <column md='6' class="cryptoboard">
        <div class="title">
          <h1>> CRYPTOBOARD</h1>
        </div>
        <row class="cryptocoin-container">
          <cryptocoin v-for="coin in coins" :key="coin.id" :coin="coin" />
        </row>
      </column>
      <column md='6' class="cryptocalculator">
        <div class="title">
          <h1>> CRYPTOCALCULATOR</h1>
        </div>
        <row class="cryptcoin-container">
          <Cryptocalculator v-if="coins.length" :coins="coins"/>
        </row>
      </column>
    </row>
  </div>
</template>

<script>
import Cryptocoin from '@/components/Cryptocoin'
import Cryptocalculator from '@/components/Cryptocalculator'

export default {
  name: 'Dashboard',
  components: {Cryptocoin, Cryptocalculator},
  data () {
    return {
      coins: []
    }
  },
  methods: {
    getCoins () {
      this.http.get('ticker/?convert=EUR&limit=12')
      .then((res) => {
        this.coins = res
      })
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
  letter-spacing: -3px;
  font-weight: 900;
}

.title {  
  margin-bottom: 50px;
}

.cryptoboard, .cryptocalculator {
  padding: 50px;
  
}

.cryptocoin-container{
  max-width: 705px;
  margin: auto;
}
.cryptocalculator {
  border-left: 1px #696969 solid;
}
</style>
