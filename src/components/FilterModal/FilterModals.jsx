import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { AiOutlineClose, AiOutlineHome } from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css';
import RangeSlider from './RangeSlider';
import { BiBuildingHouse, BiSolidCity } from 'react-icons/bi';
import useGetAvarage from '../../hooks/useGetAvarage';
AOS.init();

// eslint-disable-next-line react/prop-types
const FilterModals = ({ isOpenFilterModal, setIsOpenFilterModal }) => {
    const [activePlaceType, setActivePlaceType] = useState("all type")
    const [rangMinValue, setRangMinValue] = useState(30)
    const [rangeMaxValue, setRangeMaxValue] = useState(1000)
    const [beds, setBeds] = useState("any")
    const [bathrooms, setBathrooms] = useState("any");
    const [homeProperty, setHomeProperty] = useState("")
    const [apartmentProperty, setApartmentProperty] = useState("")
    const [guestHouseProperty, setGuestHouseProperty] = useState("")
    const [alltypesAvarage, roomsTypesAvarage, homeTypesAvarage]  = useGetAvarage()
    console.log(alltypesAvarage, roomsTypesAvarage, homeTypesAvarage);

   const handlePropertyTypeHome = (value) =>{
        if (homeProperty !== value){
            setHomeProperty(value)
        }
        else{
            setHomeProperty("")
        }
   }
   const handleApartmentProperty = (value) =>{
        if (apartmentProperty !== value){
            setApartmentProperty(value)
        }
        else{
            setApartmentProperty("")
        }
   }
   const handleGuestHouseProperty = (value) =>{
        if (guestHouseProperty !== value) {
            setGuestHouseProperty(value)
        }
        else{
            setGuestHouseProperty("")
        }
   }
    const  closeModal = ()=> {
        setIsOpenFilterModal(false)
    }
  
    return (
        <>

        <Transition appear show={isOpenFilterModal} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 ">
                    <div className="flex min-h-full  items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel data-aos="fade-up" className="w-full max-w-2xl h-[500px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    <div className="flex justify-between items-center">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-full border  bg-blue-100 px-2 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            <AiOutlineClose></AiOutlineClose>
                                        </button>
                                        <p className=''>Filters</p>
                                        <h1></h1>
                                    </div>
                                    <div className='divider my-0'></div>

                                </Dialog.Title>
                                <div className="mt-2  scrollable-container pb-[120px]">
                <div className="mb-5 ">
                    <h3 className="text-2xl font-semibold">Type of Place</h3>
                    <p className="text-gray-600">
                    Search rooms, entire homes, or any type of place.
                    </p>
                </div>
                <ul className="w-full px-8 grid grid-cols-3 rounded-lg">
                    <li  onClick={()=>setActivePlaceType("all type")()} className={`rounded-l-lg hover:border py-4 hover:border-black pl-2 border font-semibold cursor-pointer ${activePlaceType ==="all type"? " bg-black text-white": ""}
                     `}>
                    <p>All types</p>
                    <p className="text-sm">$ {alltypesAvarage} avg</p>
                    </li>

                    <li onClick={()=>setActivePlaceType("room")()} className={` hover:border py-4 border cursor-pointer hover:border-black pl-2 font-semibold ${activePlaceType ==="room"? " bg-black text-white": ""}`}>
                    <p>Rooms</p>
                    <p className="text-sm">$ {roomsTypesAvarage} avg</p>
                    </li>

                    <li onClick={()=>setActivePlaceType("home")()} className={`rounded-r-lg cursor-pointer hover:border border font-semibold py-4 hover:border-black pl-2 ${activePlaceType ==="home"? " bg-black text-white": ""}`}>
                    <p>Entire Homes</p>
                    <p className="text-sm">$ {homeTypesAvarage} avg</p>
                    </li>
                </ul>
                {/* range filter here */}
                <div className="py-8 border-b-[1px]">
                <div className="mb-5">
                    <h3 className="text-2xl font-semibold">Price Range</h3>
                    <p className="text-gray-600">Nightly prices before fees and taxes</p>
                </div>

                <div className="mb-8 px-8">
                <RangeSlider
                rangMinValue={rangMinValue}
                setRangMinValue={setRangMinValue}
                rangeMaxValue={rangeMaxValue}
                setRangeMaxValue={setRangeMaxValue}
                ></RangeSlider>
                </div>

                <div className="flex gap-6 px-8 items-center">
                    <div className="relative w-full flex flex-col px-3 py-2 rounded-lg border border-gray-500 focus:border-2">
                    <label htmlFor="place" className="text-xs">
                        Minimum
                    </label>
                    <span className="absolute top-[24px] left-3">$</span>
                    <input
                        type="text"
                        name="place"
                        id="place"
                        className="text-base bg-transparent pl-3 text-gray-600 focus:outline-none"
                        value={rangMinValue}
                    />
                    </div>

                    <div className="border-b w-8 border-gray-500"></div>

                    <div className="relative w-full flex flex-col px-3 py-2 rounded-lg border border-gray-500 focus:border-2">
                    <label htmlFor="place" className="text-xs">
                        Maximum
                    </label>
                    <span className="absolute top-[24px] left-3">$</span>
                    <input
                        type="text"
                        name="place"
                        id="place"
                        className="text-base bg-transparent pl-3 text-gray-600 focus:outline-none"
                        value={rangeMaxValue}
                    />
                    </div>
                </div>
                </div>
                {/* Beds and bathrooms */}
                <div>
                    <h2 className='text-2xl font-semibold my-4'>Beds and bathrooms</h2>
                    <h5 className='my-3 font-semibold'>Beds</h5>
                    <div>
                    <div className="flex gap-2">
                <span onClick={()=>setBeds('any')} className={`hover:border hover:border-black py-1 rounded-full px-4 cursor-pointer ${beds === "any"? "bg-black text-white": ""}`}>
                    Any
                </span>
                <span onClick={()=>setBeds(1)} className={`hover:border hover:border-black py-1 rounded-full px-6 cursor-pointer ${beds == 1? "bg-black text-white": ""}`}>
                    1
                </span>
                <span onClick={()=>setBeds(2)} className={`hover:border hover:border-black py-1 rounded-full px-6 cursor-pointer ${beds === 2? "bg-black text-white": ""}`}>
                    2
                </span>
                <span onClick={()=>setBeds(3)} className={`hover:border hover:border-black py-1 rounded-full px-6 cursor-pointer ${beds === 3? "bg-black text-white": ""}`}>
                    3
                </span>
                <span onClick={()=>setBeds(4)} className={`hover:border hover:border-black py-1 rounded-full px-6 cursor-pointer ${beds === 4? "bg-black text-white": ""}`}>
                    4
                </span>
                <span onClick={()=>setBeds(5)} className={`hover:border hover:border-black py-1 rounded-full px-6 cursor-pointer ${beds === 5? "bg-black text-white": ""}`}>
                    5
                </span>
                <span onClick={()=>setBeds(6)} className={`hover:border hover:border-black py-1 rounded-full px-6 cursor-pointer ${beds === 6? "bg-black text-white": ""}`}>
                    6
                </span>
                <span onClick={()=>setBeds(7)} className={`hover:border hover:border-black py-1 rounded-full px-6 cursor-pointer ${beds === 7? "bg-black text-white": ""}`}>
                    7
                </span>
                <span onClick={()=>setBeds(8)} className={`hover:border hover:border-black py-1 rounded-full px-6 cursor-pointer ${beds === 8? "bg-black text-white": ""}`}>
                    8+
                </span>
                
                </div>

                <h3 className='font-semibold mt-6 mb-3'>Bathrooms</h3>

                <div className="flex gap-2">
                <span onClick={()=>setBathrooms('any')} className={`hover:border hover:border-black py-1 rounded-full px-4 cursor-pointer ${bathrooms === "any"? "bg-black text-white": ""}`}>
                    Any
                </span>
                <span onClick={()=>setBathrooms(1)} className={`hover:border hover:border-black py-1 rounded-full px-6 cursor-pointer ${bathrooms == 1? "bg-black text-white": ""}`}>
                    1
                </span>
                <span onClick={()=>setBathrooms(2)} className={`hover:border hover:border-black py-1 rounded-full px-6 cursor-pointer ${bathrooms === 2? "bg-black text-white": ""}`}>
                    2
                </span>
                <span onClick={()=>setBathrooms(3)} className={`hover:border hover:border-black py-1 rounded-full px-6 cursor-pointer ${bathrooms === 3? "bg-black text-white": ""}`}>
                    3
                </span>
                <span onClick={()=>setBathrooms(4)} className={`hover:border hover:border-black py-1 rounded-full px-6 cursor-pointer ${bathrooms === 4? "bg-black text-white": ""}`}>
                    4
                </span>
                <span onClick={()=>setBathrooms(5)} className={`hover:border hover:border-black py-1 rounded-full px-6 cursor-pointer ${bathrooms === 5? "bg-black text-white": ""}`}>
                    5
                </span>
                <span onClick={()=>setBathrooms(6)} className={`hover:border hover:border-black py-1 rounded-full px-6 cursor-pointer ${bathrooms === 6? "bg-black text-white": ""}`}>
                    6
                </span>
                <span onClick={()=>setBathrooms(7)} className={`hover:border hover:border-black py-1 rounded-full px-6 cursor-pointer ${bathrooms === 7? "bg-black text-white": ""}`}>
                    7
                </span>
                <span onClick={()=>setBathrooms(8)} className={`hover:border hover:border-black py-1 rounded-full px-6 cursor-pointer ${bathrooms === 8? "bg-black text-white": ""}`}>
                    8+
                </span>
                
                </div>

                    </div>
                </div>
                    {/* property types */}
                    <div className='my-10'>
                    <h3 className='text-2xl font-semibold mb-5'>Property type</h3>
                     <div className='grid gap-4 items-center justify-center  grid-cols-4'>
                        <div onClick={()=> handlePropertyTypeHome("home")} className={`border md:p-8 p-5 rounded-xl cursor-pointer border-black  ${homeProperty == "home"? "border-[2px]": ""}`}>
                         <AiOutlineHome size={32} />
                         <h3 className="text-lg font-semibold">Home</h3>
                         </div>

                           <div onClick={()=> handleApartmentProperty("apartment")} className={`border p-5 md:p-8 rounded-xl cursor-pointer border-black ${apartmentProperty == "apartment"? "border-[2px]": ""}`}>
                               <BiSolidCity size={32} />
                                <h3 className="text-lg font-semibold">Apartment</h3>
                         </div>

                         <div onClick={()=> handleGuestHouseProperty("guestHouse")} className={`border p-5 md:p-8 rounded-xl cursor-pointer border-black ${guestHouseProperty == "guestHouse"? "border-[2px]": ""}`}>
                            <BiBuildingHouse size={32} />
                            <h3 className="text-lg font-semibold">GuestHouse</h3>
                         </div>
                      </div>
                    </div>
                    <button className='btn bg-slate-800 hover:bg-slate-950 text-white absolute bottom-2 right-5'>Show 100 Places</button>
                        <button className='btn btn-sm underline font-bold absolute bottom-2 left-4'>Clear All</button>
                </div>
                


                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </>
    );
};

export default FilterModals;