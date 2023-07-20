import React from 'react'
import { RiHomeLine, RiArrowDropRightLine } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'

export default function BreadCrumb() {
    const { pathname } = useLocation();

    const isPathName = (url: string): boolean => {
        return url === "/product/edit"
    }

    return (
        <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex md:items-center">
                <RiHomeLine className="inline-block mt-1 md:mt-0" color="grey" />
                <p className="text-gray-700 text-sm md:text-md line-clamp-1 md:line-clamp-none"> <RiArrowDropRightLine className="inline-block" color="grey" /> Offers <RiArrowDropRightLine className="inline-block" color="grey" /> Intelligent Finite Elements in Structural Mechanics</p>
            </div>
            <Link to="/product/edit" className="mt-4 md:mt-0 text-white bg-blue-800 px-3 py-1 rounded-md w-max">
                {isPathName(pathname) ? "View Offer" : "Edit"}
            </Link>
        </div>
    )
}
