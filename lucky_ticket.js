﻿<script type="text/javascript">
	alert('Это генератор удачи. Сейчас проверим, попадется ли Вам Счастливый билет...');

	//Функция для получения рандомного числа найдена на learn.javascript - ура!
	function randomInteger(min, max) {
	    var rand = min - 0.5 + Math.random() * (max - min + 1)
	    rand = Math.round(rand);
	    return rand;
	}

	//Генерируем левые три числа
	var left1 = randomInteger(1, 9);
	var left2 = randomInteger(1, 9);
	var left3 = randomInteger(1, 9);
	//Итак, первая часть билета
	var leftNum = left1 + left2 + left3;
  var partOne = String(left1) + String(left2) + String(left3);

	//Генерируем правые три числа
	var right1 = randomInteger(1, 9);
	var right2 = randomInteger(1, 9);
	var right3 = randomInteger(1, 9);
	//Итак, вторая часть билета
	var rightNum = right1 + right2 + right3;
  var partTwo = String(right1) + String(right2) + String(right3);

	//Анализируем результат, выводим итог...
  var numTicket = String(partOne) + String(partTwo);
	alert('Вы получили билет №' + numTicket);
	if (leftNum == rightNum) {
		alert('Ура! У нас обладатель счастливого билета!');
	}
	else {
		alert('Ваше счастье скоро найдет Вас... Но не сегодня.');
	}
</script>