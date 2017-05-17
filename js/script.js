$(document).ready (function () {
  
  function get_timer() {
    var date_new = "May 18, 2017 18:40";        // Дата окончания акции 
    var date_timer = new Date(date_new);
    var date = new Date();                      // Сегодняшняя дата
    var timer = date_timer - date;              // Разница дат в милисек.
        if(date_timer > date) {
        	  //day
          var day = parseInt (timer/(24*60*60*1000));
              if(day < 10) {
              	  day = '0' + day;	  
              }
              day = day.toString();
              //hours
          var hour = parseInt (timer/(60*60*1000))% 24;
              if(hour < 10) {
              	  hour = '0' + hour;	  
              }
              hour = hour.toString();
              //minutes 
          var min = parseInt (timer/(60*1000))% 60;
              if(min < 10) {
              	  min = '0' + min;	  
              }
              min = min.toString();
              //sec 
          var sec = parseInt (timer/(1000))% 60;
              if(sec < 10) {
              	  sec = '0' + sec;	  
              }
              sec = sec.toString();    
               /*         Вывод таймера           */
              //$("#clock").html('<span id="stop_timer">' + day + ":" + hour + ":" + min + ":" + sec +'</span>');

              /*        Animation timer         */

              ///////////// Animation day //////////////

              if(day[1] == 9 && hour[0] == 2 && hour[1] == 3 && min[0] == 5 && min[1] == 9 && sec[0] == 5 && sec[1] == 9) {
                animation($("#day0"), day[0]);
              } else {
                $("#day0").html(day[0]);
              }

              if(hour[0] == 2 && hour[1] == 3 && min[0] == 5 && min[1] == 9 && sec[0] == 5 && sec[1] == 9) {
                animation($("#day1"), day[1]);
              } else {
                $("#day1").html(day[1]);
              }
              //////////////  Animation hour //////////////
              if(hour[1] == 3 && min[0] == 5 && min[1] == 9 && sec[0] == 5 && sec[1] == 9) {
                animation($("#hour0"), hour[0]);
              } else {
                $("#hour0").html(hour[0]);
              }

              if(min[0] == 5 && min[1] == 9 && sec[0] == 5) { 
                $("#hour1").html(hour[1]);
              } else {
                $('#hour1').html(hour[1]);
              }
                    /*     minits       */
              if(min[1] == 9 && sec[0] == 5 && sec[1] == 9) {
                animation($('#min0'), min[0]);
              } else {
                $('#min0').html(min[0]);
              }

              if(sec[0] == 5 && sec[1] == 9) {
                animation($('#min1'), min[1]); 
              } else {
                $('#min1').html(min[1]);
              }

              /*     Second       */

              if(sec[1] == 9) {
                animation($('#sec0'), sec[0]); 
              } else{
                $('#sec0').html(sec[0]);
              }

              animation($('#sec1'), sec[1]);    
                                                            //Units sec     
              /*    second end     */

          setTimeout(get_timer, 1000);                   //показывал каждую секунду
        }
        else {
        	$("#clock")
            .html('<span id="stop_timer">Отсчет закончен!!!</span>');
        }
  }

  function animation(time, parameter) {
    time.html(parameter)
        .css({'marginTop':'-20px','opacity':'0'})
        .animate({'marginTop':'0','opacity':'1'});
  }
  get_timer();
});