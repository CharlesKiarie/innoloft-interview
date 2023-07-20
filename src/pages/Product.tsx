import { useGetProductQuery } from "api/productAPI";
import BreadCrumb from "features/layout/BreadCrumb";
import HeaderNav from "features/layout/HeaderNav";
import SideNav from "features/layout/SideNav";
import OfferCard from "features/viewProduct/OfferCard";
import OfferDetailSection from "features/viewProduct/OfferDetailSection";
import ProductCard from "features/viewProduct/ProductCard";
import VideoSection from "features/viewProduct/VideoSection";

export default function Product() {
    return (
        <>
            <HeaderNav />
            <div className="mt-2 px-4 md:px-28 md:mt-5 md:flex md:items-start md:gap-8">
                <SideNav />
                <div>
                    <BreadCrumb />
                    <div className="mt-3 flex flex-wrap items-start md:flex-nowrap border border-gray-300 rounded-sm">
                        <ProductCard />

                        <OfferCard />
                    </div>
                    <VideoSection />
                    <OfferDetailSection />
                </div>
            </div>
        </>
    )
}
