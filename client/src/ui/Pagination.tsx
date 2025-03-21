"use client";
import { useEffect, useState } from "react";
import { config } from "../config";
import { getData } from "../lib";
import ReactPaginate from "react-paginate";
import { ProductProps } from "../type";
import ProductCard from "./ProductCard";

interface ItemsProps {
  currentItems: ProductProps[];
}

const Items = ({ currentItems }: ItemsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      {currentItems &&
        currentItems?.map((item: ProductProps) => (
          <ProductCard key={item?._id} item={item} />
        ))}
    </div>
  );
};

const Pagination = () => {
  const [products, setProducts] = useState([]);
  // const [currentPage, setCurrentPage] = useState<number>(0); // * State for the currentPage
  
  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/products`;
      try {
        const data = await getData(endpoint);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();

    // Restore current page from localStorage
    const savedPage = localStorage.getItem("currentPage");
    if (savedPage) {
      // setCurrentPage(Number(savedPage)); //* Restore to saved page
    }

  }, []);
  const itemsPerPage = 15;
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newPage = event.selected;
    // setCurrentPage(newPage); //* Update current page state
    localStorage.setItem("currentPage", newPage.toString()); // Save to localStorage
    const newOffset = (event.selected * itemsPerPage) % products.length;
    const newStart = newOffset + 1;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
    setItemStart(newStart);
  };

  // *Update the offset when currentPage changes (e.g., restored from localStorage)
  // useEffect(() => {
  //   const newOffset = (currentPage * itemsPerPage) % products.length;
  //   setItemOffset(newOffset);
  //   setItemStart(newOffset + 1);
  //   console.log(currentPage)
  // }, [currentPage, products]);
  
  return (
    <>
      <Items currentItems={currentItems} />
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          // forcePage={currentPage} //* Force display of the current page
          previousLabel=""
          pageLinkClassName="w-9 h-9 border[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center cursor-pointer hover:bg-skyText hover:text-white"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold py-10"
          activeClassName="bg-black text-white hover:bg-skyText"
        />
        <p>
          Products from {itemStart} to {Math.min(endOffset, products?.length)}{" "}
          of {products?.length}
        </p>
      </div>
    </>
  );
};

export default Pagination;