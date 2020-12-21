var jeiuh = {

  drop: function (ary, n = 1) {
    if (ary) {
      return ary.splice(n)
    }
  },

  dropRight: function (ary, n = 1) {
    var ary1 = new Array()
    for (let i = 1; i <= ary.length - n; i++) {
      ary1.push(i)
    }
    return ary1
  },

  chunk: function (ary, size) {
    var ary1 = [];
    for (var i = 0; i < ary.length; i = i + size) {
      ary1.push(ary.slice(i, i + size));
    }
    return ary1;
  },

  compact: function (ary) {
    var ary1 = []
    for (let i = 0; i < ary.length; i++) {
      if (ary[i]) {
        ary1.push(ary[i])
      }
    }
    return ary1
  },

  difference: function (ary, ...ary1) {
    var ary2 = ary1.flat(2)
    for (let i = 0; i < ary.length; i++) {
      for (let j = 0; j < ary2.length; j++) {
        if (ary[i] == ary2[j]) {
          ary.splice(i, 1)
        }
      }

    }
    return ary
  },

  differenceBy: function (ary, ary1, iteratee) {
    var ary2 = []
    var ary3 = []
    for (let i = 0; i < ary.length; i++) {
      ary2.push(iteratee(ary[i]))
    }
    for (let i = 0; i < ary1.length; i++) {
      ary3.push(iteratee(ary1[i]))
    }

    for (let i = 0; i < ary2.length; i++) {
      for (let j = 0; j < ary3.length; j++) {
        if (ary2[i] == ary3[j]) {
          ary2.splice(i, 1)
        }
      }

    }
    return ary2
  },

  differenceWith: function (ary, ary1, comparator) {
    var ary2 = []
    for (let i = 0; i < ary.length; i++) {
      for (let j = 0; j < ary1.length; j++) {
        if (!comparator(ary[i], ary1[j])) {
          ary2.push(ary[i])
        }
      }

    }
    return ary2
  },

  dropRightWhile: function (ary, predicate) {
    var ary1 = ary.reverse()
    var ary3 = []
    for (let i = 0; i < ary1.length; i++) {
      if (!predicate(ary1[i])) {
        ary3 = ary1.slice(i)
        break
      }

    }
    var ary2 = ary3.reverse()
    return ary2
  },

  dropWhile: function (ary, predicate) {
    for (let i = 0; i < ary.length; i++) {
      if (!predicate(ary[i])) {
        ary1 = ary.slice(i)
        break
      }

    }
    return ary1
  },

  fill: function (ary, val, sta = 0, end = ary.length) {
    var ary1 = []

    for (let i = 0; i < ary.length; i++) {
      if (i >= sta && i < end) {
        ary[i] = val
      }

    }
    return ary
  },

  flatten: function (ary) {
    for (let i = 0; i < ary.length; i++) {
      if (ary[i].length >= 0) {
        ary1 = ary.flat(1)
      }
    }
    return ary1
  },

  flattenDeep: function (ary) {
    for (let i = 0; i < ary.length; i++) {
      if (ary[i].length >= 0) {
        ary1 = ary.flat(Infinity)
      }
    }
    return ary1
  },

  flattenDepth: function (ary, d = 1) {
    for (let i = 0; i < ary.length; i++) {
      if (ary[i].length >= 0) {
        ary1 = ary.flat(d)
      }
    }
    return ary1
  },

  fromPairs: function (pairs) {
    var obj = {}
    for (let i = 0; i < pairs.length; i++) {
      obj[pairs[i][0]] = pairs[i][1]
    }
    return obj
  },

  head: function (ary) {
    if (ary.length === 0) {
      return undefined
    }
    return ary[0]
  },

  indexOf: function (ary, val, ind = 0) {
    for (let i = ind; i < ary.length; i++) {
      if (ary[i] == val) {
        return i
      }
    }
    return -1
  },

  initial: function (ary) {
    ary.pop()
    return ary
  },

  intersection: function (ary, ...args) {
    let ary1 = [];
    for (let a of args) {
      for (let b of a) {
        if (ary.includes(b)) {
          ary1.push(b);
        }
      }
      ary = ary1;
      ary1 = []
    }
    return ary;
  },

  identity: function (val) {
    return val
  },

  mapValues: function (obj, mapper) {
    var res = {}
    for (let key in obj) {
      var val = obj[key]
      res[key] = mapper(val, key, obk)
    }
    return res
  },

  mapkeys: function (obj, mapper) {
    var res = {}
    for (let key in obj) {
      var val = obj[key]
      res[mapper(val, key, obk)] = val
    }
    return res
  },

  join: function (array, separator = ',') {
    return array.join(separator)
  },

  last: function (array) {
    return array.pop()
  },

  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    return array.lastIndexOf(value, fromIndex)
  },

  nth: function (array, n = 0) {
    if (n >= 0) {
      var num = array[n]
    } else {
      var num = array[array.length - Math.abs(n)]
    }
    return num
  },

  pull: function (array, ...array1) {
    let arr = []
    for (let i = 0; i < array.length; i++) {
      if (!array1.includes(array[i])) {
        arr.push(array[i])
      }

    }
    return arr
  },

  pullAll: function (array, array1) {
    let arr = []
    for (let i = 0; i < array.length; i++) {
      if (!array1.includes(array[i])) {
        arr.push(array[i])
      }

    }
    return arr
  },

  reverse: function (array) {
    let arr = []
    for (let i = array.length - 1; i >= 0; i--) {
      arr.push(array[i])

    }
    return arr
  },

  sortedIndex: function (arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (val <= arr[i]) {
        return i;
      }
    }
  },

  sortedUniq: function (array) {
    let arr = []
    for (let iterator of array) {
      if (!arr.includes(iterator)) {
        arr.push(iterator)
      }
    }
    return arr
  },

  sortedUniqBy: function (array, iteratee) {
    let arr = []
    let arr1 = []
    for (let i = 0; i < array.length; i++) {
      if (iteratee(array[i]) === iteratee(array[i + 1])) {
        arr.push(array[i])
      }
    }
    return arr
  },

  tail: function (array) {
    array.shift()
    return array
  },

  take: function (array, n = 1) {
    array.splice(n)
    return array
  },

  takeRight: function (array, n = 1) {
    array.reverse()
    array.splice(n)
    return array.reverse()
  },

  takeRightWhile: function (array, predicate = _.identity) {
    let arr = []
    for (let i = array.length - 1; i >= 0; i--) {
      if (predicate(ary[i]), index, array)
        arr.unshift(ary[i])
      else
        return arr
    }
  },

  takeWhile: function (array, predicate = _.identity) {
    let arr = []
    for (let i = 0; i < array.length; i++) {
      if (predicate(ary[i]), index, array)
        arr.unshift(ary[i])
      else
        return arr
    }
  },

  union: function (...arrays) {
    let arr = []
    arr = arrays.flat(1)
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
      if (!arr1.includes(arr[i])) {
        arr1.push(arr[i])
      }
    }
    return arr1
  },

  unionBy: function (...arrays) {
    var arr = [].concat(...arrays)
    var iteratee = arr.pop()
    var map = []
    var result = []
    if (typeof iteratee == 'function') {
      for (var item of arr) {
        if (!map.includes(iteratee(item))) {
          map.push(iteratee(item))
          result.push(item)
        }
      }
      return result
    }
    if (typeof iteratee == 'string') {
      for (var item of arr) {
        if (!map.includes(item[iteratee])) {
          map.push(item[iteratee])
          result.push(item)
        }
      }
      return result
    }

  },

  unionWith: function (...arrays) {
    let iteratee = arrays.pop()
    let newarr = []
    arrays.forEach(arr => newarr.push(...arr))

    return uniqWith(newarr, iteratee)
  },

  uniq: function (array) {
    let arr = []
    for (let i = 0; i < array.length; i++) {
      if (!arr.includes(array[i])) {
        arr.push(array[i])
      }

    }
    return arr
  },

  uniqBy: function (array, iteratee) {
    var result = []
    var arr = []
    if (typeof iteratee == 'string') {
      for (var item of array) {
        if (!arr.includes(item[iteratee])) {
          arr.push(item[iteratee])
          result.push(item)
        }
      }
      return result
    }
    if (typeof iteratee == 'function') {
      for (var item of array) {
        if (!arr.includes(iteratee(item))) {
          arr.push(iteratee(item))
          result.push(item)
        }
      }
      return result
    }
  },

  uniqWith: function (array, comparator) {
    let arr = []
    for (let it of array) {
      for (const ite of array) {
        if (comparator(array[it]) == comparator(array[ite])) {
          arr.push[array[it]]
        }
      }
    }
    return arr
  },

  zip: function (...array) {
    let arr = []
    let arr1 = []
    let arr2 = []
    arr = array.flat(2)
    for (let i = 0; i < arr.length; i += 2) {
      arr1.push(arr[i])
    }
    for (let i = 1; i < arr.length; i += 2) {
      arr2.push(arr[i])
    }
    let arr3 = []
    arr3.push(arr1, arr2)
    return arr3
  },

  unzip: function (array) {
    let arr = []
    let arr1 = []
    let arr2 = []
    let arr3 = []
    arr = array.flat(2)
    for (let i = 0; i < arr.length; i += 3) {
      arr1.push(arr[i])
    }
    for (let i = 1; i < arr.length; i += 3) {
      arr2.push(arr[i])
    }
    for (let i = 2; i < arr.length; i += 3) {
      arr3.push(arr[i])
    }
    let arr4 = []
    arr4.push(arr1, arr2, arr3)
    return arr4
  },

  unzipWith: function (array, iteratee = _.identity) {
    let arr = array.flat(2)
    for (let i = 0; i < arr.length; i++) {
      let index0 = iteratee(arr[i] + arr[i + 3])
    }
    for (let i = 1; i < arr.length; i++) {
      let index1 = iteratee(arr[i] + arr[i + 3])
    }
    for (let i = 2; i < arr.length; i++) {
      let index2 = iteratee(arr[i] + arr[i + 3])
    }
    let arr1 = []
    arr1.push(index0, index1, index2)
    return arr1
  },

  without: function (array, ...values) {
    let arr = []
    arr = values.flat(1)
    let arr1 = []
    for (let i = 0; i < array.length; i++) {
      if (!arr.includes(array[i])) {
        arr1.push(array[i])
      }

    }
    return arr1
  },

  xor: function (...arrays) {
    let arr = arrays.flat(1)
    arr.sort()
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == arr[i + 1]) {
        arr1.push(arr[i])
      }

    }
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
      if (!arr1.includes(arr[i])) {
        arr2.push(arr[i])
      }
    }
    return arr2
  }

}
