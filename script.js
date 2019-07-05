$(document).ready(function() {
    $('#add_form').submit(function() {
        event.preventDefault()
    })
})


function performGetRequest1(){
    var resultElement = document.getElementById('tableResult1');
    resultElement.innerHTML = "";

    axios.get('http://34.87.118.117/passwords')
     .then(function(response){
         console.log("sukses dapat data")
         response.data.forEach(passwordlist => {
            resultElement.innerHTML += generateSuccessTableOutput(passwordlist);
         })
         
     })
     .catch(function(error){
         resultElement.innerHTML = generateErrorHTMLOutput(error);
     })
}

function generateSuccessHTMLOutput(response){
    return '<h4>Result: </h4>' +
            '<h5>Data: </h5>' +
            '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>';
}

function generateSuccessTableOutput(response){
    return '<tr>' +
                '<td>' + response._id + '</td>'+
                '<td>' + response.website + '</td>'+
                '<td>' + response.email + '</td>'+
                '<td>' + response.password + '</td>' +
            '</tr>'

}

function createNewPasswordList () {
    let inputWebsite = $('#inputWebsite').val()
    let inputEmail = $('#inputEmail').val()
    let inputPassword = $('#inputPassword').val()
    console.log('add new', inputWebsite, inputEmail, inputPassword)


    axios.post('http://34.87.118.117/passwords', {website: inputWebsite, email: inputEmail, password: inputPassword})
        .then(function(response){
            console.log("sukses add data");
            // performGetRequest1();
            
        })
        .catch(function(error){
            console.log("error add data");
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        })
}