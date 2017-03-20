var tester = [9,11,1]



function testFunction(arr) {
	var bigArray = []
	for(k=0;k<12;k++){
		var scaleEditKth=kthFromC(k)
		for(j=0;j<scaleEditKth.length;j++){
			var check=scaleEditKth[j]
			var bool=true

			for(i=0;i<arr.length;i++){
				if((check.indexOf(arr[i])==-1)||(check.indexOf(arr[i])==7)){
					bool = false
					break
				}
			}
			if(bool==true){
				wins=scaleEditKth[j]
				l = wins.length-1
				bigArray.push([wins[0],wins[l]])
				// console.log(j)
				// console.log(wins=scaleEditKth[j])
			}
		}
	}
	return bigArray				    
}


function kthFromC(k){
	scaleEditNew = []
	var n = scaleEdit.length
	for(i=0;i<n;i++){
		var originalKey=scaleEdit[i]
		var m = originalKey.length
		var newKey=[]
		for(j=0;j<(m-1);j++){
			newKey[j]=(originalKey[j]+k)%12
		}
		newKey[m-1]=originalKey[m-1]

		scaleEditNew[i]=newKey

	}

	return scaleEditNew


}


function interpret(arr){


	get = testFunction(arr)


	for(i=0;i<get.length;i++){

		var first = get[i][0]

		var second = get[i][1]

		var rootNote = notes[first]

		var chordType = listOfScaleTypes[second]

		console.log(rootNote,chordType)


	}


}


function scaleReader(arr){


	var readableScales = []

	bigArray = testFunction(arr)

	for(i=0;i<bigArray.length;i++){

		var ithScale = bigArray[i]

		console.log(ithScale)

		var inter = []

		var scaleType = ithScale[1]

		var rootNote = ithScale[0]

		var numScaleOnce=scaleEdit[scaleType]

		inter[0] = listOfScaleTypes[scaleType]

		m = scaleEdit[scaleType].length

		for(j=1;j<m;j++){

			inter[j]=notesForLookup[rootNote+numScaleOnce[j-1]]


		}

		readableScales.push(inter)


	}

	console.log(readableScales)

	return readableScales

}