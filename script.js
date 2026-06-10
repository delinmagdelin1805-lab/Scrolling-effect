/* Select Hidden Elements */

const hiddenElements =
    document.querySelectorAll(".hidden");

/* Scroll Observer */

const observer =
    new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

/* Observe Each Card */

hiddenElements.forEach((element) => {

    observer.observe(element);

});