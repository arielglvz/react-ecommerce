import BannerCategories from "./ui/BannerCategories"
import Categories from "./ui/Categories"
import Container from "./ui/Container"
import DiscountedBanner from "./ui/DiscountedBanner"
import Highlights from "./ui/Highlights"
import HomeBanner from "./ui/HomeBanner"
import ProductList from "./ui/ProductList"

function App() {

  return (
    <main>
      <BannerCategories />
      <HomeBanner />
      <Highlights />
      <Categories />
      <ProductList />
      <DiscountedBanner />
      {/* Blog */}
    </main>
  )
}

export default App
