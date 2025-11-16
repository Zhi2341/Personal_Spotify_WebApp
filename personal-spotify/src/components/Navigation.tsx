import { useState } from "react";

const links =
    [
        { href: "#Home", label: "HOME" },
        { href: "#About", label: "ABOUT" },
        { href: "../MusicHome.tsx", label: "MUSIC HUB" },
        // { href: "#Register", label: "REGISTER" },
    ];

export default function NavBar()
{
    const [open, setOpen] = useState(false);

    return (
        <nav className="nav">

            <button
                className="menu-btn"
                aria-expanded={open}
                aria-controls="nav-links"
                onClick={() => setOpen(v => !v)}
            >
                ☰
            </button>

            <ul id="nav-links" className={`links ${open ? "open" : ""}`}>
                {links.map(l => (
                    <li key={l.href}>
                        <a href={l.href} onClick={() => setOpen(false)}>
                            {l.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}