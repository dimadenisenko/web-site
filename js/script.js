
function isWordTrue(){

			var arrayTrueWords = ["пустыня","песок","караван","бархан"];
			var trueWord = "пустыня";
			var inputedWord = document.getElementById("input-word").value;
	
			console.log(inputedWord);

			for(var i = 0; i < 5; i++){

					if(arrayTrueWords[i] == inputedWord){

						console.log("Слова совпадают");
                        disabledBox.value='Слово '+ '"' +inputedWord+'" '+'верно';
						break;
						
						}else{
							console.log("Слова не совпадают");
							tBoxForInputedWord.value='Слово '+ '"' +inputedWord+'"'+'неверно';
						}

				}
					
	}

