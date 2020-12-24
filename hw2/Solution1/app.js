﻿"use strict";
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
/*Это префиксное прибавление единицы. Значит сначала прибавится единица к а,
а затем, новое значение а присвотся с.*/

d = b++; alert(d);           // 1
/*Это постфиксное добавление единицы. Значит сначала переменной d 
присвоится значение b, а затем к переменной b прибавится единица.*/

c = (2 + ++a); alert(c);      // 5
/*На одном из предыдущих шагов мы уже имеем a=2. Здесь префиксный инкремент, значит 
сначала a увеличивается на единицу, а затем получаем c = 2 + 3.*/

d = (2 + b++); alert(d);      // 4
/*На одном из предыдущих шагов мы уже имеем b=2. Здесь постфиксное b, значит
сначала получаем d = 2 + 2, а затем прибавляем единицу к b.*/

alert(a);                    // 3
/*На одном из предыдущих шагов, когда получали с, получили а=3.*/

alert(b);                    // 3
/*На одном из предыдущих шагов, когда получали d, получили b=3.*/