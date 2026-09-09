'use strict';

// Дополнительный вариант практики для запуска в браузере.
// Подключите этот файл к index.html и выполняйте задачи по очереди.
// prompt() возвращает строку, поэтому числовые данные преобразуем через Number().

// Задача 1. Стоимость заказа — пример полностью
const price1 = Number(prompt('Задача 1. Цена одного товара:'));
const quantity = Number(prompt('Задача 1. Количество товара:'));
const total = price1 * quantity;
alert(`Стоимость заказа: ${total}`);

// Задача 2. Площадь прямоугольника
// TODO:
// 1) получить width и height через prompt();
// 2) преобразовать оба значения через Number();
// 3) вычислить площадь;
// 4) вывести результат через alert().

const width = Number(prompt('Задача 2. Ширина:'));
const height = Number(prompt('Задача 2. Высота:'));
const area = width * height;
alert(`Площадь прямоугольника: ${area}`);

// Задача 3. Цена со скидкой
// TODO:
// 1) получить price и discountPercent;
// 2) вычислить размер скидки;
// 3) вычислить итоговую цену;
// 4) вывести итоговую цену.

const price3 = Number(prompt('Задача 3. Цена:'));
const discountPercent = Number(prompt('Задача 3. Скидка:'));
const discountAmount = price3 * (discountPercent / 100)
const totalPrice = price3 - discountAmount
alert(`Итоговая цена: ${totalPrice}`);

// Задача 4. Минуты в часы и минуты
// TODO:
// 1) получить totalMinutes;
// 2) hours = Math.trunc(totalMinutes / 60);
// 3) minutes = totalMinutes % 60;
// 4) вывести строку вида: "2 ч 5 мин".
const totalMinutes = Number(prompt('Задача 4. Кол-во минут:'));
const hours = Math.trunc(totalMinutes / 60);
const minutes = totalMinutes % 60;
alert(`Минуты в часах и минутах: ${hours} ч ${minutes} мин`);

// Задача 5. Целая часть и остаток от деления
// TODO:
// 1) получить dividend и divisor;
// 2) вычислить целую часть;
// 3) вычислить остаток;
// 4) вывести оба результата.
const dividend = Number(prompt('Задача 5. Делимое:'));
const divisor = Number(prompt('Задача 5. Делитель:'));
const intPart = Math.trunc(dividend / divisor)
const remainder = dividend % divisor
alert(`Целая часть: ${intPart}\nОстаток: ${remainder}`);
