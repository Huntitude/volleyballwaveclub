$(document).ready(function () {
    // Hide all division elements on page load
    $('div[id^="under-"]').hide();
    $('.invalid-date').hide();
    $('.divNone').hide();

    // Get current year and season (season starts July 1)
    const today = new Date();
    const currentYear = today.getFullYear();
    const seasonYear = today.getMonth() >= 6 ? currentYear : currentYear - 1;

    // Update copyright year
    $('#copyright-year').text(currentYear);

    // Define divisions with dynamic date ranges and waiver years for 18 & Under
    const divisions = [
        {
            age: 18,
            startYear: seasonYear - 18, // e.g., 2006 for 2024-2025
            endYear: seasonYear - 16,   // e.g., 2008
            waiverYear: seasonYear - 17,// e.g., 2007
            waiver17Year: seasonYear - 16 // e.g., 2008
        },
        { age: 17, startYear: seasonYear - 16, endYear: seasonYear - 15 },
        { age: 16, startYear: seasonYear - 15, endYear: seasonYear - 14 },
        { age: 15, startYear: seasonYear - 14, endYear: seasonYear - 13 },
        { age: 14, startYear: seasonYear - 13, endYear: seasonYear - 12 },
        { age: 13, startYear: seasonYear - 12, endYear: seasonYear - 11 },
        { age: 12, startYear: seasonYear - 11, endYear: seasonYear - 10 },
        { age: 11, startYear: seasonYear - 10, endYear: seasonYear - 9 },
        { age: 10, startYear: seasonYear - 9, endYear: seasonYear - 8 },
        { age: 9, startYear: seasonYear - 8, endYear: seasonYear - 7 },
        { age: 8, startYear: seasonYear - 7, endYear: seasonYear - 6 }
    ];

    // Update division descriptions with dynamic years
    divisions.forEach(div => {
        $(`.start-year-${div.age}`).text(div.startYear);
        $(`.end-year-${div.age}`).text(div.endYear);
        if (div.age === 18) {
            $('.waiver-year').text(div.waiverYear);
            $('.waiver-17').text(div.waiver17Year);
        }
    });
});

function ageCalculate() {
    // Reset all division displays
    $('div[id^="under-"]').hide();
    $('.invalid-date').hide();
    $('.divNone').hide();

    // Get birth date from input
    const birthDateInput = $('#birth_date').val();
    if (!birthDateInput) {
        $('.invalid-date').text('Please enter a birth date.').show();
        return;
    }

    // Parse birthday as UTC to avoid time zone issues
    const [year, month, day] = birthDateInput.split('-').map(Number);
    const birthday = new Date(Date.UTC(year, month - 1, day)); // month - 1 because JS months are 0-based
    birthday.setUTCHours(0, 0, 0, 0);

    // Get current date and normalize to midnight UTC
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    // Validate date
    if (isNaN(birthday.getTime())) {
        $('.invalid-date').text('Invalid date format. Please use MM/DD/YYYY.').show();
        return;
    }
    if (birthday > today) {
        $('.invalid-date').text('Birth date cannot be in the future.').show();
        return;
    }

    // Get current season year (July 1 to June 30)
    const seasonYear = today.getMonth() >= 6 ? today.getFullYear() : today.getFullYear() - 1;

    // Define division date ranges (aligned with logic)
    const divisions = [
        { age: 18, start: new Date(Date.UTC(seasonYear - 18, 6, 1)), end: new Date(Date.UTC(seasonYear - 16, 5, 30)) }, // July 1, 2006 - June 30, 2008
        { age: 17, start: new Date(Date.UTC(seasonYear - 16, 6, 1)), end: new Date(Date.UTC(seasonYear - 15, 5, 30)) }, // July 1, 2008 - June 30, 2009
        { age: 16, start: new Date(Date.UTC(seasonYear - 15, 6, 1)), end: new Date(Date.UTC(seasonYear - 14, 5, 30)) }, // July 1, 2009 - June 30, 2010
        { age: 15, start: new Date(Date.UTC(seasonYear - 14, 6, 1)), end: new Date(Date.UTC(seasonYear - 13, 5, 30)) }, // July 1, 2010 - June 30, 2011
        { age: 14, start: new Date(Date.UTC(seasonYear - 13, 6, 1)), end: new Date(Date.UTC(seasonYear - 12, 5, 30)) }, // July 1, 2011 - June 30, 2012
        { age: 13, start: new Date(Date.UTC(seasonYear - 12, 6, 1)), end: new Date(Date.UTC(seasonYear - 11, 5, 30)) }, // July 1, 2012 - June 30, 2013
        { age: 12, start: new Date(Date.UTC(seasonYear - 11, 6, 1)), end: new Date(Date.UTC(seasonYear - 10, 5, 30)) }, // July 1, 2013 - June 30, 2014
        { age: 11, start: new Date(Date.UTC(seasonYear - 10, 6, 1)), end: new Date(Date.UTC(seasonYear - 9, 5, 30)) },  // July 1, 2014 - June 30, 2015
        { age: 10, start: new Date(Date.UTC(seasonYear - 9, 6, 1)), end: new Date(Date.UTC(seasonYear - 8, 5, 30)) },   // July 1, 2015 - June 30, 2016
        { age: 9, start: new Date(Date.UTC(seasonYear - 8, 6, 1)), end: new Date(Date.UTC(seasonYear - 7, 5, 30)) },    // July 1, 2016 - June 30, 2017
        { age: 8, start: new Date(Date.UTC(seasonYear - 7, 6, 1)), end: new Date(Date.UTC(seasonYear - 6, 5, 30)) }     // July 1, 2017 - June 30, 2018
    ];

    // Normalize division dates to midnight UTC
    divisions.forEach(div => {
        div.start.setUTCHours(0, 0, 0, 0);
        div.end.setUTCHours(0, 0, 0, 0);
    });

    // Find matching division
    let matched = false;
    for (const div of divisions) {
        if (birthday >= div.start && birthday <= div.end) {
            $(`.div${div.age}`).show();
            matched = true;
            break;
        }
    }

    // Handle no division (before July 1, 2006 or after June 30, 2018)
    if (!matched) {
        $('.divNone').show();
    }
}