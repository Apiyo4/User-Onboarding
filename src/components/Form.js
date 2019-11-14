import React from 'react';
import {withFormik, Form,Field} from 'formik';

function UserForm(props){
    console.log(props);
    return(
        <form>
            <label>Name:
                <Field type="text" name="name" placeholder="Enter name" />
            </label>
            <br />
            <label>Email:
                <Field type='text' name='email' placeholder='Enter email' />
            </label>
            <br />
            <label> Password:
                <Field type='password' name='password' placeholder='Enter password' />
            </label>
            <br />
            <label> Term of Service
                <Field type='checkbox' name="term_of_service" />
            </label>
            <br />
            <br />
            <input type="submit" />

        </form>
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
    }
})(UserForm);
export default UserFormWithFormik;