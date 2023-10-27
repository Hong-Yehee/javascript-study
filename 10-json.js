// JSON
// JavaScript Object Notation

// simplest data interchange format
// lightweight text-based structure
// easy to read
// key-value pairs
// used for serialization and trasmission of data between the network the network connection
// independent programming language and platform

'use strict';

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null, // 포함되지 않음 
  birthDate: new Date(),
  symbol: Symbol('id'), // 포함되지 않음 
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

// 원하는 property만 고르기
json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

// 세밀하게 통제하고 싶을 때 callback 함수 전달
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);


// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);

const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); // rabbit Object를 JSON으로 변환할 때 함수는 포함되지 않음

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); // birthDate는 string

// 3. 유용한 사이트
// JSON Diff
// JSON Beautifier
// JSON Parser
// JSON Validator