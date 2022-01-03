const Promise = require('./promise');

let promise = new Promise((reslove, reject) => {
  // setTimeout(() => {
  //   reslove('成功');
  // }, 1000)
  // reslove('成功');
  throw 'error';
}).then(value => {
  console.log('第一次成功:' + value);
  // return new Promise((resolve, reject) => {
  //   resolve(111);
  // });
  return value;
}, reason => {
  console.log('第一次失败:' + reason);
  // return reason;
  throw reason
}).then(value => {
  console.log('第二次成功:' + value);
}, reason => {
  console.log('第二次失败:' + reason);
})

// value => {
//   console.log('第一次成功:' + value);
//   return value;
// }, reason => {
//   console.log('第一次失败:' + reason);
// }