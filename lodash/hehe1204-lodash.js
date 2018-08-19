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
    initial:function(ary){
    	ary.pop()
    	return ary
    }
    ,
    intersection:function(ary,arr){
        var res = []
        ary.forEach(item => {
            if(arr.includes(item)){
            res.push(item)
            }
        })
        return res
    }
    ,
    fromPairs:function(arr){
        var obj = new Object()
        var fromPairsArray = function(item){
            var name = item[0]
            var value = item[1]
            obj[name] = value
        }
        for(var a = 0;a < arr.length;a++){
            fromPairsArray(arr[a])
        }
        return obj
     }
     ,
    flattenDeep:function(arr){
        var res = []
        var flattenDeepNumber = function(temp){
            temp.forEach(item => {
                if(!Array.isArray(item)){
                    res.push(item)
                }else{
                    flattenDeepNumber(item)
                }
            })
        }
        for(var i = 0;i < arr.length;i++){
            if(Array.isArray(arr[i])){
                flattenDeepNumber(arr[i])
            }else{
                res.push(arr[i])
            }
        }
        return res
    }
    ,
    xxxxflattenDepth:function(arr,target){
        var res = []
        var flattenDeepNumber = function(temp){
            temp.forEach(item => {
                if(!Array.isArray(item)){
                    res.push(item)
                }else{
                    flattenDeepNumber(item)
                }
            })
        }
        do{
            for(var i = 0;i < arr.length;i++){
                if(Array.isArray(arr[i])){
                	if(target > 0){
                        flattenDeepNumber(arr[i])
                        target--
                	}
                }else{
                    res.push(arr[i])
                }
            }
        }while(target == 0)
        return res
    }
    ,
    uniq:function(arr){
        var res = []
        arr.forEach(item => {
            if(!res.includes(item)){
            res.push(item)
            }
        })
        return res
    }
    ,
    tail:function(arr){
    	arr.shift()
    	return arr
    }
    ,
    take:function(arr,target = 1){
        var res = []
        var x = arr.length > target ? target : arr.length
        for(var i = 0;i < x;i++){
            res.push(arr[i])
        }
        return res
    }
    ,
    identity:function(x){
    return x
    }
    ,
    concat:function(...val){
        var res = []
        var result = []
        for(var i = 0;i < val.length;i++){
               var nus = res.concat(val[i])
               result.push(nus[0])
        }
        return result
    }
    ,
    pullAt:function(arr,nums){
        var res = []
        for(var i = 0;i < nums.length;i++){
            var array = nums[i]
            res.push(arr[array])
        }
        return res
    }
    ,
    sum:function(arr){
        var add = 0
        arr.forEach(item => {
        add += item
        })
    return add
    }
    ,
    min:function(val){
    	if(val === []){
    		return underfined
    	}
    	var m = Math.min(...val)
    	return m
    }
    ,
    multiply:function(multiplier, multiplicand){
       return multiplier * multiplier, multiplicandmultiplicand
    }
    ,
    subtract:function(minuend,subtrahend){
    	return minuend - subtrahend
    }
    ,
    without:function(arr,...value){
        var res = []
        arr.forEach(item => {
            if(!value.includes(item)){
               res.push(item) 
            }
        })
        return res
    }
    ,
    unzip:function(...val){
        var res = []
        var result = []
        var str = []
        var arr = function(ary){
            ary.forEach(item => {
                if(typeof(item) === "number"){
                    res.push(item)
                }
                if(typeof(item) === "boolean"){
                    result.push(item)
                }
                if(typeof(item) === "string"){
                    str.push(item)
                }
            })
        }
        for(var i = 0;i < val.length;i++){
            arr(val[i])
        }
        var array = []
        array.push(str,res,result)
        return array
    }
    ,
    
}   
