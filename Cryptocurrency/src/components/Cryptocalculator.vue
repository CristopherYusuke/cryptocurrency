<template>
  <form>
    <row>
      <column xs="2"> 
        <select class="base"  >
          <option v-for="coin in coins" :key="coin.id" value="coin.symbol">{{coin.symbol}}</option>
        </select>
      </column>
      <column xs="10">
        <input class='text base' v-model='baseValue'>
      </column>
    </row>
    <row>
      <column xs="2">
        <select>
          <option v-for="coin in coins" :key="coin.id" value="coin.symbol">{{coin.symbol}}</option>
        </select>
      </column>
      <column xs="10">
        <div class='text'> something </div>
      </column>
    </row>
    <row>
      <column xs="2">
        <select>
          <option v-for="coin in coinsWithEuro" :key="coin.id" value="coin.symbol">{{coin.symbol}}</option>
        </select>
      </column>
      <column xs="10">
        <div class='text' > something </div>
      </column>
    </row>
  </form>
</template>
<script>
export default {
  name: 'Cryptocalculator',
  data () {
    return {
      baseValue: 100,
      coinsWithEuro: []
    }
  },
  props: {
    coins: {
      type: Array,
      default: []
    }
  },
  mounted () {
    let aux = this.coins
    this.coinsWithEuro = [...aux]
    this.coinsWithEuro.push({id: 'euro', price_eur: 1, symbol: 'EUR'})
  }
}
</script>
<style scoped>

form{
  width:  100%
}

form .row div:first-child{
  padding-right: 0;
}
form .row div:last-child{
  padding-left: 0;
}

select, .text, input.text { 
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
}

select:focus , select.base:focus{
  background: #d6d6d6;
  color: #3c3c3c;
}

select.base, .text.base {
  background-color: #3c3c3c;
}

</style>
