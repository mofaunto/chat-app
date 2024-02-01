import React from "react";
import GenderSelect from "./GenderSelect";

function SignUp() {
  return (
    <div className='flex flex-col items-center justify-center min-w-80 mx-auto lg:min-w-96'>
      <div className='w-full p-8 bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign up to
          <span className='text-green-500'> Talkie</span>
        </h1>

        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-300'>
                Full Name
              </span>
            </label>
            <input
              type='text'
              placeholder='ex. John Doe'
              className='w-full input input-bordered h-10'
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-300'>
                Username
              </span>
            </label>
            <input
              type='text'
              placeholder='ex. johndoe'
              className='w-full input input-bordered h-10'
            />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text text-gray-300'>
                Password
              </span>
            </label>
            <input
              type='password'
              placeholder='Enter password'
              className='w-full input input-bordered h-10'
            />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text text-gray-300'>
                Confirm Password
              </span>
            </label>
            <input
              type='password'
              placeholder='Confirm password'
              className='w-full input input-bordered h-10'
            />
          </div>

          <GenderSelect />

          <a
            href='#'
            className='text-gray-300 text-sm hover:underline hover:text-green-500 mt-4 inline-block'
          >
            Already have an account?
          </a>
          <div>
            <button className='btn btn-block btn-md mt-4 hover:bg-green-500 hover:text-white'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;