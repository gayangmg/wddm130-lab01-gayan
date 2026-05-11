function getInfo(){

    //alert("Testing GetInfo");
    let name = prompt("Enter Name: ");
    let favFood = prompt("Fav Food: ");

    if(name == "" || favFood == ""){//either input is empty
        document.getElementById("secId").innerHTML=`<h2>Input Empty<h2/>`
    }else{
        document.getElementById("secId").innerHTML=
        `<h2>My Name is ${name}. I like ${favFood}</h2>`
    }
}