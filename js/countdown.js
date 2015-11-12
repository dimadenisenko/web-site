function timer (){

	var obj = document.getElementById('timer_inp');
			obj.innerHTML--;

 			if(obj.innerHTML==0){
 				alert('Hello');
 				setTimeout(function(){},1000);
 				
 				}else{
 					setTimeout(timer,1000);
 						}


}

setTimeout(timer,1000);