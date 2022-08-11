import style from "./Navbar.module.css"
import FeedIcon from '@mui/icons-material/Feed';
import FaceIcon from '@mui/icons-material/Face';
import ChatIcon from '@mui/icons-material/Chat';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Navbar() {
    return (
        <div className={style.navbar}>
            <ul className={style.menu}>
                <li className={style.menuItem}>
                    <a href={"#"} className={style.link}> <FaceIcon/><p className={style.linkText}>Profile</p></a>
                </li>
                <li className={style.menuItem}>
                    <a href={"#"} className={style.link}><FeedIcon/> <p className={style.linkText}>NewsFeed </p></a>
                </li>
                <li className={style.menuItem}>
                    <a href={"#"} className={style.link}><ChatIcon/> <p className={style.linkText}>Messages</p></a>
                </li>
                <li className={style.menuItem}>
                    <a href={"#"} className={style.link}><LibraryMusicIcon/> <p className={style.linkText}>Music</p></a>
                </li>
                <li className={style.menuItem}>
                    <a href={"#"} className={style.link}><SettingsIcon/> <p className={style.linkText}>Settings</p></a>
                </li>
            </ul>
        </div>
    );
}