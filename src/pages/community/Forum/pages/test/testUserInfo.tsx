// @ts-ignore
import React, { useEffect, useState } from 'react';
import { supabase } from '../../services/supabaseClient'; // Ensure supabaseClient is initialized

interface User {
  id: string;
  email: string;
  [key: string]: any; // Additional fields in the user object
}

const AuthComponent: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch user info on component mount
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        setError(error.message);
      } else {
        // @ts-ignore
        setUser(data.user);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const handleSignIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage('Check your email for the login link! If you don’t see it, check your spam folder.');
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error.message);
    } else {
      setUser(null);
      console.log('User successfully logged out');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4 bg-gray-800 text-white rounded">
      {!user ? (
        <div>
          <h2 className="text-xl font-bold mb-4">Sign In with Email</h2>
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label className="block mb-2">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 py-2 rounded hover:bg-blue-500 transition"
            >
              Send Login Link
            </button>
          </form>
          {message && <p className="mt-4">{message}</p>}
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-4">Current User Info:</h2>
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthComponent;