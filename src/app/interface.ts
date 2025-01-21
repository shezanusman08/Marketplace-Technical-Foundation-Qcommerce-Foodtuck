export interface SimplifiedProduct {
    _id: string;
    currentPrice: number;
    name: string;
    description: string;
    slug: string;
    imageUrl: string;
    price_id: string;
    available: boolean;
    originalPrice: number;
    
}

export interface fullProduct {
    _id: string;
    currentPrice: number;
    name: string;
    description: string;
    slug: string;
    image: { asset: { url: string } }[];
    
}

export interface Chef {
    _id: string;
    name: string;
    position: string;
    experience: number;
    specialty: string;
    imageUrl: { asset: { url: string } }[];
    description: string;
    bio: string;
    available: boolean;
}