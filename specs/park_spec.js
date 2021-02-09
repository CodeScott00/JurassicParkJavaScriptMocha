const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Jurassic World', 10, 50)
    dinosaur1 = new Dinosaur('Megasaurous', 'Fish', 1000)
    dinosaur2 = new Dinosaur('Minisaurous', 'Fish', 2000)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic World');
  })

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  })

  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, []);
  })

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur('Megasaurous');
    const actual = park.numberOfDinosaurs();                    //how does the dinosaur get added to the list? 
    assert.strictEqual(actual, 1);

  })

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur('Megasaurous');
    park.addDinosaur('Minisaurous');
    park.removeDinosaur('Minisaurous');
    const expected = ['Megasaurous'];
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    if (dinosaur1.guestsAttractedPerDay > dinosaur2.guestsAttractedPerDay)
      return dinosaur1
    else:
      return dinosaur2

  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
