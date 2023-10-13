import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
    <div className={` ${location.pathname == "/ourStone" ? `gr-${grid}` : "col-3"} `}
    >
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link><img src="images/wish.svg" alt="wishlist"></img></Link>
        </div>
        <div className="product-image">
          <img src="images/ip15-pink.webp" className="img-fluid" alt="productImage" />
          <img src="images/ip15-pink-f.webp" className="img-fluid" alt="productImage" />
        </div>
        <div className="product-details">
          <h6 className="brand">Apple</h6>
          <h5 className="product-title">
          iPhone 15 128GB | Chính hãng VN/A
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                    <img src="images/prodcompare.svg" alt="conpare" />
                </Link>
                <Link>
                    <img src="images/view.svg" alt="view" />
                </Link>
                <Link>
                    <img src="images/add-cart.svg" alt="addcart" />
                </Link>
            </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname == "/ourStone" ? `gr-${grid}` : "col-3"} `}
    >
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link><img src="images/wish.svg" alt="wishlist"></img></Link>
        </div>
        <div className="product-image">
          <img src="images/s23-ultra.webp" className="img-fluid" alt="productImage" />
          <img src="images/s23-ultra-f.webp" className="img-fluid" alt="productImage" />
        </div>
        <div className="product-details">
          <h6 className="brand">Samsung</h6>
          <h5 className="product-title">
          Samsung Galaxy S23 Ultra 256GB
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">$990.00</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                    <img src="images/prodcompare.svg" alt="conpare" />
                </Link>
                <Link>
                    <img src="images/view.svg" alt="view" />
                </Link>
                <Link>
                    <img src="images/add-cart.svg" alt="addcart" />
                </Link>
            </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname == "/ourStone" ? `gr-${grid}` : "col-3"} `}
    >
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link><img src="images/wish.svg" alt="wishlist"></img></Link>
        </div>
        <div className="product-image">
          <img src="images/xiaomi-phone.webp" className="img-fluid" alt="productImage" />
          <img src="images/xiaomi-phone-f.webp" className="img-fluid" alt="productImage" />
        </div>
        <div className="product-details">
          <h6 className="brand">Xiaomi</h6>
          <h5 className="product-title">
          Xiaomi Redmi Note 12 8GB 128GB
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                    <img src="images/prodcompare.svg" alt="conpare" />
                </Link>
                <Link>
                    <img src="images/view.svg" alt="view" />
                </Link>
                <Link>
                    <img src="images/add-cart.svg" alt="addcart" />
                </Link>
            </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname == "/ourStone" ? `gr-${grid}` : "col-3"} `}
    >
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link><img src="images/wish.svg" alt="wishlist"></img></Link>
        </div>
        <div className="product-image">
          <img src="images/oppo.webp" className="img-fluid" alt="productImage" />
          <img src="images/oppo-f.webp" className="img-fluid" alt="productImage" />
        </div>
        <div className="product-details">
          <h6 className="brand">Oppo</h6>
          <h5 className="product-title">
          OPPO Reno10 5G 8GB 256GB
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                    <img src="images/prodcompare.svg" alt="conpare" />
                </Link>
                <Link>
                    <img src="images/view.svg" alt="view" />
                </Link>
                <Link>
                    <img src="images/add-cart.svg" alt="addcart" />
                </Link>
            </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname == "/ourStone" ? `gr-${grid}` : "col-3"} `}
    >
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link><img src="images/wish.svg" alt="wishlist"></img></Link>
        </div>
        <div className="product-image">
          <img src="images/vivo.webp" className="img-fluid" alt="productImage" />
          <img src="images/vivo-f.webp" className="img-fluid" alt="productImage" />
        </div>
        <div className="product-details">
          <h6 className="brand">Vivo</h6>
          <h5 className="product-title">
          Vivo V27e 8GB 256GB
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                    <img src="images/prodcompare.svg" alt="conpare" />
                </Link>
                <Link>
                    <img src="images/view.svg" alt="view" />
                </Link>
                <Link>
                    <img src="images/add-cart.svg" alt="addcart" />
                </Link>
            </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname == "/ourStone" ? `gr-${grid}` : "col-3"} `}
    >
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link><img src="images/wish.svg" alt="wishlist"></img></Link>
        </div>
        <div className="product-image">
          <img src="images/realme.webp" className="img-fluid" alt="productImage" />
          <img src="images/realme-f.webp" className="img-fluid" alt="productImage" />
        </div>
        <div className="product-details">
          <h6 className="brand">Realme</h6>
          <h5 className="product-title">
          realme 10 8GB 256GB
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                    <img src="images/prodcompare.svg" alt="conpare" />
                </Link>
                <Link>
                    <img src="images/view.svg" alt="view" />
                </Link>
                <Link>
                    <img src="images/add-cart.svg" alt="addcart" />
                </Link>
            </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname == "/ourStone" ? `gr-${grid}` : "col-3"} `}
    >
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link><img src="images/wish.svg" alt="wishlist"></img></Link>
        </div>
        <div className="product-image">
          <img src="images/nokia.webp" className="img-fluid" alt="productImage" />
          <img src="images/nokia-f.webp" className="img-fluid" alt="productImage" />
        </div>
        <div className="product-details">
          <h6 className="brand">Nokia</h6>
          <h5 className="product-title">
          Nokia C32 4GB 128GB
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                    <img src="images/prodcompare.svg" alt="conpare" />
                </Link>
                <Link>
                    <img src="images/view.svg" alt="view" />
                </Link>
                <Link>
                    <img src="images/add-cart.svg" alt="addcart" />
                </Link>
            </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname == "/ourStone" ? `gr-${grid}` : "col-3"} `}
    >
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link><img src="images/wish.svg" alt="wishlist"></img></Link>
        </div>
        <div className="product-image">
          <img src="images/asus.jpg" className="img-fluid" alt="productImage" />
          <img src="images/asus-f.jpg" className="img-fluid" alt="productImage" />
        </div>
        <div className="product-details">
          <h6 className="brand">Asus</h6>
          <h5 className="product-title">
          ASUS ROG Phone 7 Ultimate 16GB 512GB
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                    <img src="images/prodcompare.svg" alt="conpare" />
                </Link>
                <Link>
                    <img src="images/view.svg" alt="view" />
                </Link>
                <Link>
                    <img src="images/add-cart.svg" alt="addcart" />
                </Link>
            </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname == "/ourStone" ? `gr-${grid}` : "col-3"} `}
    >
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link><img src="images/wish.svg" alt="wishlist"></img></Link>
        </div>
        <div className="product-image">
          <img src="images/ip15-black.jpg" className="img-fluid" alt="productImage" />
          <img src="images/ip15-pink.jpg" className="img-fluid" alt="productImage" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphone bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                    <img src="images/prodcompare.svg" alt="conpare" />
                </Link>
                <Link>
                    <img src="images/view.svg" alt="view" />
                </Link>
                <Link>
                    <img src="images/add-cart.svg" alt="addcart" />
                </Link>
            </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname == "/ourStone" ? `gr-${grid}` : "col-3"} `}
    >
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link><img src="images/wish.svg" alt="wishlist"></img></Link>
        </div>
        <div className="product-image">
          <img src="images/ip15-black.jpg" className="img-fluid" alt="productImage" />
          <img src="images/ip15-pink.jpg" className="img-fluid" alt="productImage" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphone bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                    <img src="images/prodcompare.svg" alt="conpare" />
                </Link>
                <Link>
                    <img src="images/view.svg" alt="view" />
                </Link>
                <Link>
                    <img src="images/add-cart.svg" alt="addcart" />
                </Link>
            </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname == "/ourStone" ? `gr-${grid}` : "col-3"} `}
    >
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link><img src="images/wish.svg" alt="wishlist"></img></Link>
        </div>
        <div className="product-image">
          <img src="images/ip15-black.jpg" className="img-fluid" alt="productImage" />
          <img src="images/ip15-pink.jpg" className="img-fluid" alt="productImage" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphone bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                    <img src="images/prodcompare.svg" alt="conpare" />
                </Link>
                <Link>
                    <img src="images/view.svg" alt="view" />
                </Link>
                <Link>
                    <img src="images/add-cart.svg" alt="addcart" />
                </Link>
            </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname == "/ourStone" ? `gr-${grid}` : "col-3"} `}
    >
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link><img src="images/wish.svg" alt="wishlist"></img></Link>
        </div>
        <div className="product-image">
          <img src="images/ip15-black.jpg" className="img-fluid" alt="productImage" />
          <img src="images/ip15-pink.jpg" className="img-fluid" alt="productImage" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphone bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                    <img src="images/prodcompare.svg" alt="conpare" />
                </Link>
                <Link>
                    <img src="images/view.svg" alt="view" />
                </Link>
                <Link>
                    <img src="images/add-cart.svg" alt="addcart" />
                </Link>
            </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname == "/ourStone" ? `gr-${grid}` : "col-3"} `}
    >
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link><img src="images/wish.svg" alt="wishlist"></img></Link>
        </div>
        <div className="product-image">
          <img src="images/ip15-black.jpg" className="img-fluid" alt="productImage" />
          <img src="images/ip15-pink.jpg" className="img-fluid" alt="productImage" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphone bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                    <img src="images/prodcompare.svg" alt="conpare" />
                </Link>
                <Link>
                    <img src="images/view.svg" alt="view" />
                </Link>
                <Link>
                    <img src="images/add-cart.svg" alt="addcart" />
                </Link>
            </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname == "/ourStone" ? `gr-${grid}` : "col-3"} `}
    >
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link><img src="images/wish.svg" alt="wishlist"></img></Link>
        </div>
        <div className="product-image">
          <img src="images/ip15-black.jpg" className="img-fluid" alt="productImage" />
          <img src="images/ip15-pink.jpg" className="img-fluid" alt="productImage" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphone bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                    <img src="images/prodcompare.svg" alt="conpare" />
                </Link>
                <Link>
                    <img src="images/view.svg" alt="view" />
                </Link>
                <Link>
                    <img src="images/add-cart.svg" alt="addcart" />
                </Link>
            </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname == "/ourStone" ? `gr-${grid}` : "col-3"} `}
    >
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link><img src="images/wish.svg" alt="wishlist"></img></Link>
        </div>
        <div className="product-image">
          <img src="images/ip15-black.jpg" className="img-fluid" alt="productImage" />
          <img src="images/ip15-pink.jpg" className="img-fluid" alt="productImage" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphone bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                    <img src="images/prodcompare.svg" alt="conpare" />
                </Link>
                <Link>
                    <img src="images/view.svg" alt="view" />
                </Link>
                <Link>
                    <img src="images/add-cart.svg" alt="addcart" />
                </Link>
            </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname == "/ourStone" ? `gr-${grid}` : "col-3"} `}
    >
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link><img src="images/wish.svg" alt="wishlist"></img></Link>
        </div>
        <div className="product-image">
          <img src="images/ip15-black.jpg" className="img-fluid" alt="productImage" />
          <img src="images/ip15-pink.jpg" className="img-fluid" alt="productImage" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphone bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                    <img src="images/prodcompare.svg" alt="conpare" />
                </Link>
                <Link>
                    <img src="images/view.svg" alt="view" />
                </Link>
                <Link>
                    <img src="images/add-cart.svg" alt="addcart" />
                </Link>
            </div>
        </div>
      </Link>
    </div>
    </>
  );
};

export default ProductCard;
