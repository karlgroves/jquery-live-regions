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


    var $$,theRegion,role,atomic,live,busy,relevant,text;

    describe.only('Test 7: a special live region role of alert', function () {

        this.timeout(3000);

        fixtures.path = 'base/test/fixtures';

        before(function(done){
            /**
             * IT SHOULD HAVE
             *
             * role="alert"
             * aria-atomic="false"
             * aria-live="assertive"
             * aria-busy="false"
             * aria-relevant="additions"
             * text of There were problems with your form submission
             */
            fixtures.load('test7.html', function () {
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

        it('should have a role attribute set to \"alert\"', function () {
             theRegion.attr("role").should.equal("region");
        });
        it('should have an aria-atomic attribute set to \"false\"', function () {
             theRegion.attr("aria-atomic").should.equal("false");
        });
        it('should have an aria-live attribute set to \"assertive\"', function () {
             theRegion.attr("aria-live").should.equal("assertive");
        });
        it('should have an aria-busy attribute set to \"false\"', function () {
             theRegion.attr("aria-busy").should.equal("false");
        });
        it('should have an aria-relevant attribute set to \"additions\"', function () {
             theRegion.attr("aria-relevant").should.equal("additions");
        });
        it('should have text that says \"There were problems with your form submission\"', function () {
            theRegion.text.should.equal("There were problems with your form submission");
        });

    });

})();