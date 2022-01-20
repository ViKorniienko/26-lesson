// мінімум
let a = 0.1;
let b = 0.2;
alert(a + b);

let c = "1";
let d = 2;
alert(+c + +d);

let sizeFlashDrive = prompt('Enter size your flash drive')
const sizeFile = 820;

alert(`Great! Your flash drive can hold ${sizeFlashDrive / sizeFile} files`);

// норма
let userMoney = prompt('Enter How much money You have?', '');
let chocoCost = prompt('Enter How much the chocolate costs', '');
let youCanbuy = Math.floor(userMoney / chocoCost);

alert(`Wow! You can buy ${youCanbuy} chocolates`);
alert(`And by the way take your leftovers ${userMoney % chocoCost}`);

// не знаю, як виконати
let yourNumber = prompt('Enter ane three number', '');
let result = yourNumber.reverse();
alert(result);
