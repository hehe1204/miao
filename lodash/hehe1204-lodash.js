var hehe1204 = {
	chunk:function(array,size = 1){
			var result =[]
			for(var i = 0;i < array.length;i += size){
				result.push(array.slice(i,size + i))

			}
			return result
		}
     ,
     compoct:function(ary){
     	var result = []
     	for(var i = 0;i < ary.length;i++){
     		if(ary[i]){
     			result.push(ary[i])
     		}
     	
        }
        return result
    }
    ,
    drop:function(ary,n = 1){
        var result = []
        for(var i = n;i < ary.length;i++){
            result.push(ary[i])
        }

        return result
    }
    ,
    dropRight:function(ary,n = 1){
        var result = []
        for(var i = ary.length - (n + 1);i >= 0;i--){
        result.unshift(ary[i])
        }

        return result
    }
    ,

    fill:function(ary,n,...value){
        var result = []
        var result1 = []
        var x 
        result.push(...value)
        for(var i = 0;i < result.length;i++){
       
            ary[result[i]] = result[i]
            x = result[i]
            result1.push(result[i])
            result1.fill(n)
            ary[x] = result1[i]
        }
    return ary
    }
    ,
    flatten:function(ary){
        var result = []
        result.concat(...ary)
        return result.concat(...ary)
    },

    head:function(ary){
    	 if(ary.length){
    	 	return ary[0]
    	 }
    },

    join:function(ary,n){
        var result1 = ""
        for(var i = 0;i < ary.length - 1;i++){
            result1 = result1 + ary[i] + n
           }
        result1 = result1 + ary[ary.length - 1]
        return result1
    },



}   
