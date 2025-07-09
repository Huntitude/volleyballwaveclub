$(document).ready(function () {
    // Hide all division elements on page load
    $('div[id^="under-"]').hide();
    $('.invalid-date').hide();
    $('.divNone').hide();
});

function ageCalculate() {
    // Reset all division displays
    $('div[id^="under-"]').hide(); // Hide all divisions
    $('.invalid-date, .divNone').hide(); // Hide invalid date and 'no division' messages

    // Get birth date from input
    const birthDateInput = $('#birth_date').val();
    if (!birthDateInput) {
        $('.invalid-date').text('Please enter a birth date.').show();
        return;
    }

    const [y, m, d] = birthDateInput.split('-').map(Number);
    const birthday = new Date(Date.UTC(y, m - 1, d));
    birthday.setUTCHours(0, 0, 0, 0); // Set to midnight UTC

    // Validate the date
    if (isNaN(birthday.getTime())) {
        $('.invalid-date').text('Invalid date format. Please use MM/DD/YYYY.').show();
        return;
    }

    const today = new Date();
    today.setUTCHours(0, 0, 0, 0); // Set current date to midnight UTC
    if (birthday > today) {
        $('.invalid-date').text('Birth date cannot be in the future.').show();
        return;
    }

    // Static divisions as you originally intended
    const divisions = [
        { age: 18, start: new Date('2006-07-01'), end: new Date('2008-06-30') },
        { age: 17, start: new Date('2008-07-01'), end: new Date('2009-06-30') },
        { age: 16, start: new Date('2009-07-01'), end: new Date('2010-06-30') },
        { age: 15, start: new Date('2010-07-01'), end: new Date('2011-06-30') },
        { age: 14, start: new Date('2011-07-01'), end: new Date('2012-06-30') },
        { age: 13, start: new Date('2012-07-01'), end: new Date('2013-06-30') },
        { age: 12, start: new Date('2013-07-01'), end: new Date('2014-06-30') },
        { age: 11, start: new Date('2014-07-01'), end: new Date('2015-06-30') },
        { age: 10, start: new Date('2015-07-01'), end: new Date('2016-06-30') },
        { age: 9, start: new Date('2016-07-01'), end: new Date('2017-06-30') },
        { age: 8, start: new Date('2017-07-01'), end: new Date('2018-06-30') }
    ];

    // Normalize division dates to midnight UTC
    divisions.forEach(div => {
        div.start.setUTCHours(0, 0, 0, 0);
        div.end.setUTCHours(0, 0, 0, 0);
    });

    // Find the matching division
    let matched = false;
    for (const div of divisions) {
        if (birthday >= div.start && birthday <= div.end) {
            $(`.div${div.age}`).show(); // Show matched division
            matched = true;
            break;
        }
    }

    // Show "no division" message if no match
    if (!matched) {
        $('.divNone').show();
    }
}

