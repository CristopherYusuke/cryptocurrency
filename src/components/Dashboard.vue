<template>
  <div class="dashboard">
    <div class="cryptoboard">
      <div class="title">
        <h1>> CRYPTOBOARD</h1>
      </div>
      <div class="cryptocoin-container">
        <cryptocoin v-for="coin in coins" :key="coin.id" :coin="coin" />
      </div>
    </div>
    <div class="cryptocalculator">
      <div class="title">
        <h1>> CRYPTOCALCULATOR</h1>
      </div>
      <div class="cryptcoin-container">
        <cryptocalculator v-if="coins.length" :coins="coins"/>
      </div>
    </div>
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
  display: flex;
  flex: 1;
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
  display: flex;
  flex-direction: column;
  flex:1;
}

.cryptocoin-container{
  display: flex;
  flex-flow: wrap;
  flex-basis: 30%;

}
.cryptocalculator {
  border-left: 1px #696969 solid;
}
</style>
