/**
    * @description      : 
    * @author           : Saif
    * @group            : 
    * @created          : 21/09/2023 - 22:55:49
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 21/09/2023
    * - Author          : Saif
    * - Modification    : 
**/
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import "./style.css";
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { UserLayout } from '../Layout';
import { SubHeader } from '../../components/SubHeader';

const Login = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });


const handleNavigate = () => {
    navigate('/company-registration')
}
    console.log(formData.password);

    useEffect(() => {
        document.title = 'MATH KNOTs | Login';
    }, [])

    const handleSubmit = async (event) => {
        document.querySelector('.loaderBox').classList.remove('d-none');
        event.preventDefault();

        const formDataMethod = new FormData();
        // formDataMethod.append('username', formData.username);
        // formDataMethod.append('password', formData.password);

        for (const key in formData) {
            formDataMethod.append(key, formData[key]);
        }

        console.log(formData)
        

        const apiUrl = 'https://member.MATH KNOTs.com/backend/api/v1/login/';


        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                body: formDataMethod
            });

            if (response.ok) {

                const responseData = await response.json();
                if (responseData?.role == 5) {
                    console.log('Login Response:', responseData);
                    localStorage.setItem('company_login', responseData?.token);
                    localStorage.setItem('number_of_employees', responseData?.number_of_employees)
                    localStorage.setItem('allowedEmployee', responseData?.allowed_members);
                    localStorage.removeItem('login');
                    localStorage.setItem('user_id', responseData?.user_id);
                    localStorage.setItem('role', responseData?.role);
                    console.log('Login Response:', responseData);
                    document.querySelector('.loaderBox').classList.add("d-none");
                    navigate('/dashboard');
                }
                else {
                    localStorage.setItem('login', responseData?.token);
                    localStorage.setItem('user_id', responseData?.user_id);
                    console.log('Login Response:', responseData);
                    localStorage.setItem('role', responseData?.role);
                    document.querySelector('.loaderBox').classList.add("d-none");
                    navigate('/user-dashboard')
                }

            } else {
                document.querySelector('.loaderBox').classList.add("d-none");
                alert('Invalid Credentials')

                console.error('Login failed');
            }
        } catch (error) {
            document.querySelector('.loaderBox').classList.add("d-none");
            console.error('Error:', error);
        }
    };


    return (
        <>
            <UserLayout>
                <SubHeader title="Login FORM"></SubHeader>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto">
                            {/* <div className='loginTab'>
                                <button className='authBtns activeLogin' type='button'>Login</button>
                                <button className='authBtns' type='button' onClick={handleNavigate}>Register As a Company</button>
                            </div> */}
                            <div className='bg-light formArea p-5 rounded-4 shadow'>
                                <form onSubmit={handleSubmit}>
                                    <CustomInput
                                        label='User Name'
                                        required
                                        id='userEmail'
                                        type='text'
                                        name="username"
                                        placeholder='Enter User Name'
                                        labelClass='mainLabel'
                                        inputClass='mainInput'
                                        onChange={(event) => {
                                            setFormData({ ...formData, username: event.target.value });
                                            console.log(event.target.value);
                                        }}
                                    />
                                    <CustomInput
                                        label='Password'
                                        required
                                        id='pass'
                                        type='password'
                                        name="password"
                                        placeholder='Enter Password'
                                        labelClass='mainLabel'
                                        inputClass='mainInput'
                                        onChange={(event) => {
                                            setFormData({ ...formData, password: event.target.value });
                                            console.log(event.target.value);
                                        }}
                                    />
                                    <div className="d-flex align-items-baseline justify-content-between mt-1">
                                        <div className="checkBox">
                                            <input type="checkbox" name="rememberMe" id="rememberMe" className='me-1' />
                                            <label htmlFor="rememberMe" className='fw-semibold'>Remember Me</label>
                                        </div>
                                        <Link to={'/forget-password'} className='text-dark text-decoration-underline'>Forgot Password?</Link>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <CustomButton variant='primaryButton' text='Login' type='submit' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    )
}


export default Login
