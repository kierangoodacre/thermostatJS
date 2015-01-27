var Thermostat = function(){
	this.temperature = 20;
	this.powerSavingMode = true;
	this.energy = "medium";
};


Thermostat.prototype.changeTemperature = function(changeTempBy){

	this.temperature += changeTempBy;


	if (this.powerSavingMode === true && this.temperature > 25){
		this.temperature = 25
		this.energyMode()
		return "Cannot increase above 25"
	}
	else if (this.powerSavingMode === false && this.temperature > 32){
		this.temperature = 32
		this.energyMode()
		return "Cannot increase above 32"
	}
	else if (this.temperature < 10 ){
		this.temperature = 10
		this.energyMode()
		return "Cannot decrease bellow 10"
	}
	else {
		this.energyMode()
		return this.temperature
	}
};

Thermostat.prototype.resetTemperature = function(){
	this.temperature = 20;
};


Thermostat.prototype.powerSavingSwitch = function(mode){
	if (mode === "On"){
		this.powerSavingMode = true
		this.changeTemperature(0);
	}
	else if (mode === "Off"){
		this.powerSavingMode = false
		this.changeTemperature(0);
	}
};

Thermostat.prototype.energyMode = function(){
	if (this.temperature < 18){
		this.energy = "low"
	}
	else if (this.powerSavingMode === false && this.temperature > 25){
		this.energy = "high"
	}
	else {
		this.energy = "medium"
	}
};
