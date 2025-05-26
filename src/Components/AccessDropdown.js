import { motion, AnimatePresence } from "framer-motion";
export default function AccessDropdown() {
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
                            <li className="list-none font-sf pb-3">Shop Accessories</li>
                            <li className="list-none font-b"><a href="" className="">Explore All Accessories</a></li>
                            <li className="list-none font-b"><a href="" className="">Mac</a></li>
                            <li className="list-none font-b"><a href="" className="">iPad</a></li>
                            <li className="list-none font-b"><a href="" className="">iPhone</a></li>
                            <li className="list-none font-b"><a href="" className="">Apple Watch</a></li>
                            <li className="list-none font-b"><a href="" className="">AirPods</a></li>
                            <li className="list-none font-b"><a href="" className="">TV & Home</a></li>
                        </div>
                        <div className="">
                            <li className="list-none font-sf pb-3">Explore Accessories</li>
                            <li className="list-none font-s"><a href="" className="">Made by Apple</a></li>
                            <li className="list-none font-s"><a href="" className="">Beats by Dr.Dre</a></li>
                            <li className="list-none font-s"><a href="" className="">AIrTag</a></li>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </AnimatePresence>
)};