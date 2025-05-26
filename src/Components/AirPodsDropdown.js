import { motion, AnimatePresence } from "framer-motion";
export default function AirPodsDropdown() {
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
                            <li className="list-none font-sf pb-3">Explore AirPods</li>
                            <li className="list-none font-b"><a href="" className="">Explore All AirPods</a></li>
                            <li className="list-none font-b"><a href="" className="">AirPods 4</a></li>
                            <li className="list-none font-b"><a href="" className="">AirPods Pro 2</a></li>
                            <li className="list-none font-b"><a href="" className="">AirPods Max</a></li>
                            <li className="list-none font-s pt-2"><a href="" className="">Compare Watch</a></li>
                        </div>
                        <div className="">
                            <li className="list-none font-sf pb-3">Shop AirPods</li>
                            <li className="list-none font-s"><a href="" className="">Shop AirPods</a></li>
                            <li className="list-none font-s"><a href="" className="">Apple Watch Accessories</a></li>
                        </div>
                        <div className="">
                            <li className="list-none font-sf pb-3">More from AirPods</li>
                            <li className="list-none font-s"><a href="" className="">AirPods Support</a></li>
                            <li className="list-none font-s"><a href="" className="">AppleCare+ for headphones</a></li>
                            <li className="list-none font-s"><a href="" className="">Apple Music</a></li>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </AnimatePresence>
)};