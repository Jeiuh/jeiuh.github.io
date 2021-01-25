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

  differenceBy: function (array, values, predicate = _.identity) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    var newPredicate = iteratee(predicate)

    let newArray = array.filter(item => {
      var newVal = values.map(value => newPredicate(value))
      if (!newVal.includes(newPredicate(item))) {
        return true
      }
    })
    return newArray
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

  dropRightWhile: function (array, predicate = _.identity) {
    function interatee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    newPredicate = interatee(predicate)

    for (let i = 0; i < array.length; i++) {
      if (newPredicate(array[i])) {
        array.splice(i)
        return
      }
    }
    return array
  },

  dropWhile: function (array, predicate = _.identity) {
    function interatee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    newPredicate = interatee(predicate)
    let copyArray = array.slice()
    for (let i = 0; i < array.length; i++) {
      if (newPredicate(array[i])) {
        copyArray.splice(0, 1)
      }
    }
    return copyArray
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

  findIndex: function (array, predicate = _.identity, fromIndex = 0) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    var newPredicate = iteratee(predicate)

    for (let i = 0; i < array.length; i++) {
      if (newPredicate(array[i])) {
        return i
      } else {
        return -1
      }

    }
  },

  findLastIndex: function (array, predicate = _.identity, fromIndex = array.length - 1) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    var newPredicate = iteratee(predicate)

    for (let i = array.length - 1; i >= 0; i--) {
      if (newPredicate(array[i])) {
        return i
      } else {
        return -1
      }

    }
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

  intersectionBy: function (objects, others, predicate = _.identity) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    var newPredicate = iteratee(predicate)

    let flatArrays = objects.concat(others)
    let copyArrays = flatArrays
    let testArray = []
    for (let i = 0; i < copyArrays.length; i++) {
      if (testArray.indexOf(newPredicate(copyArrays[i])) > -1) {
        return [flatArrays[testArray.indexOf(newPredicate(copyArrays[i]))]]
      } else {
        testArray.push(newPredicate(copyArrays[i]))
      }
    }
  },

  intersectionWith: function (arrays, others, comparator) {
    let testArray = []
    for (let arraysItem of arrays) {
      for (let othersItem of others) {
        if (comparator(arraysItem, othersItem)) {
          testArray.push(arraysItem)
        }
      }
      return testArray
    }
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

  pullAllBy: function (array, values, predicate = _.identity) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    var newPredicate = iteratee(predicate)

    let newArray = array.map(item => newPredicate(item))
    let newValues = values.map(item => newPredicate(item))
    let testArray = []
    for (let item of newArray) {
      if (!(newValues.indexOf(item) > -1)) {
        testArray.push(array[newArray.indexOf(item)])
      }
    }
    return testArray
  },

  pullAllWith: function (array, values, comparator) {
    let testArray = []
    for (let arrayItrm of array) {
      for (let valuesItem of values) {
        if (!comparator(arrayItrm, valuesItem)) {
          testArray.push(arrayItrm)
        }
      }
    }
    return testArray
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

  sortedIndexBy: function (array, value, predicate = _.identit) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    var newPredicate = iteratee(predicate)

    let arrayF = array.map(item => newPredicate(item))
    let valueF = [value].map(item => newPredicate(item))
    for (let i = 0; i < arrayF.length; i++) {
      if (valueF.includes(arrayF[i])) {
        return i
      } else {
        return false
      }

    }
  },

  sortedIndexOf: function (array, value) {
    var first = 0
    var last = array.length - 1
    while (first < last) {
      var middle = Math.floor((first + last) / 2)
      if (array[middle] < value) {
        first = middle + 1
      } else {
        last = middle - 1
      }
    }
    if (array[first] == value) {
      return first
    }
    return -1
  },

  sortedLastIndex: function (array, value) {
    var first = 0
    var last = array.length
    while (first < last) {
      var middle = Math.floor((first + last) / 2)
      if (array[middle] > value) {
        last = middle - 1
      } else {
        first = middle + 1
      }
    }
    if (array[first] == value) {
      return first + 1
    }
    return -1
  },

  sortedLastIndexBy: function (array, value, predicate = _.identity) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    var newPredicate = iteratee(predicate)

    let newArray = array.map(item => newPredicate(item))
    let newValue = [value].map(item => newPredicate(item))
    for (let i = 0; i < newArray.length; i++) {
      if (newValue[0] >= newArray[i]) {
        return i + 1
      }

    }
  },

  sortedLastIndexOf: function (array, value) {
    var first = 0
    var last = array.length - 1
    while (first < last) {
      var middle = Math.floor((first + last) / 2)
      if (array[middle] == value) {
        return middle + 1
      } else if (array[middle] < value) {
        first = middle + 1
      } else {
        last = middle - 1
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
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    var newPredicate = iteratee(predicate)

    let newArray = []
    if (!array.length) {
      return []
    }
    for (let i = 0; i < array.length; i++) {
      if (newPredicate(array[i])) {
        newArray.push(array[i])
      }
    }
    return newArray
  },

  takeWhile: function (array, predicate = _.identity) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    var newPredicate = iteratee(predicate)

    let newArray = []
    for (let i = 0; i < array.length; i++) {
      if (newPredicate(array[i]))
        newArray.push(array[i])
    }
    return newArray
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

  unionWith: function (objects, others, comparator) {
    for (let object of objects) {
      for (let other of others) {
        if (!comparator(object, other) && JSON.stringify(objects).indexOf(JSON.stringify(other)) == -1) {
          objects.push(other)
        }
      }
    }
    return objects
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
    let result = []
    for (let item of array) {
      if (result.every(element => !comparator(element, item))) {
        result.push(item)
      }
    }
    return result
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
    let arrs = array.flat(2)
    let newArray = []
    for (let i = 0; i < arrs.length; i++) {
      if (i < arrs.length / 2) {
        newArray.push(iteratee(arrs[i], arrs[i + 3]))
      }
    }
    return newArray
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
  },

  xorBy: function (objects, others, predicate = _.identity,) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    var newPredicate = iteratee(predicate)

    let newObjects = objects.map(item => newPredicate(item))
    let newOthers = others.map(item => newPredicate(item))
    let newArray = []
    for (let i = 0; i < newObjects.length; i++) {
      if (!newOthers.includes(newObjects[i])) {
        newArray.push(objects[i])
      }
    }
    for (let i = 0; i < newOthers.length; i++) {
      if (!newObjects.includes(newOthers[i])) {
        newArray.push(others[i])
      }
    }
    return newArray
  },

  xorWith: function (objects, others, comparator) {
    let array = objects.slice()
    for (let i = 0; i < objects.length; i++) {
      for (let j = 0; j < others.length; j++) {
        if (comparator(objects[i], others[j])) {
          array.splice(i, 1)
        }
      }
    }
    for (let i = 0; i < others.length; i++) {
      for (let j = 0; j < objects.length; j++) {
        if (!comparator(others[i], objects[j]) && JSON.stringify(array).indexOf(JSON.stringify(others[i])) == -1 && JSON.stringify(objects).indexOf(JSON.stringify(others[i])) == -1) {
          array.push(others[i])
        }
      }
    }
    return array
  },

  property: function (path) {
    var names = path.split('.')
    return function (obj) {
      for (var name of names) {
        if (name in obj) {
          obj = obj[name]
        } else {
          return
        }
      }
      return obj
    }
  },

  get: function (obj, path, defaultValue) {
    if (typeof path === 'string') {
      let reg = /\w+/g
      path = path.match(reg)
    }
    for (let v of path) {
      if (obj[v]) {
        obj = obj[v]
      } else {
        return defaultValue
      }
    }
    return obj
  },

  isMatch: function (object, source) {
    for (const key in obj) {
      if (obj[key !== src[key]]) {
        const element = object[key];
        return false
      }
    }
    return true
  },

  bind: function (f, thisArg, ...partials) {
    return function (...args) {
      var copy = partials.slice()
      for (var i = 0; i < copy.length; i++) {
        if (copy[i] === window) {
          copy[i] = args.shift()
        }
      }
      return f.call(thisArg, ...copy, ...args)
    }
  },

  ary: function (func, n = func.length) {
    return function (...args) {
      return func(...args.slice(0, n))
    }
  },

  before: function (n, func) {
    let q = 0
    let result
    return function (...args) {
      if (q < n) {
        return result = func.call(thsi, ...args)
        q++
      } else {
        return result
      }
    }
  },

  after: function (n, func) {
    var q = 0
    return function (...args) {
      q++
      if (q > n) {
        return func.call(thsi, ...args)
      }
    }
  },

  flip: function (func) {
    return function (...args) {
      return func(args.reverse())
    }
  },

  negate: function (predicate) {
    return function (...args) {
      return !predicate(...args)
    }
  },

  spread: function (func, start = 0) {
    return function (ary) {
      return func.apply(this, ary)
    }
  },

  zipObject: function (props = [], values = []) {
    let obj = {}
    let arr = []
    arr = props.concat(values)
    for (let i = 0; i < arr.length; i++) {
      if (i !== arr.length - 2) {
        obj[arr[i]] = arr[i + 2]
      } else {
        break
      }
    }
    return obj
  },

  countBy: function (collection, predicate = _.identity) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    newPredicate = iteratee(predicate)

    let obj = {}
    for (let item of collection) {
      let newitem = newPredicate(item)
      if (obj[newitem]) {
        obj[newitem] += 1
      } else {
        obj[newitem] = 1
      }
    }
    return obj
  },

  every: function (collection, predicate = _.identity) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    newPredicate = iteratee(predicate)

    if (Array.isArray(collection)) {
      for (let item of collection) {
        if (newPredicate(item)) {
          return false
        }
      }
      return true
    }
    if (typeof collection === 'object') {
      for (let key in object) {
        if (newPredicate(collection[key])) {
          return false
        }
      }
      return true
    }
  },

  filter: function (collection, predicate = _.identity) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    newPredicate = iteratee(predicate)

    if (Array.isArray(collection)) {
      let arr = []
      for (let item of collection) {
        if (newPredicate(item)) {
          arr.push(item)
        }
      }
      return arr
    }
    if (typeof collection === 'object') {
      let obj = {}
      for (let key in object) {
        if (newPredicate(collection[key])) {
          obj[key] = collection[key]
        }
      }
      return obj
    }
  },

  find: function (collection, predicate = _.identity, fromIndex = 0) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    newPredicate = iteratee(predicate)

    if (Array.isArray(collection)) {
      for (let item of collection) {
        if (newPredicate(item)) {
          return item
        }
      }
    }
    if (typeof collection === 'object') {
      for (let key in collection) {
        if (newPredicate(collection[key])) {
          return collection[key]
        }
      }
    }
  },

  findLast: function (ary, predicate, fromIndex = ary.length - 1) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    newPredicate = iteratee(predicate);

    for (let i = fromIndex; i >= 0; i--) {
      if (newPredicate(ary[i], i, ary)) return ary[i];
    }
    return;
  },

  curry: function (func, arity = func.length) {
    return function (...args) {
      if (args.length < arity) {
        return curry(func.blind(null, args), length - func.length)
      } else {
        return func(args)
      }
    }
  },

  flatMap: function (collection, predicate = _.identity) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    var newPredicate = iteratee(predicate);

    var newArr = []
    for (let item of collection) {
      newArr.push(newPredicate(item))
    }
    return newArr.flat(Infinity)
  },

  flatMapDeep: function (collection, predicate = _.identity) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    newPredicate = iteratee(predicate)

    var newArr = []
    for (let item of collection) {
      newArr.push(newPredicate(item))
    }
    return newArr.flat(Infinity)
  },

  flatMapDepth: function (collection, predicate = _.identity, depth = 1) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    var newPredicate = iteratee(predicate)

    var newArr = []
    for (let item of collection) {
      newArr.push(newPredicate(item))
    }
    return newArr.flat(depth)
  },

  forEach: function (collection, predicate = _.identity) {
    if (Array.isArray(collection)) {
      for (let item of collection) {
        predicate(item)
      }
      return collection
    }
    if (typeof collection === 'object') {
      for (let key in collection) {
        predicate(key, collection[key])
      }
      return collection
    }
  },

  forEachRight: function (collection, predicate = _.identity) {
    if (Array.isArray(collection)) {
      newCollection = collection.reverse()
      for (let item of newCollection) {
        predicate(item)
      }
      return collection
    }
    if (typeof collection === 'object') {
      var arrKey = Object.keys(collection)
      var arrValue = Object.values(collection)
      var re_arrKey = arrKey.reverse()
      var re_arrValue = arrValue.reverse()
      newObj = {}
      for (let key of re_arrKey) {
        newObj[key] = true
      }
      for (let key in newObj) {
        if (!re_arrValue.includes(newObj[key])) {
          newObj[key] = re_arrValue.shift()
        }
      }
      for (let key in newObj) {
        predicate(key, newObj[key])
      }
      return newObj
    }
  },

  groupBy: function (collection, predicate = _.identity) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    var newPredicate = iteratee(predicate)

    let obj = {}
    for (let item of collection) {
      obj[newPredicate(item)] = []
    }
    for (let iterator of collection) {
      if (newPredicate(iterator) in obj) {
        obj[newPredicate(iterator)].push(iterator)
      }
    }
    return obj
  },

  includes: function (collection, value, fromIndex = 0) {
    if (typeof collection === 'string') {
      if (collection.includes(value)) {
        return true
      } else {
        return false
      }
    }
    if (Array.isArray(collection)) {
      if (collection.includes(value, fromIndex)) {
        return true
      } else {
        return false
      }
    }
    if (typeof collection === 'object') {
      for (let key in collection) {
        if (collection[key] == value) {
          return true
        } else {
          return false
        }
      }
    }
  },

  keyBy: function (collection, predicate = _.identity) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    newPredicate = iteratee(predicate)

    let object = {}
    for (let i = 0; i < collection.length; i++) {
      object[newPredicate(collection[i])] = collection[i]
    }
    return object
  },

  map: function (collection, predicate = _.identity) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    newPredicate = iteratee(predicate)

    if (Array.isArray(collection)) {
      let array = []
      for (let item of collection) {
        array.push(newPredicate(item))
      }
      return array
    }

    if (typeof collection === 'object') {
      let array = []
      for (let key in collection) {
        array.push(newPredicate(collection[key]))
      }
      return array
    }
  },

  partition: function (collection, predicate = _.identity) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        let array1 = []
        let array2 = []
        let array3 = []
        collection.map(item => {
          if (_.matchesProperty(predicate[0], predicate[1])) {
            array1.push(item)
          } else {
            array2.push(item)
          }
        })
        array3[0] = array1
        array3[1] = array2
        return array3
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    newPredicate = iteratee(predicate)
    let array1 = []
    let array2 = []
    let array3 = []
    for (let item of collection) {
      if (newPredicate(item)) {
        array1.push(item)
      } else {
        array2.push(item)
      }
    }
    array3[0] = array1
    array3[1] = array2
    return array3
  },

  reduce: function (collection, iteratee = _.identity, accumulator) {
    for (let key in collection) {
      if (accumulator == undefined) {
        accumulator = collection[key]
      }
      accumulator = iteratee(accumulator, collection[key], key)
    }
    return accumulator
  },

  reduceRight: function (collection, iteratee = _.identity, accumulator) {
    for (let i = collection.length - 1; i >= 0; i--) {
      if (accumulator == undefined) {
        accumulator = collection[i]
      }
      accumulator = iteratee(accumulator, collection[i], key)
    }
    return accumulator
  },

  reject: function (collection, predicate = _.identity) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        let arr = []
        collection.map(item => {
          if (_.matchesProperty(predicate[0], predicate[1]) == false) {
            arr.push(item)
          }
        })
        return arr
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    newPredicate = iteratee(predicate)

    if (Array.isArray(collection)) {
      let arr = []
      for (let item of collection) {
        if (!newPredicate(item)) {
          arr.push(item)
        }
      }
      return arr
    }
    if (typeof collection === 'object') {
      let obj = {}
      for (let key in object) {
        if (!newPredicate(collection[key])) {
          obj[key] = collection[key]
        }
      }
      return obj
    }
  },

  sample: function (collection) {
    let item = collection[Math.floor(Math.random() * collection.length)]
    return item
  },

  sampleSize: function (collection, n = 1) {
    let i = 1
    let array = []
    while (i <= collection.length) {
      array.push(collection[Math.floor(Math.random() * collection.length)])
      i++
    }
    return array
  },

  shuffle: function (collection) {
    let i = 1
    let array = []
    while (i <= collection.length) {
      let value = collection[Math.floor(Math.random() * collection.length)]
      if (array.includes(value)) {
        continue
      } else {
        array.push(value)
        i++
      }
    }
    return array
  },

  size: function (collection) {
    if (typeof collection === 'string') {
      return collection.length
    }
    if (Array.isArray(collection)) {
      return collection.length
    }
    if (typeof collection === 'object') {
      return Object.keys(collection).length
    }
  },

  some: function (collection, predicate = _.identity) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        collection.map(item => {
          if (_.matchesProperty(predicate[0], predicate[1])) {
            return true
          }
        })
        return false
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    var newPredicate = iteratee(predicate)

    if (Array.isArray(collection)) {
      for (let item of collection) {
        if (newPredicate(item)) {
          return true
        }
      }
      return false
    }
    if (typeof collection === 'object') {
      for (let key in collection) {
        if (newPredicate(collection[key])) {
          return true
        }
      }
      return false
    }
  },

  defer: function (func, ...args) {
    let times = setTimeout(func, 0, ...args);
    return times - 1
  },

  delay: function (func, wait, ...args) {
    let timer = setTimeout(func, wait, ...args);
    return timer - 1;
  },

  castArray: function (value) {
    let array = []
    if (Array.isArray(value)) {
      return value
    } else {
      array.push(value)
      return array
    }
  },

  conformsTo: function (object, source) {
    for (let i in object) {
      if (source[i] && !source[i](object[i])) {
        return false;
      }
    }
    return true;
  },

  eq: function (value, other) {
    if (Number.isNaN(value) && Number.isNaN(other)) {
      return true;
    }
    return value === other;
  },

  gt: function (value, other) {
    if (value - other > 0) {
      return true
    } else {
      return false
    }
  },

  gte: function (value, other) {
    if (value - other >= 0) {
      return true
    } else {
      return false
    }
  },

  isArguments: function (value) {
    if (Array.isArray(value)) {
      return false
    }
    if (typeof value === 'object' && length in value) {
      return true
    } else {
      return false
    }
  },

  isArray: function (value) {
    if (Array.isArray(value)) {
      return true
    } else {
      return false
    }
  },

  isArrayBuffer: function (value) {
    if (Object.prototype.toString.call(value) === "[object ArrayBuffer]") {
      return true
    } else {
      return false
    }
  },

  isArrayLike: function (value) {
    if (typeof value !== 'function' && value.length >= 0 && value.length <= Number.MAX_SAFE_INTEGER) {
      return true
    } else {
      return false
    }
  },

  isArrayLikeObject: function (value) {
    if (typeof value !== 'function' && typeof value == "object" && value.length >= 0 && value.length <= Number.MAX_SAFE_INTEGER) {
      return true
    } else {
      return false
    }
  },

  isBoolean: function (value) {
    if (Object.prototype.toString.call(value) === "[object Boolean]") {
      return true
    } else {
      return false
    }
  },

  isDate: function (value) {
    if (Object.prototype.toString.call(value) === "[object Date]") {
      return true
    } else {
      return false
    }
  },

  isElement: function (value) {
    if (Object.prototype.toString.call(value) === "[object HTMLBodyElement]") {
      return true
    } else {
      return false
    }
  },

  isEmpty: function (value) {
    for (let key in value) {
      return false
    }
    return true
  },

  isEqual: function (value, other) {
    if (typeof (value) == "number" && typeof (other) == "number" && value == other) {
      return true
    } else if (Object.prototype.toString.call(value) == "[object Object]" && Object.prototype.toString.call(other) == "[object Object]" && Object.getOwnPropertyNames(value).length == Object.getOwnPropertyNames(other).length) {
      return true
    } else if (typeof (value) != "number" && typeof (other) != "number" && Object.prototype.toString.call(value) === Object.prototype.toString.call(other)) {
      return true
    } else {
      return false
    }
  },

  isEqualWith: function (value, other, customizer) {
    if (Object.prototype.toString.call(customizer(value)) === Object.prototype.toString.call(customizer(other))) {
      return true
    } else {
      return false
    }
  },

  isError: function (value) {
    if (Object.prototype.toString.call(value) === "[object Error]") {
      return true
    } else {
      return false
    }
  },

  isFinite: function (value) {
    if (Object.prototype.toString.call(value) === "[object Number]" && value != Infinity) {
      return true
    } else {
      return false
    }
  },

  isFunction: function (value) {
    if (typeof value === 'function') {
      return true
    } else {
      return false
    }
  },

  isInteger: function (value) {
    if (typeof value === "number" && Math.floor(value) === value && value != Infinity) {
      return true
    } else {
      return false
    }
  },

  isLength: function (value) {
    if (Number.isInteger(value)) {
      return true
    } else if (value.length) {
      return true
    } else {
      return false
    }
  },

  isMap: function (value) {
    if (Object.prototype.toString.call(value) === "[object Map]") {
      return true
    } else {
      return false
    }
  },

  isMatch: function (object, source) {
    for (let key in object) {
      if (JSON.stringify(object[key]) == JSON.stringify(source[key])) {
        return true
      }
    }
    return false
  },

  isMatchWith: function (object, source, [customizer]) {
    for (let key in object) {
      if (customizer(object[key], source[key])) {
        return true
      }
    }
    return false
  },

  isNaN: function (value) {
    if (Object.prototype.toString.call(value) === "[object Number]") {
      return true
    }
    return false
  },

  isNil: function (value) {
    if (value === null || value === undefined) {
      return true
    }
    return false
  },

  isNull: function (value) {
    if (value === null) {
      return true
    }
    return false
  },

  isNumber: function (value) {
    if (typeof (value) == "number") {
      return true
    }
    return false
  },

  isObject: function (value) {
    if (typeof (value) == "object" || typeof (value) == "function") {
      return true
    }
    return false
  },

  isObjectLike: function (value) {
    if (typeof (value) == "object") {
      return true
    }
    return false
  },

  isPlainObject: function (value) {
    let proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
  },

  isRegExp: function (value) {
    if (Object.prototype.toString.call(value) === "[object RegExp]") {
      return true
    }
    return false
  },

  isSafeInteger: function (value) {
    if (Number.isSafeInteger(value)) {
      return true
    }
    return false
  },

  isSet: function (value) {
    if (Object.prototype.toString.call(value) === "[object Set]") {
      return true
    }
    return false
  },

  isString: function (value) {
    if (Object.prototype.toString.call(value) === "[object String]") {
      return true
    }
    return false
  },

  isSymbol: function (value) {
    if (Object.prototype.toString.call(value) == "[object Symbol]") {
      return true
    }
    return false
  },

  isTypedArray: function (value) {
    if (Object.prototype.toString.call(value) == "[object Uint8Array]") {
      return true
    }
    return false
  },

  isUndefined: function (value) {
    if (value === undefined) {
      return true
    }
    return false
  },

  isWeakMap: function (value) {
    if (Object.prototype.toString.call(value) === "[object WeakMap]") {
      return true
    }
    return false
  },

  lt: function (value, other) {
    if (value < other) {
      return true
    }
    return false
  },

  lte: function (value, other) {
    if (value <= other) {
      return true
    }
    return false
  },

  toArray: function (value) {
    var result = [];
    for (var key in value) {
      result.push(value[key]);
    }
    return result;
  },

  toArray: function (value) {
    if (typeof value === 'string' || typeof value === 'object') {
      let array = []
      for (let key in value) {
        array.push(value[key])
      }
      return array
    } else {
      return []
    }
  },

  toFinite: function (value) {
    if (value > Number.MAX_VALUE) {
      return 1.7976931348623157e+308
    }
    if (value < Number.MIN_VALUE) {
      return 5e-324
    }
    if (isNaN(+value)) {
      return 0
    } else {
      return +value
    }
  },

  toInteger: function (value) {
    if (value > Number.MAX_VALUE) {
      return 1.7976931348623157e+308
    }
    if (value < Number.MIN_VALUE) {
      return 0
    }
    if (isNaN(+value)) {
      return 0
    } else {
      return parseInt(value)
    }
  },

  toLength: function (value) {
    if (value > Number.MAX_VALUE) {
      return 4294967295
    }
    if (value < Number.MIN_VALUE) {
      return 0
    }
    if (isNaN(+value)) {
      return 0
    } else {
      return parseInt(value)
    }
  },

  toNumber: function (value) {
    if (value > Number.MAX_VALUE) {
      return Infinity
    }
    if (value < Number.MIN_VALUE) {
      return 5e-324
    }
    if (isNaN(+value)) {
      return 0
    } else {
      return +value
    }
  },

  assign: function (object, ...source) {
    source.forEach((item) => {
      for (let key of Object.keys(item)) {
        object[key] = item[key]
      }
    });
    return object;
  },

  toSafeInteger: function (value) {
    if (value > Number.MAX_VALUE) {
      return 9007199254740991
    }
    if (value < Number.MIN_VALUE) {
      return 0
    }
    if (isNaN(+value)) {
      return 0
    } else {
      return parseInt(value)
    }
  },

  add: function (augend, addend) {
    return augend + addend
  },

  ceil: function (number, precision = 0) {
    return Math.ceil(number * 10 ** precision) / 10 ** precision
  },

  divide: function (augend, addend) {
    return augend / addend
  },

  floor: function (number, precision = 0) {
    return Math.floor(number * 10 ** precision) / 10 ** precision
  },

  max: function (array) {
    if (array.length === 0) {
      return undefined
    }
    if (array.length > 0) {
      return Math.max(...array)
    }
  },

  maxBy: function (array, iteratee = _.identity) {
    if (typeof iteratee === "function") {
      let max = 0
      for (let item of array) {
        if (max < iteratee(item)) {
          max = iteratee(item)
          result = item
        }
      }
      return result
    }
    if (typeof iteratee === "string") {
      let max = 0
      for (let item of array) {
        if (max < item[iteratee]) {
          max = item[iteratee]
          result = item
        }
      }
      return result
    }
  },

  mean: function (array) {
    let sum = 0
    for (let item of array) {
      sum = sum + item
    }
    return sum / array.length
  },

  min: function (array) {
    if (array.length === 0) {
      return undefined
    }
    if (array.length > 0) {
      return Math.min(...array)
    }
  },

  min: function (array, iteratee = _.identity) {
    if (typeof iteratee === "function") {
      let min = Infinity
      for (let item of array) {
        if (min > iteratee(item)) {
          min = iteratee(item)
          result = item
        }
      }
      return result
    }
    if (typeof iteratee === "string") {
      let min = Infinity
      for (let item of array) {
        if (min > item[iteratee]) {
          min = item[iteratee]
          result = item
        }
      }
      return result
    }
  },

  multiply: function (multiplier, multiplicand) {
    return multiplier * multiplicand
  },

  round: function (number, precision = 0) {
    return Math.ceil(number * 10 ** precision) / 10 ** precision
  },

  subtract: function (minuend, subtrahend) {
    return minuend - subtrahend
  },

  sum: function (array) {
    let sum = 0
    for (let item of array) {
      sum = sum + item
    }
    return sum
  },

  sumBy: function (array, iteratee = _.identity) {
    if (typeof iteratee === "function") {
      let sum = 0
      for (let item of array) {
        sum = sum + iteratee(item)
      }
      return sum
    }
    if (typeof iteratee === "string") {
      let sum = 0
      for (let item of array) {
        sum = sum + item[iteratee]
      }
      return sum
    }
  },

  clamp: function (number, lower, upper) {
    if (number < lower && number < upper) {
      return lower
    } else {
      return upper
    }
  },

  inRange: function (number, start = 0, end) {
    if (end == undefined) {
      end = start
      start = 0
    }
    if (start > end) {
      newStart = start
      start = end
      end = newStart
    }
    if (number >= start && number < end) {
      return true
    }
    return false
  },

  random: function (lower = 0, upper = 1, floating) {
    if (floating === true) {
      return Math.random() * (upper - lower) + lower
    } else if (lower != parseInt(lower) || upper != parseInt(lower)) {
      return Math.random() * (upper - lower) + lower
    } else {
      return Math.floor(Math.random() * (upper - lower) + lower)
    }
  },

  assign: function (object, ...sources) {
    for (let item of sources) {
      for (let it of Object.keys(item)) {
        object[it] = item[it]
      }
    }
    return object
  },

  assignIn: function (object, ...source) {
    for (let item of source) {
      for (let key in item) {
        object[key] = item[key]
      }
    }
    return object
  },

  at: function (object, paths) {
    let regExp = /\w+/g
    let array = []
    paths = paths.map(path => path.match(regExp))
    paths.forEach(path => {
      let value = object
      for (let item of path) {
        value = value[item]
      }
      array.push(value)
    })
    return array
  },

  defaults: function (...source) {
    let object = {}
    for (let item of source) {
      for (let key in item) {
        if (!(key in object)) {
          object[key] = item[key]
        }
      }
    }
    return object
  },

  defaultsDeep: function defaultsDeep(object, ...sources) {
    for (let item of sources) {
      for (let newKey in item) {
        if (!object[newKey]) {
          object[newKey] = item[newKey]
        } else if (typeof item[newKey] === "object") {
          defaultsDeep(object[newKey], item[newKey])
        }
      }
    }
    return object
  },

  findKey: function (object, predicate = _.identity) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    var newPredicate = iteratee(predicate)

    for (let newKey in object) {
      if (newPredicate(object[newKey])) {
        return newKey
      } else {
        return undefined
      }
    }
  },

  findLastKey: function (object, predicate = _.identity) {
    function iteratee(predicate) {
      if (typeof predicate === 'function') {
        return predicate
      }
      if (typeof predicate === 'string') {
        return _.property(predicate)
      }
      if (Array.isArray(predicate)) {
        return _.matchesProperty(predicate)
      }
      if (typeof predicate === 'object') {
        return _.matches(predicate)
      }
    }

    var newPredicate = iteratee(predicate)

    let newObject = {}
    for (let item of Object.keys(object).reverse()) {
      newObject[item] = true
    }
    for (let newKey in object) {
      newObject[newKey] = object[newKey]
    }
    for (let newKey in newObject) {
      if (newPredicate(newObject[newKey])) {
        return newKey
      } else {
        return undefined
      }
    }
  },

  forIn: function (object, iteratee = _.identity) {
    for (let newKey in object) {
      if (!iteratee(object[newKey], newKey, object)) {
        break
      }
    }
    return object
  },

  forInRight: function (object, iteratee = _.identity) {
    let keys = []
    for (let newKey in object) {
      keys.push(newKey)
    }
    keys = keys.reverse()
    for (let newKey of keys) {
      if (!iteratee(object[newKey], newKey, object)) {
        break
      }
    }
    return object
  },

  forOwn: function (object, iteratee = _.identity) {
    let keys = Object.keys(object)
    for (let newKey of keys) {
      if (!iteratee(object[newKey], newKey, object)) {
        break
      }
    }
    return object
  },

  forOwnRight: function (object, iteratee = _.identity) {
    let keys = Object.keys(object).reverse()
    for (let newKey of keys) {
      if (!iteratee(object[newKey], newKey, object)) {
        break
      }
    }
    return object
  },

  functions: function (object) {
    let keys = Object.keys(object)
    let result = []
    for (let newKey of keys) {
      if (typeof object[newKey] === "function") {
        result.push(newKey)
      }
    }
    return result
  },

  functionsIn: function (object) {
    let result = []
    for (let newKey in object) {
      if (typeof object[newKey] === "function") {
        result.push(newKey)
      }
    }
    return result
  },

  has: function (object, path) {
    if (typeof path === 'string') {
      let reg = /\w+/g
      path = path.match(reg)
    }
    for (let item of path) {
      if (!object.hasOwnProperty(item)) {
        return false
      }
      object = object[item]
    }
    return true
  },

  hasIn: function (object, path) {
    if (typeof path === 'string') {
      let reg = /\w+/g
      path = path.match(reg)
    }
    for (let item of path) {
      if (item in object) {
        object = object[item];
      } else {
        return false;
      }
    }
    return true
  },

  invert: function (object) {
    let keys = Object.keys(object).reverse()
    let values = Object.values(object).reverse()
    let newObject = {}
    for (let value of values) {
      newObject[value] = true
    }
    let newkeys = Object.keys(newObject)
    for (let i = 0; i < newkeys.length; i++) {
      newObject[newkeys[i]] = keys[i]
    }
    return newObject
  },

  invertBy: function (object, iteratee = _.identity) {
    let keys = Object.keys(object)
    let newObject = {}
    for (let key of keys) {
      let newValue = object[key]
      if (iteratee) {
        newValue = iteratee(newValue)
      }
      if (newObject[newValue]) {
        newObject[newValue].push(key)
      } else {
        newObject[newValue] = [key]
      }
    }
    return newObject
  },

  invoke: function (obj, path, ...args) {
    if (typeof path === 'string') {
      let reg = /\w+/g;
      path = path.match(reg);
    }
    for (let item of path) {
      if (typeof obj[item] === 'function') {
        if (path[path.length - 1] === item) {
          let func = item
          return obj[func](...args)
        } else {
          obj = obj[item]()
          continue
        }
      }
      if (obj[item]) {
        obj = obj[item];
      } else {
        return defaultValue;
      }
    }
  },

  keys: function (object) {
    if (typeof object === 'object') {
      return Object.keys(object)
    }
    if (typeof object === 'string') {
      let newArray = []
      for (let i = 0; i < object.length; i++) {
        newArray.push(i.toString())

      }
      return newArray
    }
  },

  keysIn: function (object) {
    if (typeof object === 'object') {
      let objectA = []
      for (let key in object) {
        objectA.push(key)
      }
      return objectA
    }
    if (typeof object === 'string') {
      let newArray = []
      for (let i = 0; i < object.length; i++) {
        newArray.push(i.toString())

      }
      return newArray
    }
  },

  mapKeys: function (object, iteratee = _.identity) {
    let keys = Object.keys(object)
    let newObj = {}
    for (let key of keys) {
      newKey = iteratee(object[key], key)
      newObj[newKey] = object[key]
    }
    return newObj
  },

  mapValues: function (object, iteratee = _.identity) {
    let keys = Object.keys(object)
    let values = Object.values(object)
    let newObj = {}
    if (typeof iteratee === 'function') {
      let newVals = []
      for (let value of values) {
        value = iteratee(value)
        newVals.push(value)
      }
      for (let i = 0; i < keys.length; i++) {
        newObj[keys[i]] = newVals[i]
      }
    }
    if (typeof iteratee === 'string') {
      let newVals = []
      for (let value of values) {
        value = value[iteratee]
        newVals.push(value)
      }
      for (let i = 0; i < keys.length; i++) {
        newObj[keys[i]] = newVals[i]
      }
    }
    return newObj
  },

  omit: function (object, props) {
    for (let prop of props) {
      delete object[prop]
    }
    return object
  },

  omitBy: function (object, predicate = _.identity) {
    for (let key in object) {
      if (predicate(object[key])) {
        delete object[key]
      }
    }
    return object
  },

  pick: function (object, props) {
    let newObj = {}
    for (let prop of props) {
      newObj[prop] = object[prop]
    }
    return newObj
  },

  omitBy: function (object, predicate = _.identity) {
    let newObj = {}
    for (let key of Object.keys(object)) {
      if (predicate(object[key])) {
        newObj[key] = object[key]
      }
    }
    return newObj
  },

  result: function (object, path, defaultValue) {
    if (typeof path === 'string') {
      let reg = /\w+/g;
      path = path.match(reg);
    }
    for (let item of path) {
      if (object[item]) {
        object = object[item]
      } else {
        return defaultValue
      }
    }
    return object
  },

  set: function (object, path, val) {
    let reg = /\w+/g
    path = path.match(reg)
    var len = path.length
    var p = object
    for (var i = 0; i < len - 1; i++) {
      if (p[path[i]] == undefined) {
        if (!isNaN(Number(path[i + 1]))) {
          p[path[i]] = []
        } else {
          p[path[i]] = {}
        }
      }
      p = p[path[i]]
    }
    p[path[len - 1]] = val
    return object
  },

  toPairs: function (object) {
    let arrays = []
    let keys = Object.keys(object)
    for (let key of keys) {
      let temp = []
      temp.push(key, object[key])
      arrays.push(temp)
    }
    return arrays
  },

  toPairsIn: function (object) {
    let arrays = []
    let keys = []
    for (let key in object) {
      keys.push(key)
    }
    for (let key of keys) {
      let temp = []
      temp.push(key, object[key])
      arrays.push(temp)
    }
    return arrays
  },

  unset: function (obj, path) {
    let reg = /\w+/g
    path = path.match(reg)
    let len = path.length
    for (let i = 0; i < len - 1; i++) {
      if (obj[path[i]]) {
        obj = obj[path[i]]
      }
    }
    delete obj[path[len - 1]]
    return true
  },

  update: function (object, path, updater) {
    let reg = /\w+/g
    path = path.match(reg)
    var len = path.length
    var p = object
    for (var i = 0; i < len - 1; i++) {
      if (p[path[i]] == undefined) {
        if (!isNaN(Number(path[i + 1]))) {
          p[path[i]] = []
        } else {
          p[path[i]] = {}
        }
      }
      p = p[path[i]]
    }
    p[path[len - 1]] = updater(p[path[len - 1]])
    return object
  },

  values: function (object) {
    if (typeof object === 'object') {
      let objectV = Object.values(object)
      return objectV
    }
    if (typeof object === 'string') {
      let newArray = []
      for (let i = 0; i < object.length; i++) {
        newArray.push(object[i])
      }
      return newArray
    }
  },

  valuesIn: function (object) {
    let objectV = []
    for (let key in object) {
      objectV.push(object(key))
    }
    return objectV
  },

  escape: function (string = "") {
    return string.replace(/[\&\>\<\"\']/g, (item) => {
      switch (item) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt";
        case '"':
          return "&quot;";
        case "'":
          return "&apos;";
        case "`":
          return "&grave;";
        default:
          return item;
      }
    })
  },

  escapeRegExp: function (string = '') {
    return string.replace(/[\^\$\s\.\*\+\?\(\)\[\]\,\|]/g, '\\$&')
  },

  pad: function (string = "", length = 0, chars = " ") {
    var count = 0
    while (string.length < length) {
      count++
      if (count % 2) {
        string += chars
      } else {
        string = chars + string
      }
      while (string.length > length) {
        string = string.slice(0, -1)
      }
    }
    return string
  },

  padend: function (string = "", length = 0, chars = " ") {
    while (string.length < length) {
      string += chars
      while (string.length > length) {
        string = string.slice(0, -1);
      }
    }
    return string;
  },

  padStart: function (string = "", length = 0, chars = " ") {
    while (string.length < length) {
      string = chars + string
      while (string.length > length) {
        string = string.slice(0, -1);
      }
    }
    return string;
  },

  parseInt: function (string, radix = 10) {
    return parseInt(string, radix)
  },

  repeat: function (string = '', n = 1) {
    for (i = 0; i < n; i++) {
      console.log(string)
    }
  },

  replace: function (string = '', pattern, replacement) {
    return string.replace(pattern, replacement)
  },

  snakeCase: function (string = '') {
    let reg = /(?<=\b|-)\w{3,6}/g
    string = string.match(reg)
    if (string.length === 1) {
      let newStr = string.toString().slice(0, 3).toLowerCase() + '_' + string.toString().slice(3).toLowerCase()
      return newStr
    } else {
      let newStr = string.toString().replace(',', '_')
      return newStr.toLowerCase()
    }
  },

  split: function (string = '', separator, limit) {
    return string.split(separator, limit + 1)
  },

  startCase: function (string = '') {
    let reg = /(?<=\b|-)\w{3,6}/g
    string = string.match(reg)
    if (string.length === 1) {
      let newStr = string.toString().slice(0, 3).toLowerCase() + ' ' + string.toString().slice(3).toLowerCase()
      return newStr
    } else {
      let newStr = string.toString().replace(',', ' ')
      return newStr.toLowerCase()
    }
  },

  startsWith: function (string = '', target, position = 0) {
    return string[position].includes(target)
  },

  toLower: function (string = '') {
    return string.toLowerCase()
  },

  toUpper: function (string = '') {
    return string.toUpperCase()
  },

  unescape: function (string = '') {
    return string.replace(/(\&amp;)|(\&lt;)|(\&gt;)|(\&quot;)|(\&apos;)|(\&grave;)/, (item) => {
      switch (item) {
        case "&amp;":
          return "&"
        case "&lt;":
          return "<"
        case "&gt;":
          return ">"
        case '&quot;':
          return '"'
        case "&apos;":
          return "'"
        case "&grave;":
          return "`"
        default:
          return it
      }
    })
  },

  defaultTo: function (value, defaultValue) {
    if (value) {
      return value
    } else {
      return defaultValue
    }
  },

  range: function (start = 0, end, step = 1) {
    if (start > 0 && end == undefined && step == undefined) {
      let arr = []
      end = start
      for (let i = 0; i < end; i++) {
        arr.push(i)
      }
      return arr
    }
    if (start < 0) {
      let arr = []
      for (let i = 0; i > start; i--) {
        arr.push(i)
      }
      return arr
    }
    if (start > 0 && end > 0 && step == undefined) {
      let arr = []
      for (let i = start; i < end; i++) {
        arr.push(i)
      }
      return arr
    }
    if (start <= 0 && end < 0 && step < 0) {
      let arr = []
      for (let i = 0; i > end; i += step) {
        arr.push(i)
      }
      return arr
    }
    if (start >= 0 && step != 0) {
      let arr = []
      for (let i = 0; i < end; i += step) {
        arr.push(i)
      }
      return arr
    }
    if (step == 0) {
      let arr = []
      for (let i = start; i < end; i++) {
        arr.push(start)
      }
      return arr
    }
  },

  times: function (n, iteratee = _.identity) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(iteratee(i));
    }
    return arr;
  },

  toPath: function (value) {
    let reg = /\w+/g;
    value = value.match(reg);
    return value;
  },

  cloneDeep: function (value) {
    let newVal = {}
    newVal = JSON.parse(JSON.stringify(value))
    return newVal
  },

  concat: function (array, ...values) {
    let arr = []
    arr = array.concat(...values)
    return arr
  },

  pullAt: function (array, ...indexes) {
    let arr = []
    for (let it of indexes) {
      arr.push(array[it])
    }
    for (let it of arr) {
      let i = array.indexOf(it)
      array.splice(i, 1)
    }
    return arr
  }

}
