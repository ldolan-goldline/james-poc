<html>
<head></head>
<body>
    Hello World! It's us, Lance Dolan &amp; James.<br><br>
    
    
    The local time is 
<script type="application/javascript">
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
var hr = today.getHours();
var min = today.getMinutes();
min = ('0' + min).slice(-2);

var ampm = hr >= 12 ? 'pm' : 'am';
    
if( dd<10 ) { dd ='0' + dd; }  
if( mm<10 ) { mm ='0' + mm; }


today = mm +'/'+ dd +'/'+ yyyy;
document.write(today +' '+ hr +':'+ min +' '+ ampm +'.');
</script>
    
</body>
</html>