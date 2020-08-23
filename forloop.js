window.addEventListener("load",() => 
{

    let elemenet = document.querySelector("#id1");
    
    let newelement = document.querySelector("#id1").cloneNode(true);

    for(let i=0;i<4; i++){

   elemenet.insertBefore(newelement,elemenet.firstChild[0]);

    };

});