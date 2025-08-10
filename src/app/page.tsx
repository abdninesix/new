import ProductList from "@/components/ProductList"
import Image from "next/image"

const Homepage = async ({searchParams}:{searchParams: Promise<{category: string}>}) => {

const  category = (await searchParams).category;

  return (
    <div className='space-y-20'>
      <div className="relative aspect-[3/1]">
        <Image src="/featured.png" alt='banner' fill className='size-6 md:size-9' />
      </div>
      <ProductList category={category} />
    </div>
  )
}

export default Homepage