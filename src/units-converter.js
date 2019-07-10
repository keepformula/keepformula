export default (value, fromUnit, toUnit) => {
  let out = value
  if (fromUnit === 'meter') {
    if (toUnit === 'millimeter') {
      out = value / 1000
    }
    if (toUnit === 'centimeter') {
      out = value / 100
    }
  }
  if (fromUnit === 'millimeter') {
    if (toUnit === 'centimeter') {
      out = value / 100
    }
  }
  return out 
}
