//! решение 1
function generator() {
  // BEGIN (write your solution here)
  let alertNumber = 1;
  const button = document.getElementById('alert-generator');

  button.addEventListener('click', () => {
    const container = document.querySelector('.alerts');
    const newTitle = document.createTextNode(`Alert ${alertNumber}`);
    const newAlert = document.createElement('div');
    newAlert.append(newTitle);
    newAlert.classList.add('alert', 'alert-primary');
    alertNumber += 1;
    container.prepend(newAlert);
    console.log(getTree())
  });
  // END
}

generator();


//! решение 2
const button = document.getElementById('alert-generator');
const alertsBox = document.querySelector('.alerts');
let i = 1;
button.addEventListener('click', () => {
  const alert = document.createElement('div');
  alert.classList.add('alert', 'alert-primary');
  alert.textContent = `Alert ${i}`;

  alertsBox.prepend(alert);

  i += 1;
});