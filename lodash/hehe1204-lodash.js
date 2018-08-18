var hehe1204 = {
	chunk:function(array,size = 1){
	    var result =[]
		for(var i = 0;i < array.length;i += size){
			result.push(array.slice(i,size + i))

		}
		return result
	}
    ,
    compact:function(ary){
        var result = []
        ary.forEach(item => {
            if(item){
                result.push(item)
            }
        })
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
    fill:function(...arg){
        var ary = arg[0]
        if(arg.length === 2){
            ary.fill(arg[1])
        }
        if(arg.length >= 3){
            for(var i = 2;i < arg.length;i++){
                ary.fill(arg[1],arg[i],arg[i] + 1)
            }
        }
       return ary
    }
    ,

    flatten:function(ary){
        var result = []
        result.concat(...ary)
        return result.concat(...ary)
    }
    ,

    head:function(ary){
    	 if(ary.length){
    	 	return ary[0]
    	 }
    }
    ,

    join:function(ary,n){
        var result1 = ""
        for(var i = 0;i < ary.length - 1;i++){
            result1 = result1 + ary[i] + n
           }
        result1 = result1 + ary[ary.length - 1]
        return result1
    }
    ,
    last:function(ary){
    	if(ary.length){
    		return ary[ary.length - 1]
    	}
    }

    ,
    pull:function(...arg){
        var ary = arg[0]
        for(var i = 0;i < ary.length;i++){
            for(var a = 1;a < arg.length;a++){
                if(ary[i] === arg[a]){
                    ary.splice(i,1)
                    i = (-1)
                }
            }
        }
        return ary
    }
    ,

    difference:function(ary,...value){
        var result = [].concat(...value)
        for(var i = 0;i < ary.length;i++){
            for(var a = 0;a < result.length;a++){
                if(ary[i] === result[a]){
                    ary.splice(i,1)
                    i = (-1)
                }
            }
        }
        return ary
    }   
    ,

    union:function(...arr){
        var res = []
        var unionArray = function(array){
            array.forEach(item => {
                if(res.includes(item)){
                   res
                }else{
                    res.push(item)
                }
            })
        
        }
        for(var i = 0;i < arr.length;i++){
            unionArray(arr[i])
        }
        return res

    }
    ,
    takeRight:function(arr,target = 1){
        var res = []
        if(arr.length < target){
            res = arr
            return res
        }
        for(var i = arr.length - 1;i >= arr.length - target;i--){
            res.unshift(arr[i])
        }
        return res
    }
    ,
    reverse:function(arr){
        var res = []
        arr.forEach(item => {
           res.unshift(item)
        })
        return res
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
    
}   
