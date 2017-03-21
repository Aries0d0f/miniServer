$("#userDir").hide();
$("#submit").html('<p>Choose Your Local Project Directory</p>');
$(document).ready(function () {
    var userDir = '';
    $("#submit").click(function () {
        $("#userDir").click();
    });
    $("#userDir").change(function () {
        readfichier();
        $("#location").append('Directory Path: ' + userDir);
        $("#submit").html('<p>Creat Server</p>');
        $("#summit").toggleClass("choosed");
    });
});

function readfichier(e) {
    var dir = e.target;
    var reader = new FileReader();
    var path = reader.readAsDataURL(userDir);
    console.log(path);
    return path;
}