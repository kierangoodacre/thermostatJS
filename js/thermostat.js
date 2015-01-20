var Thermostat = function(){
	this.temperature = 20;

};

Thermostat.prototype.changeTemperature = function(changeTempBy){
	return this.temperature += changeTempBy;
};

// Thermostat.prototype.temperature = function(20) {
// 	return 20
// };