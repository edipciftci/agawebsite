"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonRunning, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import styles from "./IconTSE.module.css";

type Props = {
    size?: number; // px
    className?: string;
};

export default function TemelSporIcon({ size = 96, className }: Props) {
    return (
        <span
            className={`${styles.wrap} ${className ?? ""}`}
            style={{ width: size, height: size }}
            aria-hidden="true"
        >
        <span className={styles.circle} />

            <FontAwesomeIcon icon={faPersonRunning} className={styles.runner} />
            <FontAwesomeIcon icon={faGraduationCap} className={styles.cap} />

        </span>
    );
}