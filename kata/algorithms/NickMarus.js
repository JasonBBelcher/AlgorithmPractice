// My solution using Vanilla JS

function mergeNestedArrays(...args) {
  var arr = [];
  args.forEach(val => {
    if (val instanceof Object) {
      var obj = Object.assign({}, val);
      for (key in obj) {
        if (Array.isArray(obj[key])) {
          obj[key].forEach(v => {
            if (!isNaN(v)) {
              arr.push(v);
            }
          });
        }
      }
    }
  });
  return arr.filter((v, i) => arr.indexOf(v) == i);
}
// Nicks solutino using lodash

function objMergeArrays(obj1, obj2) {
  const newObj = {};

  const keys1 = _.keys(obj1);
  keys1.forEach(key => {
    if (
      _.hasIn(obj2, key) &&
      obj1[key] instanceof Array &&
      obj2[key] instanceof Array
    ) {
      newObj[key] = _.concat(obj1[key], obj2[key]);
    } else {
      newObj[key] = obj1[key];
    }
  });

  const keys2 = _.keys(obj2);
  keys2.forEach(key => {
    if (!_.hasIn(newObj, key)) {
      newObj[key] = obj2[key];
    }
  });

  return newObj;
}
