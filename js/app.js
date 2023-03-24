const container = document.getElementsByClassName("container");

function showSocial(){
    const social = document.getElementById("social");
    container[0].className="container showSocial";
    social.style.opacity=1;
};

function showSpecial(){
    const special = document.getElementById("special");
    container[0].className="container showSpecial";
    special.style.opacity=1;
};

function showFamily(){
    const family = document.getElementById("family");
    container[0].className="container showFamily";
    family.style.opacity=1;
};