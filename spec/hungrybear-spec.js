import { HungryBear } from './../src/hungrybear.js';

describe('HungryBear', function(){
  let fuzzy = new HungryBear("Fuzzy");

  beforeEach(function(){
    jasmine.clock().install();
  });

  afterEach(function(){
    jasmine.clock.uninstall();  
  });

  it('should have a name and a food level of 10 when it is created', function(){
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodlevel).toEqual(10);
  });

  it('should have a food level at 7 after 3001 milliseconds', function(){
    jasmine.clock().tick(3001);
    expect(fuzzy.foodlevel.toEqual(7));
  });
});