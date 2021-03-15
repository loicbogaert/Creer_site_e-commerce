var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response2 = JSON.parse(this.responseText)

    }
};


request.open("GET", "http://localhost:2000/api/cameras");
request.send();