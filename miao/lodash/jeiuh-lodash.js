var jeiuh = {
    
    drop: function(ary,n=1) {
        if (ary) {
            return ary.splice(n)
        }
    },

    dropright: function(ary,n=1) {
        var ary1 = new Array()
        for (let i = 1; i <= ary.length-n; i++) {
            ary1.push(i)
        }
        return ary1
    },
    
   chunk: function(ary, size) {
        var ary1 = [];
        for (var i = 0; i < ary.length; i = i + size) {
            ary1.push(ary.slice(i, i + size));
        }
        return ary1;
    },
    
    compact: function(ary) {
        var ary1 = []
        for (let i = 0; i < ary.length; i++) {
            if(ary[i]) {
            ary1.push(ary[i])
            }
        }
        return ary1
    },
    
    difference: function(ary, ary1) {
        var ary2 = []
        for (let i = 0; i < ary.length; i++) {
            for (let j = 0; j < ary1.length; j++) {
                if (ary[i] == ary1[j]) {
                    ary.splice(i,1)
                    }
            }

        }
        return ary
    },
    
    differenceBy: function(ary, ary1, iteratee) {
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
    
    differenceWith: function(ary,ary1,comparator) {
        var ary2 = []
        for (let i = 0; i < ary.length; i++) {
            for (let j = 0; j < ary1.length; j++) {
                if(!comparator(ary[i],ary1[j])) {
                    ary2.push(ary[i])
                }
            }
      
        }
        return ary2
  },
      
  dropRightWhile: function(ary, predicate) {
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
    
  dropWhile: function(ary, predicate) {
    for (let i = 0; i < ary.length; i++) {
        if (!predicate(ary[i])) {
        ary1 = ary.slice(i)
        break
        }

    }
    return ary1
  },
    
    fill: function(ary, val, sta, end) {
        var ary1 = []
        for (let i = 0; i < ary.length; i++) {
            if (i >= sta && i < end) {
                ary[i] = val
            }

        }
        return ary
    }

}
