// // import ProductCard from "@/components/ProductCard";
// import {getProducts }from "@lib/api";

// export default async function ProductsPage(){
//     const products = await getProducts();
//     return(
// <section className="mx-auto max-w-6xl px-6 py-16">
//     <div>
//         <p className="text-su font-medium uppercase tracking-widest text-slate-500">
//   Store
//         </p>
//   <h1 className="mt-2 text-4xl font-bold">
//     Products
//   </h1>
//   <p className="mt-4 max-w-2xl text-slate-500">
//     Explore our collection of products.
//   </p>
//       </div>

//   <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//     {products.map((product)=>(
//         <ProductCard
//         key={product.id}
//         product={product}/>
//     ))}

//     </div>
    
// </section>
//     );
// }