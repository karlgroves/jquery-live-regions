/*jshint unused: false, jquery: true, expr: true*/
/*global $: true, fixtures:true, describe:true, it:true, chai:true, before, after, beforeEach, afterEach, sinon, expect */

var should = chai.should();


(function () {
    'use strict';


    var $$, doit;

    describe('The sample script', function () {

        this.timeout(3000);

        beforeEach(function (done) {

            fixtures.path = 'base/test';

            fixtures.load('sampleFixture.html', function () {
                $$ = fixtures.window().jQuery; // access the jquery instance from within the fixtures context
                doit = fixtures.window().doit;
                done();
            });
        });

        afterEach(function (done) {
            fixtures.cleanUp(); // cleans up the fixture for the next test
            done();
        });


        it('doit should reutrn true when called', function () {
            doit().should.equal(true);
        });


    });

})();