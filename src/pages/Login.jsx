import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../components/context/authContext';

const Login = () => {
	const [form, setForm] = useState({
		email: 'eve.holt@reqres.in',
		password: 'password',
	});
	const [errorMessage, setErrorMessage] = useState({
		type: '',
		message: '',
	});

	const { setIsLogin } = useContext(AuthContext);

	const submitHandler = (evt) => {
		evt.preventDefault();

		fetch('https://reqres.in/api/login', {
			method: 'post',
			body: JSON.stringify(form),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => {
				console.log(res);
				if (res.status === 400) {
					throw new Error('User not found');
				}
				return res.json();
			})
			.then((data) => {
				localStorage.setItem('token', data.token);

				setIsLogin(true);

				setErrorMessage({
					type: 'success',
					message: '',
				});
			})
			.catch((err) => {
				console.log(err);

				setErrorMessage({
					type: 'danger',
					message: 'Foydalanuvchi topilmadi',
				});

				setTimeout(() => {
					setErrorMessage({
						type: '',
						message: '',
					});
				}, 3000);
			});
	};

	return (
		<section className='bg-gray-50 dark:bg-gray-900'>
			<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
				<Link
					to='/'
					className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
					<img
						className='w-8 h-8 mr-2'
						src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'
						alt='logo'
					/>
					Home page
				</Link>
				<div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
					<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
						<h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
							Sign in to your account
						</h1>
						<form
							className='space-y-4 md:space-y-6'
							onSubmit={submitHandler}>
							<div>
								<label
									htmlFor='email'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
									Your email
								</label>
								<input
									value={form.email}
									onChange={(e) => {
										setForm({
											...form,
											email: e.target.value,
										});
									}}
									type='email'
									name='email'
									id='email'
									className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='name@company.com'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='password'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
									Password
								</label>
								<input
									value={form.password}
									onChange={(e) => {
										setForm({
											...form,
											password: e.target.value,
										});
									}}
									type='password'
									name='password'
									id='password'
									placeholder='••••••••'
									className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									required
								/>
							</div>

							{errorMessage.type === 'danger' && (
								<p className='text-red-800 text-center'>
									{errorMessage.message}
								</p>
							)}

							<button
								type='submit'
								className='w-full text-white bg-blue-600  hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
								Sign in
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
