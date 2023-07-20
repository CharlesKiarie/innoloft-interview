import React, { useContext, useState } from 'react'
import { RiTrophyLine, RiDeleteBin2Line, RiCheckLine } from 'react-icons/ri'
import { useEditProductMutation } from 'api/productAPI'
import { useQuill } from 'react-quilljs'
import './quill.snow.css'
import xss from 'xss'
import { DataContext } from 'context/DataContext';


export default function EditProductCard() {
    const { product } = useContext(DataContext);

    const { quill, quillRef } = useQuill();
    const [productState, setProductState] = useState({ ...product });
    const [newTitle, setNewTitle] = useState(productState.productName)
    const [editProduct] = useEditProductMutation();
    const [newInnerHTML, setnewInnerHTML] = useState(productState.productDescription)

    const cleanDesc = xss(productState.productDescription);
    React.useEffect(() => {
        if (quill) {
            quill.clipboard.dangerouslyPasteHTML(cleanDesc);
            quill.on('text-change', () => {
                setnewInnerHTML(quill.root.innerHTML)
            });
        }

    }, [quill]);

    const saveProduct = (title: string) => {
        let newProduct = {
            productName: title,
            productDescription: newInnerHTML
        }
        setProductState({ ...productState, ...newProduct });
    }

    return (
        <div className="w-full md:w-3/4 border border-x-0 border-b-0 md:border-r outline-gray-300 border-gray-300 rounded-sm relative">
            <img className="h-40 md:h-64 w-full object-cover" src={productState.productImage} alt="image one" />
            <div className="inline-block absolute top-0 left-0">
                <button className="p-2 bg-blue-950 rounded-tl-sm rounded-br-lg absolute"><RiTrophyLine color="white" /></button>
                <span className="pl-4 pr-2 py-2 ml-6 rounded-br-lg bg-white text-md">{productState.productType}</span>
            </div>
            <button className="p-2 top-0 right-0 bg-white rounded-bl-lg absolute"><RiDeleteBin2Line color="gray" /></button>
            <div className="mx-4">
                <input className="my-4 py-2 px-4 w-full text-md outline outline-offset-0 outline-1 outline-gray-300 rounded-md"
                    type="text" name="" id="" value={productState.productName} onChange={(e) => saveProduct(e.target.value)} />
            </div>
            <div className="mx-4">
                <div className="text-sm text-black" ref={quillRef} />
            </div>
            <div className="float-right">
                <button>Cancel</button>
                <button className="my-2 mx-4 px-2 pb-1 text-white bg-blue-800 rounded-md" onClick={() => editProduct(productState)}><RiCheckLine className="inline-block mr-1" />Save</button>
            </div>
        </div>
    )
}
