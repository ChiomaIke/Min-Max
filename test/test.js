
(function() {
  'use strict';

var jasmine = require('jasmine');

var myApp = require('../app/library.js');

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(myApp.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(myApp.findMinMax([6, 4])).toEqual([4, 6]);
      });
	  
	  it('should return [6,9] for [6, 7, 8 , 9]', function () {
        expect(myApp.findMinMax([6, 7, 8, 9])).toEqual([6, 9]);
      });
	  
	  it('should return [100,1000] for [600, 700, 100 , 1000]', function () {
        expect(myApp.findMinMax([600, 700, 100, 1000])).toEqual([100, 1000]);
      });

      it('should return [2, 4] for [4, 2]', function () {
        expect(myApp.findMinMax([4, 2])).toEqual([2, 4]);
      });
	  
	  it('should return [4, 65] for [4, 65, 8, 44, 9, 8, 60]', function () {
        expect(myApp.findMinMax([4, 65, 8, 44, 9, 8, 60])).toEqual([4, 65]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(myApp.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });
	  
	  it('should return [6] for [6, 6, 6, 6]', function () {
        expect(myApp.findMinMax([6, 6, 6, 6])).toEqual([6]);
      });
	  
	  it('should return [11] for [11, 11, 11, 11]', function () {
        expect(myApp.findMinMax([11, 11, 11, 11])).toEqual([11]);
      });

    });

  });
    

})(); 
