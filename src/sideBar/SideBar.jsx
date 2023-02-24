import homeBtn from "./../assets/homeIcon.svg";
import trendingBtn from "./../assets/trendingIcon.svg";
import subscriptionsBtn from "./../assets/subscriptionsIcon.svg";
import library from "./../assets/filesIcon.svg";
import history from "./../assets/historyIcon.svg";
import later from "./../assets/watchIcon.svg";
import favourites from "./../assets/starIcon.svg";
import liked from "./../assets/heartIcon.svg";
import music from "./../assets/musicIcon.svg";
import games from "./../assets/controllerIcon.svg";
import more from "./../assets/arrowIcon.svg";
import userpic from "./../assets/subsuser.png";

export function SideBar () {
    return (
        <div className="side-bar">
            <div className="px-5 sticky top-0 left-0">
                <div className="side-bar__wrapper w-60">
                    <div className="side-bar__wrapper-categories">
                        <ul className="side-bar__list-top mb-10">
                            <li className="side-bar__items mb-3">
                                <button className="side-bar__btn flex items-center" title="Home">
                                    <img src={homeBtn} alt="icon" className="side-bar__icon mr-2" width="20" height="19"/>
                                    Home
                                </button>
                            </li>
                            <li className="side-bar__items mb-3">
                                <button className="side-bar__btn flex items-center"  title="Trending">
                                    <img src={trendingBtn} alt="icon" className="side-bar__icon mr-2" width="16" height="21"/>
                                    Trending
                                </button>
                            </li>
                            <li className="side-bar__items">
                                <button className="side-bar__btn flex items-center"  title="Subscriptions">
                                    <img src={subscriptionsBtn} alt="icon" className="side-bar__icon mr-2" width="18" height="18"/>
                                    Subscriptions
                                </button>
                            </li>
                        </ul>

                        <ul className="side-bar__list-bottom mb-10">
                            <li className="side-bar__items-bottom mb-5">
                                <button type="button" title="Library" className="side-bar__btn-bottom flex items-center">
                                    <img src={library} alt="icon" className="side-bar__icon-bottom mr-3"/>
                                    Library
                                </button>
                            </li>
                            <li className="side-bar__items-bottom mb-5">
                                <button type="button" title="History" className="side-bar__btn-bottom flex items-center">
                                    <img src={history} alt="icon" className="side-bar__icon-bottom mr-3"/>
                                    History
                                </button>
                            </li>
                            <li className="side-bar__items-bottom mb-5">
                                <button type="button" title="Watch later" className="side-bar__btn-bottom flex items-center">
                                    <img src={later} alt="icon" className="side-bar__icon-bottom mr-3"/>
                                    Watch later
                                </button>
                            </li>
                            <li className="side-bar__items-bottom mb-5">
                                <button type="button" title="Favourites" className="side-bar__btn-bottom flex items-center">
                                    <img src={favourites} alt="icon" className="side-bar__icon-bottom mr-3"/>
                                    Favourites
                                </button>
                            </li>
                            <li className="side-bar__items-bottom mb-5">
                                <button type="button" title="Liked videos" className="side-bar__btn-bottom flex items-center">
                                    <img src={liked} alt="icon" className="side-bar__icon-bottom mr-3"/>
                                    Liked videos
                                </button>
                            </li>
                            <li className="side-bar__items-bottom mb-5">
                                <button type="button" title="Music" className="side-bar__btn-bottom flex items-center">
                                    <img src={music} alt="icon" className="side-bar__icon-bottom mr-3"/>
                                    Music
                                </button>
                            </li>
                            <li className="side-bar__items-bottom mb-5">
                                <button type="button" title="Games" className="side-bar__btn-bottom flex items-center">
                                    <img src={games} alt="icon" className="side-bar__icon-bottom mr-3"/>
                                    Games
                                </button>
                            </li>
                            <li className="side-bar__items-bottom mb-5">
                                <button type="button" title="Show more" className="side-bar__btn-bottom flex items-center">
                                    <img src={more} alt="icon" className="side-bar__icon-bottom mr-3"/>
                                    Show more
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="side-bar__subscriptions">
                        <h3 className="side-bar__subs-heading h3 mb-7">Subscriptions</h3>

                        <ul className="side-bar__subs-list">
                            <li className="side-bar__subs-items mb-4">
                                <button className="side-bar__btn flex items-center" title="Home">
                                    <img src={userpic} alt="icon" className="side-bar__icon mr-4" width="26" height="26"/>
                                    Gussie Singleton
                                </button>
                            </li>

                            <li className="side-bar__subs-items mb-4">
                                <button className="side-bar__btn flex items-center" title="Home">
                                    <img src={userpic} alt="icon" className="side-bar__icon mr-4" width="26" height="26"/>
                                    Gussie Singleton
                                </button>
                            </li>

                            <li className="side-bar__subs-items mb-4">
                                <button className="side-bar__btn flex items-center" title="Home">
                                    <img src={userpic} alt="icon" className="side-bar__icon mr-4" width="26" height="26"/>
                                    Gussie Singleton
                                </button>
                            </li>

                            <li className="side-bar__subs-items mb-4">
                                <button className="side-bar__btn flex items-center" title="Home">
                                    <img src={userpic} alt="icon" className="side-bar__icon mr-4" width="26" height="26"/>
                                    Gussie Singleton
                                </button>
                            </li>

                            <li className="side-bar__subs-items mb-4">
                                <button className="side-bar__btn flex items-center" title="Home">
                                    <img src={userpic} alt="icon" className="side-bar__icon mr-4" width="26" height="26"/>
                                    Gussie Singleton
                                </button>
                            </li>

                            <li className="side-bar__subs-items">
                                <button className="side-bar__btn flex items-center" title="Home">
                                    <img src={userpic} alt="icon" className="side-bar__icon mr-4" width="26" height="26"/>
                                    Gussie Singleton
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}