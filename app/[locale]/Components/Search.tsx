"use client";

import { useRouter } from "@/i18n/routing";
import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import useDebounce from "./hooks/useDebounce";

const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debounce = useDebounce(value, 1000);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    router.push(`/products?search=${debounce}`);
  }, [debounce, router]);

  return (
    <div>
      <input
        className="products-search"
        type="text"
        placeholder="Search Product"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default Search;
