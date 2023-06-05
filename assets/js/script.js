
$(window).on("load", function () {
  headerToday = dayjs().format("dddd, MMMM Do") 
  $("#current-day").text(headerToday)
  setInterval(function() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if(h == 0){
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + m + ":" + s;


    document.getElementById("Clock").textContent = time;
    
  }, 1000);
    

  function makeHours(nowTime){
    for(index = 0; index < 24; index++){
      let curHour = index
      if (nowTime < curHour){
        whenFromNow = "future"
      }
      else if (nowTime > curHour){
        whenFromNow = "past"
      }
      else {
        whenFromNow = "present"
      }
      let labelZ = $('<div id="hour-' + curHour + '"' + ' class="row time-block ' + whenFromNow + '"></div>')
      let timeZ = $('<div class="col-2 col-md-1 hour text-center py-3" id="time-text-box">' + curHour + '</div>')
      let textZ = $('<textarea class="col-8 col-md-10 description" rows="3"></textarea>')
      let btnZ = $('<button class="btn saveBtn col-2 col-md-1" aria-label="save"></button>')
      let iZ = $('<i class="fas fa-save" aria-hidden="true"></i>')
      $(labelZ).append(timeZ)
      $(labelZ).append(textZ)
      $(labelZ).append(btnZ)
      $(btnZ).append(iZ) 

      $(mainContainer).append(labelZ)
    }
    
  }
  mainContainer = $("#time-container")
  timeRightNow = dayjs().hour()
  makeHours(timeRightNow)

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? 

  });
  