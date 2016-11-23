//namespaces
var com = com || {};
com.goldline = com.goldline || {};
com.goldline.pagedriver = function() {
    //This area will function on page load
    
    var myNumber = 2 + 4;
    var myNumberVm = new com.goldline.vm('myNumber');
    myNumberVm.updateInner(myNumber);
    
};

document.addEventListener('DOMContentLoaded', function() {
    com.goldline.pagedriver();
}, false);