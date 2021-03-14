import helloCounter2 from 'ic:canisters/helloCounter2';

helloCounter2.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
