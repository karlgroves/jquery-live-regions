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

    describe('It should append text when the #change button is clicked', function () {

        this.timeout(3000);

        beforeEach(function (done){

            fixtures.path = 'base/test';

            fixtures.load('test5-a.html', function(){
                $$ = fixtures.window().jQuery; // access the jquery instance from within the fixtures context

                /**
                 * On load, text should be: It is curious that physical courage should be so common in the world and moral courage so rare.
                 *
                 * After #change is clicked, this should be appended to it: The lack of money is the root of all evil.
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