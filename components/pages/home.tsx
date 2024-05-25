import styles from './styles.module.css';
import React from 'react';

export default function Home() {
    const [theme, setTheme] = React.useState('dark');

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTheme(localStorage.getItem('theme') || 'dark');
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [theme]);

    return (<>
        <div className={styles.container} style={{ overflow: 'hidden' }}>
            <div className={styles.backgroundColors} />

            <div className={theme === "dark" ? styles.logoContainerDark : styles.logoContainerLight}>
                <img src="http://localhost:3000/img/logo.png" alt="Contenthook Logo" draggable="false" className={theme === "dark" ? styles.logoDark : styles.logoLight} />
                <span className={theme === "dark" ? styles.logoTextDark : styles.logoTextLight}>Contenthook</span>
            </div>

            <h1 className={theme === "dark" ? styles.titleDark : styles.titleLight}>
              The Advanced, flexible, fast, easy and secure CMS
            </h1>
            <p className={theme === "dark" ? styles.descriptionDark : styles.descriptionLight}>
                Contenthook is an advanced, flexible, fast, easy and secure CMS
            </p>
            <div className={styles.buttonContainer}>
                <a href="/docs" className={theme === "dark" ? styles.getStartedButtonDark : styles.getStartedButtonLight}>
                    Get Started
                </a>
                <a
                    href="https://github.com/vercel/next.js/tree/master/examples"
                    className={theme === "dark" ? styles.examplesButtonDark : styles.examplesButtonLight}
                >
                    Examples
                </a>
            </div>
        </div>
    </>);
}