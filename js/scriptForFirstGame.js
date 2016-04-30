/*Функция для замены selector class
$(document).ready(function(){
    $('.waves-effect waves-light btn').removeClass('test').addClass('new');
});

document.querySelector('.waves-effect waves-light btn').className = 'greys';

document.getElementById("butt").onclick = isWordTrue;
*/
document.getElementById("butt").onclick = isWordTrue;
var checkWord = isWordTrue();
console.log(isWordTrue() );
console.log("Checkword =" + checkWord );

function timer (checkWord){
	
	var obj = document.getElementById('timer_inp');
	obj.innerHTML--;

 			if(obj.innerHTML==0 || checkWord == 4){
				changeClass();
 				setTimeout(function(){},1000);
 				
 				}else{
 					setTimeout(timer,2000);
 						}

return obj.innerHTML;
}setTimeout(timer,2000);


function changeClass (){
	
	document.getElementById("butt").className +=" grey";
		
}



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
						Materialize.toast('Слово отгадано!', 3000)
                            console.log("Слова совпадают");
                        
                        disabledBox.value='Слово '+ '"' +inputedWord + '" ' + 'верно';
                        
                            if (inputedWord == "пустыня"){
                                caseForDesert.value=inputedWord;
                                countWord++;
                            }
                            if (inputedWord == "песок"){
                                caseForSand.value = inputedWord;
                                countWord++;
                            }
                            if (inputedWord == "караван"){
                                caseForCaravan.value = inputedWord;
                                countWord++;
                            }
                            if(inputedWord == "бархан"){
                                caseForDune.value = inputedWord;
                                countWord++;
                            }
			             
        if(countWord==4){
        alert("Вы выйграли!");
        document.getElementById("winORfall").innerHTML="Вы отгадали все слова!";
			break;
						}
		else{
			console.log("Слова не совпадают");
			disabledBox.value='Слово ' + '"' +inputedWord+'"'+'неверно';
                        }
					}
			}
    
        
            return countWord;
	}

console.log("Слова совпадают");
  

