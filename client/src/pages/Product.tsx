import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { config } from "../config";
import { ProductProps } from "../type";
import { getData } from "../lib";
import Loading from "../ui/Loading";
import Container from "../ui/Container";
import * as _ from 'lodash';
import { MdOutlineStarOutline } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import FormattedPrice from "../ui/FormattedPrice";
import { IoClose } from "react-icons/io5";
import AddToCartBtn from "../ui/AddToCartBtn";
import { productPayment } from "../assets";
import ProductCard from "../ui/ProductCard";
import CategoryFilters from "../ui/CategoryFilters";
import PriceTag1 from "../ui/PriceTag1";

const Product = () => {
  const [productData, setProductData] = useState<ProductProps | null>(null);
  const [allProducts, setAllProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState<string | "">("");
  const [color, setColor] = useState<string | null>("");
  const {id} = useParams();
  const endpoint = id 
    ? `${config.baseUrl}/products/${id}` 
    : `${config.baseUrl}/products/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getData(endpoint);
        if(id){
          setProductData(data);
          setAllProducts([]);
        } else {
          setAllProducts(data);
          setProductData(null);
        }
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching data of Products: ", error)
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, [id, endpoint]);

  useEffect(() => {
    if(productData) {
      setImgUrl(productData?.images[0]);
      setColor(productData?.colors[0]);
    }
  }, [productData])

  return (
    <div>
      {loading 
      ? <Loading />
      : <Container>
          {!!id && productData && _.isEmpty(allProducts) ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap:10">
              <div className="flex flex-start">
                <div>
                  {productData?.images?.map((item, index) => (
                    <img 
                      src={item} 
                      alt="product image" 
                      key={index} 
                      className={
                        `w-24 cursor-pointer opacity-80 hover:opacity-100 
                        ${imgUrl === item && "border border-gray-500 round-sm opacity-100"}`}
                      onClick={() => setImgUrl(item)}
                    />
                  ))}
                </div>
                <div>
                  <img src={imgUrl} alt="main image" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">{productData?.name}</h2>
                <div className="flex items-center justify-between">
                  <PriceTag1 
                    regularPrice={productData?.regularPrice}
                    discountedPrice={productData?.discountedPrice}
                    className="text-xl"
                  />
                  <div className="flex items-center gap-1">
                    <div className="text-base text-lightText flex items-center">
                      <MdOutlineStarOutline />
                      <MdOutlineStarOutline />
                      <MdOutlineStarOutline />
                      <MdOutlineStarOutline />
                      <MdOutlineStarOutline />
                    </div>
                    <p className="text-base font-semibold">{`(${productData?.reviews} reviews)`}</p>
                  </div>
                </div>
                <p className="flex items-center">
                  <FaRegEye className="mr-1"/> 
                  <span className="font-semibold mr-1">{productData?.reviews}</span>
                  people are viewing this right now
                </p>
                <p>
                  You are saving{" "}
                  <span className="text-base font-bold text-green-500">
                    <FormattedPrice
                      //! NOTE: You have to make sure it is not null if you want to use non-null assertion [NOT GOOD Practice]
                      //* productData?.regularPrice! - productData?.discountedPrice!
                      amount={productData?.regularPrice && productData?.discountedPrice 
                        ? productData.regularPrice - productData.discountedPrice 
                        : 0}
                    />
                  </span>
                  upon purchase
                </p>
                <div>
                  { color && (
                    <p>
                      Color:{" "} 
                      <span
                        className="font-semibold capitalize"
                        style={{ color: color === "white" ? "black" : color }}
                      >{color}</span>
                    </p>
                  )}
                  <div className="flex items-center gap-x-3">
                    {productData?.colors.map((item) => (
                      <div 
                        key={item}
                        className={`
                          ${item === color
                          ? "border border-black p-1 rounded-full"
                          : "border-transparent"}
                        `}
                      >
                        <div 
                          className="w-10 h-10 rounded-full cursor-pointer border border-gray-600" 
                          style={{backgroundColor: item}}
                          onClick={() => {setColor(item)}}
                        />
                      </div>
                    ))}
                  </div>
                  { color && 
                    <button 
                      onClick={() => setColor("")}
                      className="font-semibold mt-1 flex items-center gap-1 hover:text-red-600 duration-200 cursor-pointer"
                    >
                      <IoClose /> Clear
                    </button>
                  }
                  <p>
                    Brand:{" "}
                    <span className="font-medium">{productData?.brand}</span>
                  </p>
                  <p>
                    Category:{" "}
                    <span className="font-medium">{productData?.category}</span>
                  </p>
                  <AddToCartBtn
                    product={productData}
                    title="Buy now"
                    className="w-[100%] bg-black/80 py-3 text-base text-gray-200 hover:scale-100 hover:text-white duration-200 mt-4"
                  />
                  <div className="bg-[#f7f7f7] p-5 rounded-md flex flex-col items-center justify-center gap-2">
                    <img 
                      src={productPayment} 
                      alt="product payment" 
                      className="w-auto object-cover"
                    />
                    <p className="font-semibold">Guaranteed Safe & secure checkout</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-start gap-10">
              <CategoryFilters id={id} />
              <div>
                <p className="text-4xl font-semibold mb-5 text-center">Products Collection</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {allProducts?.map((item:ProductProps) => (
                    <ProductCard item={item} key={item?._id}/>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Container>
      }
    </div>
  )
}

export default Product
