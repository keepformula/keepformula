import WikiBox from '@/components/WikiBox.vue'
export const mixin = {
  components: {
    WikiBox
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    reset () {
      this.value = null
      if (this.$refs.input) {
        this.$refs.input.focus()
      }
    },
    changeUnits () {
      let x = this.inputUnit
      let y = this.outputUnit
      this.inputUnit = y
      this.outputUnit = x
    }
  },
  created () {
    if (window.screen.width > 768) {
      setTimeout(() => {
        if (this.$refs.input) {
          this.$refs.input.focus()
        }
      }, 500)
    }
  }
}
