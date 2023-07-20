import { ProductProps } from 'types'
import Avatar from '../Avatar'
import { RiMapPin2Line } from 'react-icons/ri'
import { useContext } from 'react'
import { DataContext } from 'context/DataContext'


export default function EditOfferCard() {
    const { hasUserSection, product } = useContext(DataContext);

    return (
        <div className="px-4 pt-3 w-full md:w-auto">
            <p>Edit Company Info</p>
            <img className="mt-4 h-10 w-40" src="https://img.innoloft.com/logo.svg" alt="innoloft logo" />
            <div className={`flex items-center mt-4 ${hasUserSection}`}>
                <Avatar size="small" src={product.user.profilePicture} />
                <div className="ml-2 text-gray-700">
                    <p className="text-sm">{`${product.user.firstName} ${product.user.lastName}`}</p>
                    <p className="font-thin text-sm">{product.company.name}</p>
                </div>
            </div>
            <div className="my-4 text-sm text-gray-700">
                <p className="font-light"> <RiMapPin2Line className="inline-block mr-2 font-light" />{`${product.company.street} ${product.company.house}`}</p>
                <p className="ml-6 font-light">{`${product.company.zipcode} ${product.company.city}, ${product.company.country}`}</p>
                <div className="my-2">

                </div>
            </div>
        </div>
    )
}
