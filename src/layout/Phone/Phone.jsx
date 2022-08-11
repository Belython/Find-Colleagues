import style from "./Phone.module.css"
import Header from "../../component/Header/Header";
import Content from "../../component/Content/Content";

export default function Phone(){
    return (
        <div className={style.App}>
            <Header/>
            <Content/>
        </div>
    );
}