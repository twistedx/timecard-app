
//welcome message
    alert('Fuck Off');



    // login
    login = () => {
        let logval = document.getElementById('log').value;
        console.log(logval);

        fetch('/api/auth', {
            method: 'POST',
            body: logval,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(r => {
            console.log(r);
            return r.json();
        })
        .then(r => {
            console.log(r)
        })
        .catch(e => console.error('ERROR: ', e));
    }



    //view profile
    viewProfile = () => {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("viewProfile").innerHTML =
                this.responseText;
              }};
        xhttp.open("GET", "/api/user", true);
        xhttp.send();
    }