import React from "react";


const Footer = () => {
    const currentYear = new Date().getUTCFullYear()

    return(
        <footer>
            <p>
                Copyright © {currentYear}
            </p>
        </footer>

    )
}

export default Footer;