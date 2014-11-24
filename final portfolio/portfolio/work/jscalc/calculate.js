function calculate() {
	'use strict';
	var total;
	var exweight=0;
	var mpweight=0;
	var fnweight=0;
	var excount=0;
	var mpcount=0;
	var fncount=0;	
	
	var exs = document.getElementById('exercises');
	var mps = document.getElementById('mps');
	var fin = document.getElementById('final');
	var ex1 = document.getElementById('exercise1');
	var ex2 = document.getElementById('exercise2');
	var ex3 = document.getElementById('exercise3');
	var ex4 = document.getElementById('exercise4');
	var type1 = document.getElementById('type1');
	var type2 = document.getElementById('type2');
	var type3 = document.getElementById('type3');
	var type4 = document.getElementById('type4');
	var grade1 = document.getElementById('grade1');
	var grade2 = document.getElementById('grade2');
	var grade3 = document.getElementById('grade3');
	var grade4 = document.getElementById('grade4');
	
	//checks for valad input for grades and rubric
	if (exs&&exs.value&&mps&&mps.value&&fin&&fin.value&&grade1&&grade1.value&&grade2&&grade2.value&&grade3&&
		grade3.value&&grade4&&grade4.value){
		//checks that rubric totals 100
		if (exs.value*1+mps.value*1+fin.value*1==100){
			//checks length of exercise names	
			if (ex1.value.length*1<20&&ex2.value.length*1<20&&ex3.value.length*1<20&&ex4.value.length*1<20){
				//checks grade number
				if (grade1.value<=100&&grade2.value<=100&&grade3.value<=100&&grade4.value<=100){
					switch (type1.value){
						case 'exercises':
							exweight += grade1.value*1;
							excount+=1;
						case 'miniprojects':
							mpweight += grade1.value*1;
							mpcount+=1;
						case 'final':
							fnweight += grade1.value*1;
							fncount+=1;
					}
					switch (type2.value){
						case 'exercises':
							exweight += grade2.value*1;
							excount+=1;
						case 'miniprojects':
							mpweight += grade2.value*1;
							mpcount+=1;
						case 'final':
							fnweight += grade2.value*1;
							fncount+=1;
					}
					switch (type3.value){
						case 'exercises':
							exweight += grade3.value*1;
							excount+=1;
						case 'miniprojects':
							mpweight += grade3.value*1;
							mpcount+=1;
						case 'final':
							fnweight += grade3.value*1;
							fncount+=1;
					}
					switch (type4.value){
						case 'exercises':
							exweight += grade4.value*1;
							excount+=1;
						case 'miniprojects':
							mpweight += grade4.value*1;
							mpcount+=1;
						case 'final':
							fnweight += grade4.value*1;
							fncount+=1;
					}
					total = (exweight/excount)*(exs.value/100)+(mpweight/mpcount)*(mps.value/100)+(fnweight/fncount)*(fin.value/100);
					document.getElementById('total').value = total.toFixed(2);
				}
				else{
					alert ('Grade values must be between 0 and 100.');
				}
			}
			else{
				alert ('Assignment names must be no longer than 20 characters in length.');
				
			}
		}
		else{
			alert('Grade weights in the Rubric must total 100.');
		}
	}
	else{
		alert('Rubric and Grade fields accept only numbers.');
	}

	return false;	
}
function init() {
    'use strict';
    document.getElementById('grades').onsubmit = calculate;
}
window.onload = init;
