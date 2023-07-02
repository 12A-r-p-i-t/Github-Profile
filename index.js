function handleClick() {
    var username = document.querySelector("input").value
    console.log(username)
    var url = "https://api.github.com/users/" 
    url += username 
    document.querySelector("input").value = "" 
    const fetchPromise = fetch(url) 
    fetchPromise
        .then((response) => {
            if(!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            console.log(response)
        })   
        .catch((error) => {
            console.error(`could not get output : ${error}`)
        })
}
