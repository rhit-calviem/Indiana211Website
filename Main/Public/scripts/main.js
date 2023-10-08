 // JavaScript code for handling the nested dropdown
 var menu = document.getElementById("menu");
 var caseManagerDropdown = document.getElementById("caseManagersDropdown");
 var caseManagerOptions = document.getElementById("caseManagerOptions");

 // Hide the nested dropdown initially
 caseManagerDropdown.style.display = "none";

 // Show the nested dropdown when the "Case Managers" option is selected
 menu.addEventListener("change", function() {
     if (menu.value === "case_managers") {
         caseManagerDropdown.style.display = "block";
     } else {
         caseManagerDropdown.style.display = "none";
     }
 });