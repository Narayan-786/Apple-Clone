export default function HomesecOne() {
    return (
        <div className="w-full bg-white">
            <div className="flex flex-col gap-3">
                <a href="#">
                    <div className="bg-gray-100 w-full md:h-[580px] h-[510px] md:pt-24 pt-8" href={"https://www.apple.com/in/"}>
                        <div className="flex flex-col background">
                            <div className="relative -top-12">
                                <div className="relative">
                                <h3 className="flex justify-center items-center text-[44px] font-bold font-P text-[#1E1E1E] filter blur-[0.5px] tracking-wide ">
                                    <img src="\Images\Main1.svg" className="h-[64px] relative top-[-3px]" />
                                    WATCH
                                </h3>
                            </div>
                            <div className="relative -top-[6px] left-2 flex justify-center">
                                <h3 className="text-xl font-semibold font-P text-[#1E1E1E] tracking-widest filter blur-[0.4px] ">SERIES 10</h3>
                            </div>
                            <div className="flex justify-center">
                                <h3 className="font-P text-[28px] text-[#1b1b22] tracking-tighter">Thinstant classic.</h3>
                            </div>
                            <div className="flex justify-center gap-4 pt-4">
                                <button className="btn btn1 cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.location.href = "#";
                                    }}
                                >Learn more</button>
                                <button className="btn btn2 cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.location.href = "#";
                                    }}>Buy</button>
                            </div>
                        </div>
                            </div>
                            
                    </div>
                </a>
                <div className="bg-gray-100 w-full h-screen"></div>
                <div className="bg-gray-100 w-full h-screen"></div>
            </div>
        </div>
    )
}