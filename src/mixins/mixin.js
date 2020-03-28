export const mixin = {
  methods: {
    back () {
      this.$router.go(-1)
    },
    reset () {
      this.value = null
      this.$refs.input.focus()
    },
    changeUnits () {
      let x = this.inputUnit
      let y = this.outputUnit
      this.inputUnit = y
      this.outputUnit = x
    },
    isNumber (event) {
      const char = String.fromCharCode(event.keyCode)
      if (!/\d/.test(char) && event.key !== '.' && event.key !== 'Backspace' && !(event.keyCode >=
        96 && event.keyCode <= 105)) {
        event.preventDefault()
      }
    }
  },
  created () {
    if (window.screen.width > 768) {
      setTimeout(() => {
        this.$refs.input.focus()
      }, 500)
    }
  }
}
