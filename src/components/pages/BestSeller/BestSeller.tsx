import React from "react";
import scss from "./BestSeller.module.scss";

const BestSeller = () => {
    return (
        <section className={scss.BestSeller}>
            <div className={scss.container}>
                <div className={scss.content}></div>
            </div>
        </section>
    );
};

export default BestSeller;
