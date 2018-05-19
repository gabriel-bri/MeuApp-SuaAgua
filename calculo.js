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
//#
function q4(){
//Litros
	var x=document.fm.intt4.value;
//Checkbox
	//if(document.fm.checB1.checked){
//		x=
	//}
//B-Radios
	if(document.fm.Rad4[0].checked){
		x=x*18;
	}else if(document.fm.Rad4[1].checked){
		x=x*16;
	}else if(document.fm.Rad4[2].checked){
		x=x*15;
	}else{
		x=0;
	}
	return x;
}

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
	return x;
}
//#Lava calcada
function q7(){
//Litros
	var x=document.fm.intt7.value;
//Checkbox
	if(document.fm.checB1.checked){
/*botRadio*/ 		       if(document.fm.Rad7[0].checked){
		x=x*18.5;
	}else if(document.fm.Rad7[1].checked){
		x=x*14;
	}else if(document.fm.Rad7[2].checked){
		x=x*10;
	}else{
		x=0;
	}
	}else{
		x=0;
	}
	return x;
}

//#Torneira gotejando
function q8(){
var x=0;
	if(document.fm.CB.checked){
		x=1.9*24;
	}else{
		x=0;
	}
	return x;
}
//onclick do Button Resp
function valueMotor(){
	var x=q1()+q2()+q3()+q4()+q5()+q6()+q7()+q8()+q9();
	
	document.fm.buttonResp.value=x;

 	alert(x);
//	Condicional 
	y=document.getElementById("conteiner");
	if(x>200){
		y.innerHTML="#";
		y.setAtribute("style","background-color:red;");
	}else if(x>170){
		y.innerHTML="#";
		y.setAtribute("style","background-color:orange;");
	}else if(x>140){
		y.innerHTML="#";
		y.setAtribute("style","background-color:greem;");
	}else{
		y.innerHTML="#";
		y.setAtribute("style","background-color:blue;");
	
	}
}

function voltaM(){
	y.innerHTML="#";
	y.setAtribute("style","background-color:none;");
}