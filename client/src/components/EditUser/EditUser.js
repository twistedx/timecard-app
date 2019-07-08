import React, { Fragment, useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import setAuthToken from '../../utils/setAuthToken';
import Navbar from '../Layout/Navbar/Navbar';
const EditUser = props => {

    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, [])


    if (localStorage.token) {
        setAuthToken(localStorage.token);
    } else {
        props.history.push('/login');
    }

    const [user, setUser] = useState({
        name: '',
        email: '',
        title: '',
        password: '',
        password2: ''
    });

    const { name, email, title, password, password2 } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const editProfile = (obj) => {
        //formmatting form responses into payload obj
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        headers['x-auth-token'] = authContext.token;
        var newObj = JSON.stringify(obj);
        fetch('/api/user/', {
            method: 'PUT',
            body: newObj,
            headers
        }).then(r => r.json())
            .then(r => {
                let res = JSON.stringify(r[0]);
                console.log(`this is the second then after editProfiile() fetch 
                ${res}`);
            })
            .catch(e => console.error('ERROR: ', e));
    }

    const onSubmit = e => {
        e.preventDefault();
        var temp = {
            ...user,
            name,
            email,
            title,
            password
        };

        async function temp1() {
            let response = await editProfile(temp);
            console.log(JSON.stringify(response), "sucess")
            setTimeout(() => {
                props.history.push('/');
            }, 1000);

        }
        temp1();
    }

    return (
        <Fragment>
            <Navbar title="Edit Profile" dropdown = { false } home = { true } />
        < div className="container" >
            <div className='form-container'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            name='name'
                            value={name}
                            placeholder={authContext.user ? authContext.user.name : "Loading ...."}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email Address</label>
                        <input
                            type='email'
                            name='email'
                            value={email}
                            placeholder={authContext.user ? authContext.user.email : "Loading ...."}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='title'>Enter your Title</label>
                        <input
                            type='text'
                            name='title'
                            value={title}
                            placeholder={authContext.user ? authContext.user.title : "Loading ...."}
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            name='password'
                            value={password}
                            onChange={onChange}
                            minLength='6'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password2'>Confirm Password</label>
                        <input
                            type='password'
                            name='password2'
                            value={password2}
                            onChange={onChange}
                            minLength='6'
                        />
                    </div>
                    <input
                        type='submit'
                        value='Edit Profile'
                        className='btn btn-primary btn-block blue lighten-1'
                    />
                </form>
            </div>
        </div >
        </Fragment>
    );
};

export default EditUser;