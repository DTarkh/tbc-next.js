"use client";

import { useRouter } from "@/i18n/routing";
import { useEffect, useState } from "react";
import useDebounce from "./hooks/useDebounce";

const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debounce = useDebounce(value, 1000);

  type ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

  const handleChange: ChangeHandler = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (debounce.length > 0) {
      router.push(`/products?search=${debounce}`);

    }
  }, [debounce, router]);

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
