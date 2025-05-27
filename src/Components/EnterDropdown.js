import { motion, AnimatePresence } from "framer-motion";
export default function EnterDropdown() {
    return(
    <AnimatePresence>
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-full w-screen z-40 bg-white md:overflow-visible overflow-y-auto md:h-auto h-[calc(100vh-3rem)]"
        >
            <div className="relative max-w-5xl mx-auto">
                <div className="max-w-5xl mx-auto pb-20 md:pt-8 pt-7  md:px-5 px-12">
                    <div className="flex flex-col md:flex-row gap-10 md:gap-24 text-left">
                        <div className="">
                            <li className="hidden md:block list-none font-nf pb-3">Explore Entertainment</li>
                            <li className="list-none font-b"><a href="" className="">Explore Entertainment</a></li>
                            <li className="list-none font-b"><a href="" className="">Apple One</a></li>
                            <li className="list-none font-b"><a href="" className="">Apple TV+</a></li>
                            <li className="list-none font-b"><a href="" className="">Apple Music</a></li>
                            <li className="list-none font-b"><a href="" className="">Apple Arcade</a></li>
                            <li className="list-none font-b"><a href="" className="">Apple Podcasts</a></li>
                            <li className="list-none font-b"><a href="" className="">Apple Books</a></li>
                            <li className="list-none font-b"><a href="" className="">Apple Stores</a></li>
                        </div>
                        <div className="">
                            <li className="list-none font-nf pb-3">Support</li>
                            <li className="list-none font-s"><a href="" className="">Shop TV+ Support</a></li>
                            <li className="list-none font-s"><a href="" className="">Apple Music Support</a></li>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </AnimatePresence>
)};