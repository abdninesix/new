import ProductList from "@/components/ProductList"
import Image from "next/image"

const Homepage = () => {
  return (
    <div className='space-y-20'>
      <div className="relative aspect-[3/1]">
        <Image src="/featured.png" alt='banner' fill className='size-6 md:size-9' />
      </div>
      <ProductList />
    </div>
  )
}

export default Homepage