import { Auth } from "aws-amplify";
import { useState, useEffect } from "react";

function AuthPage({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUserState] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => setUserState(user))
      .catch(() => setUserState(null));
  }, []);

  const signUp = async () => {
    await Auth.signUp({ username: email, password, attributes: { email } });
    alert("Sign-up successful! Please check your email to confirm.");
  };

  const signIn = async () => {
    const user = await Auth.signIn(email, password);
    setUserState(user);
    setUser(user);
  };

  const signOut = async () => {
    await Auth.signOut();
    setUserState(null);
    setUser(null);
  };

  return user ? (
    <div>
      <p>Welcome, {user.username}!</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  ) : (
    <div>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signUp}>Sign Up</button>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}

export default AuthPage;
