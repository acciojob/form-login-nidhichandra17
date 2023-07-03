function getFormvalue() {
  // Get the form element by its ID
  var form = document.getElementById("form1");
  
  // Get the values of the first and last name inputs
  var firstName = form.fname.value;
  var lastName = form.lname.value;
  
  // Display the values using an alert
  alert(firstName + " "+ lastName);
  
  // Prevent the form from submitting and refreshing the page
  return false;
}