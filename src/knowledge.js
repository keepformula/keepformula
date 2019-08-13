import Converter from 'convert-units'
import Bases from 'bases'

export default {
  convert (value, fromUnit, toUnit) {
    return Converter(value).from(fromUnit).to(toUnit)
  },
  calulateOHM () {

  },
  bmi (weight, height) {
    return weight / Math.pow(height, 2)
  },
  baseConverter (input, inputUnit, outputUnit) {
    let from = Bases.fromBase(input, inputUnit)
    return Bases.toBase(from, outputUnit)
  },
  goldenRatioShorter (value) {
    return value / 1.61803398875
  },
  goldenRatioLonger (value) {
    return value * 1.61803398875
  }
}
