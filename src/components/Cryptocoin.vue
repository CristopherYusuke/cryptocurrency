<template>
   <div class="cryptocoin">
      <div class="title"><label class="name thick">{{coin.name}}</label> <label class="symbol thin">{{coin.symbol}}</label> </div>
      <div class="price thin">{{formatNumber(coin.price_eur)}}</div>
      <div class="percent" v-bind:class="percentColor" > <label> <span class="thick">{{coin.percent_change_24h}}%</span> in the last day</label></div>
   </div>
</template>

<script>
export default {
  name: 'Cryptocoin',
  props: {
    coin: {
      type: Object,
      default: {}
    }
  },
  methods: {
    formatNumber (number) {
      return new Intl.NumberFormat('EUR', { style: 'currency', currency: 'EUR' }).format(number)
    },
    percentCointoBoolean () {
      console.log(!!(this.coin.percent_change_24h > 0))
      return !!(this.coin.percent_change_24h > 0)
    }
  },
  computed: {
    percentColor () {
      return {
        pink: !!(this.coin.percent_change_24h < 0),
        green: !!(this.coin.percent_change_24h > 0)
      }
    }
  }
}
</script>

<style scoped>
.cryptocoin{
  border: 1px solid #696969;
  text-align: center;
}
div {
  padding: 7.5px;
}
.div.title {
  align-self:flex-start;
}
div.price {
  font-size: 36px;
  align-self:center;
}
div.percent {
  padding-bottom: 10px;
  align-self: flex-end;
}

.thin {
  font-weight: 200;
}
.thick{
  font-weight: 600;
}

label.name {
  font-size: 17px;
}

label.symbol {
  font-size: 20px;
  
}
.pink label {
  background-color: #f13862
}

.pink label::before{
  content:'▼';
  font-size: 10px;
  margin: 0 2px;
}

.green label {
  background-color: #3dbb67;
}

.green label::before{
  content:'▲';
  font-size: 10px;
  margin: 0 2px;
}

.percent label {
  border-radius: 15px;  
  padding: 5px 15px;
  font-size: 12px;
}



</style>
