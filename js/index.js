
function changeFeed(evt, feedName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(feedName).style.display = "block";
    evt.currentTarget.className += " active";
    //console.log("JODER SI");
  }




document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar-container');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale:'es',
    plugins: [ 'interaction', 'dayGrid', 'timeGrid' ],
    defaultView: 'dayGridMonth',
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [
      {
        title: 'Evento 1',
        start: '2020-06-01',
        url: '#'
      },
      {
        title: 'Evento 2',
        start: '2020-06-07',
        url: '#'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2020-05-09T16:00:00',
        url: '#'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2020-05-16T16:00:00',
        url: '#'
      },
      {
        title: 'Conference',
        start: '2020-05-11',
        end: '2020-05-13',
        url: '#'
      },
      {
        title: 'Meeting',
        start: '2020-05-12T10:30:00',
        end: '2020-05-12T12:30:00',
        url: '#'
      },
      {
        title: 'Lunch',
        start: '2020-05-12T12:00:00',
        url: '#'
      },
      {
        title: 'Meeting',
        start: '2020-06-12T14:30:00',
        url: '#'
      },
      {
        title: 'Birthday Party',
        start: '2020-06-13T07:00:00',
        url: '#'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2020-06-28'
      }
    ]
  });

  calendar.render();
});




  //function ()