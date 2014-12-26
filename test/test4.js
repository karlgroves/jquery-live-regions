/*jshint unused: false, jquery: true, expr: true*/
/*global $: true, fixtures:true, describe:true, it:true, chai:true, before, after, beforeEach, afterEach, sinon, expect */

var should = chai.should();


(function () {
    'use strict';


    var $$;

    describe('Test 4: a live region whose text gets swapped out every second', function () {

        // increased timeout to allow all of the quotes to run
        this.timeout(20000);

        beforeEach(function (done) {

            fixtures.path = 'base/test';

            fixtures.load('test4.html', function () {
                $$ = fixtures.window().jQuery; // access the jquery instance from within the fixtures context

                /**
                 * there are 16 different quotes
                 * It should start out empty
                 */

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

        afterEach(function (done) {
            fixtures.cleanUp(); // cleans up the fixture for the next test
            done();
        });

    });

})();