  $(document).ready(function () {
    $("#contact").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact-contaciner").offset().top
        }, 1000);
    });

    $("#my-team").click(function () {
        $('html, body').animate({
            scrollTop: $("#my-team-container").offset().top
        }, 1000);
    });

    $("#my-publications").click(function () {
        $('html, body').animate({
            scrollTop: $("#my-publications-container").offset().top
        }, 1000);
    });

    // Script to embed the recent news section.
    $.getJSON("../config/activities.json", function (Activities) {
        var html = '<ul style="max-width: 850px;" class="justify-text">';
        for (var i = 0; i < Activities.showOnMainPage - 1; i++) {
            html += `<li>${Activities.activities[i].text} <span class="small-text"> ${Activities.activities[i].date} </span> </li>`;
        }
        html += '</ul>';
        $('#recent-activities').append(html);

        // Script to embed all news section 
        var html = '<ul style="max-width: 850px;" class="justify-text">';
        for (var i = Activities.showOnMainPage; i < Activities.activities.length; i++) {
            html += `<li>${Activities.activities[i].text} <span class="small-text"> ${Activities.activities[i].date} </span> </li>`;
        }
        html += '</ul>';
        $('#all-activities').append(html);
    });

    $.getJSON("../config/publications.json", function (Publications) {
        // Script to embed each publication
        for (let i = 0; i < Publications.length; i++) {
            var html = `${Publications[i].text}`;
            if (Publications[i].preprintLink) {
                html += ` <a href="${Publications[i].preprintLink}"target="_blank">(preprint)</a>`;
            }
            if (Publications[i].onlineLink) {
                html += ` <a href="${Publications[i].onlineLink}"target="_blank">(online)</a>`;
            }
            if(Publications[i].description) {
                html += `<div class="publication_description"><i> ${Publications[i].description} </i></div>`;
            }
            $('#publication_' + Publications[i].index).append(html);
            $('.publication_' + Publications[i].index).append(html);
        }
    });

});
