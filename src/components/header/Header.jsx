import './Header.scss';
import burgerMenu from '../../assets/menu.svg';
import logo from '../../assets/logo.svg';
import camera from '../../assets/cameraIcon.svg';
import dots from '../../assets/dotsIcon.svg';
import notifications from '../../assets/bellIcon.svg';
import userPic from '../../assets/userpic.svg';
import { useContext, useState } from 'react';
import { LanguageContext } from '../context/languageContext';
import languageText from '../language/language';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { useSelector } from 'react-redux';

export function Header() {
	const { setLanguage, language } = useContext(LanguageContext);
	const [isOpenDropdown, setIsOpenDropdown] = useState(false);

	const { setIsLogin } = useContext(AuthContext);

	const { favoriteVideos } = useSelector((state) => state.favorite);

	return (
		<header className='header mt-3 mb-8'>
			<div className='container mx-auto px-5'>
				<div className='header__wrapper flex justify-between items-center'>
					<div className='header__wrapper-left flex items-center'>
						<button
							type='button'
							title='burger-menu'
							className='header__burger-button outline-none border-none bg-none mr-4'>
							<img
								src={burgerMenu}
								alt='icon'
								width='20'
								height='17'
							/>
						</button>

						<a href='/' className='header__logo mr-16'>
							<img
								src={logo}
								alt='Logo of Youtube'
								width='116'
								height='25'
							/>
						</a>

						<form className='header__form'>
							<input
								type='text'
								className='header__input-search bg-neutral-200 w-560 p-2 px-4 rounded-3xl'
								title='search'
								placeholder='Search'
							/>
						</form>
					</div>

					<nav>
						<ul className='flex gap-7justify-between'>
							<li className=' ml-3 '>
								<NavLink
									className={(props) => {
										return props.isActive
											? 'border-b-violet-900 border-b-2'
											: undefined;
									}}
									to={'/'}
									// className={
									// 	pathname === '/'
									// 		? 'border-b-violet-900 border-b-2'
									// 		: ''
									// }
								>
									{languageText[language].header.title}
								</NavLink>
							</li>
							<li className=' ml-3 '>
								<NavLink
									to={'/about'}
									className={(props) =>
										props.isActive
											? 'border-b-violet-900 border-b-2'
											: ''
									}>
									{languageText[language].header.about}
								</NavLink>
							</li>
						</ul>
					</nav>

					<div className='header__wrapper-right'>
						<ul className='header__btn-list flex items-center'>
							<li className='header__btn-items mr-10'>
								<select
									value={language}
									className=''
									onChange={(e) => {
										setLanguage(e.target.value);
										localStorage.setItem(
											'language',
											e.target.value
										);
									}}
									id=''>
									<option value='uz'>Uz</option>
									<option value='ru'>Ru</option>
									<option value='en'>Eng</option>
								</select>
							</li>

							<li className='header__btn-items mr-10'>
								<button className='header__btns '>
									<img
										src={camera}
										alt=''
										className='header__btn-img'
										width='27'
										height='20'
									/>
								</button>
							</li>

							<li className='header__btn-items mr-10'>
								<button className='header__btns'>
									<img
										src={dots}
										alt=''
										className='header__btn-img'
										width='21'
										height='21'
									/>
								</button>
							</li>

							<li className='header__btn-items mr-10'>
								<button className='header__btns'>
									{favoriteVideos.length}
									<img
										src={notifications}
										alt=''
										className='header__btn-img'
										width='22'
										height='26'
									/>
								</button>
							</li>

							<li
								onClick={() => {
									setIsOpenDropdown((prev) => !prev);
								}}
								className='header__btn-items relative cursor-pointer'>
								<img
									src={userPic}
									alt=''
									className='header__btn-img'
									width='40'
									height='40'
								/>
								{isOpenDropdown && (
									<div className='absolute bg-slate-900 right-5 top-full p-4 '>
										<Link
											to={'/channel'}
											className=' text-white mb-2 block'>
											Channel
										</Link>

										<button
											onClick={() => {
												setIsLogin(false);
											}}
											className='text-white'>
											Logout
										</button>
									</div>
								)}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}
