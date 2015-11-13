


function isWordTrue(){
    
            $(document).ready(function(){
                $('.materialboxed').materialbox();
            });

			var arrayTrueWords = ["пустыня","песок","караван","бархан"];
			var inputedWord = document.getElementById("input-word").value;
	
			console.log(inputedWord);

			for(var i = 0; i < 4; i++){

					if(arrayTrueWords[i] == inputedWord){

						console.log("Слова совпадают");
                        disabledBox.value='Слово '+ '"' +inputedWord+'" '+'верно';
                        
                            if(inputedWord=="пустыня")
                                caseForDesert.value=inputedWord;
                        
                            if(inputedWord=="песок")
                                caseForSand.value=inputedWord;
                            
                            if(inputedWord=="караван")
                                caseForСaravan.value=inputedWord;
                        
                            if(inputedWord=="бархан")
                                caseForDune.value=inputedWord;
                        
						break;
						
						}else{
							console.log("Слова не совпадают");
							disabledBox.value='Слово '+ '"' +inputedWord+'"'+'неверно';
						}

				}
					
	}

