import { FeaturedSection } from "@/components/FeaturedSection";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            {/* hero section */}
            <div className=" h-[80vh] bg-red-300">Hero</div>

            {/* featured item */}
            <div className="w-full bg-blue-400 flex justify-center items-center">
                <FeaturedSection />
            </div>
        </div>
    );
}
