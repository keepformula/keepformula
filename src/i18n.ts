// https://github.com/kazupon/vue-i18n
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
const messages = {
  en: {
    app_title: 'Shalculator'
  }
}
const i18n = new VueI18n({
  locale: 'en',
  messages
})
export default i18n
