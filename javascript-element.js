var obj = {
	// 去除字符串中的任意空格 区别于jQuery.trim()
  trimLing:function(_obj){
    return _obj.replace(/\s/g,"")
  },
  //返回数组中的最大值(数值和字符串)
  maxLing:function(arr){
    return Math.max.apply(null,arr);
  },
  //返回数组中的最小值(数值和字符串)
  minLing:function(arr){
  	return Math.min.apply(null,arr)
  },
  //数组去重
  unique:function(arr){
   var n = []; //一个新的临时数组
		for(var i = 0; i < arr.length; i++) //遍历当前数组
		{
			//如果当前数组的第i已经保存进了临时数组，那么跳过，
			//否则把当前项push到临时数组里面
			if (n.indexOf(arr[i]) == -1) {
				n.push(arr[i])
			};
		}
		return n;
  }
}