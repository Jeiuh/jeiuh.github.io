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

  dropRightWhile: function (ary, predicate) {
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

    var ary1 = ary.reverse()
    var ary3 = []
    for (let i = 0; i < ary1.length; i++) {
      if (!newPredicate(ary1[i])) {
        ary3 = ary1.slice(i)
        break
      }

    }
    var ary2 = ary3.reverse()
    return ary2
  },

  dropWhile: function (ary, predicate = _.identity) {
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

  intersectionBy: function (predicate = _.identity, ...arrays) {
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

    let flatArrays = arrays.flat()
    let copyArrays = flatArrays
    let testArray = []
    for (let i = 0; i < copyArrays.length; i++) {
      if (testArray.indexOf(newPredicate(copyArrays[i])) > -1) {
        return flatArrays[testArray.indexOf(newPredicate(copyArrays[i]))]
      } else {
        testArray.push(newPredicate(copyArrays[i]))
      }
    }
  },

  intersectionWith: function (arrays, others, comparator) {
    let testArray = []
    for (let arraysItem of arrays) {
      for (let othersItem of object) {
        if (comparator(arraysItem, othersItem)) {
          testArray, push(arraysItem)
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
        testArray.push(array[newValues.indexOf(item)])
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
      return testArray
    }
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

    let arr = []
    for (let i = array.length - 1; i >= 0; i--) {
      if (newPredicate(array[i]), index, array)
        arr.unshift(array[i])
      else
        return arr
    }
  },

  takeWhile: function (array, predicate = _.identity) {
    let arr = []
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i]), index, array)
        arr.unshift(array[i])
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

  unionWith: function (arrays, comparator) {
    let arr0 = arrays[0]
    let arr1 = arrays[1]
    arr1.forEach((item) => {
      for (let ite of arr0) {
        if (comparator(item, ite)) {
          arr0.push(item)
        }
      }
      return arr0
    })
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

  get: function (object, path, defaultValue) {
    var names = path.split('.')

    for (var name of names) {
      if (name in Object(object)) {
        object = object[name]
      } else {
        return defaultValue
      }
    }
    return object

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
    }
    if (typeof collection === 'object') {
      for (let key in object) {
        if (newPredicate(collection[key])) {
          return false
        }
      }
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
        return _.matchesProperty(predicate)
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
      accumulator = iteratee(accumulator, value, key)
    }
    return accumulator
  },

  reduceRight: function (collection, iteratee = _.identity, accumulator) {
    for (let i = collection.length - 1; i >= 0; i--) {
      if (accumulator == undefined) {
        accumulator = collection[i]
      }
      accumulator = iteratee(accumulator, value, key)
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
    while (i <= n) {
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
        i--
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
      return Object.keys(obj).length
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
        return _.matchesProperty(predicate)
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
    if (Number.isNaN(val) && Number.isNaN(other)) {
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
    if (Object.prototype.toString.call(value) === Object.prototype.toString.call(other)) {
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
    if (Object.prototype.toString.call(value) === "[object Number]") {
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
    if (typeof value === "number" && Math.floor(value) === value) {
      return true
    } else {
      return false
    }
  },

  isLength: function (value) {
    let val = value
    if (val.lenght) {
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
      if (object[key] == source[key]) {
        return true
      }
    }
    return false
  }

}
