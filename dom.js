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
      let j = 1
          div1.setAttribute("id", 'box- ' + j++);

    div1.addEventListener("mouseover", function(ev) {
      let boxID = ev.target.id;
      let div1Text = document.createTextNode(boxID);
      div1.appendChild(div1Text);
      document.body.appendChild(div1);
      div1.addEventListener("mouseout", function(ev) {
        this.removeChild(div1Text);
      });
    });
  });
});
 // Square Hover objective
 