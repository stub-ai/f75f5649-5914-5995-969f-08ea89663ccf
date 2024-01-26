function calculateSpotRate(year, coupon, previousRates) {
  let sum = 0;
  for (let i = 0; i < year; i += 0.5) {
    const rate = previousRates[i] || 0;
    sum += (coupon / 2) / Math.pow(1 + rate / 2, 2 * i);
  }

  let spotRate = 0;
  for (let i = 0; i <= 100; i += 0.01) {
    const x = i / 100;
    const total = sum + (100 + coupon / 2) / Math.pow(1 + x / 2, 2 * year);
    if (Math.abs(total - 100) < 0.01) {
      spotRate = x;
      break;
    }
  }

  return spotRate;
}

module.exports = calculateSpotRate;