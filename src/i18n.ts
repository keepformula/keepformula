// https://github.com/kazupon/vue-i18n
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
const messages = {
  en: {
    app_name: 'Owlculator',
    golden_ratio: 'Golden Ratio',
    value_label: 'Enter value',
    body_mass_index: 'Body Mass Index',
    height_label: 'Your height',
    weight_label: 'Your weight',
    height_unit: 'Height Unit',
    weight_unit: 'Weight Unit',
    bmi_underWeight: 'You are Under weight',
    bmi_normal: 'You are Normal',
    bmi_overWeight: 'You are Overweight',
    bmi_obesity: 'You are Obesity',
    bmi_severeObesity: 'You are Severe obesity',
    data_storage_converter: 'Data Storage Converter',
    input_unit: 'Input Unit',
    output_unit: 'Output Unit',
    base_converter: 'Base Converter',
    data_storage_wiki_icon: 'What\'s Data Storage Convertion?',
    bmi_wiki_icon: 'What\'s BMI?',
    golden_ratio_wiki_icon: 'What\'s Golden Ratio?',
    base_converter_wiki_icon: 'What\'s Base Convertion?',
    reset: 'Reset',
    back: 'Back',
    length_converter: 'Length Converter',
    length_converter_wiki_icon: 'What\'s Length Convertion?'
  }
}
const i18n = new VueI18n({
  locale: 'en',
  messages
})
export default i18n
