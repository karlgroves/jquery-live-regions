/*jshint unused: false, jquery: true, expr: true*/
/*global $: true, fixtures:true, describe:true, it:true, chai:true, before, after, beforeEach, afterEach, sinon, expect */



var should = chai.should();


(function () {
    'use strict';


    var $$,theRegion,role,atomic,live,busy,relevant,text;

    describe.only('Test 3:  a live region with a full set of custom options', function () {

        this.timeout(3000);

        fixtures.path = 'base/test/fixtures';

        before(function(done){
            /**
             * role="log"
             * aria-atomic="false"
             * aria-live="polite"
             * aria-busy="false"
             * aria-relevant="additions text"
             * aria-label="Chat Log"
             * class="tblLiveCaption"
             * text should be empty
             */
            fixtures.load('test3.html', function () {
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

        it('should have a role attribute set to \"log\"', function () {
             theRegion.attr("role").should.equal("log");
        });
        it('should have a aria-atomic attribute set to \"false\"', function () {
             theRegion.attr("aria-atomic").should.equal("false");
        });
        it('should have a aria-live attribute set to \"polite\"', function () {
             theRegion.attr("aria-live").should.equal("polite");
        });
        it('should have a aria-busy attribute set to \"false\"', function () {
             theRegion.attr("aria-busy").should.equal("false");
        });
        it('should have a aria-relevant attribute set to \"additions text\"', function () {
             theRegion.attr("aria-relevant").should.equal("additions text");
        });
        it('should have a class attribute set to \"tblLiveCaption\"', function () {
            theRegion.attr("class").should.equal("tblLiveCaption");
        });
    });
})();