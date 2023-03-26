const container = document.getElementsByClassName("container");
document.addEventListener("DOMContentLoaded", function(e) {
    const family = document.getElementById("family");
    family.style.opacity=1;
});
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

function labelAnimation(id){
    const element = document.getElementById(id+'_label');
    element[0].className="labelAnimation";
    
}

$('[data-option]').on('click', function(event){
    var optionId = event.target.id;
    const element = document.getElementById(optionId+'_label');
    element.className="labelAnimation";
    console.log(element);
})

const labels = document.querySelectorAll(".form_control label");

labels.forEach((label) => {
  label.innerHTML = label.innerHTML

    .split("")

    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )

    .join("");
});
