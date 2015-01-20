var Thermostat = function(){
	this.temperature = 20;
};

Thermostat.prototype.changeTemperature = function(changeTempBy){

	this.temperature += changeTempBy;

	if (this.temperature < 10 ) {
		this.temperature = 10
		return "Cannot decrease bellow 10"
	}
	else {
		return this.temperature
	}
};