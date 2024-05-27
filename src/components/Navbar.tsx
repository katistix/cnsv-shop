"use client";

import { useState } from "react";
import { LinkMeniu } from "./LinkMeniu";

const test = "h-36";

export function Navbar() {
    const [isCartShown, setIsCartShown] = useState(false);

    return (
        <div className=" bg-slate-800 flex justify-between p-3">
            <h1 className=" hover:text-red-500 font-bold text-slate-50">
                SITE CNSV
            </h1>

            {/* right */}
            <div className=" flex gap-4">
                <LinkMeniu link="/" text="Home" />
                <LinkMeniu link="/about" text="About" />
                <LinkMeniu link="/products" text="Products" />
                {/* Cart link */}
                <div
                    onMouseEnter={(e) => {
                        setIsCartShown(true);
                    }}
                    onMouseLeave={(e) => {
                        setIsCartShown(false);
                    }}
                    className="ml-4 cursor-pointer">
                    <a href="/cart">
                        <div className="hover:-rotate-180 duration-500">🛒</div>
                    </a>
                    {/* cart drop menu */}

                    <div
                        className={`bg-red-400 duration-500 py-4 absolute right-0 top-12 w-36 max-h-[50vh] ${isCartShown
                            ? "translate-y-0"
                            : " translate-y-[-50vh] delay-500"
                            }`}>
                        cart
                    </div>
                </div>
            </div>
        </div>
    );
}
