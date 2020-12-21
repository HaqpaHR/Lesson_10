//SOME Functon Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.

let someSht = function(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (callback(element)){
      return true;
    }
  }
  return false;
};


let nums = [10, 20, 30, 40, 50];

console.log(someSht(nums, (element) => element < 10));
console.log(someSht(nums, (elment) => elment >= 50));




// //EVERY Function Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.

let everySht = function(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    element = arr[i];
    if (!callback(element)) {
      return false;
    }
  }
  return true;
};


let numForEvery = [2, 2, 2, 2, 2, 2, 2];
let numForEvery2 = [2, 2, 2, 5, 2, 5, 2];
console.log(everySht(numForEvery, (num) => num == 2));
console.log(everySht(numForEvery2, (num) => num == 2));


//FOREACH function Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.

let forEachNew = (arr, callback) => {
  for(let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if(callback(element)) {
      return arr, callback;
    }
  }
};

const array1 = ['a', 'b', 'c'];

forEachNew(array1, element => console.log(element + 'yes'));

//RUNNER

const runner = {
  $$runnerId: null,
  $$tasks: [],
  setSpeed: function (speed) {
      this.stop();
      this.start(speed);
  },
  add: function (task) {
      this.$$tasks.push(task);
  },
  start: function (speed) {
      var _this = this;
      this.$$runnerId = setTimeout(function callback() {
          _this.$$tasks.forEach(function (task) {
              console.log(task);
          },
          this);
          _this.$$runnerId = setTimeout(callback, speed);
      }, speed);
  },
  stop: function () {
      clearTimeout(this.$$runnerId);
  }
};

runner.$$tasks = ['Hello', 'World'];
runner.start(2000);






