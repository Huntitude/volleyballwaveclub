// Hide all Division Elements  
$(document).ready(function(){
    $('div[id^="under-"]').hide();
})

function ageCalculate() {
    // birthDate value from input 
    var userInputDob = document.getElementById("birth_date").value;
    console.log("Userinput: " + new Date(userInputDob).addDays(1).at("12:00am"))

    if(userInputDob==null || userInputDob==''){
        $('div[id^="under-"]').hide();
        $('.invalid-date').show();
    }

    var dob = new Date(userInputDob).addDays(1).at("12:00am")
    var today = new Date();

    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff); 
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    // console.log("Age is " + age + " years.")

    var dob_compare = new Date(userInputDob).addDays(1);

    // division 8 
    var division8_start = Date.parse("July 1st, 2014");
    var division8_end = Date.parse("June 30th, 2015");

    // division 9
    var division9_start = Date.parse("July 1st, 2013");
    var division9_end = Date.parse("June 30th, 2014");

    // division 10
    var division10_start = Date.parse("July 1st, 2012");
    var division10_end = Date.parse("June 30th, 2013");

    // division 11
    var division11_start = Date.parse("July 1st, 2011");
    var division11_end = Date.parse("June 30th, 2012");

    // division 12
    var division12_start = Date.parse("July 1st, 2010");
    var division12_end = Date.parse("June 30th, 2011");
    
    // division 13
    var division13_start = Date.parse("July 1st, 2009");
    var division13_end = Date.parse("June 30th, 2010");
    
    // division 14
    var division14_start = Date.parse("July 1st, 2008");
    var division14_end = Date.parse("June 30th, 2009");

    // division 15
    var division15_start = Date.parse("July 1st, 2007");
    var division15_end = Date.parse("June 30th, 2008");
    
    // division 16
    var division16_start = Date.parse("July 1st, 2006");
    var division16_end = Date.parse("June 30th, 2007");
    
    // division 17
    var division17_start = Date.parse("July 1st, 2005");
    var division17_end = Date.parse("June 30th, 2006");
    
    // division 18
    var division18_start = Date.parse("July 1st, 2003");
    var division18_end = Date.parse("June 30th, 2005");


    if(dob_compare > division8_start || dob_compare < division18_start){
        $('div[id^="under-"]').hide();
        $('.divNone').show();
    }


    if(dob_compare >= division8_start && dob_compare <= division8_end){
        $('div[id^="under-"]').hide();
        $('.div8').show();
    }
    if(dob_compare >= division9_start && dob_compare <= division9_end){
        $('div[id^="under-"]').hide();
        $('.div9').show();
    }
    if(dob_compare >= division10_start && dob_compare <= division10_end){
        $('div[id^="under-"]').hide();
        $('.div10').show();
    }
    if(dob_compare >= division11_start && dob_compare <= division11_end){
        $('div[id^="under-"]').hide();
        $('.div11').show();
    }
    if(dob_compare >= division12_start && dob_compare <= division12_end){
        $('div[id^="under-"]').hide();
        $('.div12').show();
    }
    if(dob_compare >= division13_start && dob_compare <= division13_end){
        $('div[id^="under-"]').hide();
        $('.div13').show();
    }
    if(dob_compare >= division14_start && dob_compare <= division14_end){
        $('div[id^="under-"]').hide();
        $('.div14').show();
    }
    if(dob_compare >= division15_start && dob_compare <= division15_end){
        $('div[id^="under-"]').hide();
        $('.div15').show();
    }
    if(dob_compare >= division16_start && dob_compare <= division16_end){
        $('div[id^="under-"]').hide();
        $('.div16').show();
    }
    if(dob_compare >= division17_start && dob_compare <= division17_end){
        $('div[id^="under-"]').hide();
        $('.div17').show();
    }
    if(dob_compare >= division18_start && dob_compare <= division18_end){
        $('div[id^="under-"]').hide();
        $('.div18').show();
    }
    
}

