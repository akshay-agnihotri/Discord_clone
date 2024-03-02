const body = document.querySelector("body");
const navbarSection = document.querySelector(".navbar_section");
const originalBgColor = navbarSection.style.backgroundColor;


let lastScrollTop = 0;

function scrollListener() {
    // console.log(body.scrollTop);
    const scrollTop = body.scrollTop;

    if (scrollTop > 0) {
        // Scrolling down
        navbarSection.style.backgroundColor = "#5865F2";
    } else {
        // Scrolling up
        navbarSection.style.backgroundColor = "#404EED";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}

body.addEventListener("scroll", scrollListener);



