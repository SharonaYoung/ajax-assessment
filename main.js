const user = document.querySelector("#user");
const search = document.querySelector("#search");

// add event listener for submit button
document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();
  console.log('button clicked');
  // get the value from the input
  console.log(user.value);
  // clear the input box
  user.value = " ";
});