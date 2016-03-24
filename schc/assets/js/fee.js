// Variable scale details payment options based on family size and income. 

var scale = {
	1: [11770,14713,17655,20598,23540],
	2: [15930,19913,23895,27878,31860],
	3: [20090,25113,30135,35158,40180],
	4: [24250,30313,36375,42438,48500],
	5: [28410,35513,42615,49718,56820],
	6: [32570,40713,48855,56998,65140],
	7: [36730,45913,55095,64278,73460],
	8: [40890,51113,61335,71558,81780]

}

// Fee variable is a per visit payment based on the size of family and income. 

var fee = ['$25', '$35', '$40', '$45', '$50'];

function getNominalFee(size, income)
{
	var val = scale[size];
	var count = 0;
	income = parseInt(income.replace("$","").replace(",",""),10);
	for(i = 0; i < val.length; i++)
	{
		if(income <= val[i])
		{
			break;
		}

		count++;
	}

	return fee[count];
}

$('form').submit(function(e){
console.log("hello");
	e.preventDefault();

	var income = $('[name=user_income]'),
		size = $('[name=user_size]'),
		fee = $('[name=user_fee]');

	var nomFee = getNominalFee(size.val(), income.val());

	fee.val(nomFee);
});

