// import  { Product} from "@types/product";

// const API_URL = process.env.NEXT_PUBLIC_URL ||  "https://dummyjson.com";

// interface ProductResponse {
//     products: Product[];
//     total:number;
//     skip:number;
//     limit: number;

// }

// export async function getProducts(): Promise<Product[]>{
//     const response =await fetch(`${API_URL}/products`);
//     if(!response.ok){
//         throw new Error("Faild to fetch products");
//     }
//     const data: ProductResponse = await response.json();
//     return data.products;
// }
// export async function getProduct(): Promise<Product[]>{
//     const response =await fetch(`${API_URL}/products/${id}`);
//     if(!response.ok){
//         throw new Error("Faild to fetch products");
//     }
  
//     return response.json();
// }

