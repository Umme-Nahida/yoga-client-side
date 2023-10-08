
const Footer = () => {
    return (

        <footer className="footer p-10 bg-cyan-400 text-base-content max-w-full mx-auto border-t-4">
            <aside className="ml-20">
                <img src="/public/img/yoga-logo-F2E1D2844B-seeklogo.com.png" className="w-10 bg-white row-full" alt="" />
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <header className="footer-title ">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title ">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;