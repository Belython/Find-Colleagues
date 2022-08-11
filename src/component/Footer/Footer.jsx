import style from "./Footer.module.css";
import Information from "./Information/Information";
import Navigation from "./Navigation/Navigation";

export default function Footer() {
    return (
        <footer className={style.footer}>
            <Information />
            <Navigation />
        </footer>
    );
}