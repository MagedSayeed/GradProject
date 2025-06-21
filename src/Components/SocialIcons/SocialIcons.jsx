import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function SocialIcons({myColor}) {
  let cls=myColor+" cursor-pointer";
  return (
    <ul className='d-flex gap-3 p-0 justify-content-center'>
        <span className={cls} ><FacebookIcon/></span>
        <span className={cls} ><InstagramIcon/></span>
        <span className={cls} ><XIcon/></span>
        <span className={cls} ><GitHubIcon/></span>
        <span className={cls} ><YouTubeIcon/></span>
    </ul>
  )
}
