describe('Thermostat', function(){
  var thermostat


beforeEach(function(){
  thermostat = new Thermostat

});

  describe('default temperature', function(){
    it('returns a value of 20 degrees', function(){
      expect(thermostat._temperature).toEqual(20);
    });

  });
  describe('allows to change the temperature', function(){
    it('increase up the temperature', function(){
      thermostat.up(5)
      expect(thermostat._temperature).toEqual(25);
    });
  });

  describe('allows to change the temperature', function(){
    it('descrase down the temperature', function(){
      thermostat.down(5)
      expect(thermostat._temperature).toEqual(15);
    });
    it('raise an error if you try to go below the minimumTemperature',function(){
      expect(function(){thermostat.down(11);}).toThrowError('Cannot go below the minimum temperature');
    })
  });

  describe('setup a minimum themperature', function(){
    it('set a default_minimum temperature of 10 degrees', function(){
      expect(thermostat._minimumTemperature).toEqual(10)
    })
  })

  describe('set up a maximum temperature', function(){
    it('raise an error it you try to increase above 25 when power saving mode is on', function(){
      expect(function(){thermostat.up(6);}).toThrowError('Cannot go above 25 degrees when power saving is on');
    })
    it('raise an error it you try to increase above 32 when power saving mode is off', function(){
      thermostat.powerSavingOff()
      expect(function(){thermostat.up(13);}).toThrowError('Cannot go above 32 degrees when power saving is off');
    })
  })
});
