"use client";
import Search from "./Search";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

const NavPanel = () => {
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const target = e.target.value;
    const [sortBy, order] = target.split("-");
    router.push(`products?sortBy=${sortBy}&order=${order}`);
  };

  return (
    <div className="w-full bg-gray-100 p-20 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Product Panel
      </h2>

      <div className="mb-4">
        <Search />
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">Sort By</h3>
        <select
          onChange={handleChange}
          defaultValue="price"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option disabled value="price">
            Price
          </option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>

        <select
          onChange={handleChange}
          defaultValue="discount"
          className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option disabled value="discount">
            Discount
          </option>
          <option value="discount-desc">Discount: High to Low</option>
          <option value="discount-asc">Discount: Low to High</option>
        </select>

        <select
          onChange={handleChange}
          defaultValue="rating"
          className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option disabled value="rating">
            Rating
          </option>
          <option value="rating-desc">Rating: High to Low</option>
          <option value="rating-asc">Rating: Low to High</option>
        </select>
      </div>
    </div>
  );
};

export default NavPanel;
