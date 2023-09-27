import Link from "next/link"
import styles from './styles.module.css';
import image from "./img/seminario.jpg"
import Image from "next/image";
const Footer = () => {
    return (
        <nav className={styles.nav}>
        <div className={styles.letter}>
            <p>
                <Link href="/Sitemap">Sitemap</Link>
            </p>
            <p>
                <Link href="/">Home</Link>  
            </p>
            <p>
                <Link href="/post">Posts</Link>
            </p>
            <p>
                <Link href="/about">About</Link>
            </p>
        </div>
        <div className={styles.letter}>
            <p>
                <p>Conectate con nosotros</p>
            </p>
            <p>
                <Link href="/Facebook">Facebook</Link>
            </p>
            <p>
                <Link href="/Twiter">Twiter</Link>
            </p>
            <p>
                <Link href="/TikTok">TikTok</Link>
            </p>
        </div>
        <div className={styles.letter}>
            <p> NEXT.js </p>
        </div>
        <div className={styles.letter}>
            <p>VERCEL</p>
        </div>
        <div className={styles.img}>
            <Image src={image} />
        </div>
        </nav>
    )
}
export default Footer;