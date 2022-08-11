import style from "./Content.module.css";
import UserInfo from "./UserInfo/UserInfo";
import Navigation from "./Navigation/Navigation";
import Main from "./Main/Main";

export default function Content() {
    return (
        <div className={style.content}>
            <div className={style.headerImg}>
            </div>
            <UserInfo/>
            <Navigation/>
            <Main/>
        </div>
    );
}