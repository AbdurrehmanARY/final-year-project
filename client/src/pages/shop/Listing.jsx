
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ChevronRight, X, ChevronDown, ChevronUp, Search, ShoppingBag, SlidersHorizontal } from "lucide-react"
import ProductCard from "../../components/shop/ProductCard"
import ReuseDropdown from "../../components/shop/ReuseDropdown"

function Listing() {

  

  const [filterOpen, setFilterOpen] = useState(false)
  const [mobileView, setMobileView] = useState(false)
  const [expandedSections, setExpandedSections] = useState({
    "Kind of Product": true,
    Price: true,
    Color: true,
    Style: true,
  })
  const option=[
    {
      label:"price:high to low"
    }
,
    {
      label:"price:low to high"
    }
  ]

  const [appliedFilters, setAppliedFilters] = useState({
    categories: [],
    colors: ["Gray", "Browns"],
    styles: ["Casual"],
    priceRange: [40, 80],
  })

  const [searchQuery, setSearchQuery] = useState("Casual")
  const [cart, setCart] = useState([])

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
      categories: [],
      colors: [],
      styles: [],
      priceRange: [40, 80],
    })
    setSearchQuery("")
  }

  const addToCart = (productId) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === productId)
      if (existingItem) {
        return prev.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        return [...prev, { id: productId, quantity: 1 }]
      }
    })
  }

  const getAllAppliedFilters = () => {
    return [...appliedFilters.categories, ...appliedFilters.colors, ...appliedFilters.styles]
  }


  
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
          <input
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
              Search Result (48) <span className="text-orange-500">"{searchQuery}"</span>
            </>
          ) : (
            <>All Products (481)</>
          )}
        </h1>
        <div className="flex items-center gap-4">
          <div className="relative">

            <ReuseDropdown
            option={option}
            
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

          {appliedFilters.styles.includes("Casual") && (
            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
              <span>Casual</span>
              <button onClick={() => removeFilter("styles", "Casual")}>
                <X className="h-4 w-4 ml-1" />
              </button>
            </div>
          )}

          {appliedFilters.colors.includes("Gray") && (
            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
              <span>Gray</span>
              <button onClick={() => removeFilter("colors", "Gray")}>
                <X className="h-4 w-4 ml-1" />
              </button>
            </div>
          )}

          {appliedFilters.colors.includes("Browns") && (
            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
              <span>Browns</span>
              <button onClick={() => removeFilter("colors", "Browns")}>
                <X className="h-4 w-4 ml-1" />
              </button>
            </div>
          )}
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8 ">
        {/* Products Grid */}
        <div className="w-full  order-2 md:order-1 ">
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   ${filterOpen ?"xl:grid-cols-3":"xl:grid-cols-4"}  gap-6 `}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>


          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-10 space-x-2">
            <button className="flex items-center px-3 py-1 border rounded hover:bg-gray-50">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">1</button>
            <button className="px-3 py-1 border rounded bg-orange-500 text-white">2</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">3</button>
            <span className="px-2">...</span>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">8</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">9</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">10</button>
            <button className="flex items-center px-3 py-1 border rounded hover:bg-gray-50">
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
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
            <FilterSection
              title="Kind of Product"
              expanded={expandedSections["Kind of Product"]}
              onToggle={() => toggleSection("Kind of Product")}
            >
              <div className="space-y-1">
                <FilterItem
                  label="Shirts"
                  selected={appliedFilters.categories.includes("Shirts")}
                  onClick={() => toggleFilter("categories", "Shirts")}
                />
                <FilterItem
                  label="Coats"
                  selected={appliedFilters.categories.includes("Coats")}
                  onClick={() => toggleFilter("categories", "Coats")}
                />
                <FilterItem
                  label="Skirts"
                  selected={appliedFilters.categories.includes("Skirts")}
                  onClick={() => toggleFilter("categories", "Skirts")}
                />
                <FilterItem
                  label="Jeans"
                  selected={appliedFilters.categories.includes("Jeans")}
                  onClick={() => toggleFilter("categories", "Jeans")}
                />
                <FilterItem
                  label="Pants"
                  selected={appliedFilters.categories.includes("Pants")}
                  onClick={() => toggleFilter("categories", "Pants")}
                />
                <FilterItem
                  label="Heels"
                  selected={appliedFilters.categories.includes("Heels")}
                  onClick={() => toggleFilter("categories", "Heels")}
                />
                <FilterItem
                  label="Dresses"
                  selected={appliedFilters.categories.includes("Dresses")}
                  onClick={() => toggleFilter("categories", "Dresses")}
                />
                <FilterItem
                  label="Sneakers"
                  selected={appliedFilters.categories.includes("Sneakers")}
                  onClick={() => toggleFilter("categories", "Sneakers")}
                />
                <FilterItem
                  label="Shoes"
                  selected={appliedFilters.categories.includes("Shoes")}
                  onClick={() => toggleFilter("categories", "Shoes")}
                />
              </div>
            </FilterSection>

            {/* Price Range */}
            <FilterSection title="Price" expanded={expandedSections["Price"]} onToggle={() => toggleSection("Price")}>
              <div className="mt-4">
                <div className="relative h-2 bg-gray-200 rounded-full">
                  <div className="absolute h-2 bg-orange-500 rounded-full" style={{ width: "60%", left: "0%" }}></div>
                  <div
                    className="absolute h-4 w-4 bg-white border-2 border-orange-500 rounded-full -top-1 cursor-pointer"
                    style={{ left: "0%" }}
                  ></div>
                  <div
                    className="absolute h-4 w-4 bg-white border-2 border-orange-500 rounded-full -top-1 cursor-pointer"
                    style={{ left: "60%" }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-sm">$40</span>
                  <span className="text-sm">$80</span>
                </div>
              </div>
            </FilterSection>

            {/* Color */}
            <FilterSection
              title="Color (2)"
              expanded={expandedSections["Color"]}
              onToggle={() => toggleSection("Color")}
            >
              <div className="grid grid-cols-4 gap-4 mt-4">
                <ColorOption
                  color="bg-yellow-300"
                  label="Yellows"
                  selected={appliedFilters.colors.includes("Yellows")}
                  onClick={() => toggleFilter("colors", "Yellows")}
                />
                <ColorOption
                  color="bg-purple-500"
                  label="Purple"
                  selected={appliedFilters.colors.includes("Purple")}
                  onClick={() => toggleFilter("colors", "Purple")}
                />
                <ColorOption
                  color="bg-gray-400"
                  label="Gray"
                  selected={appliedFilters.colors.includes("Gray")}
                  onClick={() => toggleFilter("colors", "Gray")}
                />
                <ColorOption
                  color="bg-white border"
                  label="White"
                  selected={appliedFilters.colors.includes("White")}
                  onClick={() => toggleFilter("colors", "White")}
                />
                <ColorOption
                  color="bg-olive-500"
                  label="Kaki"
                  selected={appliedFilters.colors.includes("Kaki")}
                  onClick={() => toggleFilter("colors", "Kaki")}
                />
                <ColorOption
                  color="bg-amber-800"
                  label="Browns"
                  selected={appliedFilters.colors.includes("Browns")}
                  onClick={() => toggleFilter("colors", "Browns")}
                />
                <ColorOption
                  color="bg-pink-400"
                  label="Roses"
                  selected={appliedFilters.colors.includes("Roses")}
                  onClick={() => toggleFilter("colors", "Roses")}
                />
                <ColorOption
                  color="bg-black"
                  label="Blacks"
                  selected={appliedFilters.colors.includes("Blacks")}
                  onClick={() => toggleFilter("colors", "Blacks")}
                />
                <ColorOption
                  color="bg-green-600"
                  label="Green"
                  selected={appliedFilters.colors.includes("Green")}
                  onClick={() => toggleFilter("colors", "Green")}
                />
                <ColorOption
                  color="bg-red-800"
                  label="Maroon"
                  selected={appliedFilters.colors.includes("Maroon")}
                  onClick={() => toggleFilter("colors", "Maroon")}
                />
                <ColorOption
                  color="bg-orange-500"
                  label="Orange"
                  selected={appliedFilters.colors.includes("Orange")}
                  onClick={() => toggleFilter("colors", "Orange")}
                />
                <ColorOption
                  color="bg-amber-100"
                  label="Beiges"
                  selected={appliedFilters.colors.includes("Beiges")}
                  onClick={() => toggleFilter("colors", "Beiges")}
                />
              </div>
            </FilterSection>

            {/* Style */}
            <FilterSection title="Style" expanded={expandedSections["Style"]} onToggle={() => toggleSection("Style")}>
              <div className="space-y-1">
                <FilterItem
                  label="Casual"
                  selected={appliedFilters.styles.includes("Casual")}
                  onClick={() => toggleFilter("styles", "Casual")}
                />
                <FilterItem
                  label="Basic"
                  selected={appliedFilters.styles.includes("Basic")}
                  onClick={() => toggleFilter("styles", "Basic")}
                />
                <FilterItem
                  label="Classic"
                  selected={appliedFilters.styles.includes("Classic")}
                  onClick={() => toggleFilter("styles", "Classic")}
                />
                <FilterItem
                  label="Spot"
                  selected={appliedFilters.styles.includes("Spot")}
                  onClick={() => toggleFilter("styles", "Spot")}
                />
                <FilterItem
                  label="Circular"
                  selected={appliedFilters.styles.includes("Circular")}
                  onClick={() => toggleFilter("styles", "Circular")}
                />
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
      <ChevronRight className="h-4 w-4" />
    </button>
  )
}

// Color Option Component
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
              className={`h-4 w-4 ${color === "bg-white border" || color === "bg-amber-100" || color === "bg-yellow-300" ? "text-black" : "text-white"}`}
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
  )
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