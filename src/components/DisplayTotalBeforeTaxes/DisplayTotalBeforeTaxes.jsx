import { useContext, useState } from 'react'
import { Switch } from '@headlessui/react'
import { ROOMS_CONTEXTS } from '../../provider/RoomsDataProvider';

const DisplayTotalBeforeTaxes = () => {
    const [enabled, setEnabled] = useState(false)
    const {setDisplayBeforeTexes} = useContext(ROOMS_CONTEXTS)
    setDisplayBeforeTexes(enabled)
   
    return (
        <div className="">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
            relative inline-flex h-[19px] w-[55px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
         
          <span
            aria-hidden="true"
            className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
              pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
    );
};

export default DisplayTotalBeforeTaxes;