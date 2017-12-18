

myApp.module2 = {
  doSomething(){
    console.log('called module1 doSomething function');
  }

}

(() => {
  myApp.mainGreeting();

  myApp.module1.saySomething('sup');

  function myFunc() {
    var theHeading = document.querySelector('h1');

    theHeading.textContent = myApp.mainMessage;


  }

  myFunc();
});
