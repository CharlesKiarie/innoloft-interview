import { useGetProductQuery } from "api/productAPI";
import EditOfferCard from "features/editProduct/EditOfferCard";
import EditOfferSection from "features/editProduct/EditOfferSection";
import EditProductCard from "features/editProduct/EditProductCard";
import EditVideo from "features/editProduct/EditVideo";
import BreadCrumb from "features/layout/BreadCrumb";
import HeaderNav from "features/layout/HeaderNav";
import SideNav from "features/layout/SideNav";
import { createContext } from "react";

export const AvatarContext = createContext("")

export default function Product() {

    return (
        <>
            <HeaderNav />
            <div className="mt-2 px-4 md:px-28 md:mt-5 md:flex md:items-start md:gap-8">
                <SideNav />
                <div>
                    <BreadCrumb />
                    <div className="mt-3 flex flex-wrap items-start md:flex-nowrap border border-gray-300 rounded-sm">
                        <EditProductCard />
                        <EditOfferCard />
                    </div>
                    <EditVideo />
                    <EditOfferSection />
                </div>
            </div>
        </>
    )
}

