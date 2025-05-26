import { motion, AnimatePresence } from "framer-motion";
export default function StoreDropdown() {
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
                            <li className="list-none font-sf pb-3">Shop</li>
                            <li className="list-none font-b"><a href="" className="">Shop the Latest</a></li>
                            <li className="list-none font-b"><a href="" className="">Mac</a></li>
                            <li className="list-none font-b"><a href="" className="">iPad</a></li>
                            <li className="list-none font-b"><a href="" className="">iPhone</a></li>
                            <li className="list-none font-b"><a href="" className="">Apple Watch</a></li>
                            <li className="list-none font-b"><a href="" className="">Accessories</a></li>
                        </div>
                        <div className="">
                            <li className="list-none font-sf pb-3">Quick Links</li>
                            <li className="list-none font-s"><a href="" className="">Find a Store</a></li>
                            <li className="list-none font-s"><a href="" className="">OrderStatus</a></li>
                            <li className="list-none font-s"><a href="" className="">Ways to Buy</a></li>
                            <li className="list-none font-s"><a href="" className="">Personal Setup</a></li>
                        </div>
                        <div className="">
                            <li className="list-none font-sf pb-3">Shop Special Stores</li>
                            <li className="list-none font-s"><a href="" className="">Education</a></li>
                            <li className="list-none font-s"><a href="" className="">Business</a></li>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </AnimatePresence>
)};