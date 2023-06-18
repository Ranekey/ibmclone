import Link from "next/link";
import MenuItem from "./MenuItem";
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs'
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
    return (
      <div className="flex justify-between mx-2 mx-w-6xl sm:mx-auto items-center py-6"> 
        <div className="flex ">
            <MenuItem title="Home" addresse="/" Icon={AiFillHome}/>
            <MenuItem title="About" addresse="/" Icon={BsFillInfoCircleFill}/>

        </div>
        <div className=" flex items-center space-x-5">
            <DarkModeSwitch/>
            <Link href='/'> 
                <h2 className="2xl">
                    <span className=" font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IMDb</span>
                    <span className="text-x1 hidden sm:inline ">Clone</span>
                </h2>
            </Link>
            
        </div>
        
        
        
      </div>
    )
  }
  