
input = document.querySelector(".input");
comment = document.querySelector(".text-area");
radio = document.myForm.radio; 
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  flag = false; 

  if (input.value === "" || comment.value === "") {
    if (input.value === "") {
      input.focus();
    } else {
      comment.focus();
    }
    alert("All fields are compulsory");
    return false;
  }
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked == true) {
      flag = true; 
    }
  }
  if (flag == true) {
    return true;
  }
  alert("All fields are compulsory");
  e.preventDefault();
});
