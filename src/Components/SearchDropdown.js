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
                className="absolute left-0 top-full w-screen h-screen md:h-auto z-40 bg-white md:overflow-visible overflow-y-auto md:h-auto h-[calc(100vh-3rem)]"
            >
                <div className="relative max-w-5xl mx-auto">
                    <div className="max-w-5xl mx-auto pb-20 md:pt-8 pt-7  md:px-5 px-12">
                        <div className="flex flex-col gap-10">
                            <div className="flex items-center">
                                <Search strokeWidth={1.5} size={24} />
                                <input ref={inputRef} type="text" placeholder="Search apple.com" className="w-full placeholder-gray-400 placeholder:font-semibold focus:outline-none text-2xl px-2" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <li className="list-none font-nf py-1">Quick Links</li>
                                <li className="list-none font-s hover:bg-gray-100 hover:text-black transition-hover duration-300 rounded-md">&#8594;&nbsp;&nbsp;Find a Store</li>
                                <li className="list-none font-s hover:bg-gray-100 hover:text-black transition-hover duration-300 rounded-md">&#8594;&nbsp;&nbsp;Accessories</li>
                                <li className="list-none font-s hover:bg-gray-100 hover:text-black transition-hover duration-300 rounded-md">&#8594;&nbsp;&nbsp;AirPods</li>
                                <li className="list-none font-s hover:bg-gray-100 hover:text-black transition-hover duration-300 rounded-md">&#8594;&nbsp;&nbsp;Apple Intelligence</li>
                                <li className="list-none font-s hover:bg-gray-100 hover:text-black transition-hover duration-300 rounded-md">&#8594;&nbsp;&nbsp;Apple Trade In</li>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
};