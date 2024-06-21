import '../styles/Footer.css';

export default function Footer() {
    return (
        <>
            <footer>
                <p>
                    {"Copyright "} &copy; {" "}
                    {new Date().getFullYear()}
                    <a href={"https://github.com/Jun1oru"}
                        target={"_blank"}
                    >
                        {" Jun1oru"}
                    </a>
                </p>
            </footer>
        </>
    );
}