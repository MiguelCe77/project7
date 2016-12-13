var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color) {
  var newrect = document.createElementNS(namespace,"rect");
  newrect.setAttribute("fill",color);
  newrect.setAttribute("y",y);
  newrect.setAttribute("x",x);
  newrect.setAttribute("width",size);
  newrect.setAttribute("height",size);
  canvas.appendChild(newrect);
}

function drawCircle(x, y, size, color) {
  var newcircle = document.createElementNS(namespace,"circle");
  newcircle.setAttribute("fill",color);
  newcircle.setAttribute("cy",y);
  newcircle.setAttribute("cx",x);
  newcircle.setAttribute("r",size);
  canvas.appendChild(newcircle);
}

// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  // what do you want to do when the user presses down
  // on the mouse button?
})

document.addEventListener("mouseup", function(e) {

})

document.addEventListener("mousemove", function(e) {
    var pt = transformPoint(e, screen)
    var xpos = pt.x
    var ypos = pt.y
    var newcircle = document.createElementNS(namespace,"circle")
    newcircle.setAttribute("cx", pt.x)
    newcircle.setAttribute("cy", pt.y)
    newcircle.setAttribute("fill", document.getElementById("colorSelect").value)
    newcircle.setAttribute("r", "25")
    screen.appendChild(newcircle)
})
