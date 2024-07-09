import { useId, useState, useRef } from "react";
import releases from "./mocks/release.json";
import ReleaseTimeLine from "./components/ReleaseTimeLine.jsx";
import ReleaseNotes from "./components/ReleaseNotes.jsx";

function App() {
  const releaseNotes = releases.Release_notes;
  const releaseNotesMobile = releaseNotes.slice(0, 11);
  const releasesList = releases.Release;

  const idSelectSort = useId();

  const [releasesFiltered, setReleasesFiltered] = useState(releasesList);

  const handleSelectChange = (e) => {
    console.log(e);
    if (e.target.value == "All") {
      setReleasesFiltered(releasesList);
    } else {
      const newReleasteList = releasesList.filter(
        (release) => e.target.value == release.chip
      );
      setReleasesFiltered(newReleasteList);
    }
  };

  return (
    <>
      <header>
        <h1 className="bg-gradient-colors text-white text-4xl font-semibold p-8 fixed w-full z-50">
          Release Notes
        </h1>
      </header>
      <div className="w-full flex max-w-[1500px] m-auto pt-28 md:flex-row flex-col">
        <main className="md:w-2/3 w-full">
          <section className="flex items-start md:gap-0 gap-2 md:items-center md:justify-between md:ml-24 mx-16 pt-8 border-b pb-4 flex-col md:flex-row">
            <h1 className="text-3xl font-semibold md:font-normal">
              Release 6.5
            </h1>
            <label
              className="flex gap-2 justify-center items-center cursor-pointer"
              htmlFor={idSelectSort}
            >
              <p>sort by:</p>
              <div className="flex justify-between p-2 border rounded-3xl w-[180px]">
                <select
                  onChange={(e) => {
                    handleSelectChange(e);
                  }}
                  className="outline-none w-full"
                  name="select-sort"
                  id={idSelectSort}
                >
                  <option value="All">All</option>
                  <option value="Feat">Feat</option>
                  <option value="Fix">Fix</option>
                </select>
                <span>
                  <svg
                    fill="#0d5287"
                    height="20px"
                    width="20px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 330.002 330.002"
                    xmlSpace="preserve"
                    stroke="#0d5287"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        id="XMLID_23_"
                        d="M329.155,100.036c-2.108-6.011-7.784-10.035-14.154-10.035h-300c-6.371,0-12.046,4.024-14.154,10.035 c-2.109,6.011-0.19,12.699,4.784,16.678l150.004,120c2.739,2.191,6.055,3.287,9.37,3.287c3.316,0,6.631-1.096,9.371-3.287 l149.996-120C329.346,112.734,331.264,106.047,329.155,100.036z"
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
            </label>
          </section>
          <section className="flex flex-col gap-8 md:ml-24 mx-16 border-l border-[#2DCAB1] mt-8 pb-20 h-full">
            {releasesFiltered.map((release) => (
              <ReleaseTimeLine
                key={release.title}
                title={release.title}
                chip={release.chip}
                date={release.date}
                description={release.description}
                img={release.img}
                items={release.items}
              />
            ))}
          </section>
        </main>
        <aside className="hidden md:w-1/3 w-full pt-4 px-24 md:flex flex-col md:gap-1 gap-2 md:fixed relative m-auto right-5">
          <h1 className="font-bold text-xl">All release notes</h1>
          {releaseNotes.map((item) => (
            <ReleaseNotes key={item} text={item} />
          ))}
        </aside>
        <aside className="md:w-1/3 w-full pt-8 px-36 md:hidden flex flex-col md:gap-1 gap-2 md:fixed relative m-auto right-5 pb-18">
          <h1 className="font-bold text-xl">All release notes</h1>
          {releaseNotesMobile.map((item) => (
            <ReleaseNotes key={item} text={item} />
          ))}
          <button className="text-[#0D5287] w-full font-semibold">
            View more
          </button>
        </aside>
      </div>
    </>
  );
}

export default App;
