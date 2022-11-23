function validateForm() {
  let fname = document.forms["myForm"]["fname"].value; // .value means get whatever value is in the input box
  if (fname == "") {
    alert("Name must be filled out");
    return false;
  }


  let y = document.getElementById("myForm");
  let z = document.getElementById("myForm").getAttribute("action")
  let newatt = z + "?subject=Feedback";
  alert(newatt);
  y.setAttribute.action = newatt;
  window.open(newatt);

}