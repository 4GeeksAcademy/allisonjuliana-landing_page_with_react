import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-white text-center py-4">
                <div className="container">
                    <p> <small>Copyright &copy; Your Website {new Date().getFullYear()}</small></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;