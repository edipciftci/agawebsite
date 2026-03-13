import React from "react";
import Link from "next/link";
import styles from "./Cards.module.css";
import AGALogo from "../../assets/aga_teamlogo.svg";
import AVALogo from "../../assets/ava_teamlogo.svg";
import IconTSE from "../IconTSE/IconTSE";
import { PiCourtBasketballDuotone } from "react-icons/pi";

function Logo_AGA() {
    return (
        <AGALogo className="h-32 w-32"/>
    );
}
function Logo_AVA() {
    return (
        <AVALogo className="h-24 w-24"/>
    );
}
function Court() {
    return (
        <PiCourtBasketballDuotone className="h-32 w-32"/>
    );
}
function Logo_TSE() {
    return (
        <IconTSE/>
    );
}

type Option = {
    id: string;
    label: string;
    href: string;
    Icon: React.ComponentType<{ className?: string }>;
};

const options: Option[] = [
    { id: "salon", label: "Salon Kiralama", href: "/salon-kiralama", Icon: Court },
    { id: "basket", label: "Basketbol", href: "/basketbol", Icon: Logo_AGA },
    { id: "voley", label: "Voleybol", href: "/voleybol", Icon: Logo_AVA },
    { id: "temel", label: "Temel Spor Eğitimi", href: "/temel-spor-egitimi", Icon: Logo_TSE },
];

export default function Cards() {
    return (
        <div className={styles.page}>
            <div className={styles.grid} role="list" aria-label="Choices">
            
            {
                options.map((opt) => (
                    <Link
                        key={opt.id}
                        href={opt.href}
                        className={styles.card}
                        role="listitem"
                        aria-label={opt.label}
                    >
                        <div className={styles.cardInner}>
                            <div className={styles.iconArea}>
                                <opt.Icon className={styles.icon} />
                            </div>

                            <div className={styles.textArea}>
                                <div className={styles.label}>{opt.label}</div>
                            </div>
                        </div>
                    </Link>
                ))
            }
            
            </div>
        </div>
    );
}