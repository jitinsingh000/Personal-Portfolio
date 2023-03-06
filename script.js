/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    let x = document.getElementById("navbar-ul");
    let n = document.getElementById("navbar");
    // if (x.style.display === "block") {
    if (x.style.display === "flex") {
        x.style.display = "none";
        
    } else {
        // x.style.display = "block";
        x.style.display = "flex";
    }
}