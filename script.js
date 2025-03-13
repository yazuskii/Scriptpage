document.getElementById("copyBtn").addEventListener("click", function() {
    let scriptBox = document.getElementById("scriptBox");
    scriptBox.select();
    scriptBox.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");

    alert("Script copied to clipboard!");
});

document.getElementById("androidBtn").addEventListener("click", function() {
    document.getElementById("scriptBox").value = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/XScripts2025/AdoptMe/main/Scripts", true))()';
});

document.getElementById("iosBtn").addEventListener("click", function() {
    document.getElementById("scriptBox").value = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/realredz/DEX-Explorer/refs/heads/main/Mobile.lua"))()';
});
