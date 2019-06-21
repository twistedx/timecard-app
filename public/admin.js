
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
            console.log(r);
            sessionStorage.setItem('token', r.token);
            console.log(`this is the call of seession storage: ${sessionStorage.getItem('token')}`);
        })
        .catch(e => console.error('ERROR: ', e));
    }



    //view profile
    viewProfile = () => { //put the user id in the fetch url
        fetch('/api/user/5d0c237c9923b70a70571f7e', {
            method: 'GET',
            header: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + sessionStorage.getItem('token')
            }
        }).then(r => r.text())
        .then(r => {
            console.log(r);
        })
        .catch(e => console.error('ERROR: ', e));
    }



    //create new job
    newJob = () => {
        // return alert({
        //     name: document.getElementById('njfName').value,
        //     jobType: document.getElementsByClassName('njfJobType').value,
        //     role: document.getElementById('njfRole').value,
        //     description: document.getElementById('njfDes').value
        // });
        
        // alert(newJobObj);

        // fetch('/api/auth', {
        //     method: 'POST',
        //     body: logval,
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(r => {
        //     console.log(r);
        //     return r.json();
        // })
        // .then(r => {
        //     console.log(r);
        //     sessionStorage.setItem('token', r.token);
        //     console.log(`this is the call of seession storage: ${sessionStorage.getItem('token')}`);
        // })
        // .catch(e => console.error('ERROR: ', e));
    }