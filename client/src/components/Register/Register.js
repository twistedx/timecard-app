import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';

const Register = props => {

    const authContext = useContext(AuthContext);


    const { register, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }


    }, [isAuthenticated, props.history]);

    const [user, setUser] = useState({
        name: '',
        email: '',
        title: '',
        password: '',
        password2: ''
    });

    const { name, email, title, password, password2 } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        register({
            name,
            email,
            title,
            password
        });
    }


    return (
        < div className="container" >
            <div className='form-container'>
                <h1>
                    Account <span className='text-primary'>Register</span>
                </h1>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            name='name'
                            value={name}
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
                            required
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
                            required
                            minLength='6'
                        />
                    </div>
                    <input
                        type='submit'
                        value='Register'
                        className='btn btn-primary btn-block'
                    />
                </form>
            </div>
        </div >
    );
};

export default Register;