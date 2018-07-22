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
     	return result
        }
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


    
}    
