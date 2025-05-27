import { useState, } from "react";
import { Menu, X, Search, ShoppingBag, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isDropOpen, setDropOpen] = useState(false);

    const toggleDropdown = (id) => {
        setDropdownOpen((prev) => (prev === id ? null : id));
    };
    const toggleDrop = (id) => {
        setDropOpen((prev) => (prev === id ? null : id));
    };

    return (
        <div className="sticky w-full h-10 top-0 bg-white z-50">
            <div className="max-w-5xl mx-auto md:px-7 px-4">
                <div className="flex justify-between items-center h-10">
                    <a className="flex-shrink-0" href="">
                        <img
                            src="/Images/Main.svg"
                            alt="Apple"
                            className="h-11"
                        />
                    </a>
                    <div className="hidden md:flex justify-between items-center gap-6 bet md:gap-8 lg:gap-10 relative top-[-1.5px]">
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
                    </div>
                    <div className="flex justify-between items-center gap-10">
                        <Search strokeWidth={1.5} size={16}
                            className="text-gray-700 hover:text-black transition-colors duration-200 cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                toggleDropdown("search");
                                setHoveredItem(null);
                            }} />
                        <ShoppingBag strokeWidth={1.5} size={16}
                            className="text-gray-700 hover:text-black transition-colors duration-200 cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                toggleDropdown("shop");
                                setHoveredItem(null);
                            }} />

                        <div className="md:hidden relative top-1">
                            <button onClick={() => setMenuOpen(!isMenuOpen)}
                                className="text-gray-700 hover:text-black transition-colors duration-200">
                                {isMenuOpen ? (
                                    <X strokeWidth={1.5} size={18} />
                                ) : (
                                    <Menu strokeWidth={1.5} size={18} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="md:hidden bg-white h-screen px-12 py-7"
                            onMouseLeave={() => setMenuOpen(false)}
                        >
                            <div className="flex flex-col justify-between items-start gap-2 ">
                                <div
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDrop("store");
                                    }}
                                    className="relative"
                                >
                                    <a href="#" className="font-b hover:text-black">Store</a>
                                </div>
                                <div
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDrop("mac");
                                    }}
                                    className="relative"
                                >
                                    <a href="#" className="font-b hover:text-black">Mac</a>
                                </div>
                                <div
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDrop("pad");
                                    }}
                                    className="relative"
                                >
                                    <a href="#" className="font-b hover:text-black">iPad</a>
                                </div>
                                <div
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDrop("phone");
                                    }}
                                    className="relative"
                                >
                                    <a href="#" className="font-b hover:text-black">iPhone</a>
                                </div>
                                <div
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDrop("watch");
                                    }}
                                    className="relative"
                                >
                                    <a href="#" className="font-b hover:text-black">Watch</a>
                                </div>
                                <div
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDrop("pods");
                                    }}
                                    className="relative"
                                >
                                    <a href="#" className="font-b hover:text-black">AirPods</a>
                                </div>
                                <div
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDrop("tv");
                                    }}
                                    className="relative"
                                >
                                    <a href="#" className="font-b hover:text-black">TV & Home</a>
                                </div>
                                <div
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDrop("ent");
                                    }}
                                    className="relative"
                                >
                                    <a href="#" className="font-b hover:text-black">Entertainment</a>
                                </div>
                                <div
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDrop("acc");
                                    }}
                                    className="relative"
                                >
                                    <a href="#" className="font-b hover:text-black">Accessories</a>
                                </div>
                                <div
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDrop("sup");
                                    }}
                                    className="relative"
                                >
                                    <a href="#" className="font-b hover:text-black">Support</a>
                                </div>
                            </div>
                            {isDropOpen === "store" && (
                                <div className="bg-white h-screen">
                                    <button onClick={() => setDropOpen(!isDropOpen)} className="absolute bg-white left-2.5 top-2.5 z-100"><ChevronLeft className="text-black" /></button>
                                    <StoreDropdown />
                                </div>
                            )}
                            {isDropOpen === "mac" && (
                                <div className="bg-white h-screen">
                                    <button onClick={() => setDropOpen(!isDropOpen)} className="absolute bg-white left-2.5 top-2.5 z-100"><ChevronLeft className="text-black" /></button>
                                    <MacDropdown />
                                </div>
                            )}
                            {isDropOpen === "pad" && (
                                <div className="bg-white h-screen">
                                    <button onClick={() => setDropOpen(!isDropOpen)} className="absolute bg-white left-2.5 top-2.5 z-100"><ChevronLeft className="text-black" /></button>
                                    <IPadDropdown />
                                </div>
                            )}
                            {isDropOpen === "phone" && (
                                <div className="bg-white h-screen">
                                    <button onClick={() => setDropOpen(!isDropOpen)} className="absolute bg-white left-2.5 top-2.5 z-100"><ChevronLeft className="text-black" /></button>
                                    <IPhoneDropdown />
                                </div>
                            )}
                            {isDropOpen === "watch" && (
                                <div className="bg-white h-screen">
                                    <button onClick={() => setDropOpen(!isDropOpen)} className="absolute bg-white left-2.5 top-2.5 z-100"><ChevronLeft className="text-black" /></button>
                                    <WatchDropdown />
                                </div>
                            )}
                            {isDropOpen === "pods" && (
                                <div className="bg-white h-screen">
                                    <button onClick={() => setDropOpen(!isDropOpen)} className="absolute bg-white left-2.5 top-2.5 z-100"><ChevronLeft className="text-black" /></button>
                                    <AirPodsDropdown />
                                </div>
                            )}
                            {isDropOpen === "tv" && (
                                <div className="bg-white h-screen">
                                    <button onClick={() => setDropOpen(!isDropOpen)} className="absolute bg-white left-2.5 top-2.5 z-100"><ChevronLeft className="text-black" /></button>
                                    <TVDropdown />
                                </div>
                            )}
                            {isDropOpen === "ent" && (
                                <div className="bg-white h-screen">
                                    <button onClick={() => setDropOpen(!isDropOpen)} className="absolute bg-white left-2.5 top-2.5 z-100"><ChevronLeft className="text-black" /></button>
                                    <EnterDropdown />
                                </div>
                            )}
                            {isDropOpen === "acc" && (
                                <div className="bg-white h-screen">
                                    <button onClick={() => setDropOpen(!isDropOpen)} className="absolute bg-white left-2.5 top-2.5 z-100"><ChevronLeft className="text-black" /></button>
                                    <AccessDropdown />
                                </div>
                            )}
                            {isDropOpen === "sup" && (
                                <div className="bg-white h-screen">
                                    <button onClick={() => setDropOpen(!isDropOpen)} className="absolute bg-white left-2.5 top-2.5 z-100"><ChevronLeft className="text-black" /></button>
                                    <SupportDropdown />
                                </div>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>

            )}
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
                    className="bg-white md:h-auto h-screen"
                >
                    <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="md:hidden absolute bg-white right-4 top-2"><X className="text-black" /></button>
                    <SearchDropdown />
                </div>
            )}
            {isDropdownOpen === "shop" && (
                <div
                    onMouseLeave={() => setDropdownOpen(false)}
                    className="bg-white md:h-auto sm:h-screen"
                >
                    <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="md:hidden absolute bg-white right-4 top-2"><X className="text-black" /></button>
                    <ShopDropdown />
                </div>
            )}
        </div>
    );
};
