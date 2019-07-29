/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // Checks if the URL of the object is defined and is not empty
        it('url is not empty', function() {
            allFeeds.forEach(function (arrayItem) {
                expect(arrayItem.url).toBeDefined();
                expect(arrayItem.url.length).not.toBe(0);
            });
        });

        // Checks if the name of the object is defined and is not empty
         it('name is not empty', function() {
            allFeeds.forEach( function(arrayItem) {
                expect(arrayItem.name).toBeDefined();
                expect(arrayItem.name.length).not.toBe(0);
            });
         });
    });

    describe('The menu', function() {

        //Checks if the menu, with the class menu-hidden is hide it by default
        it('The menu is hidden', function() {
            expect( $('body').hasClass('menu-hidden') ).toBe(true);
        });

        //Checks everytime if the menu icon is clicked and hide it or not.
        it('Menu visible and not visible', function () {
            var a = $('.menu-icon-link');

            a.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            a.click();
                expect($('body').hasClass('menu-hidden')).toBe(true);

        });

    });

    describe('Initial Entries', function() {

        // Allows to check if loadFeed completes its work to continue.
        beforeEach(function(done){
            loadFeed(0, done);
         });
         // Checks if the .feed has container
        it('There is an entry on the feed container', function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    });

    describe('New Feed Selection', function() {

        //Checks if the new content has change checking the feed.
        var prevFeedData;
        var newFeedData;

        //async method to load prev and new feed
        beforeEach(function(done){
          loadFeed(0, function() {
            prevFeedData = $('.feed').html();
            loadFeed(1, function(){
              newFeedData = $('.feed').html();
           done();
         });
       });
     });

     //Compare initial and new feed
     it('the content actually changes', function(done) {
       expect(prevFeedData).not.toBe(newFeedData);
       done();
       });

     });


}());
