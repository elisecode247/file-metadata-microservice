// reference: https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects

var form = document.forms.namedItem("uploadForm");

form.addEventListener('submit', function(ev) {
    var oOutput = document.getElementById("output")
    var oData = new FormData(form);
    var oReq = new XMLHttpRequest();
    oReq.open("POST", "/api/", true);
    oReq.onload = function(oEvent) {
        if (oReq.status == 200) {
            oOutput.innerHTML = oReq.responseText;
        }
        else {
            oOutput.innerHTML = "Error " + oReq.status + " occurred when trying to upload your file.<br \/>";
        }
    };
    oReq.send(oData);
    ev.preventDefault();
}, false);