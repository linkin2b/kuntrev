fetch('nav.html')
.then(res => res.text())
.then(text => {
    let oldElem = document.querySelector("script#replace_with_navbar");
    let newElem = document.createElement("div");
    newElem.innerHTML = text;
    oldElem.parentNode.replaceChild(newElem, oldElem);
    function rotateElemDown() {
        document.querySelector('.navimg').style.cssText += `
            transform: rotate(90deg);
            transform-origin: 0% 60%;
          `;
    }

    function rotateElemUp() {
        document.querySelector('.navimg').style.cssText += `
            transform: rotate(0deg);
          `;
    }
    const dropdown = document.getElementById("dropdown");
    dropdown.addEventListener("mouseover", rotateElemDown);
    dropdown.addEventListener("mouseleave", rotateElemUp);
})
