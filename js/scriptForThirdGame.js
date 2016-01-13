// Функция проверет является ли введенное слово истенным 
function isWordTrue() {
    
     //Событие, которое отвечает за увеличение картинки при
    //на нажатие на нее
    jQuery(document).ready(function () {
                jQuery('.materialboxed').materialbox();
            }) ;

    
            var arrayTrueWords = [ "фрукты", "овощи", "плоды", "корзина"]; //array words
			var inputedWord = document.getElementById("input-word").value;
	
            //Данный и последующие выводы в консоль нужны для
            //для проверки верного присвоения значения переменной
            console.log(inputedWord);

			for (var iterate = 0; iterate < arrayTrueWords.length; iterate++) {

					if ( arrayTrueWords[iterate] == inputedWord) {
                            console.log("Слова совпадают");
                        
                        disabledBox.value='Слово '+ '"' +inputedWord + '" ' + 'верно';
                        
                            if (inputedWord == "фрукты" )
                                caseForDesert.value=inputedWord;
                        
                            if (inputedWord == "овощи")
                                caseForSand.value = inputedWord;
                            
                            if (inputedWord == "плоды")
                                caseForCaravan.value = inputedWord;
                        
                            if(inputedWord=="корзина")
                                caseForDune.value = inputedWord;
                        
						break;
						
						}else{
							console.log("Слова не совпадают");
							disabledBox.value='Слово ' + '"' +inputedWord+'"'+'неверно';
						}

				}
					
	}

