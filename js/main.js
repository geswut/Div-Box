// function setcolor() {
// var elements = document.getElementsByName("cssProperty")
//   for (var i = 0; i < elements.length; i++) {
//
//   var myproperty = elements[i].getAttribute("id")
//   var myvalues = elements[i].value;
//   var div = document.getElementById("mydiv")
//   div.style[myproperty] = myvalues
//   // console.log (myproperty, myvalues)
// }
// }
// document.getElementById("btn").addEventListener("click", setcolor);



// function setColor() {
//   var element = document.getElementsByName("cssProperty")
//
//   for (var i = 0 ; i < element.length; i++) {
//     var MyProperty = element[i].getAttribute("id")
//     var MyValue = element[i].value;
//     var div = document.getElementById("mydiv")
//     div.style[MyProperty] = MyValue
//   }
// }
//
// document.getElementById("btn").addEventListener("click",setColor);



function SetDiv () {
  var sets = document.getElementsByName("cssProperty")
  for (var i = 0 ; i < sets.length; i++) {
    var Myinfo = sets[i].getAttribute("id")
    var myValue = sets[i].value

    var div = document.getElementById("mydiv")

    div.style[Myinfo] = myValue;
  }
}

document.getElementById("btn").addEventListener("click", SetDiv)
