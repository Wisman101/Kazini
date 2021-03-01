$(document).ready(()=>{
    $("#dropdown").click(()=>{
        document.getElementById("navbar").style.width = "0";
        document.body.style.gridTemplateColumns = "0fr 1fr";
    })
})