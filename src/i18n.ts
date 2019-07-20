import Vue from 'vue'
import VueI18n from 'vue-i18n'
import config from '@/config/config'
import EN from '@/locales/en'
// import { Validator } from 'vee-validate'

Vue.use(VueI18n)
const messages = {
  en: EN.en
}
// https://github.com/kazupon/vue-i18n
const i18n = new VueI18n({
  locale: window.localStorage.getItem('locale') ? window.localStorage.getItem('locale') : config.locale,
  messages
})
// const dict = messages.en.validation
// Validator.localize('en', dict)
export default i18n
