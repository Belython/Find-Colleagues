import style from "./Desktop.module.css"
import Header from "../../component/Header/Header";
import Navbar from "../../component/Navbar/Navbar";
import Content from "../../component/Content/Content";
import Footer from "../../component/Footer/Footer";

export default function Desktop() {
    return (
        <div className={style.App}>
            <Header/>
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    );
}