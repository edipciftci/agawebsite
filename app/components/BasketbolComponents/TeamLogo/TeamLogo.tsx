import Logo from "../../../assets/aga_teamlogo.svg";
import styles from "./TeamLogo.module.css";

export default function TeamLogo(){
    return (
        <div aria-hidden="true" className={styles.wrap}>
            <Logo className={styles.svg}/>
        </div>
    );
}