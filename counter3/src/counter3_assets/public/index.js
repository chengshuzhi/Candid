import counter3 from 'ic:canisters/counter3';

counter3.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
