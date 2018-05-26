//# Descarga vaso Sanitario

 function q1(){
 //Litros
 	var x=document.fm.intt.value;
 //B-Radios
 	if(document.fm.Rad1[0].checked){
 		x=x*14;
 	}else if(document.fm.Rad1[1].checked){
 		x=x*12;
 	}else if(document.fm.Rad1[2].checked){
		x=x*10;
	}else{
 		x=0;
	}

 	return x;
}
//#banho e lavar rosto
function q2(){
//Litros
	var x=document.fm.intt2.value;
//B-Radios
	if(document.fm.Rad2[0].checked){
		x=x*9;
	}else if(document.fm.Rad2[1].checked){
		x=x*5;
	}else if(document.fm.Rad2[2].checked){
		x=x*3.5;
	}else{
		x=0;
	}
	return x;
}
//#Escovar dentes torneira/copo
function q3(){
//Litros
	var x=document.fm.intt3.value;
//Checkbox
	if(document.fm.checB1.checked){
		x=0.4*3;
/*Radio*/	}else if(document.fm.Rad3[0].checked){
		x=x*2.4;
	}else if(document.fm.Rad3[1].checked){
		x=x*1.8;
	}else if(document.fm.Rad3[2].checked){
		x=x*1.2;
	}else{
		x=0;
	}
	return x;
}
//#lavar Roupas com a torneira
function q4(){
//Litros
	var x=document.fm.intt4.value;
//Checkbox
	//if(document.fm.checB1.checked){
//		x=
	//}
//B-Radios
	if(document.fm.Rad4[0].checked){
		x=x*17;
	}else if(document.fm.Rad4[1].checked){
		x=x*15;
	}else if(document.fm.Rad4[2].checked){
		x=x*13;
	}else{
		x=0;
	}
	return x;
}
//#cosinhar e lavar alimentos
function q5(){
//Litros
	var x=document.fm.intt5.value;
//B-Radios
	if(document.fm.Rad5[0].checked){
		x=x*7.5;
	}else if(document.fm.Rad5[1].checked){
		x=x*6.5;
	}else if(document.fm.Rad5[2].checked){
		x=x*5.5;
	}
	return x;
}
//#Beber
function q6(){
//Litros beber
	var x=document.fm.intt6.value;
	if(!x==='number'){
		x=0;
	}
	return x;
}
//#Lava calcada
function q7(){
//Litros
	var x=document.fm.intt7.value;
//Checkbox
	if(document.fm.checB2.checked){
		 if(document.fm.Rad7[0].checked){
			x=x*17.5;
		}else if(document.fm.Rad7[1].checked){
			x=x*12;
		}else if(document.fm.Rad7[2].checked){
			x=x*10;
		}
	}else{
		x=0;
	}
	return x;
}

//#Torneira gotejando
function q8(){
var x;
	if(document.fm.CB.checked){
		x=1.9*24;
	}else{
		x=0;
	}
	return x;
}

//onclick do Button Resp
function valueMotor(){
	var x=Math.round(q1()+q2()+q3()+q4()+q5()+q6());
	
	//pode ser evitado
	var x2=Math.round(q7()+q8());
	if(x2>5){
		var cc="Podem ser economizados: ";
		document.getElementById("label1").innerHTML=cc+x2+ " litros de água";
	}else{
		document.getElementById("label1").innerHTML="";
	}
	//
	var y=document.fm.buttonResp;
	y.value=x;
	if(x>200){
 		y.style.backgroundColor="red";
 		y.style.color="white";
 		document.getElementById("label2").innerHTML="Você realmente precisa gastar toda essa água?";
	}else if(x>175){
		y.style.backgroundColor="yellow";
		y.style.color="white";
		document.getElementById("label2").innerHTML="Você está um pouco acimma da média brasileira";
	}else if(x>150){
		y.style.backgroundColor="green";
		y.style.color="white";
		document.getElementById("label2").innerHTML="Você está na média de consumo de água do Brasil";
	}else if(x>125){
		y.style.backgroundColor="blue";
		y.style.color="white";
		document.getElementById("label2").innerHTML="Você está abaixo da média brasileira. A natureza agradece!";
	}else{
		y.style.backgroundColor="gray";
		y.style.color="white";
		document.getElementById("label2").innerHTML="Você consegue realmente sobreviver com essa quantidade de água?";
	}
}