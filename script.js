// document.addEventListener("DOMContentLoaded", function () {
//     console.log("Portfolio Loaded");

//     // Smooth Scrolling
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener("click", function (e) {
//             e.preventDefault();
//             document.querySelector(this.getAttribute("href")).scrollIntoView({
//                 behavior: "smooth"
//             });
//         });
//     });

//     // Dark Mode Toggle
//     const toggleBtn = document.createElement("button");
//     toggleBtn.innerText = "Dark Mode";
//     toggleBtn.style.position = "fixed";
//     toggleBtn.style.top = "10px";
//     toggleBtn.style.right = "10px";
//     document.body.appendChild(toggleBtn);

//     toggleBtn.addEventListener("click", () => {
//         document.body.classList.toggle("dark-mode");
//     });
// });

// // Dark mode styles
// const darkModeStyles = document.createElement("style");
// darkModeStyles.innerHTML = `
//     .dark-mode {
//         background-color: #111;
//         color: #f8f8f8;
//     }
// `;
// document.head.appendChild(darkModeStyles);
document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded");

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Dark Mode Toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        themeToggle.innerText = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
});
