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
      thermostat.changeTemperature(1);
      expect(thermostat.temperature).toEqual(21);
    });

    it("can decrease", function(){
      thermostat.changeTemperature(-1);
      expect(thermostat.temperature).toEqual(19);
    });

    it("cannot be decreased bellow 10", function(){
      expect(thermostat.changeTemperature(-11)).toBe("Cannot decrease bellow 10");
      expect(thermostat.temperature).toEqual(10);
    });

	});

});