import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { mockProducts } from '../../data/mockProducts';
import { Product } from '../../types/product';
import Image from 'next/image';

const ProductDetails = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (slug) {
            const foundProduct = mockProducts.find((p) => p.slug === slug);
            setProduct(foundProduct || null);
        }
    }, [slug]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <Image src={product.images[0]} alt={product.name} width={500} height={500} className="mb-4" />
            <p className="text-lg mb-2">{product.description}</p>
            <p className="text-xl font-semibold mb-2">Price: ${product.price.toFixed(2)}</p>
            <p className="mb-2">Material: {product.material}</p>
            <p className="mb-2">Available Colors: {product.availableColours.join(', ')}</p>
            <p className="mb-2">Size: {product.size}</p>
            <p className="mb-2">Stock Status: {product.stockStatus}</p>
            <button className="bg-crimson-600 text-white py-2 px-4 rounded">Add to Cart</button>
        </div>
    );
};

export default ProductDetails;