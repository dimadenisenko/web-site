
function isWordTrue(){

			var arrayTrueWords = ["пустыня","песок","караван","бархан"];
			var trueWord = "пустыня";
			var inputedWord = document.getElementById("tBoxFirstPage").value;
	
			console.log(inputedWord);

			for(var i = 0; i < 4; i++){

					if(arrayTrueWords[i] == inputedWord){

						console.log("Слова совпадают");
						tBoxForInputedWord.value='Слово '+ '"' +inputedWord+'"'+'верно';
						break;
						
						}else{
							console.log("Слова не совпадают");
							tBoxForInputedWord.value='Слово '+ '"' +inputedWord+'"'+'неверно';
						}

				}
					
	}



window.onload=function(){



};