"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    router.push(`/products?search=${value}`);
  }, [value, router]);

  return (
    <div>
      <input
        className="products-search"
        type="text"
        placeholder="Search Product"
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
