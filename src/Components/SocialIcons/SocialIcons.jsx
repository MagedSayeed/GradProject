import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
export default function SocialIcons({myColor}) {
  return (
    <ul className='d-flex gap-2'>
        <Link className={myColor} ><FacebookIcon/></Link>
        <Link className={myColor} ><InstagramIcon/></Link>
        <Link className={myColor} ><XIcon/></Link>
        <Link className={myColor} ><GitHubIcon/></Link>
        <Link className={myColor} ><YouTubeIcon/></Link>
    </ul>
  )
}
