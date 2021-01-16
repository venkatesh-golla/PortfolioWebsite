function mouseOnAbout(x) {
    $("#aboutMenu").addClass("active")
    $("#homeMenu").removeClass("active")
    $("#technologiesMenu").removeClass("active")
    $("#projectMenu").removeClass("active")
    $("#contactMenu").removeClass("active")
 }
 
 function mouseOnHome(x) {
    $("#aboutMenu").removeClass("active")
    $("#homeMenu").addClass("active")
    $("#technologiesMenu").removeClass("active")
    $("#projectMenu").removeClass("active")
    $("#contactMenu").removeClass("active")
 }
 
 function mouseOnTech(x) {
    $("#aboutMenu").removeClass("active")
    $("#homeMenu").removeClass("active")
    $("#technologiesMenu").addClass("active")
    $("#projectMenu").removeClass("active")
    $("#contactMenu").removeClass("active")
 }
 
 function mouseOnProject(x) {
    $("#aboutMenu").removeClass("active")
    $("#homeMenu").removeClass("active")
    $("#technologiesMenu").removeClass("active")
    $("#projectMenu").addClass("active")
    $("#contactMenu").removeClass("active")
 }
 
 function mouseOnContact(x) {
    $("#aboutMenu").removeClass("active")
    $("#homeMenu").removeClass("active")
    $("#technologiesMenu").removeClass("active")
    $("#projectMenu").removeClass("active")
    $("#contactMenu").addClass("active")
 }