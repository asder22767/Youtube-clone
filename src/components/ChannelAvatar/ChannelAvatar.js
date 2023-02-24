import React from 'react';
import userpic from '../../assets/subsuser.png';

const ChannelAvatar = ({ avatar, title }) => {
	return (
		<li className='side-bar__subs-items mb-4'>
			<button className='side-bar__btn flex items-center' title='Home'>
				<img
					src={avatar ? avatar : userpic}
					alt='icon'
					className='side-bar__icon mr-4'
					width='26'
					height='26'
				/>
				{title ? title : 'Title'}
			</button>
		</li>
	);
};

export default ChannelAvatar;
