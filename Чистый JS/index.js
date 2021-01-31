let optimalTime = 80;
let walkTime = 80;

if (walkTime >= optimalTime) {
  console.log('Прогулка достаточно длинная');
} else {
  console.log('Нужно ещё погулять');
}

let euroRate = 74;
let dollarRate = 63;

let euroAmount = 500;
let dollarAmount = 2500;



let rublesAmount = (euroAmount * euroRate) + (dollarAmount * dollarRate)


/* Техническое задание

Напиши программу, которая посчитает сколько всего рублей понадобится на поездку.

Курсы валют указаны в переменных euroRate и dollarRate.

Переменные euroAmount и dollarAmount— необходимые суммы на поездку.

Создай переменную rublesAmount и записывай в неё результат вычислений.

*/

let pixels = document.querySelectorAll('.pixel')
let chosenColor = document.querySelector('.chosen-color')
let eraser = document.querySelector('.eraser')


 
 chosenColor.onchange = function () {
      chosenColor.style.backgroundColor =  chosenColor.value

    for (let i of pixels) {
  
i.onclick = function() { 
  console.log(eraser.checked) 
  if (eraser.checked) {
    i.style.backgroundColor = 'white' 
  } else {
    i.style.backgroundColor = chosenColor.value 
  }
  }
 }
}  


/*

1. Все «пиксели» имеют класс pixel.
2. Выпадающий список с цветами имеет класс chosen-color.
3. «Ластик» — это чекбокс с классом eraser.
4. Когда на «пиксель» кликают, у него должен измениться цвет фона.
5. Если в момент клика ластик выключен, фон нажатого «пикселя» должен стать того цвета, который выбран в списке.
6. Если в момент клика ластик включён, фон нажатого «пикселя» должен стать белым — 'white'.

*/

// Прототипы
const person = {
    name: 'Vlad',
    age: 25,
    greet: function () {
        console.log('Greet')
    }
}

const person = new Object ({
        name: 'Vlad',
     age: 25,
     greet: function () {
            console.log('Greet')
     }
     })

     Object.prototype.sayHello = function () {
         console.log('hello')
     }

     const lena = Object.create(person)
     lena.name = 'eleт'

     const str = new String('i am string') 
     //
if (1 == !true) {
    console.log('Hello world');
}
//
if (1 == !false ) {
    console.log('How');
}
let user = {
    name: 'jon',
    age: 25,
    func() {
        console.log('hello');
    }
}



user.func()
