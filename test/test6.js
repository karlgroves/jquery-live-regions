/*jshint unused: false, jquery: true, expr: true*/
/*global $: true, fixtures:true, describe:true, it:true, chai:true, before, after, beforeEach, afterEach, sinon, expect */


// AEM Unit Tests

// Please use BDD should style tests
// see: http://chaijs.com/api/bdd/

// var should = require('chai').should() //actually call the the function
//   , foo = 'bar'
//   , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

// foo.should.be.a('string');
// foo.should.equal('bar');
// foo.should.have.length(3);
// beverages.should.have.property('tea').with.length(3);

var should = chai.should();


(function () {
'use strict';


    var $$, doit;

    describe('It should have an empty live region that becomes populated after 10 seconds.', function () {

        this.timeout(3000);

        beforeEach(function (done){

            fixtures.path = 'base/test';

            fixtures.load('test6.html', function(){
                $$ = fixtures.window().jQuery; // access the jquery instance from within the fixtures context

                /**
                 * It should load empty
                 * After 10 seconds, text content should be: Go to Heaven for the climate, Hell for the company.
                 */

                doit = fixtures.window().doit;
                done();
            });
        });

        afterEach(function (done){
            fixtures.cleanUp(); // cleans up the fixture for the next test
            done();
        });


        it('doit should reutrn true when called', function(){
          doit().should.equal(true);
        });


    });

})();