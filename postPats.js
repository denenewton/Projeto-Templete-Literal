var request = new XMLHttpRequest();

request.onreadystatechange = function(){
    let output="";
    if(this.readyState == 4 && this.status == 200){
        let response = request.responseText;
        console.log(response);
    }
}
request.open('GET',"../petsData.json", true);
 
request.send();
