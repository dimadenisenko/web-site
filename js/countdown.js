function timer (){

	var obj = document.getElementById('timer_inp');
	obj.innerHTML--;

 			if(obj.innerHTML==0){
				
 				setTimeout(function(){},1000);
 				
 				}else{
 					setTimeout(timer,2000);
 						}


}setTimeout(timer,2000);
