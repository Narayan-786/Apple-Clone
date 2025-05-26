import { motion, AnimatePresence } from "framer-motion";
import {Box, LucideCog, CircleUserRound, LucideBookmark } from "lucide-react";
export default function ShopDropdown() {
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
                        <div className="flex flex-col w-full gap-7">
                            <h1 className="font-b">Your Bag is empty.</h1>
                            <p className="text-xs text-gray-500 font-medium"><a href="#" className="text-blue-700 underline">Sign in</a> to see if you have any saved items</p>
                            <div className="flex flex-col gap-2 px-1">
                                <li className="list-none font-sf py-1">My Profile</li>
                                <li className="list-none text-xs font font-semibold hover:text-black transition-hover duration-300 rounded-md flex items-center gap-1"><Box strokeWidth={1.5} size={16}/>Find a Store</li>
                                <li className="list-none text-xs font font-semibold hover:text-black transition-hover duration-300 rounded-md flex items-center gap-1"><LucideBookmark strokeWidth={1.5} size={16}/>Accessories</li>
                                <li className="list-none text-xs font font-semibold hover:text-black transition-hover duration-300 rounded-md flex items-center gap-1"><LucideCog strokeWidth={1.5} size={16}/>AirPods</li>
                                <li className="list-none text-xs font font-semibold hover:text-black transition-hover duration-300 rounded-md flex items-center gap-1"><CircleUserRound strokeWidth={1.5} size={16}/>Apple Intelligence</li>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
};