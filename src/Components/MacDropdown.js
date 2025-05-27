import { motion, AnimatePresence } from "framer-motion";
export default function MacDropdown() {
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
                            <li className="hidden md:block list-none font-nf pb-3">Explore Mac</li>
                            <li className="list-none font-b"><a href="" className="">Explore All Mac</a></li>
                            <li className="list-none font-b"><a href="" className="">MacBook Air</a></li>
                            <li className="list-none font-b"><a href="" className="">MacBook Pro</a></li>
                            <li className="list-none font-b"><a href="" className="">iMac</a></li>
                            <li className="list-none font-b"><a href="" className="">Mac mini</a></li>
                            <li className="list-none font-b"><a href="" className="">Mac Studio</a></li>
                            <li className="list-none font-b"><a href="" className="">Mac Pro</a></li>
                            <li className="list-none font-b"><a href="" className="">Displays</a></li>
                            <li className="list-none font-s pt-2"><a href="" className="">Compare Mac</a></li>
                            <li className="list-none font-s"><a href="" className="">Switch from PC to Mac</a></li>
                        </div>
                        <div className="">
                            <li className="list-none font-nf pb-3">Shop Mac</li>
                            <li className="list-none font-s"><a href="" className="">Shop Mac</a></li>
                            <li className="list-none font-s"><a href="" className="">Mac Accessories</a></li>
                            <li className="list-none font-s"><a href="" className="">Ways to Buy</a></li>
                        </div>
                        <div className="">
                            <li className="list-none font-nf pb-3">More from Mac</li>
                            <li className="list-none font-s"><a href="" className="">Mac Support</a></li>
                            <li className="list-none font-s"><a href="" className="">AppleCare+ for Mac</a></li>
                            <li className="list-none font-s"><a href="" className="">macOS Sequoia</a></li>
                            <li className="list-none font-s"><a href="" className="">Apple Intelligence</a></li>
                            <li className="list-none font-s"><a href="" className="">Apps by Apple</a></li>
                            <li className="list-none font-s"><a href="" className="">Continuity</a></li>
                            <li className="list-none font-s"><a href="" className="">iCloud+</a></li>
                            <li className="list-none font-s"><a href="" className="">Mac for Business</a></li>
                            <li className="list-none font-s"><a href="" className="">Education</a></li>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </AnimatePresence>
)};