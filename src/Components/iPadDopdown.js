import { motion, AnimatePresence } from "framer-motion";
export default function IPadDropdown() {
    return(
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
                    <div className="flex gap-24 text-left">
                        <div className="">
                            <li className="list-none font-sf pb-3">Explore iPad</li>
                            <li className="list-none font-b"><a href="" className="">Explore All iPad</a></li>
                            <li className="list-none font-b"><a href="" className="">iPad Pro</a></li>
                            <li className="list-none font-b"><a href="" className="">iPad Air</a></li>
                            <li className="list-none font-b"><a href="" className="">iPad</a></li>
                            <li className="list-none font-b"><a href="" className="">iPad mini</a></li>
                            <li className="list-none font-b"><a href="" className="">Apple Pencil</a></li>
                            <li className="list-none font-b"><a href="" className="">Keyboards</a></li>
                            <li className="list-none font-s pt-2"><a href="" className="">Compare iPad</a></li>
                            <li className="list-none font-s"><a href="" className="">Why iPad</a></li>
                        </div>
                        <div className="">
                            <li className="list-none font-sf pb-3">Shop iPad</li>
                            <li className="list-none font-s"><a href="" className="">Shop iPad</a></li>
                            <li className="list-none font-s"><a href="" className="">Mac Accessories</a></li>
                            <li className="list-none font-s"><a href="" className="">Ways to Buy</a></li>
                        </div>
                        <div className="">
                            <li className="list-none font-sf pb-3">More from iPad</li>
                            <li className="list-none font-s"><a href="" className="">iPad Support</a></li>
                            <li className="list-none font-s"><a href="" className="">AppleCare+ for iPad</a></li>
                            <li className="list-none font-s"><a href="" className="">iPadOS 18</a></li>
                            <li className="list-none font-s"><a href="" className="">Apple Intelligence</a></li>
                            <li className="list-none font-s"><a href="" className="">Apps by Apple</a></li>
                            <li className="list-none font-s"><a href="" className="">iCloud+</a></li>
                            <li className="list-none font-s"><a href="" className="">Education</a></li>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </AnimatePresence>
)};