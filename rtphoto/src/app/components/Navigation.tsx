import { Mail, House, Images } from "lucide-react";

export default function Navigation() {
    return (
        <nav>
            <ul>
            <li>
                <a href="/" style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
                <House />
                <span>Home</span>
                </a>
            </li>
            <li>
                <a href="/Gallery" style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
                <Images />
                <span>Gallery</span>
                </a>
            </li>
            <li>
                <a href="/Contact" style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
                <Mail />
                <span>Contact</span>
                </a>
            </li>
            </ul>
        </nav>
            
    );
}