'use strict';

// Практическая работа №1
// Заполните только участки TODO.
// Названия функций и module.exports внизу файла не изменяйте:
// они нужны преподавателю для автоматической проверки.

// 1. Стоимость заказа
// Вернуть общую стоимость: цена одного товара * количество.
function calculateOrderCost(price, quantity) {
  const total = price * quantity
  return total
}

// 2. Площадь прямоугольника
// Вернуть площадь прямоугольника.
function rectangleArea(width, height) {
  const area = width * height;
  return area
}

// 3. Скидка
// Вернуть итоговую цену после применения скидки в процентах.
// Например: calculateDiscount(1000, 10) -> 900
function calculateDiscount(price, discountPercent) {
  const discountAmount = price * (discountPercent / 100)
  const totalPrice = price - discountAmount
  return totalPrice
}

// 4. Минуты -> часы и минуты
// Вернуть строку строго в формате: "2 ч 5 мин"
// Например: minutesToHours(125) -> "2 ч 5 мин"
function minutesToHours(totalMinutes) {
  const hours = Math.trunc(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours} ч ${minutes} мин`
}

// 5. Целая часть и остаток от деления
// Вернуть строку строго в формате: "2;1"
// Сначала целая часть, затем остаток через точку с запятой.
// Например: divisionResult(5, 2) -> "2;1"
function divisionResult(dividend, divisor) {
  const intPart = Math.trunc(dividend / divisor)
  const remainder = dividend % divisor
  return `${intPart};${remainder}`
}

module.exports = {
  calculateOrderCost,
  rectangleArea,
  calculateDiscount,
  minutesToHours,
  divisionResult,
};
