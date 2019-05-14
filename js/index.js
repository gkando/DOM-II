// Your code goes here


// document.querySelector(".nav").addEventListener("mouseover", function(event){
//     console.log(event.target.text);
//   });

// mouseover
  let currentElem = null;
  document.querySelector(".nav").onmouseover = function(event) {
    if (currentElem) {
      return;
    }
    let target = event.target.closest('.nav-link');
    if (!target || !document.querySelector(".nav").contains(target)) return;
    currentElem = target;
    target.style.background = 'pink';
  };

  document.querySelector(".nav").onmouseout = function(event) {
    // if we're outside of any '.nav-link now, then ignore the event
    if (!currentElem) return;
    let relatedTarget = event.relatedTarget;
    if (relatedTarget) {
      while (relatedTarget) {
        if (relatedTarget == currentElem) return;
        relatedTarget = relatedTarget.parentNode;
      }
    }
    currentElem.style.background = '';
    currentElem = null;
  };

// keydown
  function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

  document.addEventListener('keydown', function(event) {
    if (event.code == 'ShiftRight' || 'ShiftLeft') {
      document.querySelector("html").style.backgroundColor = getRandomColor()
    }
  });
  
// wheel
let siteImgs = [
  {destination: "rome", src: "img/rome.jpg"},
  {destination: "ireland", src: "img/ireland.jpg"},
  {destination: "venice", src: "img/venice.jpg"},
]

function zoom(event) {
  event.preventDefault();
  var i;
  //get current bg name 
 

  function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}
findWithAttr(siteImgs, 'destination', 'rome'); // returns 1

  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 

  document.addEventListener('keydown', function(event) {
    if (event.code == 'ShiftRight' || 'ShiftLeft') {
      document.querySelector("html").style.backgroundColor = getRandomColor()
    }
  });
  el.style.transform = `scale(${scale})`;
}

// const el = document.querySelector('div');
// el.onwheel = zoom;


// drag / drop

  let currentDroppable = null;

  bus.onmousedown = function(event) {

    let shiftX = event.clientX - bus.getBoundingClientRect().left;
    let shiftY = event.clientY - bus.getBoundingClientRect().top;

    bus.style.position = 'absolute';
    bus.style.zIndex = 1000;
    bus.style.width = "50% !important";
    document.body.append(bus);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      bus.style.left = pageX - shiftX + 'px';
      bus.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);

      bus.hidden = true;
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      bus.hidden = false;

      if (!elemBelow) return;

      let droppableBelow = elemBelow.closest('.droppable');
      if (currentDroppable != droppableBelow) {
        if (currentDroppable) {
          leaveDroppable(currentDroppable);
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) {
          enterDroppable(currentDroppable);
        }
      }
    }

    document.addEventListener('mousemove', onMouseMove);

    bus.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      bus.onmouseup = null;
    };

  };

  function enterDroppable(elem) {
    elem.style.background = 'pink';
  }

  function leaveDroppable(elem) {
    elem.style.background = '';
  }

  bus.ondragstart = function() {
    return false;
  }

// load

// focus

// resize

// scroll

// select

// dblclick


// document.addEventListener('keydown', logKey);
// function logKey(e) {
//     log.textContent += ` ${e.code}`;
//   }


// // Map
//   google.charts.load('current', {
//     'packages':['geochart'],
//     // Note: you will need to get a mapsApiKey for your project.
//     // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
//     'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
//   });
//   google.charts.setOnLoadCallback(drawRegionsMap);

//   function drawRegionsMap() {
//     var data = google.visualization.arrayToDataTable([
//       ['Country', 'Price'],
//       ['Germany', 300],
//       ['Italy', 300],
//       ['Spain', 400],
//       ['Portugal', 500],
//       ['France', 600],
//       ['Romania', 250],
//       ['Sweden', 250],
//       ['Finland', 250],
//       ['Norway', 250],
//       ['Denmark', 250],
//       ['Belgium', 250],
//       ['United Kingdom', 950]
//     ]);

//     var options = {displayMode: 'auto', legend: 'none', region: 150};

//     var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

//     chart.draw(data, options);
//   }