
//welcome message
    alert('Fuck Off');

    let token;



    // login=============================================================================================
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

            ///////////////////////////////////////// once we have this hooked into react we will have to save the token into a state

            console.log(r);
            token = r.token;
            console.log(`
            this is the token stored on the front end: 
            ${token}`);

            // sessionStorage.setItem('token', r.token);
            // console.log(`this is the call of seession storage: ${sessionStorage.getItem('token')}`);
        })
        .catch(e => console.error('ERROR: ', e));
    }



    //view profile======================================================================================
    viewProfile = () => { 
        // console.log(`
        // this is the session storage of your token: 
        // ${sessionStorage.getItem('token')}`);

        console.log(`
        this is the front end storage of your token: 
        ${token}`);

        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        headers['x-auth-token'] = token;

        fetch('/api/user/5d0c237c9923b70a70571f7e', {             //!!!!!!!!put the user id in the fetch url!!!!!!!!!!!!!!!!!!!
            method: 'GET',
            headers
        }).then(r => r.json())
        .then(r => {
            let res = JSON.stringify(r[0]);
            console.log(`this is the second then after profile view fetch 
            ${res}`);
            document.getElementById('viewProfile').innerHTML = res;
        })
        .catch(e => console.error('ERROR: ', e));
    }



    //create new job================================================================================
    newJob = () => {
        //formmatting form responses into payload obj
        let f = document.getElementById('newJobForm').elements;
        let njfObj = {};
        for(let i = 0;i<f.length; i++){
            if(f[i].value !== 'create'){
                njfObj[f[i].name] = f[i].value;
            }        
        }
        const newObj = JSON.stringify(njfObj);
        console.log(newObj);


    //setting headers
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    headers['x-auth-token'] = token;

    console.log(`this is the token saved front end:
    ${token}`);

    //fetch request
        fetch('/api/job', {
            method: 'POST',
            body: newObj,
            headers
        })
        .then(r => {
            console.log(r);
            return r.json();
        })
        .then(r => {
            console.log(r);
        })
        .catch(e => console.error('ERROR: ', e));
    }


    //view job=====================================================================================================
        viewJob = () => { 
    
            console.log(`
            this is the front end storage of your token: 
            ${token}`);
    
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
            headers['x-auth-token'] = token;
    
            fetch('/api/job/', {
                method: 'GET',
                headers
            }).then(r => r.text())
            .then(r => {
                console.log(`this is the second then after jobview fetch 
                ${r}`);
                document.getElementById('viewJob').innerHTML = r;
            })
            .catch(e => console.error('ERROR: ', e));
        }







//create new Timecard==========================================================================
    newTc = () => {
    //get job id for the URL
    const jobId = document.getElementById('ntc').value;

    //setting headers
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    headers['x-auth-token'] = token;

    console.log(`this is the token saved front end:
    ${token}`);

    //fetch request
        fetch(`/api/timecard/${jobId}`, {
            method: 'POST',
            headers
        })
        .then(r => {
            console.log(r);
            return r.json();
        })
        .then(r => {
            console.log(r);
        })
        .catch(e => console.error('ERROR: ', e));
    }





    
    //view timecard=====================================================================================================
    viewTc = () => { 
        //get job id for the URL
        const jobId = document.getElementById('vntc').value;



        console.log(`
        this is the front end storage of your token: 
        ${token}`);

        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        headers['x-auth-token'] = token;

        fetch(`/api/timecard/${jobId}`, {
            method: 'GET',
            headers
        }).then(r => r.text())
        .then(r => {
            console.log(`this is the second then after jobview fetch 
            ${r}`);
            document.getElementById('viewTc').innerHTML = r;
        })
        .catch(e => console.error('ERROR: ', e));
    }





        //Card Reveal view job=====================================================================================================
        jobCR = () => { 
            let jobId = document.getElementById('jobCrInput').value;


            console.log(`
            this is the front end storage of your token: 
            ${token}`);
    
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
            headers['x-auth-token'] = token;
    
            fetch(`/api/job/${jobId}`, {
                method: 'GET',
                headers
            }).then(r => r.json()).then(r => {
                console.log(`
                this is the r object return in jobcr():
                ${JSON.stringify(r)}`)
                const rObj = {
                    'name' : r[0].name,
                    'role' : r[0].role,
                    'type' : r[0].jobType,
                    'des' : r[0].description
                }
                console.log(`
                this the rObj built by me:
                ${JSON.stringify(rObj)}`);


                //print to html
                document.getElementById('jobCr').innerHTML = `
                <div>Job Name: ${rObj.name} </div>
                <div>Job Role: ${rObj.role} </div>
                <div>Job Type: ${rObj.type} </div>
                <div>Job Description: ${rObj.des} </div>
                `;
            }).catch(e => console.error('ERROR: ', e));
        }





        //Card Reveal view timecard=====================================================================================================
        tcCR = () => { 
            const jobId = document.getElementById('tcJobCrInput').value;
            const tcId = document.getElementById('tcCrInput') .value;

            console.log(`
            this is the front end storage of your token: 
            ${token}`);
    
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
            headers['x-auth-token'] = token;
    
            fetch(`/api/timecard/${jobId}/${tcId}`, {//&${tcId}
                method: 'GET',
                headers
            }).then(r => r.json()).then(r => {
                console.log(`
                this is the r object return in tcCr():
                ${JSON.stringify(r)}`)
                const rObj = {
                    'cin' : r[0].clockIn,
                    'cout' : r[0].clockOut,
                    'lin' : r[0].lunchIn,
                    'lout' : r[0].lunchOut
                }
                console.log(`
                this the rObj built by me:
                ${JSON.stringify(rObj)}`);


                //print to html
                document.getElementById('tcCr').innerHTML = `
                <div>Clock In: ${rObj.cin} </div>
                <div>Lunch In: ${rObj.lin} </div>
                <div>Lunch Out: ${rObj.lout} </div>
                <div>Clock Out: ${rObj.cout} </div>
                `;
            }).catch(e => console.error('ERROR: ', e));
        }