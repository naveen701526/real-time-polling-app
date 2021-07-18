const form = document.getElementById('vote-form');

form.addEventListener('submit', (e) => {
  //   select the choice which the user has marked
  const choice = document.querySelector('input[name=os]:checked').value;

  //   store the value of choice in data variable
  const data = { os: choice };

  //   make a post request on submit using fetch api
  fetch('http://localhost:3000/poll', {
    method: 'post',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });

  //   prevents the page from relaoading after you submit the form
  e.preventDefault();
});
