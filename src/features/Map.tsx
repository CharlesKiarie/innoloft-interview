import { ProductProps } from "types";

export default function Map({ product }: ProductProps) {
    return (
        <div>
            <iframe

                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBsUreVHtKR9AMpajXxEkJ3V4W7O714Ys8
                &q=${product.company.street} ${product.company.house},${product.company.country}`}>
            </iframe>
        </div>
    )
}