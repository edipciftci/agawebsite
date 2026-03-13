import Logo from "@/app/assets/aga_teamlogo.svg";

type HeaderLogoProps = {
    size?: number;  // px
    className?: string;
    style?: React.CSSProperties;
}

export default function HeaderLogo({ size = 32, className, style }: HeaderLogoProps) {
    return (
        <Logo
            className={className}
            style={{ width: size, height: size, ...style }}
        />);
}