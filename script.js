// Copy script functionality
document.getElementById("copyBtn").addEventListener("click", function() {
    let scriptBox = document.getElementById("scriptBox");
    scriptBox.select();
    scriptBox.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");

    alert("Script copied to clipboard!");
});

// Platform button functionality
const androidBtn = document.getElementById("androidBtn");
const iosBtn = document.getElementById("iosBtn");

androidBtn.addEventListener("click", function() {
    document.getElementById("scriptBox").value = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/XScripts2025/AdoptMe/main/Scripts", true))()';
    androidBtn.classList.add("selected"); // Add green background
    iosBtn.classList.remove("selected"); // Remove green background from the other button
});

iosBtn.addEventListener("click", function() {
    document.getElementById("scriptBox").value = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/XScripts2025/AdoptMe/main/Scripts", true))()';
    iosBtn.classList.add("selected"); // Add green background
    androidBtn.classList.remove("selected"); // Remove green background from the other button
});
