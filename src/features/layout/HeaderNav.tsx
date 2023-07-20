import { Config, useGetConfigQuery } from 'api/configAPI'
import Avatar from '../Avatar'
import { RiArrowDownSLine, RiChat3Line, RiNotificationLine, RiSearch2Line } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import InnoloftIcon from './InnoloftIcon'
import { DataContext } from 'context/DataContext'
import { useContext } from 'react'

export default function HeaderNav() {
  // const appID: number = import.meta.env.VITE_REACT_APP_ID ?? 1;
  // const { data: config, isSuccess } = useGetConfigQuery(appID);
  // if (!isSuccess) return <p>Loading...</p>;

  const { mainColor, product } = useContext(DataContext)

  return (
    <header>
      <nav style={{ backgroundColor: mainColor }} className="px-4 py-4 md:px-28 md:flex md:flex-wrap md:items-center md:justify-start">
        {/* <img className="h-5 md:h-10 md:w-24" src="https://img.innoloft.com/logo.svg" alt="innoloft logo" /> */}
        <InnoloftIcon className="h-5 md:h-10 md:w-24" />
        <RiSearch2Line className="hidden md:block absolute left-1/2 ml-7" />
        <input className="hidden md:block md:ml-24 md:basis-2/5 pl-2 py-1 rounded-md text-sm text-black font-light" type="text" name="search" id="search" placeholder="Enter interets, keyword, company name, etc" />
        <div className="ml-auto hidden md:block">
          <ul className="md:flex md:flex-wrap md:items-center md:justify-between md:gap-5 text-white">
            <li><NavLink className="font-medium text-white hover:underline hover:text-[#e4b302] aria-[current=page]:text-[#e4b302]" to="/">Home</NavLink></li>
            <li><NavLink className="font-medium text-white hover:underline hover:text-[#e4b302] aria-[current=page]:text-[#e4b302]" to="/product/6781/">Product</NavLink></li>
            <li><RiChat3Line /></li>
            <li className="flex items-center gap-2">EN <RiArrowDownSLine /></li>
            <li><RiNotificationLine /></li>
            <li className="flex items-center gap-2">
              <Avatar size="small" src={product.user.profilePicture} />
              <RiArrowDownSLine />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
