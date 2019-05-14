// Your code goes here

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
    event.preventDefault();
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

  function findWithAttr(array, attr, value) {
    console.log(value)
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            i = i + 1
            return array[i]["destination"]
        }
    }
    return -1;
}

  let img_name = findWithAttr(siteImgs, 'destination', document.querySelector("#dest-img").alt); // returns 1
  console.log(img_name)


  // slideIndex++;
  // if (slideIndex > x.length) {slideIndex = 1} 
  // x[slideIndex-1].style.display = "block"; 

  // document.addEventListener('keydown', function(event) {
  //   if (event.code == 'ShiftRight' || 'ShiftLeft') {
  //   }
  // });
}


document.getElementById("destination-imgs").addEventListener("wheel", zoom);

function myFunction() {
  this.style.fontSize = "35px";
}

// drag / drop

  let currentDroppable = null;

  bus.onmousedown = function(event) {

    let shiftX = event.clientX - bus.getBoundingClientRect().left;
    let shiftY = event.clientY - bus.getBoundingClientRect().top;

    bus.style.position = 'absolute';
    bus.style.zIndex = 1000;
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

      let droppableBelow = elemBelow.closest('body');
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
function modLogo(tag) {
  let x = document.querySelector('.logo-heading').textContent + " - " + tag;
  document.querySelector('.logo-heading').innerHTML = x;
}
window.onload = (event) => {
  modLogo("ready to go!");
};

// scroll
function revertLogo() {
  if (document.body.scrollTop > .5 || document.documentElement.scrollTop > .5) {
    document.querySelector('.logo-heading').textContent = "Fun Bus"
  } else {
    modLogo("ready to go!");
  }
}
document.addEventListener("scroll", revertLogo);

// another scroll event

function navBus() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    var elem = document.getElementById("bus");
    elem.style.position = "fixed";
    elem.style.left = '50rem'
    elem.style.top = '0rem' 
    elem.style.width = '18rem'
    elem.style.zIndex = '4'
  } else {
    
  }
}
document.addEventListener("scroll", navBus);


// dblclick
function zoomZoom(){
  console.log('dbl')
  document.getElementById("bus").classList.toggle('bus-go');
}
document.querySelector(".logo-heading").addEventListener("dblclick", zoomZoom);
