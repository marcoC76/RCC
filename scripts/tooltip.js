// Adds a tooltip to any element with a tooltip attribute.
// Ex - <p tooltip="Some text">Hello</p>
// Hovering over the <p> element above will show a tooltip.

var elements = document.querySelectorAll(".card *");
var tooltipEl = document.querySelector(".tooltip");

for(var i = 0; i < elements.length; i++) {
  var el = elements[i];

  el.addEventListener("mouseenter", function(e){
    showTip(this);
  });

  el.addEventListener("mouseleave", function(e){
    hideTip(this);
  });
}

document.addEventListener("mousemove",function(e){
  var x = e.clientX;
  var y = e.clientY;
  positionTip(x,y);
});

// Positions the tooltip relative to the
// x,y coordinates of the mouse
function positionTip(x,y){
  tooltipEl.style.left = x + 10 + "px";
  tooltipEl.style.top = y - 40 + "px";  
}

// Shows the tooltip & change the text
function showTip(el){
  if(!el.hasAttribute("tooltip")) { return }
  var tooltipText = el.getAttribute("tooltip");
  tooltipEl.style.display = "block";
  tooltipEl.innerText = tooltipText;
}

// Hide the tooltip
function hideTip(el){
  if(!el.hasAttribute("tooltip")) { return }
  tooltipEl.style.display = "none";
}
