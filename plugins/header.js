export default defineNuxtPlugin(() => {
    // Sticky Header
    let navbar = document.querySelector(".navbar");

    if (navbar) {
        // Add an event listener to the window for when it is scrolled
        window.addEventListener('scroll', function() {
            // Check if the page has been scrolled more than 20 pixels
            if (window.scrollY > 20) {
                // Add the "sticky" class to the header
                navbar.classList.add("stay-sticky");
            } else {
                // Remove the "sticky" class from the header
                navbar.classList.remove("stay-sticky");
            }
        });
    }
})