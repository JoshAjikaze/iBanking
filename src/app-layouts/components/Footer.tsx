import React from "react";


const FooterComponent = () => {
    console.log(window.document.documentElement)
    return (
        <section className="flex flex-col w-full text-center text-gray-400 py-3">
            <p><span className="text-green-900 cursor-pointer hover:underline">iBanking</span> © 2023 Reliance Infosystems.</p>
        </section>
    );
};

export default FooterComponent;
