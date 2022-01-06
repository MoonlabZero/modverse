function navFunction() {
    // Creates header with an ID of pageHeader
    var head = document.createElement("header");
    head.setAttribute("id", "pageHeader");
    document.body.appendChild(head);

    // Creates logo index link
    var navA = document.createElement("a");
    navA.setAttribute("href", "index");

    // Creates site logo
    var navAImg = document.createElement("img");
    navAImg.setAttribute("class", "logo");
    navAImg.setAttribute("src", "modverse.png");
    navA.appendChild(navAImg);

    //creates the nav element
    var navNav = document.createElement("nav");

    //Creates ul element
    var navUl = document.createElement("ul");
    navUl.setAttribute("class", "navlinks");
    navNav.appendChild(navUl);

    //Creates the first li element
    var navLi1 = document.createElement("li");
    navNav.appendChild(navLi1);

    //Creates the second li element
    var navLi2 = document.createElement("li");
    navNav.appendChild(navLi2);

    //Creates the third li element
    var navLi3 = document.createElement("li");
    navNav.appendChild(navLi3);

    //Creates the mod page reference link and puts it in first li
    var navALi1 = document.createElement("a");
    var navALi1T = document.createTextNode("Mods");
    navALi1.setAttribute("id", "mnt");
    navALi1.setAttribute("href", "mods");
    navALi1.appendChild(navALi1T);
    navLi1.appendChild(navALi1);
    navUl.appendChild(navLi1);
    
    //Creates the about page reference link and puts it in second li
    var navALi2 = document.createElement("a");
    var navALi2T = document.createTextNode("About");
    navALi2.setAttribute("id", "ant");
    navALi2.setAttribute("href", "about");
    navALi2.appendChild(navALi2T);
    navLi2.appendChild(navALi2);
    navUl.appendChild(navLi2);

    //Creates the contact page reference link and puts it in third li
    var navALi3 = document.createElement("a");
    var navALi3T = document.createTextNode("Contact");
    navALi3.setAttribute("id", "cnt");
    navALi3.setAttribute("href", "contact");
    navALi3.appendChild(navALi3T);
    navLi3.appendChild(navALi3);
    navUl.appendChild(navLi3);

    //Creates a link to upload page
    var navA2 = document.createElement("a");
    navA2.setAttribute("href", "upload");

    //Creates the upload mod button and attaches to the upload a element 
    var navBtn = document.createElement("button");
    var navBtnT = document.createTextNode("Upload Mod");
    navBtn.setAttribute("id", "upbtn");
    navA2.appendChild(navBtn);
    navBtn.appendChild(navBtnT);

    //Adds elements to header
    document.getElementById("pageHeader").appendChild(navA);
    document.getElementById("pageHeader").appendChild(navNav);
    document.getElementById("pageHeader").appendChild(navA2);

    //Creates the links for font
    var fontPC1 = document.createElement("link");
    fontPC1.setAttribute("rel", "https://fonts.googleapis.com");
    var fontPC2 = document.createElement("link");
    fontPC2.setAttribute("rel", "https://fonts.gstatic.com");
    var fontM = document.createElement("link");
    fontM.setAttribute("href", "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
    fontM.setAttribute("rel", "stylesheet");
    
    //Adds elements to heads
    document.head.appendChild(fontM);
    document.head.appendChild(fontPC1);
    document.head.appendChild(fontPC2);

    //Changes nav text to be highlighted when on page
    if ( document.URL.includes("mods") ) {
        document.getElementById("mnt").style.color = "hsl(200, 100%, 50%)";
    } else if ( document.URL.includes("about") ) {
        document.getElementById("ant").style.color = "hsl(200, 100%, 50%)";
    } else if ( document.URL.includes("contact") ) {
        document.getElementById("cnt").style.color = "hsl(200, 100%, 50%)";
    }
}
