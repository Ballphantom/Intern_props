/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useNavigate } from 'react-router-dom' 
import Swal from 'sweetalert2'

function Login() {
    let navigate = useNavigate();


    return (
        <div className='main'>
            <div className='sub-main'>
                <div>
                    <div className='imgs'>
                        <div className='container-image'>
                            <img className='profile' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png'/>
                        
                        </div>
                    </div>
                        <h1 style={{marginBottom:'2rem'}}>Sign in</h1>
                        <div>                         
                            <input type='text' placeholder='Username' className='name'></input>
                        </div>
                        <div className='second-input'>                    
                            <input type='password' placeholder='password' className='name'></input>
                        </div>
                            <div>
                                <button className="btn-login" onClick={()=>{
                                    Swal.fire({
                                        title: 'Sign in',
                                        text: 'Complete registration',
                                        icon: 'success',
                                        buttin: 'OK'
                                    }).then(()=>{
                                        navigate('/Home',{replace: true})
                                    })
                                }} >Login</button>                                
                            </div>

                </div>
            </div>
        </div>
    )
}

export default Login