// @ts-ignore
import React, { useState } from 'react';
import { supabase } from '../../services/supabaseClient'; // Ensure supabaseClient is initialized

const SignInWithEmail = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSignIn = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent form submission

    const { error } = await supabase.auth.signInWithOtp({
      email,
    });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage(
        'Check your email for the login link! If you don’t see it, check your spam folder.'
      );
    }
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded">
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
  );
};

export default SignInWithEmail;
