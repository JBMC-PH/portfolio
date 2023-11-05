export default defineNuxtPlugin(() =>{
    // Function to set a cookie
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        
        // Set the SameSite attribute to 'Strict' or 'Lax'
        var sameSite = "SameSite=Strict";
    
        // Check if the browser supports the 'SameSite=None' attribute
        if (location.protocol === "https:" && ("SameSite" in document.createElement("div").style)) {
            sameSite = "SameSite=None; Secure";
        }
        
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/; " + sameSite;
    }

    // Function to get a cookie
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');

        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];

            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }

            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    // Check if the consent cookie is set
    var consentCookie = getCookie("cookieConsent");
    
    if (consentCookie !== "true") {
        // Show the popup if the consent cookie is not set
        var popup = document.getElementById("popup");
        popup.classList.add("block");
        popup.classList.remove("hidden");

        // Add event listener to the accept button
        var acceptButton = document.getElementById("acceptButton");
        acceptButton.addEventListener("click", function() {
            // Set the consent cookie when the accept button is clicked
            setCookie("cookieConsent", "true", 365);
            popup.classList.add("hidden");
            popup.classList.remove("block");
        });
    } else {
        // Show the popup if the consent cookie is not set
        var popup = document.getElementById("popup");
        popup.classList.add("hidden");
    }
})