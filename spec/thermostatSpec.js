describe("Thermostat", function(){

	var thermostat;

	beforeEach(function(){
		thermostat = new Thermostat();
	});

	describe("by - default", function(){

		it("by default", function(){
			expect(thermostat.temperature).toEqual(20);
		});
	});

	describe("changing temperature", function(){
		it("can increase", function(){
      thermostat.increaseTemperature(1);
      expect(thermostat.temperature).toEqual(21);
    });
	});

});