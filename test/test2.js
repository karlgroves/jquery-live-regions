/*jshint unused: false, jquery: true, expr: true*/
/*global $: true, fixtures:true, describe:true, it:true, chai:true, before, after, beforeEach, afterEach, sinon, expect */

var should = chai.should();

(function () {
    'use strict';

    var $$, theRegion, role, atomic, live, busy, relevant, text;

    describe.only('Test2 - a live region with a few non-default settings', function () {

        this.timeout(3000);

        fixtures.path = 'base/test/fixtures';

        before(function (done) {

            fixtures.load('test2.html', function () {
                $$ = fixtures.window().jQuery; // access the jquery instance from within the fixtures context
                theRegion = $$('#live-region');
                atomic = theRegion.attr('aria-atomic');
                live = theRegion.attr('aria-live');
                busy = theRegion.attr('aria-busy');
                relevant = theRegion.attr('aria-relevant');
                text = theRegion.html();
                done();
            });
        });

        beforeEach(function (done) {
            done();
        });

        afterEach(function () {
            fixtures.cleanUp(); // cleans up the fixture for the next test
        });

        it('should have a role attribute set to \"status\"', function () {
            theRegion.attr("role").should.equal("status");
        });

        it('should have an aria-atomic attribute set to \"false\"', function () {
            theRegion.attr("aria-atomic").should.equal("false");
        });

        it('should have an aria-live attribute set to \"polite\"', function () {
            theRegion.attr("aria-live").should.equal("polite");
        });

        it('should have an aria-busy attribute set to \"false\"', function () {
            theRegion.attr("aria-busy").should.equal("false");
        });

        it('should have an aria-relevant attribute set to \"additions removals\"', function () {
            theRegion.attr("aria-relevant").should.equal("additions removals");
        });

        it('should have an aria-label attribute set to \"Mark Twain Quotes:\"', function () {
            theRegion.attr("aria-busy").should.equal("Mark Twain Quotes:");
        });

    });

})();