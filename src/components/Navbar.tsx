import { LinkMeniu } from "./LinkMeniu";

export function Navbar() {
    return (
        <div className=" bg-slate-800 flex justify-between p-3">
            <h1 className=" font-bold text-slate-50">SITE CNSV</h1>

            <div className=" flex gap-4">
                <LinkMeniu link="/" text="Home" />
                <LinkMeniu link="/about" text="About" />
                <LinkMeniu link="/products" text="Products" />
            </div>
        </div>
    );
}
