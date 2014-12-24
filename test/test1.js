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


    var $$;

    describe('Test1 - default properties', function () {

        this.timeout(3000);

        fixtures.path = 'base/fixtures';

        beforeEach(function (done) {
            done();
        });


        it('should have a full set of default attributes', function (done) {

            /**
             *  role="region"
             * aria-atomic="false"
             * aria-live="polite"
             * aria-busy="false"
             * aria-relevant="additions"
             * text should be empty
             */


            fixtures.load('test1.html', function () {
                $$ = fixtures.window().jQuery; // access the jquery instance from within the fixtures context

                var theRegion = $$('#live-region'),
                    role = theRegion.attr('role'),
                    atomic = theRegion.attr('aria-atomic'),
                    live = theRegion.attr('aria-live'),
                    busy = theRegion.attr('aria-busy'),
                    relevant = theRegion.attr('aria-relevant'),
                    text = theRegion.html();

                done();
            });
        });


        afterEach(function () {
            fixtures.cleanUp(); // cleans up the fixture for the next test
        });

    });

})();