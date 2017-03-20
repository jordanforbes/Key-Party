
var animation = "jello"
majorSpacing = [0,4,7,12,16,19]
minorSpacing = [0,3,7,12,15,19]
majorSpacing = [0,4,7,12,16,19]
majorScale = [0,2,4,5,7,9,11,12]
minorScale = [0,2,3,5,7,8,10,12]
var majorMinor
var lowerCaseMaMi
var maMiThird
var scaleString
var spacingArray = []
var noteScale = []
var currentScale =[]
var currentScaleOct =[]
var newArr =[]
// var notes= ["c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a", "as", "b"]
var notesForLookup = ["C", "CD", "D", "DE", "E", "F", "FG", "G", "GA", "A", "AB", "B"]
// var scale= [[0,2,4,5,7,9,11,"Ionian"],[0,2,3,5,7,9,10,"Dorian"],[0,1,3,5,7,8,10,"Phrygian"],[0,2,4,6,7,9,11,"Lydian"],[0,2,4,5,7,9,10,"Mixolydian"],[0,2,3,5,7,9,10,"Aeolian"],[0,1,3,5,6,8,10,"Locrian"],[0,1,3,4,6,8,9,11,"Diminished"]]
var scaleEdit=[[0,2,4,5,7,9,11,0],[0,2,3,5,7,9,10,1],[0,1,3,5,7,8,10,2],[0,2,4,6,7,9,11,3],[0,2,4,5,7,9,10,4],[0,2,3,5,7,8,10,5],[0,1,3,5,6,8,10,6],[0,1,3,4,6,8,9,11,7],[0,2,4,7,9,8],[0,3,5,7,10,9],[0,3,4,5,7,10,10]]
var listOfScaleTypes = ["Ionian(Maj)","Dorian","Phrygian","Lydian","Mixolydian","Aeolian(Min)","Locrian","Dim","Maj Pent","Min Pent","Blues"]
var noteFreq=[]
var arrayOfNotes=[]
var time = .15


// defines frequencies of each note


  noteFreq[0] = 130.812782650299317;
  noteFreq[1] = 138.591315488436048;
  noteFreq[2] = 146.832383958703780;
  noteFreq[3] = 155.563491861040455;
  noteFreq[4] = 164.813778456434964;
  noteFreq[5] = 174.614115716501942;
  noteFreq[6] = 184.997211355817199;
  noteFreq[7] = 195.997717990874647;
  noteFreq[8] = 207.652348789972569;
  noteFreq[9] = 220.000000000000000;
  noteFreq[10] = 233.081880759044958;
  noteFreq[11] = 246.941650628062055;

  noteFreq[12] = 261.625565300598634;
  noteFreq[13] = 277.182630976872096;
  noteFreq[14] = 293.664767917407560;
  noteFreq[15] = 311.126983722080910;
  noteFreq[16] = 329.627556912869929;
  noteFreq[17] = 349.228231433003884;
  noteFreq[18] = 369.994422711634398;
  noteFreq[19] = 391.995435981749294;
  noteFreq[20] = 415.304697579945138;
  noteFreq[21] = 440.000000000000000;
  noteFreq[22] = 466.163761518089916;
  noteFreq[23] = 493.883301256124111;



	// this here will be taken out


		// arrayOfNotes = ["c","d","e"]


		// scaleArray0 = ["c", "d", "e", "f", "g", "a", "b", "ionian"]
 	// 	scaleArray1 = ["a", "b", "c", "d", "e", "f", "g", "aeolian"]
 	// 	scaleArray2 = ["e", "f", "g", "a", "b", "c", "d", "phrygian"]

 	// 	arrayOfScaleArrays = [scaleArray0,scaleArray1,scaleArray2]

 

 	// the above is  just an example

function reset(){
	$(".keyboardContainer").addClass(animation);
	currentScale =[]
	currentScaleOct =[]
	setTimeout(function() {
	        $(".blackKey").css("background-color","#424242")
			$(".whiteKey").css("background-color","white")
			$(".blackKeySpace").css("background-color","white")
	}, .2*1000)
	setTimeout(function() {
	        $(".keyboardContainer").removeClass(animation);
	}, 2*1000)
	$(".notesGoHere").remove();
	$( ".scaleClass" ).remove();
	$('.scaleListTitle').hide()
}
function displayVals() {
  	var rootNote = $( "#rootnoteselect" ).val();
	var chordType= $("#chordtypeselect").val();
 	func= chordType + "(rootNote)"
  	eval(func)
}
function hider() {			 
				     $('.noteW').css('display', 'none')
				     $('.noteB').css('display', 'none')
}


// converts a scale array to numbers in progression assuming the last value corresponds with scaleEdit

// function scaleConverter(arr){


// 		var arrEdit


// 		if(typeof arr[7]=="string"){

// 			arrEdit = listOfScaleTypes.indexOf(arr[7])

// 		}else{


// 			arrEdit = arr[7]

// 		}

// 		var numScaleArr = []

// 		var root = notes.indexOf(arr[0])

// 		numScaleArr[0] = root

// 		var scaleType = arrEdit

// 		var scaleProArr = scale[scaleType]

// 		for(i=1;i<7;i++){

// 				numScaleArr[i]=root+scaleProArr[i]
		
// 		}

// 		return numScaleArr
// }







$(document).ready(function() {




	// white key notes appear on hover

        
    $('.lowC').hover(function(){
				$('.lowCDisp').show();
			},function(){
				$('.lowCDisp').hide();
				});
    $('.lowD').hover(function(){
				$('.lowDDisp').show();
			},function(){
				$('.lowDDisp').hide();
				});
    $('.lowE').hover(function(){
				$('.lowEDisp').show();
			},function(){
				$('.lowEDisp').hide();
				});
    $('.lowF').hover(function(){
				$('.lowFDisp').show();
			},function(){
				$('.lowFDisp').hide();
				});
    $('.lowG').hover(function(){
				$('.lowGDisp').show();
			},function(){
				$('.lowGDisp').hide();
				});
    $('.lowA').hover(function(){
				$('.lowADisp').show();
			},function(){
				$('.lowADisp').hide();
				});
    $('.lowB').hover(function(){
				$('.lowBDisp').show();
			},function(){
				$('.lowBDisp').hide();
				});
    $('.midC').hover(function(){
				$('.midCDisp').show();
			},function(){
				$('.midCDisp').hide();
				});
    $('.highD').hover(function(){
				$('.highDDisp').show();
			},function(){
				$('.highDDisp').hide();
				});
    $('.highE').hover(function(){
				$('.highEDisp').show();
			},function(){
				$('.highEDisp').hide();
				});
    $('.highF').hover(function(){
				$('.highFDisp').show();
			},function(){
				$('.highFDisp').hide();
				});
    $('.highG').hover(function(){
				$('.highGDisp').show();
			},function(){
				$('.highGDisp').hide();
				});
    $('.highA').hover(function(){
				$('.highADisp').show();
			},function(){
				$('.highADisp').hide();
				});
    $('.highB').hover(function(){
				$('.highBDisp').show();
			},function(){
				$('.highBDisp').hide();
				});

    // black key notes appear on hover

    $('.lowCSharp').hover(function(){
				$('.lowCSharpDisp').show();
			},function(){
				$('.lowCSharpDisp').hide();
				});
    $('.lowDSharp').hover(function(){
				$('.lowDSharpDisp').show();
			},function(){
				$('.lowDSharpDisp').hide();
				});
    $('.lowFSharp').hover(function(){
				$('.lowFSharpDisp').show();
			},function(){
				$('.lowFSharpDisp').hide();
				});
    $('.lowGSharp').hover(function(){
				$('.lowGSharpDisp').show();
			},function(){
				$('.lowGSharpDisp').hide();
				});
    $('.lowASharp').hover(function(){
				$('.lowASharpDisp').show();
			},function(){
				$('.lowASharpDisp').hide();
				});
    $('.midCSharp').hover(function(){
				$('.midCSharpDisp').show();
			},function(){
				$('.midCSharpDisp').hide();
				});
    $('.highDSharp').hover(function(){
				$('.highDSharpDisp').show();
			},function(){
				$('.highDSharpDisp').hide();
				});
    $('.highFSharp').hover(function(){
				$('.highFSharpDisp').show();
			},function(){
				$('.highFSharpDisp').hide();
				});
    $('.highGSharp').hover(function(){
				$('.highGSharpDisp').show();
			},function(){
				$('.highGSharpDisp').hide();
				});
    $('.highASharp').hover(function(){
				$('.highASharpDisp').show();
			},function(){
				$('.highASharpDisp').hide();
				});

    // dropdown

    $(".dropdown-toggle").dropdown("toggle");

    // selecting major or minor

    $('.majMinDrop').click(function(){

																					// debugger
 			
			majorMinor = $(this).text();
			if(majorMinor=="Major"){
				spacingArray = majorSpacing
				maMiThird = "major"
			}else{
				spacingArray = minorSpacing
				maMiThird = "flat"
			}
			$(".maMi").html(majorMinor);
			$(".thirdClass").html(maMiThird);
			lowerCaseMaMi = majorMinor.toLowerCase();
			$(".maMiClass").html(lowerCaseMaMi);

																					// debugger
	
	});

	// plays a note

		// create web audio api context

		var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

		var modulationGain = audioCtx.createGain();
  		// modulationGain.gain.value = 50;

  		modulationGain.value = undefined;

  		// var gainDefault = modulationGain.gain.defaultValue;

  	function playANote(note){



    			var oscillator = audioCtx.createOscillator();

    			// modulationGain.gain.value = currVolume;

				oscillator.type = 'triangle';

				oscillator.frequency.value = noteFreq[note]; // value in hertz
				oscillator.connect(audioCtx.destination);
				oscillator.start();

				setTimeout(function() {


		 			oscillator.stop();


		   	    }, (time/2)*1000)



  	}


	//  on click - plays a note and changes the color of the key


	$('.keyboardContainer').hover(function(){

			var note

			$('div').on('click', function(){

    			note = $(this).attr("id");

    			playANote(note);

    			$(".abs"+note).css("background-color","#ff4081");

			});

	})


	




	// plays a scale

	function scalePlayer(arr){


		// console.log(arr)

		var defColor = "#ea80fc"

		varArrParam = []

		// console.log(arr.length)

		var m = arr.length-1

		for(i=0;i<m;i++){

			varArrParam[i]=arr[i]


		}

		// console.log(varArrParam)


		var color=[]

		setTimeout(function() {

			color[0] = $(".abs"+varArrParam[0]).css("background-color");
			playANote(varArrParam[0])
			$(".abs"+varArrParam[0]).css("background-color",defColor);

	 		
	    }, time*1000)

	    setTimeout(function() {

	    	$(".abs"+varArrParam[0]).css("background-color",color[0]);
	    	color[1] = $(".abs"+varArrParam[1]).css("background-color");
			playANote(varArrParam[1])
			$(".abs"+varArrParam[1]).css("background-color",defColor);
	 		
	    }, 2*time*1000)

	    setTimeout(function() {

			$(".abs"+varArrParam[1]).css("background-color",color[1]);
			color[2] = $(".abs"+varArrParam[2]).css("background-color");
			playANote(varArrParam[2])
			$(".abs"+varArrParam[2]).css("background-color",defColor);
	 		
	    }, 3*time*1000)

	     setTimeout(function() {

			$(".abs"+varArrParam[2]).css("background-color",color[2]);
			color[3] = $(".abs"+varArrParam[3]).css("background-color");
			playANote(varArrParam[3])
			$(".abs"+varArrParam[3]).css("background-color",defColor);
	 		
	    }, 4*time*1000)

	      setTimeout(function() {

			$(".abs"+varArrParam[3]).css("background-color",color[3]);
			color[4] = $(".abs"+varArrParam[4]).css("background-color");
			playANote(varArrParam[4])
			$(".abs"+varArrParam[4]).css("background-color",defColor);
	 		
	    }, 5*time*1000)

	      setTimeout(function() {

			$(".abs"+varArrParam[4]).css("background-color",color[4]);
			color[5] = $(".abs"+varArrParam[5]).css("background-color");
			playANote(varArrParam[5])
			$(".abs"+varArrParam[5]).css("background-color",defColor);
	 		
	    }, 6*time*1000)

	      setTimeout(function() {

			$(".abs"+varArrParam[5]).css("background-color",color[5]);
			color[6] = $(".abs"+varArrParam[6]).css("background-color");
			playANote(varArrParam[6])
			$(".abs"+varArrParam[6]).css("background-color",defColor);
	 		
	 		
	    }, 7*time*1000)

	      setTimeout(function() {

			$(".abs"+varArrParam[6]).css("background-color",color[6]);
			color[7] = $(".abs"+(varArrParam[0]+12)).css("background-color");
			playANote(varArrParam[0]+12)
			$(".abs"+(varArrParam[0]+12)).css("background-color",defColor);
	 		
	    }, 8*time*1000)

	      setTimeout(function() {

			$(".abs"+(varArrParam[0]+12)).css("background-color",color[7]);
	 		
	    }, 9*time*1000)



	}


 	// moves and shrinks the keyboard on chord selection

 	$('.findKeys').click(function(){

 		
 		
 	


 		$(".keyboardContainer").removeClass(animation);
 		$("#content").removeClass("fadeOut");

 																					// debugger

 		setTimeout(function() {
	 		$(".keyboardContainer").animate({
	            "margin-left": "58%",
	            "margin-top": "6%",
	            height: "25%",
	            width: "38%",
	            "font-size": "52%",
	        }, 600);
	        $(".keyboardContainer").addClass(animation);
	        $("#content").show();
	        $("#content").addClass("fadeIn")
	    }, 2*1000)
	});


 	// scale div event handler
 	

 	function generate_handler(i) {
				    return function(event) {       
				        anothArr = arrayOfScaleArrays[i];
				        var m=anothArr.length

				        for(j=0;j<m;j++){

					        $('.displayAbs'+((anothArr[j]).toString())).show();

		      			}
				    };
	}

	function generate_handler_play(i) {
				    return function(event) {       
				       scalePlayer(arrayOfScaleArrays[i])
				    };
	}


// scaleProducer takes an array of a set of numbers (notes by their position above C),
//and returns an array for which each entry is an array (the root note and the type of scale) in integer form
 


function scaleProducer(arr) {
	var bigArray = []
	for(k=0;k<12;k++){
		var scaleEditKth=kthFromC(k)
		for(j=0;j<scaleEditKth.length;j++){
			var check=scaleEditKth[j]
			var bool=true
			m=check.length-1

			for(i=0;i<arr.length;i++){
				if((check.indexOf(arr[i])==-1)||(check.indexOf(arr[i])==m)){
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

// kthFromC is used by scaleProducer 

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

function scaleCompleter(arr){


	var readableScales = []

	bigArray = scaleProducer(arr)

	for(i=0;i<bigArray.length;i++){

		var ithScale = bigArray[i]

		// console.log(ithScale)

		var inter = []

		var scaleType = ithScale[1]

		var rootNote = ithScale[0]

		var numScaleOnce=scaleEdit[scaleType]

		

		m = scaleEdit[scaleType].length

		inter[m-1] = listOfScaleTypes[scaleType]

		for(j=0;j<(m-1);j++){

			inter[j]=rootNote+numScaleOnce[j]


		}

		readableScales.push(inter)


	}

	// console.log(readableScales)

	arrayOfNotes=readableScales[0]

	return readableScales

}

//  on click of note - plays a note and stores the number of the note in currentScaleOct

	$('.key').on('click', function(){

		$('.scaleListTitle').show()

		$( ".scaleClass" ).remove();
		arrayOfScaleArrays=[]

    	note = $(this).attr("id");
    	if(currentScale.indexOf(note)==-1){
	    	currentScale.push(note)
	    	if(currentScaleOct.indexOf(note%12)==-1){
	    		currentScaleOct.push(note%12)
		    	var here = notesForLookup[note%12]
		    	if(currentScale.length>1){
		    		$('.notesSelected').append(
							    	"<span class='notesGoHere'>,  </span>"
					);
		    	}
		    	if(here.length==2){
		    		$('.notesSelected').append(
							    	"<span class='notesGoHere'>"+here[0]+"&#9839;"+"/"+here[1]+"&#9837;"+"</span>"
					);
		    	}else{
		    		$('.notesSelected').append(
							    	"<span class='notesGoHere'>"+here[0]+"</span>"
					);
		    	}
		    }
    	}
    	// console.log(currentScale)
    	// console.log(currentScaleOct)

    	// arrayOfScaleArraysLetters = scaleReader(currentScaleOct)

    	arrayOfScaleArrays = scaleCompleter(currentScaleOct)

    	for(i=0;i<arrayOfScaleArrays.length;i++){


 				var scaleArray = arrayOfScaleArrays[i]

 				var tempArray =[]

 				m=scaleArray.length

 				tempArray[0]=scaleArray[m-1]

 			

 				for(j=0;j<(m-1);j++){

 						var index = scaleArray[(j)]%12

 						var dunno = notesForLookup[index]

 						if(dunno.length==2){

 							tempArray[j]= "&nbsp;"+dunno[0]+"&#9839;"+"/"+dunno[1]+"&#9837;"

 						}else{


 							tempArray[j]="&nbsp;"+dunno[0]

 						}

 				}


 				var typeAgain = (tempArray[0]).toString()+"&nbsp;"+(scaleArray[m-1]).toString()+":"

 				var scaleString=tempArray.toString()

 				

 				$('.scaleList').append(
				
 						"<div class='scaleClass' id='scaleDiv"+i+"'><div class='keyAndType'>"+typeAgain+"</div><div class='justAString'>"+scaleString+"</div></div>"

					    // "<div class='scaleClass' id='scaleDiv"+i+"'>"+scaleString+"</div>"

				);			

				// $('#scaleDiv'+ i).hover( generate_handler( i ) );

				$('#scaleDiv'+ i).hover(
	    			generate_handler( i ) 
				, function() {
				    hider();
				});

				$('#scaleDiv'+ i).click(
	    			generate_handler_play( i ) 
				);

		}


	});

	// shows scales on click of findKeys - each scale comes as clickable to play scales of tones

	//div creator

 	// $('.findKeys').click(function(){


 	// 	$( ".scaleClass" ).remove();

 	// 	// here uses the scaleFinder function
 		

 	// 	// this part highlights the notes on submission

 	// 	for(let i=0;i<arrayOfNotes.length;i++){


 	// 			setTimeout(function() {

		// 			clsnm= "."+arrayOfNotes[i]+"note"
		// 			if(i>0){
		// 				$(clsnm).css("background-color","#ff4081");
		// 				$(clsnm).css("display","show")
		// 			}else{
		// 				$(clsnm).css("background-color","#ff4081")
		// 				$(clsnm).css("display","show")
		// 			}

		// 		}, i*500)

 	// 	}

 	// 	for(i=0;i<arrayOfScaleArrays.length;i++){


 	// 			var scaleArray = arrayOfScaleArrays[i]

 	// 			var tempArray =[]


 	// 			for(j=0;j<scaleArray.length;j++){

 	// 					tempArray[j]=scaleArray[(j+7)%8]

 	// 			}

 	// 			var scaleString=tempArray.toString()

 				

 	// 			$('#content2').append(
				
		// 			    "<div class='scaleClass' id='scaleDiv"+i+"'>"+scaleString+"</div>"

		// 		);

		// 		// $('#scaleDiv'+ i).hover( generate_handler( i ) );

		// 		$('#scaleDiv'+ i).hover(
	 //    			generate_handler( i ) 
		// 		, function() {
		// 		    hider();
		// 		});

		// 		$('#scaleDiv'+ i).click(
	 //    			generate_handler_play( i ) 
		// 		);

		// }

																					

 	// })




 	// moves keyboard back


 	$('.back').click(function(){
 		$(".keyboardContainer").removeClass(animation);
 		$("#content").removeClass("fadeIn");

 																						// debugger

 		majorMinor = "";
 		$(".maMi").html(majorMinor);
 		$(".keyboardContainer").animate({
            "margin-left": "10%",
            "margin-right": "10%",
			"margin-top": "10%",
			width: "80%",
			height: "40%",
			"font-size": "100%",
        } , 600);
        reset();
 		$(".keyboardContainer").addClass(animation);
 		$("#content").hide();
 		$("#content").addClass("fadeOut");
	}); 



 	$('.hereyago').click(function(){

 		var defColor = "#ea80fc"

 		var color=[]

 		varArrParam = [4,4,4,4,4,8,6,4,8,8,8,8,8,11,9,8,9,9,9,9,9,12,11,9,8,8,5,5,4]

 		setTimeout(function() {

			color[0] = $(".abs"+varArrParam[0]).css("background-color");
			playANote(varArrParam[0])
			$(".abs"+varArrParam[0]).css("background-color",defColor);

	 		
	    }, time*1000)

	    setTimeout(function() {

	    	$(".abs"+varArrParam[0]).css("background-color",color[0]);
	    	color[1] = $(".abs"+varArrParam[1]).css("background-color");
			playANote(varArrParam[1])
			$(".abs"+varArrParam[1]).css("background-color",defColor);
	 		
	    }, 2*time*1000)

	    setTimeout(function() {

	    	$(".abs"+varArrParam[1]).css("background-color",color[1]);
	    	color[2] = $(".abs"+varArrParam[2]).css("background-color");
			playANote(varArrParam[2])
			$(".abs"+varArrParam[2]).css("background-color",defColor);
	 		
	    }, 3*time*1000)

	    setTimeout(function() {

	    	$(".abs"+varArrParam[2]).css("background-color",color[2]);
	    	color[3] = $(".abs"+varArrParam[3]).css("background-color");
			playANote(varArrParam[3])
			$(".abs"+varArrParam[3]).css("background-color",defColor);
	 		
	    }, 4*time*1000)

	    setTimeout(function() {

	    	$(".abs"+varArrParam[3]).css("background-color",color[3]);
	    	color[4] = $(".abs"+varArrParam[4]).css("background-color");
			playANote(varArrParam[4])
			$(".abs"+varArrParam[4]).css("background-color",defColor);
	 		
	    }, 5*time*1000)

	    setTimeout(function() {

	    	$(".abs"+varArrParam[4]).css("background-color",color[4]);
	    	color[5] = $(".abs"+varArrParam[5]).css("background-color");
			playANote(varArrParam[5])
			$(".abs"+varArrParam[5]).css("background-color",defColor);
	 		
	    }, 6*time*1000)

	    setTimeout(function() {

	    	$(".abs"+varArrParam[5]).css("background-color",color[5]);
	    	color[6] = $(".abs"+varArrParam[6]).css("background-color");
			playANote(varArrParam[6])
			$(".abs"+varArrParam[6]).css("background-color",defColor);
	 		
	    }, 7*time*1000)

	    setTimeout(function() {

	    	$(".abs"+varArrParam[6]).css("background-color",color[6]);
	    	color[7] = $(".abs"+varArrParam[7]).css("background-color");
			playANote(varArrParam[7])
			$(".abs"+varArrParam[7]).css("background-color",defColor);
	 		
	    }, 8*time*1000)

	    setTimeout(function() {

	    	$(".abs"+varArrParam[7]).css("background-color",color[7]);
	    	color[8] = $(".abs"+varArrParam[8]).css("background-color");
			playANote(varArrParam[8])
			$(".abs"+varArrParam[8]).css("background-color",defColor);
	 		
	    }, 9*time*1000)

	     setTimeout(function() {

	    	$(".abs"+varArrParam[8]).css("background-color",color[8]);
	    	color[9] = $(".abs"+varArrParam[9]).css("background-color");
			playANote(varArrParam[9])
			$(".abs"+varArrParam[9]).css("background-color",defColor);
	 		
	    }, 10*time*1000)

	    setTimeout(function() {

	    	$(".abs"+varArrParam[9]).css("background-color",color[9]);
	    	color[10] = $(".abs"+varArrParam[10]).css("background-color");
			playANote(varArrParam[10])
			$(".abs"+varArrParam[10]).css("background-color",defColor);
	 		
	    }, 11*time*1000)

	    setTimeout(function() {

	    	$(".abs"+varArrParam[10]).css("background-color",color[10]);
	    	color[11] = $(".abs"+varArrParam[11]).css("background-color");
			playANote(varArrParam[11])
			$(".abs"+varArrParam[11]).css("background-color",defColor);
	 		
	    }, 12*time*1000)

	    setTimeout(function() {

	    	$(".abs"+varArrParam[11]).css("background-color",color[11]);
	    	color[12] = $(".abs"+varArrParam[12]).css("background-color");
			playANote(varArrParam[12])
			$(".abs"+varArrParam[12]).css("background-color",defColor);
	 		
	    }, 13*time*1000)

	    setTimeout(function() {

	    	$(".abs"+varArrParam[12]).css("background-color",color[12]);
	    	color[13] = $(".abs"+varArrParam[13]).css("background-color");
			playANote(varArrParam[13])
			$(".abs"+varArrParam[13]).css("background-color",defColor);
	 		
	    }, 14*time*1000)

	    setTimeout(function() {

	    	$(".abs"+varArrParam[13]).css("background-color",color[13]);
	    	color[14] = $(".abs"+varArrParam[14]).css("background-color");
			playANote(varArrParam[14])
			$(".abs"+varArrParam[14]).css("background-color",defColor);
	 		
	    }, 15*time*1000)

	    setTimeout(function() {

	    	$(".abs"+varArrParam[14]).css("background-color",color[14]);
	    	color[15] = $(".abs"+varArrParam[15]).css("background-color");
			playANote(varArrParam[15])
			$(".abs"+varArrParam[15]).css("background-color",defColor);
	 		
	    }, 16*time*1000)

	     setTimeout(function() {

	    	$(".abs"+varArrParam[15]).css("background-color",color[15]);
	    	color[16] = $(".abs"+varArrParam[16]).css("background-color");
			playANote(varArrParam[16])
			$(".abs"+varArrParam[16]).css("background-color",defColor);
	 		
	    }, 17*time*1000)

	     setTimeout(function() {

	    	$(".abs"+varArrParam[16]).css("background-color",color[16]);
	    	color[17] = $(".abs"+varArrParam[17]).css("background-color");
			playANote(varArrParam[17])
			$(".abs"+varArrParam[17]).css("background-color",defColor);
	 		
	    }, 18*time*1000)


	     setTimeout(function() {

	    	$(".abs"+varArrParam[17]).css("background-color",color[17]);
	    	color[18] = $(".abs"+varArrParam[18]).css("background-color");
			playANote(varArrParam[18])
			$(".abs"+varArrParam[18]).css("background-color",defColor);
	 		
	    }, 19*time*1000)


	     setTimeout(function() {

	    	$(".abs"+varArrParam[18]).css("background-color",color[18]);
	    	color[19] = $(".abs"+varArrParam[19]).css("background-color");
			playANote(varArrParam[19])
			$(".abs"+varArrParam[19]).css("background-color",defColor);
	 		
	    }, 20*time*1000)


	      setTimeout(function() {

	    	$(".abs"+varArrParam[19]).css("background-color",color[19]);
	    	color[20] = $(".abs"+varArrParam[20]).css("background-color");
			playANote(varArrParam[20])
			$(".abs"+varArrParam[20]).css("background-color",defColor);
	 		
	    }, 21*time*1000)

	      setTimeout(function() {

	    	$(".abs"+varArrParam[20]).css("background-color",color[20]);
	    	color[21] = $(".abs"+varArrParam[21]).css("background-color");
			playANote(varArrParam[21])
			$(".abs"+varArrParam[21]).css("background-color",defColor);
	 		
	    }, 22*time*1000)


	        setTimeout(function() {

	    	$(".abs"+varArrParam[21]).css("background-color",color[21]);
	    	color[22] = $(".abs"+varArrParam[22]).css("background-color");
			playANote(varArrParam[22])
			$(".abs"+varArrParam[22]).css("background-color",defColor);
	 		
	    }, 23*time*1000)


	        setTimeout(function() {

	    	$(".abs"+varArrParam[22]).css("background-color",color[22]);
	    	color[23] = $(".abs"+varArrParam[23]).css("background-color");
			playANote(varArrParam[23])
			$(".abs"+varArrParam[23]).css("background-color",defColor);
	 		
	    }, 24*time*1000)

	        setTimeout(function() {

	    	$(".abs"+varArrParam[23]).css("background-color",color[23]);
	    	color[24] = $(".abs"+varArrParam[24]).css("background-color");
			playANote(varArrParam[24])
			$(".abs"+varArrParam[24]).css("background-color",defColor);
	 		
	    }, 25*time*1000)

	        setTimeout(function() {

	    	$(".abs"+varArrParam[24]).css("background-color",color[24]);
	    	color[25] = $(".abs"+varArrParam[25]).css("background-color");
			playANote(varArrParam[25])
			$(".abs"+varArrParam[25]).css("background-color",defColor);
	 		
	    }, 26*time*1000)


	        setTimeout(function() {

	    	$(".abs"+varArrParam[25]).css("background-color",color[25]);
	    	color[26] = $(".abs"+varArrParam[26]).css("background-color");
			playANote(varArrParam[26])
			$(".abs"+varArrParam[26]).css("background-color",defColor);
	 		
	    }, 27*time*1000)

	        setTimeout(function() {

	    	$(".abs"+varArrParam[26]).css("background-color",color[26]);
	    	color[27] = $(".abs"+varArrParam[27]).css("background-color");
			playANote(varArrParam[27])
			$(".abs"+varArrParam[27]).css("background-color",defColor);
	 		
	    }, 28*time*1000)

	        setTimeout(function() {

	    	$(".abs"+varArrParam[27]).css("background-color",color[27]);
	    	color[28] = $(".abs"+varArrParam[28]).css("background-color");
			playANote(varArrParam[28])
			$(".abs"+varArrParam[28]).css("background-color",defColor);
	 		
	    }, 29*time*1000)


	     setTimeout(function() {

			$(".abs"+(varArrParam[28])).css("background-color",color[28]);
	 		
	    }, 30*time*1000)


 	})


 	$('.resetButton').click(function(){


 		reset()


 	})


});



