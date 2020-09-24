window.onload = getData();




function getData(){
    document.querySelector('.ajax').addEventListener('click', function(){
        var input = document.forms[0].elements[0].value;
        var url = 'http://192.168.1.70:3001/test/ajax';
        var inputData = {'id' : input}
        inputData = JSON.stringify(inputData);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', "application/json");
        xhr.send(inputData);


        xhr.addEventListener('load', function(){
            console.log(xhr.responseText);

            var result = JSON.parse(xhr.responseText);
            if(result.result != "ok") return ;
            var resultData = "Result : " + result.result + " ID : " + result.id;
            document.querySelector(".result").innerHTML = resultData;
        });



    })
}