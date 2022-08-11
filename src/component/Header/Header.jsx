import style from "./Header.module.css";

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.headerInformation}>
                <a className={style.headerBrand} href={"#"}>
                    <img className={style.logo} src={"https://img.icons8.com/ios/344/groups.png"}/>
                    <h1 className={style.headerBrandText}>Find Colleagues</h1>
                </a>
            </div>
            <a href={"#"} className={style.login}>Login</a>
        </header>
    );
}