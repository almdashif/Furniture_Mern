import Slider from 'rc-slider/lib/Slider';
import React, { useContext, useEffect, useState, useMemo } from 'react'; 
import { CiCircleRemove, CiHeart } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { ImLoop } from "react-icons/im";
import { IoMdCart, IoMdClose } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom';
import { productData } from '../../data/productData.js';
import '../ShopProducts/shopProducts.scss';
import "rc-slider/assets/index.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDeviceSize } from '../../hooks/useDeviceSize.ts';
import DetailsComponent from '../DetailsComponent/DetailsComponent.tsx';
import { GlobalContext } from '../../App.jsx';

const ShopProducts = () => {
    const [minPrice, setMinPrice] = useState(100);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [shopFiles, setShopFiles] = useState<{ name: string; productCount: number; img: string; }[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [filteredProducts, setFilteredProducts] = useState(productData);
    const [showFilterDrawer, setShowFilterDrawer] = useState(false);
    const [sortOption, setSortOption] = useState("menu_order");

    const context = useContext(GlobalContext);
    const { state, dispatch } = context;

    const { width, height } = useDeviceSize(); 

    const minLimit = 0;
    const maxLimit = 1500;
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const categoryFromUrl = searchParams.get("category");

    const menuItems = [
        {
            name: "Armchairs",
            productCount: 8,
            img: 'https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/armchairs-category-hero-image.webp',
        },
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

    // --- Dynamic filter options ---
    const categories = useMemo(() => {
        const counts: { [key: string]: number } = {};
        productData.forEach(product => {
            counts[product.category] = (counts[product.category] || 0) + 1;
        });
        return Object.keys(counts).map(name => ({ name, available: counts[name] }));
    }, [productData]);

    const colors = useMemo(() => {
        const counts: { [key: string]: { hex: string, count: number } } = {};
        productData.forEach(product => {
            if (product.color) {
                if (!counts[product.color]) {
                    counts[product.color] = { hex: product.colorHex || '#CCCCCC', count: 0 };
                }
                counts[product.color].count++;
            }
        });
        return Object.keys(counts).map(name => ({ name, hex: counts[name].hex, count: counts[name].count }));
    }, [productData]);

    const materials = useMemo(() => {
        const counts: { [key: string]: number } = {};
        productData.forEach(product => {
            if (product.material) {
                counts[product.material] = (counts[product.material] || 0) + 1;
            }
        });
        return Object.keys(counts).map(name => ({ name, available: counts[name] }));
    }, [productData]);
 


    useEffect(() => {
        const filterImage = menuItems.filter(item => item.name.toLowerCase() === categoryFromUrl);
        setShopFiles(filterImage);

    
        if (categoryFromUrl && !selectedCategories.includes(categoryFromUrl)) {
            setSelectedCategories(prev => [...prev, categoryFromUrl]);
        }

    }, [categoryFromUrl]);

    useEffect(() => {
        let currentFiltered = productData;

      
        if (selectedCategories.length > 0) {
            currentFiltered = currentFiltered.filter(product =>
                selectedCategories.includes(product.category)
            );
        }

 
        if (selectedColors.length > 0) {
            currentFiltered = currentFiltered.filter(product =>
                selectedColors.includes(product.color)
            );
        }

  
        if (selectedMaterials.length > 0) {
            currentFiltered = currentFiltered.filter(product =>
                selectedMaterials.includes(product.material)
            );
        }

     
        if (selectedBrands.length > 0) {
            currentFiltered = currentFiltered.filter(product =>
                selectedBrands.includes(product.brand)
            );
        }

       
        currentFiltered = currentFiltered.filter(product =>
            product.currentprice >= minPrice && product.currentprice <= maxPrice
        );

   
        const sortedProducts = [...currentFiltered].sort((a, b) => {
            switch (sortOption) {
                case "popularity":
                    // Assuming productData has a 'popularity' property
                    return (b.popularity || 0) - (a.popularity || 0);
                case "rating":
                  
                    return (b.rating || 0) - (a.rating || 0);
                case "date":
                   
                    return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
                case "price":
                    return a.currentprice - b.currentprice;
                case "price-desc":
                    return b.currentprice - a.currentprice;
                case "menu_order":
                default:
                    return 0; 
            }
        });

        setFilteredProducts(sortedProducts);
    }, [selectedCategories, selectedColors, selectedMaterials, selectedBrands, minPrice, maxPrice, sortOption, productData]);


    const handleClick = (id: number) => { 
        navigate(`/${id}`);
    };

    const Breadcrumb = ({ category }: { category: string | null }) => {
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
                {category && (
                    <>
                        <div>{">"}</div>
                        <span>{category}</span>
                    </>
                )}
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
        setShowFilterDrawer(prev => !prev);
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(e.target.value);
    };

    const removeFilter = (type: string, value: string) => {
        switch (type) {
            case 'category':
                setSelectedCategories(prev => prev.filter(item => item !== value));
                break;
            case 'color':
                setSelectedColors(prev => prev.filter(item => item !== value));
                break;
            case 'material':
                setSelectedMaterials(prev => prev.filter(item => item !== value));
                break;
            case 'brand':
                setSelectedBrands(prev => prev.filter(item => item !== value));
                break;
            case 'price':
                setMinPrice(minLimit);
                setMaxPrice(maxLimit);
                break;
            default:
                break;
        }
    };

    const resetAllFilters = () => {
        setSelectedCategories([]);
        setSelectedColors([]);
        setSelectedMaterials([]);
        setSelectedBrands([]);
        setMinPrice(minLimit);
        setMaxPrice(maxLimit);
        setSortOption("menu_order");
    };


    const addToCartFn = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: any) => {
        e.preventDefault();
        console.log({ data }, state.cart, 'state.cart')

        const existingProduct = state.cart.find((item: any) => item.id === data.id);

        if (existingProduct) {
            dispatch({
                type: "cart",
                payload: state.cart.map((item: any) =>
                    item.id === data.id
                        ? { ...item, cartQuantity: item.cartQuantity + 1 }
                        : item
                ),
            });
        } else {
            dispatch({
                type: "cart",
                payload: [...state.cart, { ...data, cartQuantity: 1 }],
            });
        }
    };

    const addToWishlistFn = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: any) => {
        e.preventDefault();
        dispatch({
            type: "wishlist",
            payload: [...state.wishlist, data],
        });
    };


    const getActiveFilters = () => {
        const activeFilters: { type: string, value: string }[] = [];
        selectedCategories.forEach(cat => activeFilters.push({ type: 'category', value: cat }));
        selectedColors.forEach(color => activeFilters.push({ type: 'color', value: color }));
        selectedMaterials.forEach(material => activeFilters.push({ type: 'material', value: material }));
        selectedBrands.forEach(brand => activeFilters.push({ type: 'brand', value: brand }));
        if (minPrice !== minLimit || maxPrice !== maxLimit) {
            activeFilters.push({ type: 'price', value: `$${minPrice} - $${maxPrice}` });
        }
        return activeFilters;
    };


    return (
        <>
            <section id='ShopProduct'>
                <div className="mainContainer">
                    <div className="headingContainer" >
                        <h5>{shopFiles.length > 0 ? shopFiles[0]?.name : 'Shop'}</h5>
                        <Breadcrumb category={categoryFromUrl} />
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
                        {/* Filter Drawer */}
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
                                    onChange={(value: number[]) => { 
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
                                                    <input
                                                        type="checkbox"
                                                        onChange={() => toggleCategory(val.name)}
                                                        name="category"
                                                        className='category'
                                                        id={`category-${val.name}`} 
                                                        checked={selectedCategories.includes(val.name)} 
                                                    />
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
                                    {materials.map((val, index) => {
                                        return (
                                            <div key={index} className='materialSubParentContainer'>
                                                <div className="materialContainer">
                                                    <input
                                                        type="checkbox"
                                                        onChange={() => toggleMaterial(val.name)}
                                                        name="material"
                                                        className='material'
                                                        id={`material-${val.name}`}
                                                        checked={selectedMaterials.includes(val.name)} 
                                                    />
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

                            <div className="filterByBrand">
                                <p>Filter by brand</p>
                                <div className="brandContainer">
                                    {brands.map((brand, index) => (
                                        <div
                                            key={index}
                                            className={`brandItem ${selectedBrands.includes(brand.name) ? "selected" : ""}`}
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
                                            <div className="bestSellingProducts" key={index}>
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

                        {/* Overlay for filter drawer */}
                        {showFilterDrawer && (
                            <div className="overlay" onClick={toggleFilterDrawer}></div>
                        )}

                        <div className="rightContainer">
                            <div className="subFilterContainer">
                                <div className="topContainer">
                                    <div className="leftFilter">
                                        <div onClick={toggleFilterDrawer} className="leftFilterSubContainer">
                                            <RxHamburgerMenu />
                                            <p>Filter</p>
                                        </div>
                                        <p>Showing all {filteredProducts.length || 0} results</p>
                                    </div>
                                    <div className="rightFilter">
                                        <select
                                            name="orderby"
                                            className="orderby"
                                            aria-label="Shop order"
                                            onChange={handleSortChange}
                                            value={sortOption}
                                        >
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
                                        {getActiveFilters().length > 0 && (
                                            <div className="activeFilters" onClick={resetAllFilters} style={{ cursor: 'pointer' }}>
                                                <CiCircleRemove />
                                                <p>Reset All</p>
                                            </div>
                                        )}

                                        {getActiveFilters().map((filter, index) => (
                                            filter.type !== 'price' ? ( 
                                                <div key={index} className="activeFilters" onClick={() => removeFilter(filter.type, filter.value)} style={{ cursor: 'pointer' }}>
                                                    <CiCircleRemove />
                                                    <p>{filter.value}</p>
                                                </div>
                                            ) : (
                                                <div key={index} className="activeFilters" onClick={() => removeFilter(filter.type, filter.value)} style={{ cursor: 'pointer' }}>
                                                    <CiCircleRemove />
                                                    <p>{filter.value}</p>
                                                </div>
                                            )
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="itemsContainer">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((el, index) => {
                                        return (
                                            <div className="item" key={el.id}>
                                                <div onClick={() => handleClick(el.id)} className="imageContainer">
                                                    <img src={el.productImage} alt={el.name} />
                                                    <div className="filtersContainer">
                                                        <a href="#" onClick={e => { e.preventDefault(); e.stopPropagation(); addToWishlistFn(e, el); }}><CiHeart /></a>
                                                        <a href="#"><ImLoop /></a>
                                                        <a href="#" onClick={e => { e.preventDefault(); e.stopPropagation(); addToCartFn(e, el); }}><IoMdCart /></a>
                                                    </div>
                                                    {el.isSale && <span>Sale</span>}
                                                </div>
                                                <div className="detailsContainer">
                                                    <div className="detailsHeadingContainer">
                                                        <h6>{el.name}</h6>
                                                        <p>{el.category}</p>
                                                    </div>
                                                    <div className="detailsBtnsContainer">
                                                        <a href="#">$ {el.currentprice}</a>
                                                        <a href="#" onClick={e => { e.preventDefault(); e.stopPropagation(); addToCartFn(e, el); }}>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <p className="no-products-found">No products found matching your filters.</p>
                                )}
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <DetailsComponent />
        </>
    );
};

export default ShopProducts;