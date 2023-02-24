import './Header.scss';
import burgerMenu from '../../assets/menu.svg';
import logo from '../../assets/logo.svg';
import camera from '../../assets/cameraIcon.svg';
import dots from '../../assets/dotsIcon.svg';
import notifications from '../../assets/bellIcon.svg';
import userPic from '../../assets/userpic.svg';

export function Header() {
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

					<div className='header__wrapper-right'>
						<ul className='header__btn-list flex items-center'>
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
									<img
										src={notifications}
										alt=''
										className='header__btn-img'
										width='22'
										height='26'
									/>
								</button>
							</li>

							<li className='header__btn-items'>
								<button className='header__btns'>
									<img
										src={userPic}
										alt=''
										className='header__btn-img'
										width='40'
										height='40'
									/>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}
