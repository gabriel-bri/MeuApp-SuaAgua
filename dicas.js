function dicas() {
	var numero = Math.round(Math.random() * 9);

	switch(numero) {
		case 0:
		document.getElementById('dicas').innerHTML = 
		"Cheque vazamentos em canos e não deixe a torneira derramar pingando. Um apartamento simples, pode  gastar cerca de 45 litros de água por dia";
		break;

		case 1:
		document.getElementById('dicas').innerHTML = "Deixe prato e talheres de molho antes de lavá-los";
		break;

		case 2:
		document.getElementById('dicas').innerHTML = "Aproveita a água da chuva para regar as plantas e o jardim";
		break;

		case 3:
		document.getElementById('dicas').innerHTML = "As plantas abssorvem mais água em horários quentes, então molhe-as de manhã cedo ou no fim do dia";	
		break;

		case 4:
		document.getElementById('dicas').innerHTML = "Feche a torneira quando estiver escovando os dentes ou fazendo a barba. Só abra quando for usar.";
		break;

		case 5:
		document.getElementById('dicas').innerHTML = "Uma torneira aberta por 5 minutos desperdiça 80 litros de água";
		break

		case 6:
		document.getElementById('dicas').innerHTML = 
		"Em vez da mangueira, use uma vassoura e balde para lavar pátios e quintais.\n Uma mangueira aberta por 30 minutos libera cerca de 560 litros de água";
		break;

		case 7:
		document.getElementByI('dicas').innerHTML = 
		"Não tome banhos demorados, 5 minutos são suficientes \n. Uma ducha durante 15 minutos consome 135 litos de água";
		break;

		case 8:
		document.getElementById('dicas').innerHTML = 
		"Antes de lavar pratos e panelas,\n limpe os restos de comida com uma escova ou esponja e jogue no lixo";
		break;
	}
}