//Global function//

setInterval(function() {
    console.log("Testing of anonomous function")
}, 3000);



setInterval(() => {
    console.log("Testing Using Lamda/Arrow Function")
}, 3000);


let testing = function(){
    console.log("testing for parametrise function")
};


setInterval(testing , 3000);