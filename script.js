const lists = document.querySelectorAll(".list-group li");
let dropdown = document.querySelectorAll(".dropdown-content p");
let img = document.querySelectorAll(".dropbtn img");
let questions = document.querySelectorAll(".question");

// Loop through list to get each list item
for (let i = 0; i < lists.length; i++) {
  // Adds click event for specific list
  lists[i].onclick = function () {
    // Checks if list contains class of active-list added ! means false
    // Basically setClasses variable will now contain list item that DOES NOT contain active-list class
    var setClasses = !this.classList.contains("active-list");
    // Use the setClass function here that created below. The setClass function will accept 3 arguments.
    setClass(lists, "active-list", "remove");
    setClass(dropdown, "show", "remove");
    setClass(img, "expand", "remove");

    // This will run if setClasses variable is true
    if (setClasses) {
      this.classList.toggle("active-list");
      let icon = this.children[0].children[1];
      icon.classList.toggle("expand");
      let dropContent = this.children[1].children[0];
      dropContent.classList.toggle("show");
    }
  };
}

// This where the magic happens.
function setClass(els, className, fnName) {
  for (var i = 0; i < els.length; i++) {
    els[i].classList[fnName](className);
  }
}
