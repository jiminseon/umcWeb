import React from 'react'
import { useState } from 'react';

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [pwd, setPassword] = useState('');
    const [emailMsg, setEmailMsg] = useState('');

    const validateEmail = (email) => {
        return email
          .toLowerCase()
          .match(/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
      };

      

    const onEmailHandler = (e) => {
        const currEmail = e.target.value;
        setEmail(currEmail);
    
        if (!validateEmail(currEmail)) {
            setEmailMsg("올바른 이메일을 입력해주세요.")} 
        else { setEmailMsg("") }
    };
      
    
    const onPwdHandler = (event) => {
    setPassword(event.currentTarget.value);
    };

  return (
    <div className='page-container'>
        <div className='login-container'>
            <h2>이메일과 비밀번호를 <br/>입력해주세요</h2>
        
            <form>
                <label>이메일 주소</label><br/>
                <input type='email' value={email} onChange={onEmailHandler} />
                <p style={{color: 'red'}}>{emailMsg}</p>
                
                <label>비밀번호</label><br/>
                <input type='password' value={pwd} onChange={onPwdHandler} />
                <br/>

                <button 
                type='submit' 
                className={
                    validateEmail(email) ? 'activeBtn' : 'inactiveBtn'
                }
                disabled={validateEmail(email) ? false : true}
                >확인</button>
            </form>
        </div>
    </div>
  )

  }