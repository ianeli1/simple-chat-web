import React, { createContext, useContext, useState } from 'react';
import '../../assets/main.css';
import { signIn } from '../../firebaseFunctions';
import { useLoginQuery } from '../../generated/graphql';
import Modal from '../Modal';
import { userContext } from './UserProvider';

export interface DialogContextType {
  login: () => Promise<boolean>;
}

export const DialogContext = createContext<DialogContextType>(undefined!);

export function DialogContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLogin, setShowLogin] = useState<((a: boolean) => void) | false>(
    false,
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { refetch } = useLoginQuery({ skip: !email });
  const UserRefetch = useContext(userContext)?.refetch;

  async function handleLogin() {
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
        showLogin && showLogin(false);
      } else {
        alert('Welcome, ' + result.data.login?.user?.name);
        showLogin && showLogin(true);
        UserRefetch && (await UserRefetch());
      }
    } else {
      showLogin && showLogin(false);
    }
    setShowLogin(false);
  }

  /**Super experimental */
  async function login() {
    return new Promise<boolean>((resolve) => {
      setShowLogin(() => resolve);
    });
  }

  return (
    <DialogContext.Provider value={{ login }}>
      <Modal
        show={!!showLogin}
        onDismiss={() => {
          showLogin && showLogin(false);
          setShowLogin(false);
          console.log('dismissed');
        }}
      >
        <div
          className="bg-white rounded p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            type="text"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>log in</button>
        </div>
      </Modal>
      {children}
    </DialogContext.Provider>
  );
}
