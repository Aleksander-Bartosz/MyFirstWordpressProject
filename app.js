$(document).ready(function () {
   console.log('kaczka'); 
    
    $('#time').timepicker({
        'showDuration': true,
        'timeFormat': 'g:ia'
    });
    $('#date').datepicker({
        'format': 'm/d/yyyy',
        'autoclose': true
    });
    
});