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
  btn.addEventListener("click", function() {
    let counter = listItemCounter++;
    let div1 = document.createElement("div");
    div1.classList.add("boxes");
    document.body.appendChild(div1);
    let list = document.getElementsByClassName("boxes");
    for (var i = 0; i < list.length; i++) {
      list[i].setAttribute("id", "box-" + i);
      let divList = document.createTextNode("id = box-" + i)
      div1.appendChild(divList)
      document.body.appendChild(div1)
    }

    // 1.




    // div1.addEventListener("mouseover", function(p) {
    //     console.log(p.target);
            
    //     div1.addEventListener("mouseout", function() {
    //       this.style.color = "black";
        // });
    // });
  });
});
