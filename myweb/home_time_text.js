function getTextFile(){
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "text/plan";
    input.onchange = function (event){
        processFile(event.target.files[0]);
    };
    input.click();
}

function processFile(file){
    var reader = new FileReader();
    reader.readAsText(file, "utf-8");

    reader.onload = function(){
        document.getElementsById("secret-note").InnerText = reader.result;
        }
}