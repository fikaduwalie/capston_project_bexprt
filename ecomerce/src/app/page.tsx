import Link from "next/link";

export default function Home(){
  return (
    <section>
      <div className="bg-slate-900 text-white">
  <div className="mx-auto max-w-6xl px-6 py-24">
  <p className="text-sm font-medium upercase tracking-widest text-slate-400">
ecomerce application
  </p>
  <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight">
    Discover Your Next Favorite Thing.
  </h1>
  <p className="mt-6 max-w-2xl text-lg text-slate-300">
    Shop smarter. Live better. Explore quality products and everyday essentials at prices you'll love.
  </p>
  <Link
  href="/products"
  className="mt-8 inline-block rounded-full bg-white px-3 py-1 font-semibold text-slate-900">
      Shop Now →
  </Link>
  </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 py-16">
<h2 className="text-2xl font-bold">
  What We Are Building
</h2>
<div className="mt-8 grid gap-6 md:grid-cols-3">

<FeatureCard
title="Products"
description="Browse products from an external API."
/>

<FeatureCard
title="cart"
description="Add products and manage your shopping cart."/>

<FeatureCard
title="Checkout"
description="Complete a simple checkout flow."
/>


</div>
      </div>

    </section>)
    }
function FeatureCard({title,description,}:{
  title:string;
  description: string;
}){
  return(
    <div className="rounded-xl border bg-white p-6">
      <h3 className="font-semibold">{title}</h3>

      <p className="mt-2 text-sm text-slate-500">{description}</p>
    </div>
  )
}