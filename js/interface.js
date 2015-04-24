var thermostat = new Thermostat();

var updateTemperature = function(){
	$('#temperature').text(thermostat.temperature);
// $('h1).attr('class', thermostat.energy())
	$('h1').each(function(){
		if (thermostat.energy === "low"){
			$('h1').css('color', 'green')
		}
		else if (thermostat.energy === "medium"){
			$('h1').css('color', 'yellow')
		}
		else {
			$('h1').css('color', 'red')
		}
	});
	$('h2').each(function(){
		if (thermostat.energy === "low"){
			$('h2').css('background-color', 'green')
		}
		else if (thermostat.energy === "medium"){
			$('h2').css('background-color', 'yellow')
		}
		else {
			$('h2').css('background-color', 'red')
		}
	});
};


// var updateEnergy = function(){
// };

$(document).ready(function(){
	updateTemperature();

	$('.increase-temp').on('click', function(){
		thermostat.changeTemperature(1); //adjust the temperature
		updateTemperature(); //target the tempearture
		// updateEnergy();
	});

	$('.decrease-temp').on('click', function(){
		thermostat.changeTemperature(-1);
		updateTemperature();
		// updateEnergy();
	});

	$('.reset').on('click', function(){
		thermostat.resetTemperature();
		updateTemperature();
		// updateEnergy();
	});

	$('.PSM-off').on('click', function() {
          thermostat.powerSavingSwitch('Off');
          updateTemperature();
        });

        $('.PSM-on').on('click', function() {
          thermostat.powerSavingSwitch('On');
          updateTemperature();
        });

});



// id's marked by #

// classes marked by .
