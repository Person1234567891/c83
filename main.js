var canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

canvas.addEventListener("mousedown", myMouseDown)
function myMouseDown(e){
    MouseEvent = "mousedown"
    console.log("mousedown")
}
canvas.addEventListener("mouseleave", myMouseLeave)
function myMouseLeave(e){
    MouseEvent = "mouseleave"
    console.log("mouseleave")
}
canvas.addEventListener("mouseup", myMouseUp)
function myMouseUp(e){
    MouseEvent = "mouseup"
    console.log("mouseup")
}
canvas.addEventListener("mousemove", myMouseMove)
function myMouseMove(e){
    console.log("mousemove")
    var endX = e.clientX-canvas.offsetLeft 
    var endY = e.clientY-canvas.offsetTop 
    if(MouseEvent == "mousedown"){
        var color = document.getElementById("Color").value 
        console.log("mousemove + mousedown")
        ctx.beginPath();
        ctx.linewidth = 1
        ctx.strokeStyle = color
        ctx.moveTo(startX, startY)
        ctx.lineTo(endX, endY)
        ctx.stroke();
    }
    startX = endX
    startY = endY
}