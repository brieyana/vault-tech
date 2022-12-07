import React from "react";
import CSS from './HomePage.module.css';
import vault from '../images/vault.png';
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div id={CSS.homePage}>
            <div className={CSS.content}>
                <h1 className={CSS.heading}>Vault Tech</h1>
                <div className={CSS.imageContainer}>
                <img id={CSS.vault} src={vault} alt="Vault Tech Logo" />
            </div>
                <p className={CSS.about}>
                Vault Tech’s purpose is to provide a secure method of purchasing and 
                completing transactions  between customers, vendors, companies, and 
                banks. Vault Tech will provide this service through an application 
                that will analyze real time data from the customer’s credit accounts 
                and will notify the user for any flagged transactions.
                </p>
                <div className={CSS.buttonContainer}>
                    <button className={CSS.button}><Link className={CSS.link} to="/login">Log in</Link></button>
                    <button className={CSS.button}><Link className={CSS.link} to="/signup">Sign up</Link></button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;