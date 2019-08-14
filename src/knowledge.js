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
  minimumNormalWeight (height) {
    return 18.5 * Math.pow(height, 2)
  },
  maximumNormalWeight (height) {
    return 25 * Math.pow(height, 2)
  },
  robinsonFormulaWomen (height) {
    return (height - 152.4) / 2.54 * 1.7 + 49
  },
  robinsonFormulaMan (height) {
    return (height - 152.4) / 2.54 * 1.9 + 52
  },
  millerFormulaWomen (height) {
    return (height - 152.4) / 2.54 * 1.36 + 53.1
  },
  millerFormulaMan (height) {
    return (height - 152.4) / 2.54 * 1.41 + 56.2
  },
  hamwiFormulaWomen (height) {
    return (height - 152.4) / 2.54 * 2.2 + 45.4
  },
  hamwiFormulaMan (height) {
    return (height - 152.4) / 2.54 * 2.7 + 48
  },
  devineFormulaWomen (height) {
    return (height - 152.4) / 2.54 * 2.3 + 45.5
  },
  devineFormulaMan (height) {
    return (height - 152.4) / 2.54 * 2.3 + 50
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
