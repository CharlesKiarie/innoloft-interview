import React, { useContext } from 'react'
import Avatar from '../Avatar'
import { RiArrowDownSLine, RiGroupLine, RiHomeLine, RiStackshareLine } from 'react-icons/ri'
import { DataContext } from 'context/DataContext'




export default function SideNav() {
  const { product } = useContext(DataContext);

  return (
    <nav className="hidden md:block md:w-1/4">
      <div className="flex items-center">
        <Avatar size="small" src={product.user.profilePicture} />
        <div className="pl-4">
          <p className="mt-3 text-sm">{`${product.user.firstName} ${product.user.lastName}`}</p>
          <p className="font-thin text-sm">{product.company.name}</p>
        </div>
      </div>
      <div>
        <ul>
          <li className="flex items-center gap-1 py-2 font-thin">
            <i><RiHomeLine /></i>
            <p>Home</p>
          </li>
          <li className="flex items-center gap-1 py-2 font-thin">
            <i><RiGroupLine /></i>
            <p>Members</p>
          </li>
          <li className="flex items-center gap-1 py-2 font-thin">
            <i><RiStackshareLine /></i>
            <p>Organizations</p>
            <RiArrowDownSLine className="inline-block ml-7 mt-1" />
          </li>
        </ul>
      </div>
    </nav>
  )
}
