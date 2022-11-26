"use strict";
let arr = [-12400, -9450, -5567, -3890, -680, 1313, 4671, 6112, 8345, 10000];
let positive = 0;
let negative = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    positive += arr[i];
  } else if (arr[i] < 0) {
    negative += arr[i];
  }
}
function check() {
  for (let i = 1; i < arr.length; i++) {
    document.write(i + ": " + arr[i] + " ");
  }
}
document.write("<h3>Первое задание:</h3>");
document.write("Сумарная прибыль: " + positive + "$; ");
document.write("Cумарный убыток: " + negative + "$." + "<br>");
arr.forEach(check);

// document.write("<h3>Второе задание:</h3>");
// let str = "повар приготовил вкусный тёртый пирог";
// for (let i = 0; i < str.length; i++) {
//   if (str.indexOf("п")) {
//     let p = str;
//     document.write(p);
//   }
// }

document.write("<h3>Третье задание:</h3>");

let arrStr = ["a", "b", "c", "d", "e", "f"];
function even() {
  for (let i = 0; i < arrStr.length; i++) {
    if (i % 2 == 0) {
      document.write(arrStr[i]);
    }
  }
}

even();

document.write("<h3>Пятое задание:</h3>");
function Region(name) {
  this.name = name;
  this.area = 0;
  this.population = 0;
}

Region.prototype.about = function () {
  document.write(this.name + " " + this.area + " " + this.population + " ");
};

function Country(name) {
  Region.apply(this, arguments);
  this.capital = 0;
}

Country.prototype = Object.create(Region.prototype);
Country.prototype.constructor = Country;

Country.prototype.about = function () {
  Region.prototype.about.apply(this);
  document.write(this.capital);
};

let country = new Region("Country");

function City(name) {
  Region.apply(this, arguments);
  this.boroughs = 0;
}

City.prototype = Object.create(Region.prototype);
City.prototype.constructor = City;

City.prototype.about = function () {
  Region.prototype.about.apply(this);
  Country.prototype.about.apply(this);
  document.write(this.boroughs);
};

let city = new Region("City");

let object = [country, city];
for (let i = 0; i < object.length; i++) {
  object[i].about();
}
document.write("<h3>Четвертое задание:</h3>");
let students = {
  "Диана Каба": "10,2",
  "Марина Иванова": "11,4",
  "Василий Сидоренко": "8,4",
  "Александр Лаптев": "7,3",
};

function showing() {
  for (let key in students) {
    alert(key + ", средний балл: " + students[key]);
  }
}
