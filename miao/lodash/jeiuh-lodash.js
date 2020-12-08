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
    }

}
