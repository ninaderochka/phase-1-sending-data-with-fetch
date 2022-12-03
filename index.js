// Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users" , {

    method: "POST",

        headers: { 
            "Content-Type" : 'application/json',
            Accept : 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        } )
    } )
    .then (function (res) {
        return res.json()
    })

    .then (function(newObject) {
        document.body.innerHTML = newObject["id"]
      })
      .catch((e) => {
        document.body.innerHTML = "Unauthorized Access";
})}



