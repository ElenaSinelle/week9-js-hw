const button = document.querySelector('.button');
const total = document.querySelector('.total');

let interestRate = 18.5;

const deposit = '30000';

const growth = '150';

const currency = 'руб';

button.addEventListener('click', () => {
  const sum = document.querySelector('.sum').value;
  let message = `Через год у вас будет ${ Math.round(sum * 1.07) } руб. на счету`;
  total.textContent = message;
});

console.log(`Ваш депозит на начало расчётного периода составлял ${Number(deposit)} руб.`);
console.log(`Согласно вашему тарифу, вам была присвоена ставка ${interestRate}%`);
console.log(`К концу расчётного периода прирост составил ${Number(growth)} руб., и на данный момент ваш депозит составляет ${Number(deposit) + Number(growth)} ${currency}.`);