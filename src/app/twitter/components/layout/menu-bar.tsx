import ButtonHeader from '@/app/twitter/components/ui/button-header'
import ButtonLogo from '@/app/twitter/components/ui/button-logo'
import HomeIcon from '@/assets/icon/home-icon.svg'
import SearchIcon from '@/assets/icon/search-icon.svg'
import LogoTwitter from '@/assets/icon/twitter.svg'
import NotificationIcon from '@/assets/icon/notification-icon.svg'
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import TurnedInNotTwoToneIcon from '@mui/icons-material/TurnedInNotTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

function MainHeader() {
  return (
    <div className='fixed'>
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
          <NotificationIcon />
        </ButtonHeader>
        <ButtonHeader
          link="/"
          content="Messages"
        >
          <MailOutlineTwoToneIcon sx={{fontSize: 30}}/>
        </ButtonHeader>
        <ButtonHeader
          link="/"
          content="Bookmarks"
        >
          <TurnedInNotTwoToneIcon sx={{fontSize: 32}}/>
        </ButtonHeader>
        <ButtonHeader
          link="/"
          content="Communities"
        >
          <PeopleAltOutlinedIcon sx={{fontSize: 32}}/>
        </ButtonHeader>
        <ButtonHeader
          link="/"
          content="XPremium"
        >
           <LogoTwitter />
        </ButtonHeader>
        <ButtonHeader
          link="/"
          content="Profile"
        >
          <PersonTwoToneIcon sx={{fontSize: 32}}/>
        </ButtonHeader>
      </div>
    </div>
  )
}

export default MainHeader
