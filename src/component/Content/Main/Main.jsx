import style from "./Main.module.css";

export default function Main(){
    return(
        <div className={style.main}>
            <div className={style.widgetBox}>
                <p className={style.mainTitle}>About Me</p>
                <p className={style.informationText}>Hi! My name is Alexander! I have a GitHub account where I push
                    code.</p>
                <div className={style.informationLine}>
                    <p className={style.informationTitle}>Joined</p>
                    <p className={style.informationText}> 10 august 2022</p>
                </div>
                <div className={style.informationLine}>
                    <p className={style.informationTitle}>From</p>
                    <p className={style.informationText}> Saint-Petersburg, Russia</p>
                </div>
                <div className={style.informationLine}>
                    <p className={style.informationTitle}>Web</p>
                    <a className={style.informationText}
                       href={"https://vk.com/belython"}> https://vk.com/belython</a>
                </div>
            </div>
            <div className={style.widgetBox}>
                <p className={style.mainTitle}>Interests</p>
                <div>
                    <p className={style.interestsTitle}>Favorite TV Shows</p>
                    <p className={style.informationText}> Breaking Good, RedDevil, People of Interest, The Running
                        Dead, Found, American Guy, The Last Windbender, Game of Wars.</p>
                </div>
                <div>
                    <p className={style.interestsTitle}>Favorite Music Bands / Artists</p>
                    <p className={style.informationText}> Iron Maid, DC/AC, Megablow, Kung Fighters, System of a
                        Revenge, Rammstown.</p>
                </div>
                <div>
                    <p className={style.interestsTitle}>Favorite Movies</p>
                    <p className={style.informationText}> Goodfellas, The Green Mile, Casino</p>
                </div>
                <div>
                    <p className={style.interestsTitle}>Favorite Books</p>
                    <p className={style.informationText}> Goodfellas, 1984, Brave New World</p>
                </div>
                <div>
                    <p className={style.interestsTitle}>Favorite Games</p>
                    <p className={style.informationText}> The witcher, TES V: Skyrim, GTA, CS:GO, DOTA 2</p>
                </div>
            </div>
            <div className={style.widgetBox}>
                <p className={style.mainTitle}>Personal Info</p>
                <div className={style.informationLine}>
                    <p className={style.informationTitle}>Email</p>
                    <p className={style.informationText}> velikodnji@mail.ru</p>
                </div>
                <div className={style.informationLine}>
                    <p className={style.informationTitle}>Birthday</p>
                    <p className={style.informationText}> October 2, 2001</p>
                </div>
                <div className={style.informationLine}>
                    <p className={style.informationTitle}>Occupation</p>
                    <p className={style.informationText}> Web Developer</p>
                </div>
                <div className={style.informationLine}>
                    <p className={style.informationTitle}>Birthplace</p>
                    <p className={style.informationText}> Volzhsky, Russia</p>
                </div>
            </div>
        </div>
    );
}