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


    var $$,theRegion,role,atomic,live,busy,relevant,text, labelledby;

    describe.only('Test 8: a live region with an external label', function () {

        this.timeout(3000);

        fixtures.path = 'base/test/fixtures';

        before(function(done){
            /**
             * IT SHOULD HAVE
             * role="region"
             * aria-atomic="false"
             * aria-live="polite"
             * aria-busy="false"
             * aria-relevant="additions"
             * aria-labelledby="label"
             */
            fixtures.load('test1.html', function () {
                $$ = fixtures.window().jQuery; // access the jquery instance from within the fixtures context
                theRegion = $$('#live-region');
                atomic = theRegion.attr('aria-atomic');
                live = theRegion.attr('aria-live');
                busy = theRegion.attr('aria-busy');
                relevant = theRegion.attr('aria-relevant');
                text = theRegion.html();
                labelledby = theRegion.attr('aria-labelledby');
                done();
            });
        });

        beforeEach(function (done) {
            done();
        });

        afterEach(function () {
            fixtures.cleanUp(); // cleans up the fixture for the next test
        });

        it('should have a role attribute set to \"region\"', function () {
             theRegion.attr("role").should.equal("region");
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
        it('should have an aria-relevant attribute set to \"additions\"', function () {
             theRegion.attr("aria-relevant").should.equal("additions");
        });
        it('should have an aria-labelledby attribite set to \"label\"', function () {
             theRegion.attr("aria-labelledby").should.equal("label");
        });

    });

})();