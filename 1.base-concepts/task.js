"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    arr = [-b / (2 * a)];
  } else {
    arr = [
      (-b + Math.sqrt(discriminant)) / (2 * a),
      (-b - Math.sqrt(discriminant)) / (2 * a),
    ];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let S = amount - contribution;
  let paymentMonth = S * (P + P / ((1 + P) ** countMonths - 1));
  let paymentAll = +(paymentMonth * countMonths).toFixed(2);
  return paymentAll;
}
