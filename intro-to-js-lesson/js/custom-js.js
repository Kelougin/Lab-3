//The first thing we are going to do is make sure that all our html has been rendered
document.addEventListener('DOMContentLoaded', (loaded) =>{
    //Now test to see if our JS is connected
    console.log('Our Js is connected');
    //Now we will look at how to declare a variable in JS
    let a = 200;
    let b = 180;
    let c = a + b;
    //The const is a variable that cannot be changed once the value has been assigned
    const value1 = 500;
    const value2 = 600;
    let total = value1 + value2;
    // now let's look at how we can output our HTML
    document.getElementById("ex1").innerHTML = "<h4>JavaScript Variable</h4>" + "<p>Let: The value of C is "+ c +"</p>"+"<p>Const: The total is:"+ total+"</p>"
    //Well now we can't see our HTML .... Let's style it with JS
    document.getElementById("ex1").style.color = "#f8f8f8";
    document.getElementById("ex1").style.padding = "0% 10%";
    // now let's create our global header
    document.getElementById("lesson-global-header").innerHTML =
        "<div id='logo-container'>" +
            "<a href ='index.html'>" +
        "<img id='logo'src='./img/logo.png' alt='header logo'>" +
        "</a>" +
        "</div>" +
        "<nav><menu>" +
        "<li><a href ='#'>Item 1 </a></li>" +
        "<li><a href ='#'>Item 2 </a></li>" +
        "<li><a href ='#'>Item 3 </a></li>" +
        "</menu></nav>"
    document.getElementById("lesson-global-header").style.cssText = "display: flex; height: 125px; background-color: #f8f8f8; align-items: center;";
    document.getElementById("logo-container").style.cssText = "flex-grow: 1; height: 110px; width: auto;";
    document.getElementById("logo").style.cssText = "width: auto; height: 100%;";
    document.getElementById("Lab3").style.cssText ="display: grid; grid-template-column: 50% 50%; padding: 0px;";
    document.getElementById("img").style.cssText ="height: 50px; width: 50%;";
});
