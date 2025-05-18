const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

//FOR LOOP
/* 
for ([expresiónInicial]; [expresiónCondicional] ; [expresiónDeActualización]){
  instrucción
}
*/
for (let i = 0; i < studentReport.length; i++) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}

//WHILE LOOP
/* 
while (condición){
expresión 
}
*/
let i = 0;
while (i < studentReport.length) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
  i++;
}

// forEach loop
/* 
array.forEach(function(element){
Code to execute for each element
});
*/
studentReport.forEach(function (item) {
  if (item < LIMIT) {
    console.log(item);
  }
});

// for...in loop
/* 
for (variable in objeto)
    instrucción 
*/
for (let i in studentReport) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}

const dayNames = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sabado",
];
let today = new Date();

for (let i = 1; i < DAYS; i++) {
  let nextDay = new Date();
  nextDay.setDate(today.getDate() + i);
  console.log(dayNames[nextDay.getDay()]);
}
