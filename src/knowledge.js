import Converter from 'convert-units'
export default {
  convert (value, fromUnit, toUnit) {
    return Converter(value).from(fromUnit).to(toUnit)
  },
  calulateOHM () {

  }
}
