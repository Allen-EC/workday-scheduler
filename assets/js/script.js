var todayDisplayEl = $('#currentDay');


function displayTime()
{
    var rightNow = moment().format('dddd, Do MMMM YYYY');
    todayDisplayEl.text(rightNow);
}

