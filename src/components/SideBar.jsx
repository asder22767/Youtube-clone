import homeBtn from "./../assets/images/homeIcon.svg";
import trendingBtn from "./../assets/images/trendingIcon.svg";
import subscriptionsBtn from "./../assets/images/subscriptionsIcon.svg";
import library from "./../assets/images/filesIcon.svg";
import history from "./../assets/images/historyIcon.svg";
import later from "./../assets/images/watchIcon.svg";
import favourites from "./../assets/images/starIcon.svg";
import liked from "./../assets/images/heartIcon.svg";
import music from "./../assets/images/musicIcon.svg";
import games from "./../assets/images/controllerIcon.svg";
import more from "./../assets/images/arrowIcon.svg";
import userpic from "./../assets/images/subsuser.png";
import { ChannelAvatar } from "./ChannelAvatar";

export function SideBar () {
    return (
        <div className="side-bar">
            <div className="pl-6 fixed bg-white top-0 left-0 translate-y-20">
                <div className="side-bar__wrapper w-60">
                    <div className="side-bar__wrapper-categories">
                        <ul className="side-bar__list-top mb-10 space-y-3">
                            <ChannelAvatar avatar={homeBtn} title={"Home"} width={20} height={20}/>

                            <ChannelAvatar avatar={trendingBtn} title={"Trending"} width={20} height={20}/>

                            <ChannelAvatar avatar={subscriptionsBtn} title={"Subscriptions"} width={20} height={20}/>
                        </ul>

                        <ul className="side-bar__list-bottom mb-10 space-y-3">
                            <ChannelAvatar avatar={library} title={"Library"} width={20} height={20}/>

                            <ChannelAvatar avatar={history} title={"History"} width={20} height={20}/>

                            <ChannelAvatar avatar={later} title={"Watch later"} width={20} height={20}/>

                            <ChannelAvatar avatar={favourites} title={"Favourites"} width={20} height={20}/>

                            <ChannelAvatar avatar={liked} title={"Liked videos"} width={20} height={20}/>

                            <ChannelAvatar avatar={music} title={"Music"} width={20} height={20}/>

                            <ChannelAvatar avatar={games} title={"Games"} width={20} height={20}/>

                            <ChannelAvatar avatar={more} title={"Show more"} width={20} height={20}/>
                        </ul>
                    </div>

                    <div className="side-bar__subscriptions">
                        <h3 className="side-bar__subs-heading h3 mb-7 font-bold">Subscriptions</h3>

                        <ul className="side-bar__subs-list space-y-4 pb-14">
                            <ChannelAvatar avatar={userpic} title={"Gussie Singleton"}/>

                            <ChannelAvatar avatar={userpic} title={"Gussie Singleton"}/>

                            <ChannelAvatar avatar={userpic} title={"Gussie Singleton"}/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}