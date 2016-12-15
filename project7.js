var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"


var drawing = false
var eraserOn = false


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
  drawing = true
})

document.addEventListener("mouseup", function(e) {
  drawing = false
})

  if (document.getElementById("eraserSelect").value == "white"){
    eraserOn = true
  }

document.addEventListener("mousemove", function(e) {

    var pt = transformPoint(e, screen)
    var xpos = pt.x
    var ypos = pt.y
    var newcircle = document.createElementNS(namespace,"circle")
    var newrect = document.createElementNS(namespace,"rect")
    var colorSelected = document.getElementById("colorSelect").value
    var shapeSelected = document.getElementById("shapeSelect").value
    var sizeSelected =  document.getElementById("sizeSelect").value

      if (drawing == true) {

      //Circle
      newcircle.setAttribute("cx", pt.x)
      newcircle.setAttribute("cy", pt.y)
      newcircle.setAttribute("fill", colorSelected)
      newcircle.setAttribute("r", sizeSelected)

      //Rectangle
      newrect.setAttribute("x", pt.x)
      newrect.setAttribute("y", pt.y)
      newrect.setAttribute("fill", colorSelected)
      newrect.setAttribute("width", sizeSelected)
      newrect.setAttribute("height", sizeSelected)

      if (shapeSelected == "circle") {
        screen.appendChild(newcircle)
      }

      else if (shapeSelected == "square") {
        screen.appendChild(newrect)
      }
      }

      if (eraserOn == true){
          newrect.setAttribute("fill", document.getElementById("colorSelect").value)

      }
    })
