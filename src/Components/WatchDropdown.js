import { motion, AnimatePresence } from "framer-motion";
export default function WatchDropdown() {
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
                            <li className="list-none font-sf pb-3">Explore Watch</li>
                            <li className="list-none font-b"><a href="" className="">Explore All Watch</a></li>
                            <li className="list-none font-b"><a href="" className="">Apple Watch Series 10</a></li>
                            <li className="list-none font-b"><a href="" className="">Apple Watch Ultra 2</a></li>
                            <li className="list-none font-b"><a href="" className="">Apple Watch SE</a></li>
                            <li className="list-none font-b"><a href="" className="">Apple Watch Nike</a></li>
                            <li className="list-none font-s pt-2"><a href="" className="">Compare Watch</a></li>
                            <li className="list-none font-s"><a href="" className="">Why Apple Watch</a></li>
                        </div>
                        <div className="">
                            <li className="list-none font-sf pb-3">Shop Watch</li>
                            <li className="list-none font-s"><a href="" className="">Shop Apple Watch</a></li>
                            <li className="list-none font-s"><a href="" className="">Apple Watch Straps</a></li>
                            <li className="list-none font-s"><a href="" className="">Apple Watch Accessories</a></li>
                            <li className="list-none font-s"><a href="" className="">Ways to Buy</a></li>
                        </div>
                        <div className="">
                            <li className="list-none font-sf pb-3">More from Watch</li>
                            <li className="list-none font-s"><a href="" className="">Apple Watch Support</a></li>
                            <li className="list-none font-s"><a href="" className="">AppleCare+</a></li>
                            <li className="list-none font-s"><a href="" className="">watchOS 11</a></li>
                            <li className="list-none font-s"><a href="" className="">Apple Watch For Your Kids</a></li>
                            <li className="list-none font-s"><a href="" className="">Apps by Apple</a></li>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </AnimatePresence>
)};