import { useState, } from "react";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import StoreDropdown from "./StoreDropdown";
import MacDropdown from "./MacDropdown";
import IPadDropdown from "./iPadDopdown";
import IPhoneDropdown from "./iPhoneDropdown";
import WatchDropdown from "./WatchDropdown";
import AirPodsDropdown from "./AirPodsDropdown";
import TVDropdown from "./TVDropdown";
import EnterDropdown from "./EnterDropdown";
import AccessDropdown from "./AccessDropdown";
import SupportDropdown from "./SupportDropdown";
import SearchDropdown from "./SearchDropdown";
import ShopDropdown from "./ShopDropdown";

export default function Navbar() {
    const [hoveredItem, setHoveredItem] = useState(null);

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = (id) => {
        setDropdownOpen((prev) => (prev === id ? null : id));
    };

    return (
        <div className="sticky w-full h-12 top-0 bg-white z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex justify-evenly items-center h-12">
                    <a className="" href="">
                        <img
                            src="/Images/Main.svg"
                            alt="Apple"
                            className="h-11"
                        />
                    </a>
                    <div
                        onMouseEnter={() => setHoveredItem("store")}
                        className="relative"
                    >
                        <a href="#" className="font-sf hover:text-black">Store</a>
                    </div>
                    <div
                        onMouseEnter={() => setHoveredItem("mac")}
                        className="relative"
                    >
                        <a href="#" className="font-sf hover:text-black">Mac</a>
                    </div>
                    <div
                        onMouseEnter={() => setHoveredItem("pad")}
                        className="relative"
                    >
                        <a href="#" className="font-sf hover:text-black">iPad</a>
                    </div>
                    <div
                        onMouseEnter={() => setHoveredItem("phone")}
                        className="relative"
                    >
                        <a href="#" className="font-sf hover:text-black">iPhone</a>
                    </div>
                    <div
                        onMouseEnter={() => setHoveredItem("watch")}
                        className="relative"
                    >
                        <a href="#" className="font-sf hover:text-black">Watch</a>
                    </div>
                    <div
                        onMouseEnter={() => setHoveredItem("pods")}
                        className="relative"
                    >
                        <a href="#" className="font-sf hover:text-black">AirPods</a>
                    </div>
                    <div
                        onMouseEnter={() => setHoveredItem("tv")}
                        className="relative"
                    >
                        <a href="#" className="font-sf hover:text-black">TV & Home</a>
                    </div>
                    <div
                        onMouseEnter={() => setHoveredItem("ent")}
                        className="relative"
                    >
                        <a href="#" className="font-sf hover:text-black">Entertainment</a>
                    </div>
                    <div
                        onMouseEnter={() => setHoveredItem("acc")}
                        className="relative"
                    >
                        <a href="#" className="font-sf hover:text-black">Accessories</a>
                    </div>
                    <div
                        onMouseEnter={() => setHoveredItem("sup")}
                        className="relative"
                    >
                        <a href="#" className="font-sf hover:text-black">Support</a>
                    </div>
                    <Search strokeWidth={1.5} size={16}
                        onClick={(e) => {
                            e.preventDefault();
                            toggleDropdown("search");
                            setHoveredItem(null);
                        }} />
                    <ShoppingBag strokeWidth={1.5} size={16}
                        onClick={(e) => {
                            e.preventDefault();
                            toggleDropdown("shop");
                            setHoveredItem(null);
                        }} />
                </div>
            </div>
            {hoveredItem === "store" && (<div
                onMouseEnter={() => setHoveredItem("store")}
                onMouseLeave={() => setHoveredItem(null)}
                className=""
            >
                <StoreDropdown />
            </div>)}
            {hoveredItem === "mac" && (<div
                onMouseEnter={() => setHoveredItem("mac")}
                onMouseLeave={() => setHoveredItem(null)}
                className=""
            >
                <MacDropdown />
            </div>)}
            {hoveredItem === "pad" && (<div
                onMouseEnter={() => setHoveredItem("pad")}
                onMouseLeave={() => setHoveredItem(null)}
                className=""
            >
                <IPadDropdown />
            </div>)}
            {hoveredItem === "phone" && (<div
                onMouseEnter={() => setHoveredItem("phone")}
                onMouseLeave={() => setHoveredItem(null)}
                className=""
            >
                <IPhoneDropdown />
            </div>)}
            {hoveredItem === "watch" && (<div
                onMouseEnter={() => setHoveredItem("watch")}
                onMouseLeave={() => setHoveredItem(null)}
                className=""
            >
                <WatchDropdown />
            </div>)}
            {hoveredItem === "pods" && (<div
                onMouseEnter={() => setHoveredItem("pods")}
                onMouseLeave={() => setHoveredItem(null)}
                className=""
            >
                <AirPodsDropdown />
            </div>)}
            {hoveredItem === "tv" && (<div
                onMouseEnter={() => setHoveredItem("tv")}
                onMouseLeave={() => setHoveredItem(null)}
                className=""
            >
                <TVDropdown />
            </div>)}
            {hoveredItem === "ent" && (<div
                onMouseEnter={() => setHoveredItem("ent")}
                onMouseLeave={() => setHoveredItem(null)}
                className=""
            >
                <EnterDropdown />
            </div>)}
            {hoveredItem === "acc" && (<div
                onMouseEnter={() => setHoveredItem("acc")}
                onMouseLeave={() => setHoveredItem(null)}
                className=""
            >
                <AccessDropdown />
            </div>)}
            {hoveredItem === "sup" && (<div
                onMouseEnter={() => setHoveredItem("sup")}
                onMouseLeave={() => setHoveredItem(null)}
                className=""
            >
                <SupportDropdown />
            </div>)}
            {isDropdownOpen === "search" && (
                <div
                    onMouseLeave={() => setDropdownOpen(false)}
                >
                    <SearchDropdown />
                </div>
            )}
            {isDropdownOpen === "shop" && (
                <div
                    onMouseLeave={() => setDropdownOpen(false)}
                >
                    <ShopDropdown />
                </div>
            )}
        </div>
    );
};
