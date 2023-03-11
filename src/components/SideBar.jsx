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
import { LinkTo } from "./LinkTo";

export default function SideBar() {
  return (
    <div className="side-bar px-32">
      <div className="pl-6 fixed bg-white top-0 left-0 translate-y-20">
        <div className="side-bar__wrapper w-52">
          <div className="side-bar__wrapper-categories">
            <ul className="side-bar__list-top mb-10 space-y-3">
              <LinkTo avatar={homeBtn} title={"Home"} width={20} height={20} />

              <LinkTo
                avatar={trendingBtn}
                title={"Trending"}
                width={20}
                height={20}
              />

              <LinkTo
                avatar={subscriptionsBtn}
                title={"Subscriptions"}
                width={20}
                height={20}
              />
            </ul>

            <ul className="side-bar__list-bottom mb-10 space-y-3">
              <LinkTo
                avatar={library}
                title={"Library"}
                width={20}
                height={20}
              />

              <LinkTo
                avatar={history}
                title={"History"}
                width={20}
                height={20}
              />

              <LinkTo
                avatar={later}
                title={"Watch later"}
                width={20}
                height={20}
              />

              <LinkTo
                avatar={favourites}
                title={"Favourites"}
                width={20}
                height={20}
              />

              <LinkTo
                avatar={liked}
                title={"Liked videos"}
                width={20}
                height={20}
              />

              <LinkTo avatar={music} title={"Music"} width={20} height={20} />

              <LinkTo avatar={games} title={"Games"} width={20} height={20} />

              <LinkTo
                avatar={more}
                title={"Show more"}
                width={20}
                height={20}
              />
            </ul>
          </div>

          <div className="side-bar__subscriptions">
            <h3 className="side-bar__subs-heading h3 mb-7 font-bold">
              Subscriptions
            </h3>

            <ul className="side-bar__subs-list space-y-4 pb-14">
              <LinkTo avatar={userpic} title={"Gussie Singleton"} />

              <LinkTo avatar={userpic} title={"Gussie Singleton"} />

              <LinkTo avatar={userpic} title={"Gussie Singleton"} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
