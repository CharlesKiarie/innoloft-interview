import { DataContext } from 'context/DataContext';
import { useContext } from 'react';
import { RiCompasses2Fill, RiMoneyDollarBoxLine, RiSettings4Line, RiSuitcaseLine } from 'react-icons/ri'
import { ProductProps } from 'types';



export default function OfferDetailSection() {
    const { product } = useContext(DataContext)

    const category = product.categories.map((item) => (
        <span className="py-1 px-2 mr-2 my-2 bg-gray-300 rounded-xl text-xs text-gray-500" key={item.id}>{item.name}</span>
    ))

    const businessModel = product.businessModels.map((item) => (
        <span className="py-1 px-2 mr-2 my-2 bg-gray-300 rounded-xl text-xs text-gray-500" key={item.id}>{item.name}</span>
    ))


    return (
        <div className="my-5 pl-3 pt-3 outline outline-offset-2 outline-1 outline-gray-300 rounded-sm">
            <h2>Offer Details</h2>
            <div className="grid md:grid-cols-2">
                <div className="my-4">
                    <p className="flex items-center my-2 text-gray-500 text-sm"><RiSettings4Line className="inline-block" size={20} /> Technology</p>
                    <div className="ml-4 flex flex-wrap">
                        {category}
                    </div>
                </div>
                <div className="my-4">
                    <p className="flex items-center my-2 text-gray-500 text-sm"><RiSuitcaseLine className="inline-block" size={20} /> Business Model</p>
                    <div className="ml-4 flex flex-wrap">
                        {businessModel}
                    </div>
                </div>
                <div className="my-4">
                    <p className="flex items-center my-2 text-gray-500 text-sm"><RiCompasses2Fill className="inline-block" size={20} /> TRL</p>
                    <div className="ml-4">
                        <span className="py-1 px-2 mr-2 bg-gray-300 rounded-xl text-xs text-gray-500">{product.trl}</span>
                    </div>
                </div>
                <div className="my-4">
                    <p className="flex items-center my-2 text-gray-500 text-sm"><RiMoneyDollarBoxLine className="inline-block" size={20} /> Costs</p>
                    <div className="ml-4">
                        <span className="py-1 px-2 mr-2 bg-gray-300 rounded-xl text-xs text-gray-500">{product.investmentEffort}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
