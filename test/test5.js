/*jshint unused: false, jquery: true, expr: true*/
/*global $: true, fixtures:true, describe:true, it:true, chai:true, before, after, beforeEach, afterEach, sinon, expect */

var should = chai.should();

(function () {
    'use strict';

    var $$;

    describe('Test 5: a live region that swaps out content when #change button is clicked', function () {

        this.timeout(3000);

        beforeEach(function (done) {

            fixtures.path = 'base/test';

            fixtures.load('test5.html', function () {
                $$ = fixtures.window().jQuery; // access the jquery instance from within the fixtures context

                /**
                 * On load, text should be: It is curious that physical courage should be so common in the world and moral courage so rare.
                 *
                 * After #change is clicked, it should be: The lack of money is the root of all evil.
                 */

                var theRegion = $$('#live-region'),
                    role = theRegion.attr('role'),
                    atomic = theRegion.attr('aria-atomic'),
                    live = theRegion.attr('aria-live'),
                    busy = theRegion.attr('aria-busy'),
                    relevant = theRegion.attr('aria-relevant'),
                    text = theRegion.html(),
                    button = $$('#change');

                done();
            });
        });

        afterEach(function (done) {
            fixtures.cleanUp(); // cleans up the fixture for the next test
            done();
        });

        it('should have text that says \"It is curious that physical courage should be so common in the world and moral courage so rare.\"', function () {
            theRegion.text.should.equal("It is curious that physical courage should be so common in the world and moral courage so rare.");
        });

        button.click();

        it('should have different text after #change is clicked', function () {
            theRegion.text.should.equal("The lack of money is the root of all evil.");
        });

    });

})();