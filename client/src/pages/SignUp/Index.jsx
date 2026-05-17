import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { signUp } from '../../services/userService';

const schema = yup.object({
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters'),

  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),

  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

export default function SignUp() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData) => {
    try {
      setLoading(true);

      await signUp(formData);

      setError(null);

      navigate('/home');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign Up
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-4'
      >
        <div>
          <input
            type='text'
            placeholder='username'
            className='border p-3 rounded-lg w-full'
            {...register('username')}
          />

          {errors.username && (
            <p className='text-red-500 text-sm mt-1'>
              {errors.username.message}
            </p>
          )}
        </div>

        <div>
          <input
            type='email'
            placeholder='email'
            className='border p-3 rounded-lg w-full'
            {...register('email')}
          />

          {errors.email && (
            <p className='text-red-500 text-sm mt-1'>
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <input
            type='password'
            placeholder='password'
            className='border p-3 rounded-lg w-full'
            {...register('password')}
          />

          {errors.password && (
            <p className='text-red-500 text-sm mt-1'>
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>

      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>

        <Link to='/sign-in'>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>

      {error && (
        <p className='text-red-500 mt-5'>
          {error}
        </p>
      )}
    </div>
  );
}