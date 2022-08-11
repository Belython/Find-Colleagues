import style from "./Information.module.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import {Icon28LogoVk} from "@vkontakte/icons";

export default function Information() {
    return (
        <div className={style.brand}>
            <div className={style.infoBrand}>
                <img className={style.logo} src={"https://img.icons8.com/ios/344/groups.png"}/>
                <div>
                    <p className={style.infoBrandTitle}>FIND COLLEAGUES</p>
                    <p className={style.infoBrandText}>SOCIAL COMMUNITY</p>
                </div>
            </div>
            <p className={style.infoText}>
                Find Colleagues Social Network was created in 2022, our goal is a convenient search for colleagues!
            </p>
            <div className={style.infoLinkSocialNetwork}>
                <a className={style.linkSocialNetwork}
                   href={"https://www.youtube.com/channel/UClo75epUOSoGrOpoZkg1onw"}><YouTubeIcon/></a>
                <a className={style.linkSocialNetwork} href={"https://github.com/Belython"}><GitHubIcon/></a>
                <a className={style.linkSocialNetwork} href={"https://vk.com/belython"}><Icon28LogoVk/></a>
            </div>
        </div>
    );
}