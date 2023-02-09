// variables for html elements
const inputEl = document.querySelector("#input");
const search = document.querySelector("#search");

// add event listener for submit button
document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();
  // get the value from the input
  console.log(user.value);
  // clear the input box
  user.value = " ";
});

// fetch data from github api using async function

// function to render profile information