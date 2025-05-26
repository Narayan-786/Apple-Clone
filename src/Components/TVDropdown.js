import { motion, AnimatePresence } from "framer-motion";
export default function TVDropdown() {
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
                        <div className="flex gap-24 text-left">
                            <div className="">
                                <li className="list-none font-sf pb-3">Explore TV & Home</li>
                                <li className="list-none font-b"><a href="" className="">Explore TV & Home</a></li>
                                <li className="list-none font-b"><a href="" className="">Apple TV 4K</a></li>
                                <li className="list-none font-b"><a href="" className="">HomePod</a></li>
                                <li className="list-none font-b"><a href="" className="">HomePod mini</a></li>
                            </div>
                            <div className="">
                                <li className="list-none font-sf pb-3">Shop TV & Home</li>
                                <li className="list-none font-s"><a href="" className="">Shop Apple TV 4K</a></li>
                                <li className="list-none font-s"><a href="" className="">Shop HomePod</a></li>                            <li className="list-none font-s"><a href="" className="">Apple Watch Accessories</a></li>
                                <li className="list-none font-s"><a href="" className="">Shop HomePod mini</a></li>
                                <li className="list-none font-s"><a href="" className="">Shop Siri Remote</a></li>
                                <li className="list-none font-s"><a href="" className="">TV & Home Accessories</a></li>
                            </div>
                            <div className="">
                                <li className="list-none font-sf pb-3">More from TV & Home</li>
                                <li className="list-none font-s"><a href="" className="">Apple TV Support</a></li>
                                <li className="list-none font-s"><a href="" className="">HomePod Support</a></li>
                                <li className="list-none font-s"><a href="" className="">AppleCare+</a></li>
                                <li className="list-none font-s"><a href="" className="">Apple TV App</a></li>
                                <li className="list-none font-s"><a href="" className="">Apple TV+</a></li>
                                <li className="list-none font-s"><a href="" className="">Home app</a></li>
                                <li className="list-none font-s"><a href="" className="">Apple Music</a></li>
                                <li className="list-none font-s"><a href="" className="">Siri</a></li>
                                <li className="list-none font-s"><a href="" className="">AirPlay</a></li>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
};