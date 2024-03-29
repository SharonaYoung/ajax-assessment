// variables for html elements
const inputEl = document.querySelector('#input');
const form = document.querySelector('form');
const profileEl = document.querySelector('#profile');

// fetch data from github api using async function
async function fetchProfile(user) {
  try{
    const res = await fetch(`https://api.github.com/users/${user}`);
    const data = await res.json();
    console.log(data);
    showProfile(data);
  }
  catch(error){
    console.log(error);
  }
}

// add event listener for submit button
form.addEventListener('submit', event => {
  event.preventDefault();
  // get the value from the input
  const username = inputEl.value;
  // clear the input box
  inputEl.value = '';
  fetchProfile(username);
});

// function to render profile information
const showProfile = (profile) =>{
  const details = `
    <img src=${profile.avatar_url} alt="profile image" />
    <h2>${profile.name}</h2>
    <hr />
    <ul>
      <li>Username: <br /> ${profile.login}</li>
      <li>Company: <br /> ${profile.company}</li>
      <li>Location: <br />${profile.location}</li>
      <li>Followers: <br />${profile.followers}</li>
      <li>Following: <br />${profile.following}</li>
    </ul>
  `
  profileEl.classList.add('container');
  profileEl.innerHTML=details;
}