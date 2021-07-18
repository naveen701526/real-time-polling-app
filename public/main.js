const form = document.getElementById('vote-form');

// form submit event
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
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  //   prevents the page from relaoading after you submit the form
  e.preventDefault();
});

let datapoints = [
  { label: 'Windows', y: 0 },
  { label: 'MacOs', y: 0 },
  { label: 'Linux', y: 0 },
  { label: 'Other', y: 0 },
];

const chartContainer = document.querySelector('#chartContainer');

if (chartContainer) {
  const chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    theme: 'theme1',
    title: {
      text: 'OS Results',
    },
    data: [
      {
        type: 'column',
        dataPoints: dataPoints,
      },
    ],
  });
  
  chart.render();
}
