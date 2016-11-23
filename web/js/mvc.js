/**
 * @author Lance Dolan
 * 11/23/2016
 *
 * For goldline POC App.
 *
 * Very rudimentary view-model binding utility
 * written specifically for the weather app test,
 * since external dependencies and libraries are forbidden.
 *
 */


//namespaces
var com = com || {};
com.goldline = com.goldline || {};


/**
 * A constructor for a View Model object which will wrap a targeted DOM element.
 * Changes to the DOM element can then be made through this VM.
 *
 * @param {String} elementId the ID attribute of the DOM element to wrap.
 * @constructor
 */
com.goldline.vm = function(elementId) {
    var vm = this;
    this.element = document.getElementById(elementId);

    /**
     * @param {Boolean} doWork Determines whether the innervalue should be updated. Provide true or false.
     * @param {String} newValue The text/html to set the innerHTML to.
     */
    this.updateInner = function( doWork , newValue) {
        if (doWork === true) {
            vm.element.innerHTML = newValue;
        } else {
            console.warn('doWork is false, not updating value');
        }
    };

    /**
     * A function to change the src attribute.
     * If the new value is empty, the element will be hidden
     * to prevent rendering of "broken image"
     * placeholders in browsers such as firefox.
     *
     * @param {String} newSrc the new value for the src
     *                          attribute on this element.
     */
    this.updateSrc = function(newSrc) {
        if (vm.element.hasAttribute('src')) {
            vm.element.setAttribute('src' , newSrc);
            //toggle visibility based on whether there's something to show
            if (newSrc) {
                vm.element.style.display = 'inline';
            } else {
                vm.element.style.display = 'none';
            }
        }
    };

};