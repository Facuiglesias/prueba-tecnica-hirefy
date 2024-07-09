import { useRef } from "react";
import Items from "./Items.jsx";
import useIntersection from "../hooks/useIntersection.js";

function ReleaseTimeLine({ title, chip, date, description, img, items }) {
  const element = useRef(null);
  const screen = useIntersection(element);

  console.log(screen);
  return (
    <div
      ref={element}
      className={`animate-wiggle flex flex-col relative gap-4 pl-6`}
    >
      {screen && (
        <>
          <span className="w-[20px] h-[20px] bg-[#2DCAB1] rounded-[50%] absolute left-[-10px]"></span>
          <h2 className="text-2xl -translate-y-2">{title}</h2>
          <div className="flex text-sm items-center gap-4">
            <span
              className={` ${
                chip == "Feat"
                  ? "bg-[#D3FFF5] text-[#1CB59C]"
                  : "bg-[#FFF8E5] text-[#FFB800]"
              } rounded-3xl py-1 px-4 font-bold`}
            >
              {chip}
            </span>
            <p className="text-slate-600">{date}</p>
          </div>
          <p className="text-sm text-slate-600">{description}</p>
          {img && (
            <img className="rounded-2xl shadow-md" src={img} alt="imagen 1" />
          )}
          {items && items.map((item) => <Items key={item} text={item} />)}
        </>
      )}
    </div>
  );
}

export default ReleaseTimeLine;
