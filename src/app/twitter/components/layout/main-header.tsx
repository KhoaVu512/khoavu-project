import ButtonHeader from '@/app/twitter/components/ui/button-header'
import ButtonLogo from '@/app/twitter/components/ui/button-logo'
import HomeIcon from '@/assets/home-icon.svg'
import SearchIcon from '@/assets/search-icon.svg'
import LogoTwitter from '@/assets/twitter.svg'

function MainHeader() {
  return (
    <div>
      <div className="w-[52px] h-[52px] mt-[3px]">
        <ButtonLogo link="/">
          <LogoTwitter />
        </ButtonLogo>
      </div>
      <div>
        <ButtonHeader
          link="/"
          content="Home"
        >
          <HomeIcon />
        </ButtonHeader>
        <ButtonHeader
          link="/"
          content="Explore"
        >
          <SearchIcon />
        </ButtonHeader>
        <ButtonHeader
          link="/"
          content="Notifications"
        >
          <SearchIcon />
        </ButtonHeader>
        <ButtonHeader
          link="/"
          content="Messages"
        >
          <SearchIcon />
        </ButtonHeader>
        <ButtonHeader
          link="/"
          content="Bookmarks"
        >
          <SearchIcon />
        </ButtonHeader>
        <ButtonHeader
          link="/"
          content="Communities"
        >
          <SearchIcon />
        </ButtonHeader>
        <ButtonHeader
          link="/"
          content="XPremium"
        >
          <SearchIcon />
        </ButtonHeader>
        <ButtonHeader
          link="/"
          content="Profile"
        >
          <SearchIcon />
        </ButtonHeader>
      </div>
    </div>
  )
}

export default MainHeader
