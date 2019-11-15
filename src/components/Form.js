import React from 'react';
import {withFormik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import UserDetails from './UserDetails';

function UserForm(props){
    
    return(
        <div>
            
        <Form>
            <ErrorMessage name="name" render= {msg => <div className='error' >{msg}</div>} />
            <label>Name:
                <Field type="text" name="name" placeholder="Enter name" />
            </label>
            <br />
            <ErrorMessage name='email' render={msg => <div className="error">{msg}</div>} />
            <label>Email:
                <Field type='text' name='email' placeholder='Enter email' />
            </label>
            <br />
    <ErrorMessage name='password' render={msg => <div className="error">{msg}</div>} />
            <label> Password:
                <Field type='password' name='password' placeholder='Enter password' />
            </label>
            <br />
    <ErrorMessage name="term_of_service" render={msg => <div className='error'>{msg}</div>} />
            <label> Term of Service
                <Field type='checkbox' name="term_of_service" />
            </label>
            <br />
            <br />
            <input type="submit" />

        </Form>
        <div>
        <h2>Submited Users</h2>
        
       { props.users.map((user, index)=>{
           return(
            <UserDetails user ={user} key={index}/>
           ) 
        })
    } 
        </div>
        
        </div>
    )
}


const UserFormWithFormik = withFormik({
    mapPropsToValues(){
        return{
            name: '',
            email: '',
            password: '',
            term_of_service: false
        }
    },
   validationSchema: Yup.object().shape({
       name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required("Please enter your name"),
       email:  Yup.string().email('Invalid email').required("Please enter your email"),
       password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required("Please enter password"),
       term_of_service: Yup.boolean().required("Please agree to our terms of service")
    }),

    handleSubmit(values, tools){
        
        axios.post("https://reqres.in/api/users", values)
        .then(response=>{
            // console.log(response);
            tools.resetForm();
            
            
            tools.props.setUsers([...tools.props.users, response.data])
            console.log(tools.props.users);
           
         
        })
        .catch(error=>{
            console.log(error);
        })
    }
})(UserForm);
export default UserFormWithFormik;