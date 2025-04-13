document.getElementById("copyBtn").addEventListener("click",function(){let e=document.getElementById("scriptBox");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),showPopup("Script copied to clipboard!")});const androidBtn=document.getElementById("androidBtn"),iosBtn=document.getElementById("iosBtn");function showPopup(e){let t=document.createElement("div");t.className="popup",t.textContent=e,document.body.appendChild(t),setTimeout(()=>{t.remove()},3e3)}androidBtn.addEventListener("click",function(){document.getElementById("scriptBox").value='loadstring(game:HttpGet('https://raw.githubusercontent.com/yazuskii/a/refs/heads/main/SCRIPT'))()',androidBtn.classList.add("selected"),iosBtn.classList.remove("selected")}),iosBtn.addEventListener("click",function(){document.getElementById("scriptBox").value='loadstring(game:HttpGet('https://raw.githubusercontent.com/yazuskii/a/refs/heads/main/SCRIPT'))()", true))()',iosBtn.classList.add("selected"),androidBtn.classList.remove("selected")}),document.getElementById("discordBtn").addEventListener("click",function(){navigator.clipboard.writeText("https://discord.gg/qDUbkpNFPu").then(()=>{showPopup("Discord Server Link Has Been Copied To Your Clipboard!")})}),document.getElementById("petSupportedBtn").addEventListener("click",function(){let e=`
        Pet Supported List:
        - Diamond Butterfly
        - Blazing Lion
        - Evil Unicorn
        - Crow
        - Owl
        - Frost Dragon
        - Giraffe
        - Shadow Dragon
        - Bat Dragon
    `;alert(e)});
