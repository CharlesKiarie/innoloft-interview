import { DataContext } from 'context/DataContext'
import { useContext } from 'react'
import ReactPlayer from 'react-player'


export default function VideoSection() {
    const { product } = useContext(DataContext)
    return (
        <div className="my-4 md:my-5 p-3 md:pl-3 md:pt-3 outline outline-offset-2 outline-1 outline-gray-300 rounded-sm">
            <h2 className="text-lg md:text-md">Video</h2>
            <div className="py-4 flex items-center justify-center">
                <ReactPlayer url={product.video} />
            </div>
        </div>
    )
}
