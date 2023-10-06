import { useContext, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";
import { FiPlus, FiMinus } from "react-icons/fi";
import { format } from "date-fns";
import DatePicker from "../DatePicker/DatePicker";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ROOMS_CONTEXTS } from "../../provider/RoomsDataProvider";
import { useNavigate } from "react-router-dom";
AOS.init();


const SearchBar = () => {
  const [detailNavOption, setDetailNavOption] = useState("")
  const [openDetailNav, setOpenDetailNav] = useState(false)
  const { setAllRooms } = useContext(ROOMS_CONTEXTS)
  const [searchLocation, setSearchLocation] = useState('')
  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)
  const [pets, setPets] = useState(0)
  let guests = adults + children;
  const navigate = useNavigate()

  const [dateChanged, setDateChanged] = useState(false)
  const [date, setDate] = useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }]);
  const checkIn = format(date[0].startDate, 'MMM d, yyyy')
  const checkOut = format(date[0].endDate, 'MMM d, yyyy')
  const dateRange = `${checkIn} - ${checkOut}`

  if (openDetailNav) {
    document.body.style.backgroundColor = '#ede6e6'
  }
  else {
    document.body.style.backgroundColor = 'white'
  }


  const handleResetGuest = () => {
    setAdults(0);
    setChildren(0);
    setInfants(0);
    setPets(0);
  }

  useEffect(() => {
    function handleScroll() {
      setOpenDetailNav(false)
    }
    
    window.addEventListener('scroll', handleScroll);
    

  }, []);
  

  const handleSearch = () => {
    fetch(`https://airbnb-server-pelkav7q2-habibullahraju.vercel.app/search?location=${searchLocation}&guests=${guests}&infants=${infants}&pets=${pets}&dateRange=${dateRange}`)
      .then(res => res.json())
      .then(data => {
        setAllRooms(data)
        navigate("/?result")
      })
  }
  return (
    <div className="w-full sm:w-auto">
      {openDetailNav ? <div>
        <ul data-aos="zoom-in" data-aos-delay="100" data-aos-duration="100" className="flex  gap-8  pt-3 pb-1">
          <li className="text-gray-800 cursor-pointer pb-2 border-b-2 border-gray-800">
            Stays
          </li>
          <li className="text-gray-800 transition hover:text-gray-500 cursor-pointer pb-2 hover:border-b-2 hover:border-gray-400">
            Experiences
          </li>
          <li className="text-gray-800 transition hover:text-gray-500 cursor-pointer pb-2 hover:border-b-2 hover:border-gray-400">
            Online Experiences
          </li>
        </ul>

        <div data-aos="fade-down" data-aos-duration="200" data-aos-easing="ease-in-out" className="absolute left-0 right-0 top-[80px] flex justify-center bg-white pb-4">
          <div
            className={`relative w-[800px] rounded-full flex items-center justify-between border ${openDetailNav ? "bg-gray-100" : "bg-white"
              }`}
          >
            <div
              onClick={() => setDetailNavOption("Anywhere")}
              className={`relative w-1/3 flex flex-col px-5 py-3 rounded-full cursor-pointer ${detailNavOption === "Anywhere"
                ? "bg-white shadow-xl"
                : "hover:bg-gray-200"
                }`}
            >
              {detailNavOption === "Anywhere" && searchLocation ? (
                <button
                  onClick={() => setSearchLocation("")}
                  className="absolute top-5 right-4 p-1 rounded-full bg-gray-200"
                >
                  <HiOutlineXMark />
                </button>
              ) : (
                ""
              )}

              <label htmlFor="place" className="font-medium text-sm">
                Where
              </label>
              <input
                onChange={(e) => setSearchLocation(e.target.value)}
                type="text"
                name="place"
                id="place"
                className="text-sm bg-transparent focus:outline-none"
                placeholder="Search destinations"
                value={searchLocation}
              />
            </div>

            <div className="h-8 w-[1px] bg-gray-300"></div>

            <div
              onClick={() => setDetailNavOption("Check in")}
              className={`px-8 py-3 rounded-full cursor-pointer text-sm ${detailNavOption === "Any Week" || detailNavOption === "Check in"
                ? "bg-white shadow-xl"
                : "hover:bg-gray-200"
                }`}
            >
              <p className="font-medium">Check in</p>
              <p className="text-gray-400">Add dates</p>

            </div>

            <div className="h-8 w-[1px] bg-gray-300"></div>

            <div
              onClick={() => setDetailNavOption("Check out")}
              className={`px-8 py-3 rounded-full cursor-pointer text-sm ${detailNavOption === "Check out"
                ? "bg-white shadow-xl"
                : "hover:bg-gray-200"
                }`}
            >
              <p className="font-medium">Check out</p>
              <p className="text-gray-400">Add dates</p>
            </div>

            <div className="h-8 w-[1px] bg-gray-300"></div>

            <div
              onClick={() => setDetailNavOption("Add guests")}
              className={`flex w-1/3 items-center justify-between pl-5 pr-2 py-2.5 rounded-full cursor-pointer text-sm ${detailNavOption === "Add guests"
                ? "bg-white shadow-xl"
                : "hover:bg-gray-200"
                }`}
            >
              <div
                className={`relative ${detailNavOption === "Add guests" ? "w-3/5" : "w-4/5"
                  }`}
              >
                {detailNavOption === "Add guests" && (guests || infants || pets) ? (
                  <button onClick={handleResetGuest} className="absolute -top-1.5 right-6 p-1.5 rounded-full bg-gray-200">
                    <HiOutlineXMark />
                  </button>
                ) : (
                  ""
                )}

                <p className="font-medium">Who</p>
                <p className="text-gray-400 w-full truncate">
                  {guests ? (
                    <span className="text-gray-800 font-medium">
                      {guests} guests, {infants ? `${infants} infants,` : ""}{" "}
                      {pets ? `${pets} pets` : ""} { }
                    </span>
                  ) : (
                    "Add guests"
                  )}
                </p>
              </div>

              <button
                onClick={handleSearch}
                type="button"
                className="text-white bg-rose-500 hover:bg-rose-600 font-medium rounded-full text-sm p-3 text-center inline-flex gap-2 items-center"
              >
                <BiSearch size={20} />
                <span
                  className={`transition ${detailNavOption === "Add guests" ? "block" : "hidden"
                    }`}
                >
                  Search
                </span>
              </button>
            </div>

            {detailNavOption === "Any Week" ||
              detailNavOption === "Check in" ||
              detailNavOption === "Check out" ? (
              <div className="bg-white rounded-xl absolute top-full left-0 mt-3 flex justify-center w-[800px] px-10 py-8 border"></div>
            ) : (
              ""
            )}
            {
              detailNavOption === "Any Week" || detailNavOption === "Check in" || detailNavOption === "Check out" ? <div className="bg-white rounded-xl absolute top-full left-0 mt-3 flex justify-center w-[800px] px-10 py-8 border">
                <DatePicker date={date} setDate={setDate} dateChanged={dateChanged} setDateChanged={setDateChanged} />
              </div> : ""
            }


            {/* adding guests */}
            {detailNavOption === "Add guests" ? (
              <div
                style={{ boxShadow: "0px 1px 22px -6px rgba(0,0,0,0.25)" }}
                className="absolute top-full right-0 mt-3 rounded-xl w-[420px] p-5 border bg-white overflow-hidden text-sm"
              >
                <div className="flex gap-5 flex-col cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-base mb-1">Adults</p>
                      <p className="text-gray-600">Age 13 or above</p>
                    </div>
                    <div className="flex gap-3 items-center text-gray-600 hover:text-gray-800">
                      <button
                        onClick={() => setAdults(adults - 1)}
                        className="decrease-btn"
                        disabled={adults === 0 && true}
                      >
                        <FiMinus />
                      </button>
                      <span className="inline-block w-6 text-center font-medium">
                        {adults}
                      </span>

                      <button
                        onClick={() => setAdults(adults + 1)}
                        className="increase-btn"
                        disabled={adults === 10 && true}
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-gray-200"></div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-base mb-1">Children</p>
                      <p className="text-gray-600">Age 2-12</p>
                    </div>
                    <div className="flex gap-3 items-center text-gray-600 hover:text-gray-800">
                      <button
                        onClick={() => setChildren(children - 1)}
                        className="decrease-btn"
                        disabled={children === 0 && true}
                      >
                        <FiMinus />
                      </button>

                      <span className="inline-block w-6 text-center font-medium">
                        {children}
                      </span>

                      <button
                        onClick={() => setChildren(children + 1)}
                        className="increase-btn"
                        disabled={children === 6 && true}
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-gray-200"></div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-base mb-1">Infants</p>
                      <p className="text-gray-600">Under 2</p>
                    </div>
                    <div className="flex gap-3 items-center text-gray-600 hover:text-gray-800">
                      <button
                        onClick={() => setInfants(infants - 1)}
                        className="decrease-btn"
                        disabled={infants === 0 && true}
                      >
                        <FiMinus />
                      </button>

                      <span className="inline-block w-6 text-center font-medium">
                        {infants}
                      </span>

                      <button
                        onClick={() => setInfants(infants + 1)}
                        className="increase-btn"
                        disabled={infants === 5 && true}
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-gray-200"></div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-base mb-1">Pets</p>
                      <p

                        className="text-gray-600 hover:text-gray-800 underline"
                      >
                        Bringing a service animal?
                      </p>
                    </div>
                    <div className="flex gap-3 items-center text-gray-600 hover:text-gray-800">
                      <button
                        onClick={() => setPets(pets - 1)}
                        className="decrease-btn"
                        disabled={pets === 0 && true}
                      >
                        <FiMinus />
                      </button>

                      <span className="inline-block w-6 text-center font-medium">
                        {pets}
                      </span>

                      <button
                        onClick={() => setPets(pets + 1)}
                        className="increase-btn"
                        disabled={pets === 5 && true}
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div> : <div onClick={() => setOpenDetailNav(true)} className="md:ml-20 " >
        <div className='border-[1px] w-full md:w-auto py-[7px] rounded-full shadow hover:shadow-md  transition cursor-pointer'>
          <div className='flex w-full flex-row items-center justify-between'>
            <div className='text-sm l font-semibold px-5'>Anywhere</div>

            <div className='hidden sm:block text-sm font-semibold px-5 border-x-[1px] flex-1 text-center'>Any week</div>

            <div className='text-sm pl-5  pr-2 text-gray-600 flex flex-row items-center gap-3'>
              <div className='hidden sm:block'> guests</div>
              <div className='p-2 bg-rose-500 rounded-full text-white'>
                <BiSearch size={18} />
              </div>
            </div>
          </div>
        </div>

      </div>}





    </div>
  );
};

export default SearchBar;