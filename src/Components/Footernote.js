import {ChevronRight } from "lucide-react";

export default function FootnoteSection() {
  return (
    <div className="bg-white w-full min-h-11">
      <div className="flex w-full min-h-11 md:px-8 px-12 py-2 justify-center items-center">
        <h1 className="text-[13.5px] text-gray-800 font-P font-medium text-center tracking-tight">
          Get up to 12 months of No Cost EMI
          <a href="#" className="text-gray-800 font-P hover:text-blue-500 underline">&#9674;</a>&nbsp;
          plus up to ₹8000.00 instant cashback
          <a href="#" className="text-gray-800 font-P hover:text-blue-500 underline">&#8225;</a>&nbsp;
          on selected products with eligible cards.
          <a href="#" className="text-blue-500 ml-1">
            Shop
            <ChevronRight className="inline-block text-blue-500" size={14} />
          </a>
        </h1>
      </div>
    </div>
  );
}
