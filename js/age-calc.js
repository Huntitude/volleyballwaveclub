$(document).ready(function () {
    // Hide all division elements on page load
    $('div[id^="under-"]').hide();

    // Get current year and season
    const today = new Date();
    const currentYear = today.getFullYear();
    const seasonYear = today.getMonth() >= 6 ? currentYear : currentYear - 1; // Season starts July 1

    // Update season text
    $('#season-year').text(`${seasonYear}-${seasonYear + 1}`);
    $('#season-header').text(`${seasonYear}-${seasonYear + 1} Season`);

    // Update copyright year
    $('#copyright-year').text(currentYear);

    // Define divisions with dynamic date ranges
    const divisions = [
        {
            age: 18,
            startYear: seasonYear - 19, // July 1, 2005 for 2024-2025
            endYear: seasonYear - 17,   // June 30, 2007
            waiverYear: seasonYear - 17,// July 1, 2007
            waiver17Year: seasonYear - 16 // July 1, 2008
        },
        { age: 17, startYear: seasonYear - 17, endYear: seasonYear - 16 },
        { age: 16, startYear: seasonYear - 16, endYear: seasonYear - 15 },
        { age: 15, startYear: seasonYear - 15, endYear: seasonYear - 14 },
        { age: 14, startYear: seasonYear - 14, endYear: seasonYear - 13 },
        { age: 13, startYear: seasonYear - 13, endYear: seasonYear - 12 },
        { age: 12, startYear: seasonYear - 12, endYear: seasonYear - 11 },
        { age: 11, startYear: seasonYear - 11, endYear: seasonYear - 10 },
        { age: 10, startYear: seasonYear - 10, endYear: seasonYear - 9 },
        { age: 9, startYear: seasonYear - 9, endYear: seasonYear - 8 },
        { age: 8, startYear: seasonYear - 8, endYear: seasonYear - 7 }
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

    // Get birth date from input
    const birthDateInput = $('#birth_date').val();
    if (!birthDateInput) {
        $('.invalid-date').show();
        return;
    }

    // Parse birthday and normalize to midnight UTC
    const birthday = new Date(birthDateInput);
    birthday.setHours(0, 0, 0, 0); // Remove time component
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today

    // Validate date
    if (isNaN(birthday.getTime()) || birthday > today) {
        $('.invalid-date').show();
        return;
    }

    // Get current season year (season starts July 1)
    const seasonYear = today.getMonth() >= 6 ? today.getFullYear() : today.getFullYear() - 1;

    // Define division date ranges
    const divisions = [
        {
            age: 18,
            start: new Date(seasonYear - 19, 6, 1), // July 1, 2005
            end: new Date(seasonYear - 17, 5, 30)   // June 30, 2007
        },
        { age: 17, start: new Date(seasonYear - 17, 6, 1), end: new Date(seasonYear - 16, 5, 30) },
        { age: 16, start: new Date(seasonYear - 16, 6, 1), end: new Date(seasonYear - 15, 5, 30) },
        { age: 15, start: new Date(seasonYear - 15, 6, 1), end: new Date(seasonYear - 14, 5, 30) },
        { age: 14, start: new Date(seasonYear - 14, 6, 1), end: new Date(seasonYear - 13, 5, 30) },
        { age: 13, start: new Date(seasonYear - 13, 6, 1), end: new Date(seasonYear - 12, 5, 30) },
        { age: 12, start: new Date(seasonYear - 12, 6, 1), end: new Date(seasonYear - 11, 5, 30) },
        { age: 11, start: new Date(seasonYear - 11, 6, 1), end: new Date(seasonYear - 10, 5, 30) },
        { age: 10, start: new Date(seasonYear - 10, 6, 1), end: new Date(seasonYear - 9, 5, 30) },
        { age: 9, start: new Date(seasonYear - 9, 6, 1), end: new Date(seasonYear - 8, 5, 30) },
        { age: 8, start: new Date(seasonYear - 8, 6, 1), end: new Date(seasonYear - 7, 5, 30) }
    ];

    // Normalize division dates to midnight UTC
    divisions.forEach(div => {
        div.start.setHours(0, 0, 0, 0);
        div.end.setHours(0, 0, 0, 0);
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

    // Show "no division" message if no match found
    if (!matched) {
        $('.divNone').show();
    }
}