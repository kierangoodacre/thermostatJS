var Thermostat = function(){
	this.temperature = 20;
	this.powerSavingMode = true;
};

Thermostat.prototype.changeTemperature = function(changeTempBy){

	this.temperature += changeTempBy;

	if (this.powerSavingMode === true && this.temperature > 25){
		this.temperature = 25
		return "Cannot increase above 25"
	}
	else if (this.powerSavingMode === false && this.temperature > 32){
		this.temperature = 32
		return "Cannot increase above 32"
	}
	else if (this.temperature < 10 ) {
		this.temperature = 10
		return "Cannot decrease bellow 10"
	}
	else {
		return this.temperature
	}
};

Thermostat.prototype.resetTemperature = function(){
	this.temperature = 20;
};


Thermostat.prototype.powerSavingSwitch = function(mode){
	if (mode === "On"){
		this.powerSavingMode = true
	}
	else if (mode === "Off"){
		this.powerSavingMode = false
	}
	else {
		return "Please specify On or Off"
	}
};