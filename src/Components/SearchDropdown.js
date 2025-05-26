import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { Search } from "lucide-react";
export default function SearchDropdown() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 top-full w-screen z-40 bg-white"
            >
                <div className="relative max-w-5xl mx-auto">
                    <div className="max-w-5xl mx-auto pb-20 pt-8 px-5">
                        <div className="flex flex-col gap-10">
                            <div className="flex items-center">
                                <Search strokeWidth={1.5} size={24} />
                                <input ref={inputRef} type="text" placeholder="Search apple.com" className="w-full placeholder-gray-400 placeholder:font-semibold focus:outline-none text-2xl px-2" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <li className="list-none font-sf py-1">Quick Links</li>
                                <li className="list-none font-s hover:bg-gray-100 hover:text-black transition-hover duration-300 rounded-md">&#8594;Find a Store</li>
                                <li className="list-none font-s hover:bg-gray-100 hover:text-black transition-hover duration-300 rounded-md">&#8594;Accessories</li>
                                <li className="list-none font-s hover:bg-gray-100 hover:text-black transition-hover duration-300 rounded-md">&#8594;AirPods</li>
                                <li className="list-none font-s hover:bg-gray-100 hover:text-black transition-hover duration-300 rounded-md">&#8594;Apple Intelligence</li>
                                <li className="list-none font-s hover:bg-gray-100 hover:text-black transition-hover duration-300 rounded-md">&#8594;Apple Trade In</li>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
};