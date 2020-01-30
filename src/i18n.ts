// https://github.com/kazupon/vue-i18n
// @ts-ignore
import Vue from 'vue'
import VueI18n from 'vue-i18n'
// @ts-ignore
import En from './locales/en.js'

Vue.use(VueI18n)
const messages = En
const i18n = new VueI18n({
  locale: 'en',
  messages
})
export default i18n
