import React, { useState } from "react";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
import kurta from "../images/chudi.png";
import saree from "../images/saree.png";
import anarkali from "../images/partywear.png";
import gean from "../images/western.png";
import halfSaree from "../images/fancy.png";
import formal from "../images/formal.png";

const imageArray = [kurta, saree, gean, anarkali, halfSaree, formal];

function DressCart() {
    const [middleImage, setMiddleImage] = useState(0);

    // 👉 Increment
    const increment = () => {
        setMiddleImage((prev) => (prev + 1) % imageArray.length);
    };

    // 👉 Decrement
    const decrement = () => {
        setMiddleImage((prev) =>
            prev === 0 ? imageArray.length - 1 : prev - 1
        );
    };

    return (
        <div className="py-20 mt-10 text-center">

            {/* Title */}
            <h1 className="text-5xl font-bold text-black">
                Our Top Selling Collections
                <span className="block h-1 w-60 bg-black mx-auto mt-4"></span>
            </h1>

            {/* Slider */}
            <div className="grid md:grid-cols-2 ">
               
                <div className="">
                    <div className="h-[80vh] flex justify-center items-center mt-10">
                        <div className="flex items-center">

                            {/* Left 2 */}
                            <img
                                src={imageArray[(middleImage - 2 + imageArray.length) % imageArray.length]}
                                className="filter blur-[2px] h-[240px] w-[140px] object-cover rounded-lg translate-x-[70px]"
                            />

                            {/* Left 1 */}
                            <img
                                src={imageArray[(middleImage - 1 + imageArray.length) % imageArray.length]}
                                className=" filter blur-[2px]  h-[340px] w-[240px] object-cover rounded-lg translate-x-[40px] z-[5]"
                            />

                            {/* Center */}
                            <img
                                src={imageArray[middleImage]}
                                className=" h-[440px] w-[340px] object-cover rounded-xl shadow-2xl z-10"
                            />

                            {/* Right 1 */}
                            <img
                                src={imageArray[(middleImage + 1) % imageArray.length]}
                                className="filter blur-[2px] h-[340px] w-[240px] object-cover rounded-lg -translate-x-[40px] z-[5]"
                            />

                            {/* Right 2 */}
                            <img
                                src={imageArray[(middleImage + 2) % imageArray.length]}
                                className="filter blur-[2px] h-[240px] w-[140px] object-cover rounded-lg -translate-x-[70px]"
                            />
                        </div>
                        
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-5">
                        <button
                            onClick={decrement}
                            className="px-6 py-3 rounded-lg bg-purple-600 text-white shadow-md hover:scale-105 transition"
                        >
                            <ArrowLeftToLine />
                        </button>

                        <button
                            onClick={increment}
                            className="px-6 py-3 rounded-lg bg-purple-600 text-white shadow-md hover:scale-105 transition"
                        >
                            <ArrowRightToLine />
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-end gap-8 mt-6">
                        {imageArray.map((_, index) => (
                            <div
                                key={index}
                                className={`size-2 rounded-full ${index === middleImage ? "bg-purple-600 scale-125" : "bg-white"
                                    } transition`}
                            />
                        ))}
                    </div>
                </div>
                <div className="text-center mt-50 font-semibold space-y-5 ">

                    <h1 className="text-3xl text-white">Anarkali Suit</h1>
                     <h1 className="text-3xl text-white">Formal Wear</h1>
                      <h1 className="text-3xl text-white">Skill Saree</h1>
                       <h1 className="text-3xl text-white">Designer Saree</h1>
                        <h1 className="text-3xl text-white">Top with Geans</h1>
                    
                </div>

            </div>
        </div>
    );
}

export default DressCart;