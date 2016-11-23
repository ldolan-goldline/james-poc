//namespaces
var com = com || {};
com.goldline = com.goldline || {};
com.goldline.pagedriver = function() {
    //This area will function on page load
    
    var myNumber = 2 + 4;
    var myNumberVm = new com.goldline.vm('myNumber');
    myNumberVm.updateInner(true, myNumber);
    
    
    
    var currDate = new Date();
    var currDay = currDate.getDate();
    var currMonth = currDate.getMonth() + 1;
    var currYear = currDate.getFullYear();
    var currHour = currDate.getHours();
    var currMinute = currDate.getMinutes();
    var currAmPm = currHour >= 12 ? 'pm' : 'am';
    
    if( currDay < 10 ) { currDay = '0' + currDay; }  
    if( currMonth < 10 ) { currMonth ='0' + currMonth; }    
    if( currMinute < 10 ) { currMinute = '0' + currMinute}
    if( currHour > 12) { currHour -= 12; }

    var myDateTime = currMonth +'/'+ currDay +'/'+ currYear +' '+ currHour +":"+ currMinute +' '+ currAmPm;
    var myDateTimeVm = new com.goldline.vm('myDateTime');
    myDateTimeVm.updateInner(true, myDateTime);


};

document.addEventListener('DOMContentLoaded', function() {
    com.goldline.pagedriver();
}, false);