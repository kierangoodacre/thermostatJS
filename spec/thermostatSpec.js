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

    it("can be reset to 20", function(){
      thermostat.changeTemperature(-2);
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20);
    });

	});

  describe("When power saving", function(){

    it("should be able to be switched on", function(){
      thermostat.powerSavingSwitch("On");
      expect(thermostat.powerSavingMode).toBe(true);
    });

    it("should be able to be switched Off", function(){
      thermostat.powerSavingSwitch("Off");
      expect(thermostat.powerSavingMode).toBe(false);
    });

    it("should have a max temp of 25", function(){
      thermostat.powerSavingSwitch("On");
      expect(thermostat.changeTemperature(6)).toBe("Cannot increase above 25");
      expect(thermostat.temperature).toEqual(25);
    });

    it("should not have a max temp when off", function(){
      thermostat.powerSavingSwitch("Off");
      thermostat.changeTemperature(6);
      expect(thermostat.temperature).toEqual(26);
    });

    it("should be on by default", function(){
      expect(thermostat.powerSavingMode).toBe(true);
    });

  });

  describe("When power saving is off", function(){

    it("should have a max temp of 32",function(){
      thermostat.powerSavingSwitch("Off");
      expect(thermostat.changeTemperature(17)).toBe("Cannot increase above 32");
      expect(thermostat.temperature).toEqual(32);
    });

  });

  describe("Thermostat energy level", function(){

    it("should be low when temp bellow 18", function(){
      thermostat.changeTemperature(-10);
      expect(thermostat.energy).toBe("low");
    });

    it("should be high when temp above 25",function(){
      thermostat.powerSavingSwitch("Off");
      thermostat.changeTemperature(7);
      expect(thermostat.energy).toBe("high");
    });

    it("should medium when between 18 and 25", function(){
      thermostat.changeTemperature(-1);
      expect(thermostat.energy).toBe("medium");
    });


  });

});