export const mixin = {
  methods: {
    back () {
      this.$router.go(-1)
    },
    reset () {
      this.value = null
      this.$refs.input.focus()
    },
    btnClick () {
      let x = this.inputUnit
      let y = this.outputUnit
      this.inputUnit = y
      this.outputUnit = x
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
