import style from "../Style/navbar.module.css";

export default function NarBar(){
    return(
        <div className={style.navContainer}>
            <nav className={style.navBar}>
                    <a className ={style.navItem} href="/">Home</a>
                    <a className ={style.navItem} href="/">Vent</a>
                    <a className ={style.navItem} href="/">Responses</a>
                    <a className ={style.navItem} href="/">Profile</a>
            </nav>
        </div>
    );
}