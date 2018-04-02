/* Klo user klik tombol dia bakalan muncul */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction2(){
	document.getElementById("myDropdown2").classList.toggle("show");
}
function myFunction3(){
	document.getElementById("myDropdown3").classList.toggle("show");
}
function myFunction4(){
	document.getElementById("myDropdown4").classList.toggle("show");
}

/* Ini Bikinan GUe sendiri */
function fungsigue1(){
	document.getElementById("dropdown1").classList.toggle("show")
}
function fungsigue2(){
	document.getElementById("dropdown2").classList.toggle("show")
}
function fungsigue3(){
	document.getElementById("dropdown3").classList.toggle("show")
}
function fungsigue4(){
	document.getElementById("dropdown4").classList.toggle("show")
}
function fungsigue5(){
	document.getElementById("dropdown5").classList.toggle("show")
}
function fungsigue6(){
	document.getElementById("dropdown6").classList.toggle("show")
}
function fungsigue7(){
	document.getElementById("dropdown7").classList.toggle("show")
}
function fungsigue8(){
	document.getElementById("dropdown8").classList.toggle("show")
}

// Tutup DropDown klo klik di luar
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 

/* Modal */