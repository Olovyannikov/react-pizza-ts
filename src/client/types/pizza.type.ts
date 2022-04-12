export interface IPizza {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    types: [0, 1];
    sizes: [26, 30, 40];
    category: number;
    rating: number;
}
