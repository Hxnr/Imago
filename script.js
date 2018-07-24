function displayImages() {
    var x = document.getElementById("displaylogin");
    var y = document.getElementById("allimagescontainer");
    if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none"; 
    } else {
        y.style.display = "none";
        x.style.display = "block"; 
    }
}

function toggleHome() {
    var x = document.getElementById("displaylogin");
    var y = document.getElementById("allimagescontainer");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block"; 
    } 
}

document.getElementById("defaultOpen").click();
 function myFunction(id) {
     var x = document.getElementById(id);
     if (x.className.indexOf("w3-show") == -1) {
         x.className += " w3-show";
         x.previousElementSibling.className += " w3-theme-d1";
     } else {
         x.className = x.className.replace("w3-show", "");
         x.previousElementSibling.className =
             x.previousElementSibling.className.replace(" w3-theme-d1", "");
     }
 }

 function openTabType(evt, TabType) {
     // Declare all variables
     var i, tabcontent, tablinks;

     // Get all elements with class="tabcontent" and hide them
     tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
     }

     // Get all elements with class="tablinks" and remove the class "active"
     tablinks = document.getElementsByClassName("tablinks");
     for (i = 0; i < tablinks.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" active", "");
     }

     // Show the current tab, and add an "active" class to the button that opened the tab
     document.getElementById(TabType).style.display = "block";
     evt.currentTarget.className += " active";
 }

 // New Images Tab
 var modalNew = document.getElementById('mCxNew');
 var imagesNew = document.getElementsByClassName('imagemCxNew');
 var modalImgNew = document.getElementById("imIDxNew");
 var captionTextNew = document.getElementById("captionNew");
 for (var i = 0; i < imagesNew.length; i++) {
     var img = imagesNew[i];
     img.onclick = function(evt) {
         modalNew.style.display = "block";
         modalImgNew.src = this.src;
         captionTextNew.innerHTML = this.alt;
     }
 }
 var span = document.getElementsByClassName("closeNew")[0];
 span.onclick = function() {
     modalNew.style.display = "none";
 }

 // Trend Images Tab
 var modalTrend = document.getElementById('mCxTrend');
 var imagesTrend = document.getElementsByClassName('imagemCxTrend');
 var modalImgTrend = document.getElementById("imIDxTrend");
 var captionTextTrend = document.getElementById("captionTrend");
 for (var i = 0; i < imagesTrend.length; i++) {
     var img = imagesTrend[i];
     img.onclick = function(evt) {
         modalTrend.style.display = "block";
         modalImgTrend.src = this.src;
         captionTextTrend.innerHTML = this.alt;
     }
 }
 var span = document.getElementsByClassName("closeTrend")[0];
 span.onclick = function() {
     modalTrend.style.display = "none";
 }

refresh_handler = function (e) {
    var elements = document.querySelectorAll("*[realsrc]");
    for (var i = 0; i < elements.length; i++) {
        var boundingClientRect = elements[i].getBoundingClientRect();
        if (elements[i].hasAttribute("realsrc") && boundingClientRect.top < window.innerHeight) {
            elements[i].setAttribute("src", elements[i].getAttribute("realsrc"));
            elements[i].removeAttribute("realsrc");
        }
    }
};

window.addEventListener('scroll', refresh_handler);
window.addEventListener('load', refresh_handler);

$('.message .tct').click(function(){
    $('.formconnect').animate({height: "toggle", opacity: "toggle"}, "slow");
 });

$('.nav-link').on('click', function(){
    $('#navbarTogglerDemo02').collapse('hide');
});
