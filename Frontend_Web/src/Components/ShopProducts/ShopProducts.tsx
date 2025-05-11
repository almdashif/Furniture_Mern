import React, { useEffect, useState } from 'react'
import '../ShopProducts/shopProducts.scss'
import { CiLocationOn, CiHeart } from "react-icons/ci";
import { ImLoop } from "react-icons/im";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';
import { productData } from '../../data/productData.js';
import { IoMdCart, IoMdClose } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { BiSortAlt2 } from "react-icons/bi";
import { CiCircleRemove } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import Slider from 'rc-slider/lib/Slider';
// import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import DetailsComponent from '../DetailsComponent/DetailsComponent.tsx';
import { RxHamburgerMenu } from "react-icons/rx";
import { getDeviceWidth } from '../../utils/getDeviceWidth.ts';
import { useDeviceSize } from '../../hooks/useDeviceSize.ts';

const ShopProducts = () => {
    const [minPrice, setMinPrice] = useState(100);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [shopFiles, setShopFiles] = useState<{ name: string; productCount: number; img: string; }[]>([])
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [filteredProducts, setFilteredProducts] = useState(productData);
    const [showFilterDrawer, setShowFilterDrawer] = useState(false);

    const { width, height } = useDeviceSize();


    const minLimit = 0;
    const maxLimit = 1500;
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("category");

    const menuItems = [
        { name: "Armchairs", productCount: 8, img: 'https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/armchairs-category-hero-image.webp', },
        { name: "Chairs", productCount: 11, img: "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/chairs-category-hero-image.webp" },
        { name: "Storage", productCount: 5, img: "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/storage-category-hero-image.webp" },
        { name: "Sofas", productCount: 8, img: "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/sofas-category-hero-image.webp" },
        { name: "Decor", productCount: 7, img: "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/decor-category-hero-image.webp" },
        { name: "Tables", productCount: 24, img: "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/tables-category-hero-image.webp" },
        { name: "Beds", productCount: 7, img: "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/beds-category-hero-image.webp" },

    ];

    const brands = [
        { name: "Asgardia", img: "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/06/brand-asgardia.svg" },
        { name: "BrandB", img: "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/06/brand-asgardia.svg" },
        { name: "BrandC", img: "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/06/brand-asgardia.svg" }
    ];

    const colors = [
        { name: "Beige", hex: "#F5F5DC", count: 2 },
        { name: "Blue", hex: "#0000FF", count: 4 },
        { name: "Black", hex: "#000000", count: 3 }
    ];
    const categories = [
        { name: "Storage", available: 2, id: '1' },
        { name: "Beds", available: 1, id: '2' },
        { name: "Tables", available: 4, id: '3' },
        { name: "Lamps", available: 3, id: '4' },
        { name: "Cabinets", available: 2, id: '5' }
    ];



    useEffect(() => {
        const filterImage = menuItems.filter(item => item.name.toLowerCase() == category);
        setShopFiles(filterImage)

    }, [category]);

    useEffect(() => {
        const filtered = productData.filter(product => {
            return (
                (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
                (selectedColors.length === 0 || selectedColors.includes(product.color)) &&
                (selectedMaterials.length === 0 || selectedMaterials.includes(product.material)) &&
                (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
                product.currentprice >= minPrice &&
                product.currentprice <= maxPrice
            );
        });

        setFilteredProducts(filtered);
    }, [selectedCategories, selectedColors, selectedMaterials, selectedBrands, minPrice, maxPrice]);


    const handleClick = (index: number) => {
        navigate(`/${index}`);
    };

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value <= maxPrice - 50) setMinPrice(value); // Ensures min < max
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value >= minPrice + 50) setMaxPrice(value); // Ensures max > min
    };

    const Breadcrumb = ({ category }) => {
        const navigate = useNavigate();

        return (
            <p>
                <span onClick={() => navigate("/")} >
                    Home
                </span>
                <div>{">"}</div>
                <span onClick={() => navigate("/shop")} >
                    Shop
                </span>
                <div>{">"}</div>
                {category}
            </p>
        );
    };

    const navigateTo = (path: string, params = {}) => {
        const queryString = new URLSearchParams(params).toString();
        navigate(`${path}${queryString ? `?${queryString}` : ""}`);
    };

    const toggleCategory = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
        );
    };

    const toggleMaterial = (material: string) => {
        setSelectedMaterials(prev =>
            prev.includes(material) ? prev.filter(m => m !== material) : [...prev, material]
        );
    };

    const toggleBrand = (brand: string) => {
        setSelectedBrands(prev =>
            prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
        );
    };

    const toggleColor = (color: string) => {
        setSelectedColors(prev =>
            prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
        );
    };

    const toggleFilterDrawer = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowFilterDrawer(prev => !prev)
    }


    return (
        <>
            <section id='ShopProduct'>
                <div className="mainContainer">
                    <div className="headingContainer" >
                        <h5>{shopFiles ? shopFiles[0]?.name : 'Shop'}</h5>
                        <Breadcrumb category={category} />
                        <img src={shopFiles[0]?.img ? shopFiles[0]?.img : "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/shop-hero-image.webp"} alt="" />
                    </div>

                    <div className="filterContainer">
                        {menuItems.slice(0, 6).map((val, index) => {
                            return (
                                <div onClick={() => navigateTo("/shop/filter", { category: val.name?.toLowerCase() })} key={index} className="filter">
                                    <div className="imgContainer">
                                        <img src={val.img} alt="" />
                                    </div>
                                    <div className="textContainer">
                                        <h6>{val.name}</h6>
                                        <p>{val.productCount} Products</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>


                    <div className="subMainContainer">
                        
                        <div className={`leftContainer ${showFilterDrawer ? "showFilterDrawer" : "hideFilterOnSmallScreen"}`}>

                            <div className="filterHeading">
                                <p>Available Filters</p>
                                <a onClick={toggleFilterDrawer}><IoMdClose /></a>

                            </div>

                            <div className="filterPriceContainer">
                                <p>Filter by price</p>

                                <Slider
                                    range
                                    min={0}
                                    max={1500}
                                    value={[minPrice, maxPrice]}
                                    onChange={(value) => {
                                        setMinPrice(value[0]);
                                        setMaxPrice(value[1]);
                                    }}
                                    railStyle={{ backgroundColor: '#f0f0f0', height: '2px' }}
                                    trackStyle={{ backgroundColor: '#152520', height: '2px' }}
                                    className="slider"
                                />

                                <label>Price: <span>${minPrice} - ${maxPrice}</span></label>
                            </div>

                            <div className="filterByCategory">
                                <p>Filter by category</p>
                                <div className="categoryParentContainer">
                                    {categories.map((val, index) => {
                                        return (
                                            <div key={index} className='categorySubParentContainer'>
                                                <div className="categoryContainer">
                                                    <input type="checkbox" onChange={() => toggleCategory(val.name)} name="category" className='category' id="category" />
                                                    <p>{val.name}</p>
                                                </div>
                                                <div className="count">
                                                    <p>{val.available}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="filterByColor">
                                <p>Filter by color</p>
                                <div className="colorContainerParent">
                                    {colors.map((color, index) => (
                                        <div
                                            key={index}
                                            className={`colorContainerSubParent ${selectedColors.includes(color.name) ? "selected" : ""}`}
                                            onClick={() => toggleColor(color.name)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="colorContainer">
                                                <div className="color">
                                                    <div
                                                        className="colorCircle"
                                                        style={{ backgroundColor: color.hex, border: selectedColors.includes(color.name) ? "2px solid black" : "none" }}
                                                    ></div>
                                                </div>
                                                <p>{color.name}</p>
                                            </div>
                                            <div className="count">
                                                <p>{color.count}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="filterByMaterial">
                                <p>Filter by material</p>
                                <div className="materialParentContainer">
                                    {Array.from({ length: 2 }).map((el, index) => {
                                        return (
                                            <div className='materialSubParentContainer'>
                                                <div className="materialContainer">
                                                    <input type="checkbox" onChange={() => toggleMaterial('Fabric')} name="material" className='material' id="material" />
                                                    <p>Fabric</p>
                                                </div>
                                                <div className="count">
                                                    <p>2</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="filterByBrand">
                                <p>Filter by brand</p>
                                <div className="materialContainer">
                                    {brands.map((brand, index) => (
                                        <div
                                            key={index}
                                            className={`materialContainer ${selectedBrands.includes(brand.name) ? "selected" : ""}`}
                                            onClick={() => toggleBrand(brand.name)}
                                            style={{ cursor: "pointer", border: selectedBrands.includes(brand.name) ? "2px solid black" : "none" }}
                                        >
                                            <img src={brand.img} alt={brand.name} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bestSellingBrands">
                                <p>Best selling products</p>
                                <div className="bestSellingBrandsContainer">
                                    {Array.from({ length: 6 }).map((el, index) => {
                                        return (
                                            <div className="bestSellingProducts">
                                                <img src="https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/product-45.webp" alt="" />
                                                <div className="details">
                                                    <h6>Modern Sofa</h6>
                                                    <p>$1,200.00 <span>$1,350.00</span></p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>


                        </div>
                        <div className="rightContainer">
                            <div className="subFilterContainer">
                                <div className="topContainer">
                                    <div className="leftFilter">
                                        <div onClick={toggleFilterDrawer} className="leftFilterSubContainer">
                                            <RxHamburgerMenu />
                                            <p>Filter</p>
                                        </div>
                                        <p>Showing all 4 results</p>
                                    </div>
                                    <div className="rightFilter">
                                        <select name="orderby" className="orderby" aria-label="Shop order">
                                            <option value="menu_order" >Default sorting</option>
                                            <option value="popularity">Sort by popularity</option>
                                            <option value="rating">Sort by average rating</option>
                                            <option value="date">Sort by latest</option>
                                            <option value="price">Sort by price: low to high</option>
                                            <option value="price-desc">Sort by price: high to low</option>
                                        </select>
                                        <FaAngleDown className="custom-arrow" />
                                    </div>
                                </div>
                                <div className="bottomContainer">
                                    <p className='active-filter'>Active Filters</p>
                                    <div className="activeFiltersContainer">
                                        <div className="activeFilters">
                                            <CiCircleRemove />
                                            <p>Reset Filter</p>
                                        </div>
                                        <div className="activeFilters">
                                            <CiCircleRemove />
                                            <p>Fabric</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="itemsContainer">
                                {filteredProducts.map((el, index) => {
                                    return (
                                        <a onClick={() => handleClick(el.id)} className="item" key={el.id}>

                                            <div className="imageContainer">
                                                <img src={el.productImage} alt="" />
                                                <div className="filtersContainer">
                                                    <a href=""><CiHeart /></a>
                                                    <a href=""><ImLoop /></a>
                                                    <a href=""><IoMdCart /></a>
                                                </div>
                                                {
                                                    el.isSale &&
                                                    <span >Sale</span>
                                                }


                                            </div>
                                            <div className="detailsContainer">

                                                <div className="detailsHeadingContainer">
                                                    <h6>{el.name}</h6>
                                                    <p>{el.category}</p>

                                                </div>
                                                <div className="detailsBtnsContainer">
                                                    <a href="#">$ {el.currentprice}</a>
                                                    <a href="#">Add to cart</a>
                                                </div>


                                            </div>
                                        </a>
                                    )
                                })}


                            </div>
                        </div>
                    </div>




                </div>
            </section>
            <DetailsComponent />
        </>
    )
}

export default ShopProducts