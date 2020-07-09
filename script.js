window.onload = function() {

    /*the sections of the documentation*/
    const sections = document.querySelectorAll(".main-section");

    /*the <ul> of the navbar*/
    const navUl = document.querySelector("#navbar ul")

    const createNavLinks = () => {
        for(let i = 0; i < sections.length; i++) {
            /*id of the section, for the nav item to reference to*/
            let linkHref = sections[i].getAttribute("id");

            /*the header of the section, to name the nav item*/
            let title = sections[i].querySelector("header h2").innerHTML;
            

            /*create an <a> element, add it the href attribute from the id of the section, add the class nav-link, 
            set the content to the heading of the section, append it to a <li> element, and push it to the nav <ul> list
            */
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.setAttribute("href", `#${linkHref}`);
            a.classList.add("nav-link");
            a.innerHTML = title;
            li.appendChild(a);
            let element = li;

            navUl.appendChild(element);
        }
    }

    createNavLinks()

}