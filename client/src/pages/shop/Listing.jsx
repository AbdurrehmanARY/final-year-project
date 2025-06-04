
import { useState, useEffect } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { ChevronRight, X, ChevronDown, ChevronUp, Search, ShoppingBag, SlidersHorizontal } from "lucide-react"
import ProductCard from "../../components/shop/ProductCard"
import ReuseDropdown from "../../components/shop/ReuseDropdown"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "@/store/admin/products-slice"
import { sortOptions } from "@/config"
import { category } from "@/config"
import { brand } from "@/config"
import { color } from "@/config"
import { fetchAllFilteredProducts } from "@/store/shop/product"
import PaginationComp from "@/components/common/PaginationComp"
import { Input } from "@/components/ui/input"
import { getSearchResults } from "@/store/shop/search"
import { Slider } from "@/components/ui/slider"




function createSearchParamsHelper(filters) {
  // Flattens arrays for URLSearchParams, e.g. {brand: ['Apple','Samsung']} => {brand: 'Apple,Samsung'}
  const params = {};
  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      params[key] = value.join(',');
    } else {
      params[key] = value;
    }
  });
  // console.log("params", params);
  return params;
}

function Listing() {

  const navigate=useNavigate()
const dispatch=useDispatch()
useEffect(() => {
  dispatch(getAllProducts());
}, [dispatch]);
  const {listOfProduct}=useSelector((state)=>state.adminProducts)
  const {productList}=useSelector((state)=>state.filteredProducts)
  // const {searchResults}=useSelector((state)=>state.search)
  // console.log("searchResults", searchResults);
  const [filterOpen, setFilterOpen] = useState(false)
  const [mobileView, setMobileView] = useState(false)
  const [sort, setSort] = useState(sortOptions[0]?.id)
  const [filter, setFilter] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  const [priceRange, setPriceRange] = useState([1, 80000]);
   const [page, setPage] = useState(1);
        const [limit, setLimit] = useState(14);
  const { totalPages } = useSelector((state) => state.filteredProducts);

  
  const [expandedSections, setExpandedSections] = useState({
    "Kind of Product": true,
    Price: true,
    // Color: true,
    // Style: true,
  })
  console.log("priceRange", priceRange);

// const [sort, setSort] = useState()
   const [appliedFilters, setAppliedFilters] = useState({
    brand: [],
    category: [],
    color: [],
    priceRange: [40, 80],
  });


  useEffect(() => {
  setAppliedFilters((prev) => ({
    ...prev,
    priceRange,
  }));
}, [priceRange]);


  // Filter products based on selected categories
  const filteredProducts = listOfProduct.filter((product) => {
    // If no category filter is applied, show all
 const brandMatch = appliedFilters.brand.length === 0 ||
    appliedFilters.brand.includes(product.brand);

  return brandMatch;
  });
//   console.log("Filtered Products:", filteredProducts);
// console.log("appliedFilters", appliedFilters);

  //  sessionStorage.setItem("filters", JSON.stringify(filteredProducts));
  //  console.log("sessionP", sessionP);

  const [searchQuery, setSearchQuery] = useState("")

// const pro=JSON.parse(sessionStorage.getItem("filters"))
// console.log("pro", pro);
// useEffect(() => {
//   setFilter(JSON.parse(sessionStorage.getItem("filters")))
// })
// console.log("Filtered Products:", filter);


// useEffect(() => {
//   setFilter(JSON.parse(sessionStorage.getItem("filters")) || []);
// }, []);

// useEffect(() => {
//   console.log("Filtered Products:", filter);
// }, [filter]);
 


  // const [cart, setCart] = useState([])
//  setFilter(JSON.parse(sessionStorage.getItem("filters")) || {});
//    console.log("Filtered Products:", filter);
// useEffect(() => {
//   setFilter(JSON.parse(sessionStorage.getItem("filters")) || {});
//    console.log("Filtered Products:", filter);
// },[filter])

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])


useEffect(() => {
  if (appliedFilters && Object.keys(appliedFilters).length > 0) {
    const createQueryString = createSearchParamsHelper(appliedFilters);
    // console.log("createQueryString", createQueryString);
    setSearchParams(new URLSearchParams(createQueryString));
  }
}, [appliedFilters, setSearchParams]);
// console.log("searchParams", searchParams.toString());

// console.log("sort", sort);
// console.log("appliedFilters", appliedFilters);


  useEffect(() => {
    if (appliedFilters !== null && sort !== null)
      dispatch(
    fetchAllFilteredProducts({ filterParams: appliedFilters, sortParams: sort,page,limit})).then(data=>console.log("filter data in ",data.payload))
  }, [dispatch, sort, appliedFilters,
    page,limit

  ]);


  
// search use Effect 
useEffect(() => {
  if (searchQuery && searchQuery.trim() !== "" && searchQuery.trim().length > 3) {
    setTimeout(() => {
      setSearchParams(new URLSearchParams(`?keyword=${searchQuery}`));
      dispatch(getSearchResults({keyword: searchQuery, filterParams: appliedFilters, sortParams: sort, page, limit}));
    }, 1000);
  } else if (searchQuery === "" || searchQuery.trim().length <= 3) {
    // Remove the keyword param from the URL
    setSearchParams({});
    // Optionally reset search results here if needed
    // dispatch(resetSearchResults());
  }
}, [searchQuery, sort, appliedFilters, page, limit]);

  // console.log("searchQuery", searchQuery);
  // console.log('searchParams', searchParams.toString());



  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const toggleFilter = (type, value) => {
    setAppliedFilters((prev) => {
      const current = [...prev[type]]
      if (current.includes(value)) {
        return { ...prev, [type]: current.filter((item) => item !== value) }
      } else {
        return { ...prev, [type]: [...current, value] }
      }
    })
  }

  const removeFilter = (type, value) => {
    setAppliedFilters((prev) => ({
      ...prev,
      [type]: prev[type].filter((item) => item !== value),
    }))
  }

  const resetAllFilters = () => {
    setAppliedFilters({
      brand: [],
      category: [],
      colors: [],
      priceRange: [1, 80000],


    })
    setSearchQuery("")
  }

  

  // const getAllAppliedFilters = () => {
  //   return [...appliedFilters.brand, ...appliedFilters.colors, ...appliedFilters.styles]
  // }
  const getAllAppliedFilters = () => {
    return [...appliedFilters.brand]
  }

  console.log("appliedFilters", appliedFilters);
  const searchResults = useSelector((state) => state.search.searchResults);
  console.log("searchResults", searchResults);
  


  
  return (
    <>
     <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href="/product" className="hover:text-gray-700">
          Product
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-gray-900">Women</span>
      </nav>

      {/* Search Bar - Desktop */}
      <div className="relative mb-6 hidden md:block">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <X className="h-5 w-5 text-gray-400" />
            </button>
          )}
        </div>
      </div>

      {/* Title and Filter Toggle */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          {searchQuery ? (
            <>
              Search Result ({searchResults.length}) <span className="text-orange-500">"{searchQuery}"</span>
            </>
          ) : (
            <>All Products ({listOfProduct.length})</>
          )}
        </h1>
        <div className="flex items-center gap-4">
          <div className="relative">

            <ReuseDropdown
            sort={sort}
            setSort={setSort}
            option={sortOptions}
            
            trigger={
<button className="flex items-center gap-2 px-4 py-2 border rounded-full">
              <span>Short By</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            }
            />
            
          </div>
          <button
            className="flex items-center gap-2 px-4 py-2 border rounded-full"
            onClick={() => setFilterOpen(!filterOpen)}
            
          >
            <span className="hidden md:inline">Filter</span>
            <SlidersHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Applied Filters */}
      {getAllAppliedFilters().length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          <button onClick={resetAllFilters} className="text-orange-500 text-sm hover:underline">
            Reset All Filter
          </button>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8 ">
        {/* Products Grid */}
        <div className="w-full  order-2 md:order-1 ">
           <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   ${filterOpen ?"xl:grid-cols-3":"xl:grid-cols-4"}  gap-6 `}>
            
           {searchQuery && searchQuery.trim().length > 3 && searchResults.length > 0
  ? searchResults.map((product, index) => (
      <ProductCard key={product.id || index} index={index} product={product} />
    ))
  : productList.map((product, index) => (
      <ProductCard key={product.id || index} index={index} product={product} />
    ))
}
          </div>


<PaginationComp
  page={page}
  setPage={setPage}
  totalPages={totalPages}
   limit={limit}
/>

        </div>

        {/* Filter Sidebar - Desktop */}
        <div className={`w-full md:w-1/4 order-1 md:order-2 ${!filterOpen && "hidden "} `}>
          <div className="sticky top-4 border rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium">Filter</h2>
              <div className="flex items-center">
                <button className="text-orange-500 text-sm" onClick={resetAllFilters}>
                  Reset Filter
                </button>
                <button className="md:hidden ml-4" onClick={() => setFilterOpen(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Kind of Product */}








            {/* filterating for brand */}
              <FilterSection
              title="Brand"
              expanded={expandedSections["Brand"]}
              onToggle={() => toggleSection("Brand")}
            >
              <div className="space-y-1">
                {brand.map((item) => (
                  <FilterItem
                    key={item.id}
                    label={item.label}
                    selected={appliedFilters?.brand?.includes(item.label)}
                    onClick={() => toggleFilter("brand", item.label)}
                  />
                ))}
              </div>
            </FilterSection>


            <FilterSection
              title="Category"
              expanded={expandedSections["Category"]}
              onToggle={() => toggleSection("Category")}
            >
              <div className="space-y-1">
                {category.map((item) => (
                  <FilterItem
                    key={item.id}
                    label={item.label}
                    selected={appliedFilters?.category?.includes(item.label)}
                    onClick={() => toggleFilter("category", item.label)}
                  />
                ))}
              </div>
            </FilterSection>



            {/* Color */}
            <FilterSection
              title={`Color (${color.length})`}
              expanded={expandedSections["Color"]}
              onToggle={() => toggleSection("Color")}
            >
              <div className="grid grid-cols-4 gap-4 mt-4">

                {color.map((item) => (
  <ColorOption
    key={item.id}
    color={item.color}
    label={item.label}
    selected={appliedFilters?.color?.includes(item.label)}
    onClick={() => toggleFilter("color", item.label)}
  />
))}
                {/* <ColorOption
                  color="bg-yellow-300"
                  label="Yellows"
                  selected={appliedFilters.color.includes()}
                  onClick={() => toggleFilter("colors", "Yellows")}
                /> */}
                
               
                
              </div>
            </FilterSection>

{/* price  */}
<FilterSection
  title="Price"
  expanded={expandedSections["Price"]}
  onToggle={() => toggleSection("Price")}
>
  <div className="mt-4">
    <Slider
      min={0}
      max={80000}
      step={1000}
      value={priceRange}
      onValueChange={setPriceRange}
      range
      className="w-full 

        [&_[role=slider]]:h-4 
        [&_[role=slider]]:w-4 
        [&_[role=slider]]:bg-white 
        [&_[role=slider]]:border-2 
        [&_[role=slider]]:border-orange-500 
        [&_[role=slider]]:rounded-full 
        [&_[role=slider]]:-top-1 
        [&_[role=slider]]:cursor-pointer 
        [&_[role=slider-track]]:bg-orange-500 
        [&_[role=slider-track]]:h-4 
        [&_[role=slider-track]]:rounded-full 
        [&_[role=slider-range]]:bg-orange-500 
        [&_[role=slider-range]]:h-4 
        [&_[role=slider-range]]:rounded-full
        "
    />

        
    <div className="flex justify-between mt-2 ">
      <span className="text-sm text-gray-700">Rs.{priceRange[0]}</span>
      <span className="text-sm text-gray-700">Rs.{priceRange[1]}</span>
    </div>
  </div>
</FilterSection>



          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
// Filter Section Component
function FilterSection({ title, children, expanded, onToggle }) {
  return (
    <div className="mb-6 border-b pb-6">
      <button className="flex justify-between items-center w-full mb-4" onClick={onToggle}>
        <h3 className="font-medium">{title}</h3>
        {expanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      {expanded && children}
    </div>
  )
}

// Filter Item Component
function FilterItem({ label, selected, onClick }) {
  return (
    <button
      className="flex items-center justify-between w-full py-2 hover:text-orange-500 transition-colors"
      onClick={onClick}
    >
      <span className={selected ? "text-orange-500" : ""}>{label}</span>
      {/* <ChevronRight className="h-4 w-4" /> */}
    </button>
  )
}

// Color Option Component

// ColorOption component
function ColorOption({ color, label, selected, onClick }) {

  return (
    <button className="flex flex-col items-center" onClick={onClick}>
      <div
        className={`relative h-8 w-8 rounded-full ${color} mb-1 ${selected ? "ring-2 ring-orange-500 ring-offset-2" : ""}`}
      >
        {selected && (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ${color === "bg-white border" ? "text-black" : "text-white"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>
      <span className={`text-xs text-center ${selected ? "text-orange-500 font-medium" : ""}`}>{label}</span>
    </button>
  );
}

// ChevronLeft icon component
function ChevronLeft(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


export default Listing