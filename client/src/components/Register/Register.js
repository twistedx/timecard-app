import React, { useState, useContext, useEffect, Fragment } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import Navbar from '../Layout/Navbar/Navbar';

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
        <Fragment>
            <Navbar title={register} home={true} dropdown={false} />
            <main>
                < div className="container" >
                    <div className="col s12 m12">
                        <div className='form-container'>
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
                                    className='btn btn-primary btn-block blue lighten-1'
                                />
                            </form>
                        </div>
                    </div>
                </div >
            </main>
        </Fragment>
    );
};

export default Register;