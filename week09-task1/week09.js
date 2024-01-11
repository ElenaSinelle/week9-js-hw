//Задание 1
//Выведи в консоль строку: "Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!"
let phrase = 'Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!';
console.log(phrase);
//или
console.log('Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!');

//Задание 2
//Выведи в консоль свое имя.
let firstName = 'Елена';
console.log(firstName);

//Задание 3
//Выведи в консоль номер месяца в котором ты родилась. Изучи чем отличается вывод числа и строки.
let month = 1;
console.log(month);

//Задание 4
//Выведи в консоль строку: 'Добро '+'пожаловать, '+ твое имя</p>. Например, 'Добро '+'пожаловать, ' + 'Алиса'
console.log('Добро ' + 'пожаловать, ' + 'Лена!');

//Задание 5
//Сложи слово 'Владивосток' и число 2000, а также добавь между ними пробел, чтобы получилось название известной песни. Результат выведи в консоль.
let city = 'Владивосток';
let number = 2000;
console.log(city + ' ' + number);
//или
console.log('Владивосток' + ' ' + 2000);

//Задание 6
//С помощью alert выведи число 2023.
//После срабатывания кода - его можно закомментировать, чтобы он не мешал для дальнейшей разработки.
let message = 2023;
alert(message);

//Задание 7
//С помощью console.log выведи результат операции 2023 + 1. Проверь результат в консоли.
let x = 2023;
let y = 1;
let z = x + y;
console.log(z);
//или
console.log(2023 + 1);

//Задание 8
//Прокрастинируя дома, Русалка 128 минут переписывалась в мессенджере, 254 минуты лайкала фотокарточки, 137 минут читала статьи в Википедии и 201 минуту смотрела стендапы на YouTube. Выведи в консоль, сколько часов прокрастинировала Русалка.
//Не нужно самостоятельно суммировать числа, пусть JS сделает это за тебя ;)
let time = 128;
time += 254;
time += 137;
time += 201;
let timeInHours = time / 60;
console.log('Русалка прокрастинировала ' + timeInHours + ' часов');

//Задание 9
//Зарплата вечернего уборщика в городской поликлинике 40000 рублей, а педагога по вокалу 22000 рублей. Выведи в консоль, сколько можеn зарабатывать вечерний уборщик, имея голос и педагогическое образование?
let cleanerSalary = 40000;
let teacherSalary = 22000;
let cleverCleanerSalary = cleanerSalary + teacherSalary;
console.log(`Зарплата вечернего уборщика, имеющего голос и педагогическое образование: ${cleverCleanerSalary} рублей`);

//Задание 10
//У тебя есть две переменные:
const greetings = "Привет";
const name = "Кот";
//Склей значение этих двух переменных и выведи на экран значение «Привет, Кот».
console.log(greetings + ', ' + name);

//Задание 11
//Объяви переменную с именем fahrenheit и положи в неё значение 451.
//Добавь новую переменную celsius и запиши в неё значение, рассчитанное по формуле перевода температуры из градусов по Фаренгейту в градусы Цельсия:
//(fahrenheit - 32) / 1.8;
//Применив переменные и шаблонные строки, выведи в консоль строку, где _fahrenheit_и _celsius_ — это значения соответствующих переменных:
//'_fahrenheit_ градуса по Фаренгейту — это _celsius_ градуса по Цельсию.'
let fahrenheit = 451;
let celsius = (fahrenheit - 32) / 1.8;
console.log(`${fahrenheit} градуса по Фаренгейту — это ${Math.round(celsius)} градуса по Цельсию.`);

//Задание 12
//Запиши в переменную '15' как строку и выведи в консоль.
//Затем преобразуй эту переменную в число и выведи ее как число.
//Проверь себя с помощью typeof.
let stringNum = '15';
console.log(`Переменная stringNum = ${stringNum} имеет тип данных ${typeof(stringNum)}`);
let num = Number(stringNum);
console.log(`Переменная num = ${num} имеет тип данных ${typeof(num)}`);