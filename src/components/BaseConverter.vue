<template>
  <q-page id="q-page">
    <div class="container-main">
      <h3 class="q-mb-lg">Base Converter</h3>
      <div class="container-input">
        <div id="input">
          <div class="header"> Decimal To Binary </div>
          <q-input type="number" v-model="Decimal" float-label="Decimal Value" />
            <q-field class="field">Binary is: {{DecimalToBinary}} </q-field>
        </div>
        <div id="input">
          <div class="header"> Binary to Decimal </div>
          <q-input type="number"  v-model="Binary" float-label="Binary Value" />
            <q-field class="field">Decimal is: {{BinaryToDecimal}} </q-field>
        </div>
        <div id="input">
          <div class="header"> Octal To Binary </div>
          <q-input type="number" v-model="Octal" float-label="Octal Value" />
            <q-field class="field">Binary is: {{OctalToBinary}} </q-field>
        </div>
        <div id="input">
          <div class="header"> Binary to Octal </div>
          <q-input type="number"  v-model="Binary" float-label="Binary Value" />
            <q-field class="field">Octal is: {{BinaryToOctal}} </q-field>
        </div>
        <div class="btn-reset">
          <q-btn @click="Reset" style="background: #2468a3; color: white" label="Reset" size="22px"/>
        </div>
      </div>
    </div>
          </q-page>
</template>

<script>
export default {
  name: 'BaseConvrter',
  data () {
    return {
      Decimal: '',
      Binary: '',
      Octal: ''
    }
  },
  props: {
  },
  computed: {
    DecimalToBinary () {
      if (this.Decimal == null) {
        return ('')
      } else {
        return (this.Decimal.toString(2))
      }
    },
    BinaryToDecimal () {
      if (this.Binary !== '') {
        return (parseInt(this.Binary, 2).toString(10))
      } else {
        return ('')
      }
    },
    OctalToBinary () {
      if (this.Octal == null) {
        return ('')
      } else {
        return (this.Octal.toString(2))
      }
    },
    BinaryToOctal () {
      if (this.Binary !== '') {
        return (parseInt(this.Binary, 2).toString(8))
      } else {
        return ('')
      }
    }
  },
  methods: {
    Reset: function () {
      this.Binary = ''
      this.Decimal = null
    }
  }
}
</script>
<style>
.field{
  white-space:nowrap;
  padding:10px;
}
h3 {
  color:#2468a3;
  padding-bottom:2%;
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#input {
  border: 2px solid #F2F0F3;
  padding:2%;
  margin-bottom:3%
}
.header {
  text-align:center;
  font-weight:bold;
  height:35px;
  color:black;
}
.container-main {
  margin: auto;
  width: 80%;
}
.container-input{
  width: 60%;
  margin: left;
  background-color:white;
}
#q-page {
  font-family: 'Ubuntu';font-size: 22px;
  background-image:url("../assets/bg-image.jpg");
}
*{
  box-sizing:border-box;
}
.btn-reset{
  color:#2468a3;
  padding-left:0;
}
</style>
