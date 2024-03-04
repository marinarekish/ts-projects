import {
  Clapperboard,
  Clock,
  Home,
  Library,
  PlaySquare,
  Repeat,
  History,
  ListVideo,
  Flame,
  ShoppingBag,
  Music2,
  Film,
  Radio,
  Gamepad2,
  Newspaper,
  Trophy,
  Lightbulb,
  Shirt,
  Podcast,
} from "lucide-react";
import { SmallSidebarIcon } from "../components/SmallSidebarIcon";
import { LargeSideBarSection } from "../components/LargeSideBarSection";
import { LargeSidebarItem } from "../components/LargeSideBarItem";
import { playlists, subscriptions } from "../data/sidebar";
import { useSidebarContext } from "../contexts/SidebarContext";
import { PageHeaderLeft } from "./PageHeader";

export function Sidebar() {
  const { isLargeOpen, isSmallOpen, close } = useSidebarContext();

  return (
    <>
      <aside
        className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 ${
          isLargeOpen ? "lg:hidden" : "lg:flex"
        }`}
      >
        <SmallSidebarIcon Icon={Home} title="Home" url="/" />
        <SmallSidebarIcon Icon={Repeat} title="Shorts" url="/shorts" />
        <SmallSidebarIcon Icon={Clapperboard} title="Subscriptions" url="/subscriptions" />
        <SmallSidebarIcon Icon={Library} title="Library" url="/library" />
      </aside>
      {isSmallOpen && <div onClick={close} className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50" />}
      <aside
        className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 ${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}
      >
        <div className="lg:hidden pt-2.5 pb-4 px-2 sticky top-0 bg-white">
          <PageHeaderLeft />
        </div>
        <LargeSideBarSection>
          <LargeSidebarItem IconOrUrl={Home} title="Home" url="/" />
          <LargeSidebarItem IconOrUrl={Repeat} title="Shorts" url="/shorts" />
          <LargeSidebarItem IconOrUrl={Clapperboard} title="Subscriptions" url="/subscriptions" />
        </LargeSideBarSection>
        <hr />
        <LargeSideBarSection visibleItemCount={5} title="You">
          <LargeSidebarItem IconOrUrl={History} title="History" url="/history" />
          <LargeSidebarItem IconOrUrl={Library} title="Library" url="/library" />
          <LargeSidebarItem IconOrUrl={PlaySquare} title="Your Videos" url="/your-videos" />
          <LargeSidebarItem IconOrUrl={Clock} title="Watch Later" url="/playlist?list=WL" />
          {playlists.map((playlist) => (
            <LargeSidebarItem
              key={playlist.id}
              IconOrUrl={ListVideo}
              title={playlist.name}
              url={`/playlist?list=${playlist.id}`}
            />
          ))}
        </LargeSideBarSection>
        <hr />
        <LargeSideBarSection visibleItemCount={7} title="Subscriptions">
          {subscriptions.map((subscription) => (
            <LargeSidebarItem
              key={subscription.id}
              IconOrUrl={subscription.imgUrl}
              title={subscription.channelName}
              url="/history"
            />
          ))}
        </LargeSideBarSection>
        <hr />
        <LargeSideBarSection title="Explore">
          <LargeSidebarItem IconOrUrl={Flame} title="Trending" url="/trending" />
          <LargeSidebarItem IconOrUrl={ShoppingBag} title="Shopping" url="/shopping" />
          <LargeSidebarItem IconOrUrl={Music2} title="Music" url="/music" />
          <LargeSidebarItem IconOrUrl={Film} title="Movies & TV" url="/movies-tv" />
          <LargeSidebarItem IconOrUrl={Radio} title="Live" url="/live" />
          <LargeSidebarItem IconOrUrl={Gamepad2} title="Gaming" url="/gaming" />
          <LargeSidebarItem IconOrUrl={Newspaper} title="News" url="/news" />
          <LargeSidebarItem IconOrUrl={Trophy} title="Sports" url="/sports" />
          <LargeSidebarItem IconOrUrl={Lightbulb} title="Learning" url="/learning" />
          <LargeSidebarItem IconOrUrl={Shirt} title="Fashion & Beauty" url="/fashion-beauty" />
          <LargeSidebarItem IconOrUrl={Podcast} title="Podcasts" url="/podcasts" />
        </LargeSideBarSection>
      </aside>
    </>
  );
}
