import homeBtn from '../../assets/homeIcon.svg';
import trendingBtn from '../../assets/trendingIcon.svg';
import subscriptionsBtn from '../../assets/subscriptionsIcon.svg';
import library from '../../assets/filesIcon.svg';
import history from '../../assets/historyIcon.svg';
import later from '../../assets/watchIcon.svg';
import favourites from '../../assets/starIcon.svg';
import liked from '../../assets/heartIcon.svg';
import music from '../../assets/musicIcon.svg';
import games from '../../assets/controllerIcon.svg';
import more from '../../assets/arrowIcon.svg';
import ChannelAvatar from '../ChannelAvatar/ChannelAvatar';

export function SideBar() {
	return (
		<div className='side-bar'>
			<div className='px-5 sticky top-0 left-0'>
				<div className='side-bar__wrapper w-60'>
					<div className='side-bar__wrapper-categories'>
						<ul className='side-bar__list-top mb-10'>
							<ChannelAvatar avatar={homeBtn} />
							<ChannelAvatar avatar={trendingBtn} />
							<ChannelAvatar avatar={subscriptionsBtn} />
						</ul>

						<ul className='side-bar__list-bottom mb-10'>
							<ChannelAvatar avatar={library} />
							<ChannelAvatar avatar={history} />
							<ChannelAvatar
								avatar={later}
								title={'Watch later'}
							/>
							<ChannelAvatar
								avatar={favourites}
								title={'Favourites'}
							/>

							<ChannelAvatar
								avatar={liked}
								title={'liked video'}
							/>

							<ChannelAvatar avatar={music} title={'Music'} />

							<ChannelAvatar avatar={games} title={'Games'} />

							<ChannelAvatar avatar={more} title={'Show more'} />
						</ul>
					</div>

					<div className='side-bar__subscriptions'>
						<h3 className='side-bar__subs-heading h3 mb-7'>
							Subscriptions
						</h3>

						<ul className='side-bar__subs-list'>
							<ChannelAvatar />
							<ChannelAvatar />
							<ChannelAvatar />
							<ChannelAvatar />
							<ChannelAvatar />
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
