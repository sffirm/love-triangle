/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var counts = 0;
	var exp = [];
	  for (var i = 0; i < preferences.length; i++) {

	  	if (exp.indexOf( i+1 ) == -1) {
	  		var index = i + 1,
				temp1 = index,
				temp2 = preferences[i],
				temp3 = preferences[temp2 - 1],
				temp4 = preferences[temp3 - 1];
			if(temp4 == temp1 && temp1 != temp2 && temp2 != temp3 && temp3 != temp4){
				counts++;
				exp.push(temp2, temp3);
			}
	  	}
	 }
	return counts;
};
