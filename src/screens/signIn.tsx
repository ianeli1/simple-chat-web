import React, { useState } from 'react';
import { signIn } from '../firebaseFunctions';
import { useLoginLazyQuery, useLoginQuery } from '../generated/graphql';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { refetch } = useLoginQuery({ skip: !email });

  async function HandleLogin() {
    if (email.length < 2 || password.length < 2) {
      return false;
    }
    const JWT = await signIn(email, password);
    console.log(JWT);
    if (JWT) {
      const result = await refetch!({ token: JWT });
      if (result.error) {
        alert('Oops, something bad happened while logging in');
        console.log(result.error);
        return false;
      } else {
        alert('Welcome, ' + result.data.login?.user?.name);
        return true;
      }
    } else {
      return false;
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input
        value={email}
        placeholder="Email goes here"
        onChange={(e) => setEmail(e.target.value ?? '')}
      />
      <input
        value={password}
        placeholder="Password goes here"
        onChange={(e) => setPassword(e.target.value ?? '')}
      />
      <button onClick={HandleLogin}>SIGN IN</button>
    </div>
  );
}
