import { Amplify } from "aws-amplify";
import { signIn, signOut, signUp, getCurrentUser } from "aws-amplify/auth";
import awsExports from "../aws-exports";
import { useState, useEffect } from "react";

Amplify.configure(awsExports);

function AuthPage({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUserState] = useState(null);

  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        setUserState(user);
        setUser(user);
      })
      .catch(() => setUserState(null));
  }, [setUser]);

  const handleSignUp = async () => {
    try {
      await signUp({ username: email, password, options: { userAttributes: { email } } });
      alert("Sign-up successful! Please check your email to confirm.");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      const user = await signIn({ username: email, password });
      setUserState(user);
      setUser(user);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setUserState(null);
      setUser(null);
    } catch (error) {
      alert(error.message);
    }
  };

  return user ? (
    <div>
      <p>Welcome, {user.username}!</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  ) : (
    <div>
      <input 
        placeholder="Email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
      />
      <input 
        placeholder="Password" 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
      />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default AuthPage;
