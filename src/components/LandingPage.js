import React from 'react';

const LandingPage = () => {
  const handleSignIn = () => {
    // Placeholder for sign-in logic
    console.log('Sign In');
  };

  const handleSignUp = () => {
    // Placeholder for sign-up logic
    console.log('Sign Up');
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-4">Welcome to TodoApp</h1>
      <div className="flex space-x-4">
        <button onClick={handleSignIn} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign In
        </button>
        <button onClick={handleSignUp} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default LandingPage;