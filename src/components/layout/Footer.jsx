import React from 'react';
import {ReactComponent as FooterLogo} from '../../components/Assets/Copyright-logo.svg'

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
           <FooterLogo/>
            <p>Copyright &copy; {currentYear} All Right reserved</p>
        </footer>
    )
}

export default Footer
