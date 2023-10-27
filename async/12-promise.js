'use strict';

// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fullfiled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically !
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie'); // 성공 시
    reject(new Error('no network')); // 실패 시
  }, 2000);
});

// 2. Consumers
// then, catch, finally로 값 받아오기
promise
  .then((value) => { // 성공 시
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  // 성공 여부 관계 없이 무조건 마지막에 호출
  .finally(() => {
    console.log('finally');
  });

  // 3. Promise chaining
  const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000); // 1초 있다가 숫자 1 전달
  });

  fetchNumber
  .then(num => num * 2) // 2
  .then(num => num * 3) // 6
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000); // 5
    });
  })
  .then(num => console.log(num));

  // 4. Error Handling
  const getHen = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve('🐓'), 1000);
    });
  const getEgg = hen =>
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
  const cook = egg =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

    getHen() //
    .then(getEgg)
    .catch(error => {
      return '🥖';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);

// 5. 