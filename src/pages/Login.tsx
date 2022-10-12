import React from "react";
import { Field, Formik } from 'formik';
import { useMutation } from "@tanstack/react-query";
import { LoginResult } from "../models/loginResult";
import axios from "axios";
import { useNavigate } from "react-router-dom";


interface LoginModel {
    username: string;
    password: string;
}


export const Login: React.FC<{onLogin: () => void}> = ({onLogin}) => {
    const navigate = useNavigate();

    const loginMutation = useMutation<LoginResult, any, LoginModel>(
        ({username, password}) => axios.post<LoginResult>('http://localhost:5299/login', {username, password})
        .then(x => x.data));


    const initialVal: LoginModel = {username: '', password: ''}
    
    const login = async (data: LoginModel) => {
        const res = await loginMutation.mutateAsync(data);
        localStorage.setItem('refreshToken', res.refreshToken);
        onLogin();
        navigate('/');
    }

    const validation = (values: any) => {
        const errors: any = {};
        if (!values.username) {
            errors.username = 'username is required';
        }

        if (!values.password) {
            errors.password = 'password is required';
        }


        return errors;
    }


    return (
        <Formik 
            initialValues={initialVal}
            validate={validation}
            onSubmit={login}>
            {({values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting}) => (
                    <>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="username" onChange={handleChange} onBlur={handleBlur} value={values.username}/>
                            {touched.username && errors.username && <pre>{errors.username}</pre>}
                            <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                            {touched.password && errors.password && <pre>{errors.password}</pre>}
                            <input type="submit" name="login"/>
                        </form>
                        {loginMutation.error && <h3>credenziali invalide</h3>}
                        {loginMutation.isSuccess && <h3>logged</h3>}
                    </>
                
            )}
        </Formik>
    ) 
}