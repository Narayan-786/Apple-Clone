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
                className="absolute left-0 top-full w-screen h-screen md:h-auto z-40 bg-white md:overflow-visible overflow-y-auto h-[calc(100vh-3rem)]"
            >
                <div className="relative max-w-5xl mx-auto">
                    <div className="max-w-5xl mx-auto pb-20 md:pt-8 pt-7  md:px-5 px-12">
                        <div className="flex flex-col w-full gap-7">
                            <h1 className="font-b">Your Bag is empty.</h1>
                            <p className="md:text-xs text-md text-gray-500 font-medium"><a href="#" className="text-blue-700 underline">Sign in</a> to see if you have any saved items</p>
                            <div className="flex flex-col md:gap-2 gap-3 px-1">
                                <div href="#" className="font-nf py-1">My Profile</div>
                                <a href="#" className="md:text-xs text-md font font-semibold hover:text-black transition-hover duration-300 rounded-md flex items-center gap-1"><Box strokeWidth={1.5} size={16}/>&nbsp;&nbsp;Orders</a>
                                <a href="#" className="md:text-xs text-md font font-semibold hover:text-black transition-hover duration-300 rounded-md flex items-center gap-1"><LucideBookmark strokeWidth={1.5} size={16}/>&nbsp;&nbsp;Your Saves</a>
                                <a href="#" className="md:text-xs text-md font font-semibold hover:text-black transition-hover duration-300 rounded-md flex items-center gap-1"><LucideCog strokeWidth={1.5} size={16}/>&nbsp;&nbsp;Account</a>
                                <a href="#" className="md:text-xs text-md font font-semibold hover:text-black transition-hover duration-300 rounded-md flex items-center gap-1"><CircleUserRound strokeWidth={1.5} size={16}/>&nbsp;&nbsp;Sign in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
};