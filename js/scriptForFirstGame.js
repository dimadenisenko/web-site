function timer (){
	var obj = document.getElementById('timer_inp');
			obj.innerHTML--;
 			if(obj.innerHTML==0){
                window.location.reload();
 				setTimeout(function(){},1000);
 				}else{
 					setTimeout(timer,1000);
 						}
}setTimeout(timer,1000);

// Функция проверет является ли введенное слово истенным 
function isWordTrue() {
    
    //Событие, которое отвечает за увеличение картинки при
    //на нажатие на нее
    jQuery(document).ready(function () {
                jQuery('.materialboxed').materialbox();
            }) ;

    
            
            var arrayTrueWords = [ "пустыня", "песок", "караван", "бархан"]; //array words
			var inputedWord = document.getElementById("input-word").value;
	        var countWord = 0;    
            
            //Данный и последующие выводы в консоль нужны для
            //для проверки верного присвоения значения переменной
            console.log(inputedWord);

			for (var iterate = 0; iterate < arrayTrueWords.length; iterate++) {
					if ( arrayTrueWords[iterate] == inputedWord) {
                            console.log("Слова совпадают");
                        
                        disabledBox.value='Слово '+ '"' +inputedWord + '" ' + 'верно';
                        
                            if (inputedWord =="пустыня"){
                                caseForDesert.value=inputedWord;
                                countWord++;
                            }
                            if (inputedWord =="песок"){
                                caseForSand.value = inputedWord;
                                countWord++;
                            }
                            if (inputedWord =="караван"){
                                caseForCaravan.value = inputedWord;
                                countWord++;
                            }
                            if(inputedWord=="бархан"){
                                caseForDune.value = inputedWord;
                                countWord++;
                            }
                            
        if(countWord==4){
        alert("Вы выйграли!");
        document.getElementById("winORfall").innerHTML="Вы отгадали все слова!";
                        }
                        
						break;
						}else
                        {
				        console.log("Слова не совпадают");
				        disabledBox.value='Слово ' + '"' +inputedWord+'"'+'неверно';
                        }
				}
    
        if(countWord==4){
        alert("Вы выйграли!");
        document.getElementById("winORfall").innerHTML="Вы отгадали все слова!";
        }
            
	}
  

