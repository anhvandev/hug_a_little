// Mobile menu toggle

document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    mobileMenuButton?.addEventListener("click", function () {
        mobileMenu?.classList.toggle("active");
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (event) {
        if (
            mobileMenu &&
            mobileMenu?.contains(event.target) &&
            event.target !== mobileMenuButton
        ) {
            mobileMenu.classList.remove("active");
        }
    });

    // Tab functionality
    const tabs = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
        tab.addEventListener("click", function () {
            // Remove active class from all tabs and contents
            tabs.forEach((t) => t.classList.remove("active"));
            tabContents.forEach((c) => c.classList.remove("active"));

            // Add active class to clicked tab
            this.classList.add("active");

            // Show corresponding content
            const contentId = this.id.replace("-tab", "-content");
            document.getElementById(contentId).classList.add("active");
        });
    });
});