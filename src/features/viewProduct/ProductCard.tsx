import { ParsedProduct } from 'api/productAPI'
import { DataContext } from 'context/DataContext';
import { useContext } from 'react';
import { RiTrophyLine } from 'react-icons/ri'
import { ProductProps } from 'types';
import xss from 'xss'

export default function ProductCard() {
    const { product } = useContext(DataContext)
    const cleanDesc = xss(product.productDescription, {
        stripIgnoreTagBody: ["script", "img"]
    });

    return (
        <div className="w-full md:w-3/4 border border-x-0 border-b-0 md:border-r outline-gray-300 border-gray-300 rounded-sm relative">
            <img className="h-40 md:h-64 w-full object-cover" src={product.productImage} alt={`${product.productName} image`} />
            <div className="inline-block absolute top-0 left-0">
                <button className="p-2 bg-blue-950 rounded-tl-sm rounded-br-lg absolute"><RiTrophyLine color="white" /></button>
                <span className="pl-4 pr-2 py-2 ml-6 rounded-br-lg bg-white text-md">{product.productType}</span>
            </div>
            <h2 className="text-lg pl-3 pt-3">{product.productName}</h2>
            <p className="pt-3 pb-5 px-3 text-gray-700" dangerouslySetInnerHTML={{ __html: cleanDesc }}></p>
        </div>
    )
}
