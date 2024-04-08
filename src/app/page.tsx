import Image from "next/image";

export default function Home() {
    return (
        <div>
            {/* hero section */}
            <div className=" h-[80vh] bg-red-300">Hero</div>

            {/* featured item */}
            <div className="h-52 bg-blue-400">featured</div>
        </div>
    );
}
