import style from "./Navigation.module.css";
import {
    Icon36MessageOutline,
    Icon36Music,
    Icon36Picture, Icon36TearOffFlyerOutline,
    Icon36UserCircleOutline,
    Icon36Users,
    Icon36Users3Outline
} from "@vkontakte/icons";

export default function Navigation() {
    return (
        <div className={style.navigation}>
            <a className={style.navigationIcon}>
                <Icon36UserCircleOutline/>
            </a>
            <a className={style.navigationIcon}>
                <Icon36Users/>
            </a>
            <a className={style.navigationIcon}>
                <Icon36Users3Outline/>
            </a>
            <a className={style.navigationIcon}>
                <Icon36Picture/>
            </a>
            <a className={style.navigationIcon}>
                <Icon36Music/>
            </a>
            <a className={style.navigationIcon}>
                <Icon36MessageOutline/>
            </a>
            <a className={style.navigationIcon}>
                <Icon36TearOffFlyerOutline/>
            </a>
        </div>
    );
}