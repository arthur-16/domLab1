document.addEventListener("DOMContentLoaded", function() {
  let listItemCounter = 1;
  let btn = document.createElement("button");
  let btnText = document.createTextNode("Add Square");
  btn.appendChild(btnText);
  document.body.appendChild(btn);
  let btnDiv = document.createElement("div");
  btn.appendChild(btnDiv);
  document.body.appendChild(btnDiv);
  let divCounter = 0;
  btn.addEventListener("click", function(e) {
    let counter = listItemCounter++;
    let div1 = document.createElement("div");
    div1.classList.add("boxes");
    document.body.appendChild(div1);
    var i = ((j = 1), counter);
    div1.setAttribute("id", "box- " + i);
    var colors = [
      "black",
      "green",
      "red",
      "blue",
      "yellow",
      "purple",
      "orange"
    ];
    div1.addEventListener("click", function() {
      let rand = Math.floor(Math.random() * 7);
      div1.style.backgroundColor = colors[rand];
    });
    div1.addEventListener("dblclick", function() {
      let even = (i % 2 === 0)
      let odd = (i & 2 != 0)
      if (even) {
        div1.remove()
      }
      if (odd) {
        div1.lastChild.remove()
      }
    }
  )
  });
});
// Square Hover objective
// Remove element objective
// div1.addEventListener("mouseover", function(ev) {
//   let boxID = ev.target.id;
//   let div1Text = document.createTextNode(boxID);
//   div1.appendChild(div1Text);
//   document.body.appendChild(div1);
//   div1.addEventListener("mouseout", function(ev) {
//     this.removeChild(div1Text);
//   });
// });
