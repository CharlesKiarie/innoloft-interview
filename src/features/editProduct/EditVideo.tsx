import { ProductProps } from "types";


export default function EditVideo({ }) {
    return (
        <div className="my-5 pl-3 pt-3 outline outline-offset-2 outline-1 outline-gray-300 rounded-sm">
            <h2>Edit Video</h2>
            <div className="py-4 mr-4">
                <input className="my-4 pl-2 py-1 w-full text-sm outline outline-offset-0 outline-1 outline-gray-300 rounded-md" type="text" name="" id="" placeholder="Add youtube or vimeo link" />
            </div>
        </div>
    )
}
