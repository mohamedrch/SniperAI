import { useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setError("");
      alert("Sign up successful!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setError("");
      alert("Google sign up successful!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Create Account</h2>
        <form onSubmit={handleSignup} className="space-y-5">
          <input
            className="border border-gray-300 bg-gray-100 text-gray-900 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            className="border border-gray-300 bg-gray-100 text-gray-900 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 w-full rounded-lg transition disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-200" />
          <span className="mx-3 text-gray-400">or</span>
          <div className="flex-grow h-px bg-gray-200" />
        </div>
        <button
          type="button"
          className="bg-white border border-gray-300 text-gray-900 font-semibold p-3 w-full rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition disabled:opacity-60"
          onClick={handleGoogleSignup}
          disabled={loading}
        >
          <svg className="w-5 h-5" viewBox="0 0 48 48"><g><path d="M44.5 20H24v8.5h11.7C34.7 33.4 29.8 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.7 0 5.2.9 7.2 2.5l6.4-6.4C34.1 5.1 29.3 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.2-4z" fill="#FFC107"/><path d="M6.3 14.7l6.6 4.8C14.5 16.1 18.8 13 24 13c2.7 0 5.2.9 7.2 2.5l6.4-6.4C34.1 5.1 29.3 3 24 3c-7.2 0-13.3 4.1-16.7 10.1z" fill="#FF3D00"/><path d="M24 43c5.6 0 10.3-1.8 13.7-4.9l-6.3-5.2C29.7 34.7 27 36 24 36c-5.7 0-10.5-3.7-12.2-8.8l-6.6 5.1C7.9 39.1 15.3 43 24 43z" fill="#4CAF50"/><path d="M44.5 20H24v8.5h11.7c-1.1 3.1-4.2 5.5-7.7 5.5-2.2 0-4.2-.7-5.7-2.1l-6.6 5.1C14.5 41.9 18.8 45 24 45c7.2 0 13.3-4.1 16.7-10.1z" fill="#1976D2"/></g></svg>
          {loading ? "Please wait..." : "Sign Up with Google"}
        </button>
        {error && <p className="text-red-500 text-center mt-4 font-medium">{error}</p>}
        <p className="text-center mt-6 text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline font-semibold">Login</a>
        </p>
      </div>
    </div>
  );
}