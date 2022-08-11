import style from "./Navigation.module.css";


export default function Navigation(){
    return(
        <div>
            <p className={style.navigationText}>Features</p>
            <div className={style.navigation}>
                <a className={style.navigationLink}>
                    Profile Timeline
                </a>
                <a className={style.navigationLink}>
                    Profile About
                </a>
                <a className={style.navigationLink}>
                    Profile Groups
                </a>
                <a className={style.navigationLink}>
                    Profile Blog Posts
                </a>
                <a className={style.navigationLink}>
                    Profile Photos
                </a>
                <a className={style.navigationLink}>
                    Activity
                </a>
                <a className={style.navigationLink}>
                    Members
                </a>
                <a className={style.navigationLink}>
                    Groups
                </a>
            </div>
        </div>
    );
}