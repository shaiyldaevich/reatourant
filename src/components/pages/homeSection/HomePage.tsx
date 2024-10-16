import React from 'react';
import scss from "./HomePage.module.scss"
const Homepage = () => {
    return (
        <section className={scss.HomePage}>
            <div className="container">
                <div className={scss.content}>
                    HomePage
                </div>
            </div>
        </section>
    );
};

export default Homepage;