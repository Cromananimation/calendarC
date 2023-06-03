
$(window).on("load", function () {

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
      let labelEl = $('<div id="hour-' + curHour + '"' + ' class="row time-block ' + whenFromNow + '"></div>')
      let timeEl = $('<div class="col-2 col-md-1 hour text-center py-3" id="time-text-box">' + curHour + '</div>')
      let textEl = $('<textarea class="col-8 col-md-10 description" rows="3"></textarea>')
      let btnEl = $('<button class="btn saveBtn col-2 col-md-1" aria-label="save"></button>')
      let iEl = $('<i class="fas fa-save" aria-hidden="true"></i>')
      $(labelEl).append(timeEl)
      $(labelEl).append(textEl)
      $(labelEl).append(btnEl)
      $(btnEl).append(iEl)
      $(mainContainer).append(labelEl)
    }
    
  }
  console.log("figgity")
  mainContainer = $("#time-container")
  timeRightNow = dayjs().hour()
  makeHours(timeRightNow)

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  