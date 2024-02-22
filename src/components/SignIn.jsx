import React, { useRef, useEffect } from "react";
import { useAuth } from "../hooks/AuthContext";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const { login, isAuthenticated } = useAuth();

  const emailInputRef = useRef(null);

  useEffect(() => {
    emailInputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      alert("Your password should be at least 6 character. Please try again.");
      return;
    }
    const userData = {
      email,
      password,
    };
    login(userData);

    e.target.email.value = "";
    e.target.password.value = "";
  };
  return (
    <MaxWidthWrapper>
      <form
        className="bg-white shadow-md w-full rounded px-8 pt-6 pb-8 mb-4 mt-20"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-double focus:shadow-outline"
            type="email"
            id="email"
            ref={emailInputRef}
            required
          />
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight"
            type="password"
            id="password"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-[#a881af] hover:bg-[#a881af]-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign In
        </button>
        {isAuthenticated ? <Navigate to="/search" /> : null}
      </form>
    </MaxWidthWrapper>
  );
};

export default SignIn;
