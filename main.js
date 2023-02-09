// variables for html elements
const inputEl = document.querySelector('#input');
const search = document.querySelector('#search');
const form = document.querySelector('form');

// add event listener for submit button
form.addEventListener('submit', event => {
    event.preventDefault();
    // get the value from the input
    console.log(inputEl.value);
    // clear the input box
    inputEl.value = " ";
  });

// fetch data from github api using async function
async function fetchProfile() {
  try{
    const res = await fetch(`https://api.github.com/users/sharonayoung`);
    const data = await res.json();
    console.log(data);
  }
  catch{}
}
fetchProfile();

// function to render profile information