module.exports = {
	
	findMinMax: function(array_num){
		var array_result = [];
		array_num.sort(function(a,b){return a - b;});
		var min_num = array_num[0];
		var max_num = array_num[array_num.length - 1];
		array_result.push(min_num);
		if (min_num != max_num ){			
		array_result.push(max_num);
		}
		return array_result;
	},
	
}