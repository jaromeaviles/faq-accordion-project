const lists = document.querySelectorAll(".list-group li");
let dropdown = document.querySelectorAll(".dropdown-content p");
let img = document.querySelectorAll(".dropbtn img");
let questions = document.querySelectorAll(".question");

for (let i = 0; i < lists.length; i++) {
  lists[i].onclick = function () {
    var setClasses = !this.classList.contains("active-list");
    setClass(lists, "active-list", "remove");
    setClass(dropdown, "show", "remove");
    setClass(img, "expand", "remove");
    setClass(questions, "bold", "remove");

    if (setClasses) {
      this.classList.toggle("active-list");
      let question = this.children[0].children[0];
      question.classList.toggle("bold");
      let icon = this.children[0].children[1];
      icon.classList.toggle("expand");
      let dropContent = this.children[1].children[0];
      dropContent.classList.toggle("show");
    }
  };

  function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
      els[i].classList[fnName](className);
    }
  }
}
