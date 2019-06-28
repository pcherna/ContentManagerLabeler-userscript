// ==UserScript==
// @name         ContentManager Labeler
// @namespace    http://cherna.com/
// @version      1.0
// @description  Label the login page and the menu-bar of each Content Manager, based on its hostname or your chosen name_substitution
// @author       Peter Cherna
// @match        http://*/ContentManager/*
// @match        https://*/ContentManager/*
// @grant        none
// ==/UserScript==

// A set of hostname: displayname pairs. For any listed hostname, use displayname instead as the label.
var name_substitutions = {
    "123.45.67.89": "My Customer",
    "cm.example.com": "Other Customer"
};

function brandContentManager() {
    var hostname = window.location.hostname;
    if (hostname in name_substitutions) {
        hostname = name_substitutions[hostname];
    }
    try {
        // On the login page, hunt the "Scala Enterprise Content Manager" text,
        // and replace it if needed, centering it too.
        var login_element = document.getElementsByClassName("login")[0];
        if (typeof login_element !== "undefined") {
            var product_element = login_element.getElementsByTagName("h1")[0];
            if (product_element.innerText != hostname) {
                product_element.setAttribute("align", "center");
                product_element.innerText = hostname;
            }
        }
    } finally {
        try {
            // On the other pages, hunt the menu-bar "ContentManager" text,
            // and replace it if needed.
            var title_element = document.getElementsByClassName(
                "appNameLeft"
            )[0];
            if (typeof title_element !== "undefined") {
                if (title_element.innerText != hostname) {
                    title_element.innerText = hostname;
                }
            }
        } finally {
            window.setTimeout(brandContentManager, 2000);
        }
    }
}

window.setTimeout(brandContentManager, 2000);
