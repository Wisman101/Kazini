$(document).ready(()=>{
    $(".closebtn").click(()=>{
        document.getElementById("navbar").style.width = "0";
        document.body.style.gridTemplateColumns = "0fr 1fr";
    })
    $("#dropdown").click(()=>{
        document.getElementById("navbar").style.width = "20%";
        document.body.style.gridTemplateColumns = "1fr 4fr";
    })

})