const accordionHeads = document.getElementsByClassName("accordion-head");
Array.from(accordionHeads).forEach((accordionHeadItem) => {
    const accordion = accordionHeadItem.parentElement;
    const accordionMain = accordionHeadItem.nextElementSibling;
    accordionMain.style.height = 0;
    window.addEventListener("resize", () => {
        if(accordion.classList.contains("active")) {
            accordionMain.style.height = "auto";
            accordionMain.style.height = accordionMain.scrollHeight + "px";
        }
    });
    accordionHeadItem.addEventListener("click", () => {
        const accordionMainHight = accordionMain.scrollHeight;
        if(accordion.classList.contains("active")) {
            accordion.classList.remove("active");
            accordionMain.style.height = 0;
        } else {
            accordion.classList.add("active");
            accordionMain.style.height = accordionMainHight + "px";
        }
    });
});
