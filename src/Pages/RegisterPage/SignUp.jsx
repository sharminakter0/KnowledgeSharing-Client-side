import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import BackHomebutton from '../../Component/BackToHome/BackHomebutton';
import { motion } from "framer-motion";

const RagisterPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUser, setUser, gLogin } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const target = e.target;
    const name1 = target.fname.value;
    const photo = target.photo.value;
    const email = target.email.value;
    const password = target.password.value;

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isLengthValid = password.length >= 6;

    if (!hasUpperCase || !hasLowerCase || !isLengthValid) {
      setPasswordError(
        'Password must be at least 6 characters and include both uppercase and lowercase letters.'
      );
      return;
    }

    setPasswordError('');

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name1, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name1, photoURL: photo });
            Swal.fire({
              icon: 'success',
              title: 'Account created successfully!',
              timer: 2000,
              showConfirmButton: false,
            });
            navigate('/');
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => alert(err.message));
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleLogin = () => {
    gLogin()
      .then(() => {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Logged in with Google!',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        navigate(location.state ? location.state : '/');
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-base-100 shadow-lg rounded-2xl p-8"
      >
        <div className="flex justify-center mb-4">
          <BackHomebutton />
        </div>

        <h2 className="text-3xl font-bold text-center mb-2 text-blue-600">
          Create Your Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Join ThinkTrove and start sharing knowledge today.
        </p>

        <form onSubmit={handleRegister}>
          <div className="space-y-4">
            <div>
              <label className="label-text font-medium">Name</label>
              <input
                type="text"
                name="fname"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label-text font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label-text font-medium">Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder="https://your-photo.url"
                className="input input-bordered w-full"
              />
            </div>

            <div className="relative">
              <label className="label-text font-medium">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                required
              />
              <div
                onClick={togglePassword}
                className="absolute right-3 top-10 cursor-pointer text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
            </div>

            <div className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                className="checkbox checkbox-info border-blue-500"
                required
              />
              <span>
                I agree to the{' '}
                <Link to="/term-use" className="text-blue-600 hover:underline">
                  Terms of Service
                </Link>
              </span>
            </div>

            <button
              type="submit"
              className="btn w-full bg-blue-600 hover:bg-blue-700 text-white mt-3"
            >
              Register
            </button>
          </div>
        </form>

        <div className="divider text-sm my-5">OR REGISTER WITH</div>

        <button
          onClick={handleGoogleLogin}
          type="button"
          className="btn w-full flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100"
        >
          <FcGoogle className="size-5" /> Google
        </button>

        <p className="text-center text-sm mt-6">
          Already have an account?{' '}
          <Link
            to="/auth/sign-in"
            className="text-blue-600 hover:text-blue-400 font-medium"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default RagisterPage;
