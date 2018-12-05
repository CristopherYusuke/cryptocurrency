<template>
  <form class="cryptocalculator-form">
    <div class="input-container" >
      <select class="base" v-model="coinBase"    >
        <option v-for="coin in coinsWithEuro" :key="coin.id" :value="coin" v-show="coin.id !== coin1.id && coin.id !== coin2.id ">{{coin.symbol}}</option>
      </select>
      <input class='text base' v-model='baseValue'>
    </div>
    <div class="input-container">
      <select v-model="coin1">
        <option v-for="coin in coinsWithEuro" :key="coin.id" :value="coin" v-show="coin.id !== coinBase.id && coin.id !== coin2.id ">{{coin.symbol}}</option>
      </select>
      <div class='text'> {{getValuePerCoin(coin1)}} </div>
    </div>
    <div class="input-container">
      <select v-model="coin2">
        <option v-for="coin in coinsWithEuro" :key="coin.id" :value="coin" v-show="coin.id !== coinBase.id && coin.id !== coin1.id ">{{coin.symbol}}</option>
      </select>
      <div class='text' > {{getValuePerCoin(coin2)}} </div>
    </div>
  </form>
</template>
<script>
export default {
  name: 'Cryptocalculator',
  data () {
    return {
      coinBase: this.coins[0],
      coin1: this.coins[1],
      coin2: this.coins[2],
      baseValue: 0,
      coinsWithEuro: []
    }
  },
  props: {
    coins: {
      type: Array,
      default: []
    }
  },
  methods: {
    getValuePerCoin (coin) {
      return ((this.coinBase.price_eur / coin.price_eur) * this.baseValue).toFixed(2)
    },
    formatNumber (number) {
      return new Intl.NumberFormat('EUR', { style: 'currency', currency: 'EUR' }).format(number)
    }
  },
  mounted () {
    let aux = this.coins.map(coin => {
      coin.visible = true
      return coin
    })
    this.coinsWithEuro = [...aux, {id: 'euro', price_eur: 1, symbol: 'EURO', visible: true}]
  }
}
</script>
<style scoped>

.cryptocalculator-form{
  display: flex;
  width:  100%;
  flex-direction: column;  
}

.input-container { 
  display: flex;
  flex-flow: wrap
}

select, .text, input.text {
  display: flex; 
  background-color: #313131;
  border: 0;
  box-sizing: border-box;
  color: white;
  font-size: 36px;
  font-weight: 100;
  height: 75px;
  line-height: 2;
  width: 100%;
}
select{
  font-size: 24px;
  font-weight: 100;
  padding: 5px;
  flex-basis: 20%;
}

select:focus , select.base:focus{
  background: #d6d6d6;
  color: #3c3c3c;
}

select.base, .text.base {
  background-color: #3c3c3c;
}

.text {
  display: flex;
  flex:1;
}

</style>
