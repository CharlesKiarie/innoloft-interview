import { useEditProductMutation, useGetTRLQuery } from 'api/productAPI';
import { DataContext } from 'context/DataContext';
import { useContext, useState } from 'react';
import { RiDeleteBin2Fill, RiAddLine, RiCheckLine, RiCompasses2Fill, RiMoneyDollarBoxLine, RiSettings4Line, RiSuitcaseLine } from 'react-icons/ri'
import { ProductProps } from 'types';



export default function EditOfferSection() {
    const { product, trlOptions } = useContext(DataContext);

    const [editProduct] = useEditProductMutation();
    const [detailState, setDetailState] = useState({ ...product });
    const [technology, setTechnology] = useState("");
    const [model, setModel] = useState("");
    const [newCost, setNewCost] = useState("");



    let trlOption = trlOptions.map((item) => (
        <option key={item.id} className="w-2/3 md:1/2 text-sm line-clamp-1" value={item.id}>{item.name}</option>
    ));


    const category = detailState.categories.map((item) => (
        <span key={item.id} className="py-1 px-2 mr-2 mb-2 w-max bg-gray-300 rounded-xl text-xs text-gray-500 inline-flex items-center">
            <p className="mr-2">{item.name}</p>
            <RiDeleteBin2Fill onClick={() => deleteCategory(item.id)} />
        </span>
    ));

    const deleteCategory = (id: number) => {
        const modifiedItems = [
            ...detailState.categories.filter(item => item.id !== id),
        ];
        setDetailState({ ...detailState, categories: modifiedItems });
    }


    const businessModel = detailState.businessModels.map((item) => (
        <span key={item.id} className="py-1 px-2 mr-2 mb-2 w-max bg-gray-300 rounded-xl text-xs text-gray-500 inline-flex items-center">
            <p className="mr-2">{item.name}</p>
            <RiDeleteBin2Fill onClick={() => deleteModel(item.id)} />
        </span>
    ));

    const deleteModel = (id: number) => {
        const modifiedItems = [
            ...detailState.businessModels.filter(item => item.id !== id),
        ];
        setDetailState({ ...detailState, businessModels: modifiedItems });
    }

    const addNewTechnology = (name: string) => {
        const newCategory = { id: Math.floor(Math.random() * 10000), name };
        setDetailState({
            ...detailState,
            categories: [...detailState.categories, newCategory],
        });

        setTechnology('');
    }


    const addNewModel = (name: string) => {
        const newModel = { id: Math.floor(Math.random() * 10000), name };
        setDetailState({
            ...detailState,
            businessModels: [...detailState.businessModels, newModel],
        });
        setModel('');
    }


    const addNewCost = (name: string) => {
        const newCostValue = name;
        setDetailState({
            ...detailState,
            investmentEffort: newCostValue,
        });
        setModel('');
    }

    const addNewTRL = (id: string) => {
        let index = Number(id) - 1
        let option = trlOptions.map(item => { if (item.id === id) return item.name });
        let newTRL = option[index]
        if (!newTRL) return
        setDetailState({
            ...detailState,
            trl: newTRL
        });
    }


    return (
        <div className="my-5 pl-3 pt-3 outline outline-offset-2 outline-1 outline-gray-300 rounded-sm">
            <h2>Edit Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-1">
                <div className="my-4">
                    <p className="flex items-center my-2 text-gray-500 text-sm"><RiSettings4Line className="inline-block" size={20} /> Technology</p>
                    <div className="ml-4 flex flex-wrap items-center">
                        {category}
                    </div>
                    <div className="ml-4 mt-4">
                        <input className="px-2 text-sm outline outline-offset-2 outline-1 outline-gray-300 rounded-sm"
                            type="text" name="technology" value={technology} onChange={e => setTechnology(e.target.value)} placeholder="Add a technology" />
                        <button className="my-2 px-3 py-1 text-white text-sm bg-blue-800 rounded-md flex items-center"
                            aria-label="Add technology" onClick={() => addNewTechnology(technology)}><RiAddLine className="inline-block mr-1" />Add
                        </button>
                    </div>
                </div>
                <div className="my-4">
                    <p className="flex items-center my-2 text-gray-500 text-sm"><RiSuitcaseLine className="inline-block" size={20} /> Business Model</p>
                    <div className="ml-4 flex flex-wrap items-center">
                        {businessModel}
                    </div>
                    <div className="ml-4 mt-4">
                        <input className="px-2 text-sm outline outline-offset-2 outline-1 outline-gray-300 rounded-sm"
                            type="text" name="business model" value={model} onChange={e => setModel(e.target.value)} placeholder="Add a Business Model" />
                        <button className="my-2 px-3 py-1 text-white text-sm bg-blue-800 rounded-md flex items-center"
                            aria-label="Add Business Model" onClick={() => addNewModel(model)}><RiAddLine className="inline-block mr-1" />Add</button>
                    </div>
                </div>
                <div className="my-4">
                    <p className="flex items-center my-2 text-gray-500 text-sm"><RiCompasses2Fill className="inline-block" size={20} /> TRL</p>
                    <div className="ml-4">
                        <span className="py-1 px-2 mr-2 bg-gray-300 rounded-xl text-xs text-gray-500 md:w-max line-clamp-1">{detailState.trl}</span>
                        <div className="mt-4 mr-2 md:mr-0 line-clamp-1">
                            <select className="px-2 py-2 text-sm rounded-sm w-max" onChange={e => addNewTRL(e.target.value)}>
                                <option selected>Technology readiness level</option>
                                {trlOption}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="my-4">
                    <p className="flex items-center my-2 text-gray-500 text-sm"><RiMoneyDollarBoxLine className="inline-block" size={20} /> Costs</p>
                    <div className="ml-4">
                        <span className="py-1 px-2 mr-2 bg-gray-300 rounded-xl text-xs text-gray-500">{detailState.investmentEffort}</span>
                        <div className="mt-4">
                            <input className="px-2 text-sm outline outline-offset-2 outline-1 outline-gray-300 rounded-sm"
                                type="text" name="cost" value={newCost} onChange={e => setNewCost(e.target.value)} placeholder="Enter invested amount" />
                            <button className="my-2 px-3 py-1 text-white text-sm bg-blue-800 rounded-md flex items-center"
                                aria-label="Edit investement effort" onClick={() => addNewCost(newCost)}><RiCheckLine className="inline-block mr-1" />Save</button>
                        </div>
                    </div>
                </div>
                <button className="my-2 px-3 py-1 text-white text-sm bg-blue-800 rounded-md flex items-center w-max"
                    aria-label="Save all changes" onClick={() => editProduct(detailState)}><RiCheckLine className="inline-block mr-1" />Save Changes</button>
            </div>
        </div>
    )
}


