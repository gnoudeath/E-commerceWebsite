import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg"
import wish from "../images/wish.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
// import wishlist from "../images/wishlist.svg";
import ip15pink from "../images/ip15-pink.webp";
import ip15pinkf from "../images/ip15-pink-f.webp";
import s23 from "../images/s23-ultra.webp";
import s23f from "../images/s23-ultra-f.webp";
import xiaomi from "../images/s23-ultra.webp";
import xiaomif from "../images/s23-ultra-f.webp";
import oppo from "../images/oppo.webp";
import oppof from "../images/oppo-f.webp";
import vivo from "../images/vivo.webp";
import vivof from "../images/vivo-f.webp";
import real from "../images/realme.webp";
import realf from "../images/realme-f.webp";
const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link to=':id' className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="wishlist"></img>
            </Link>
          </div>
          <div className="product-image">
            <img
              src={ip15pink}
              className="img-fluid"
              alt="productImage"
            />
            <img
              src={ip15pinkf}
              className="img-fluid"
              alt="productImage"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Apple</h6>
            <h5 className="product-title">iPhone 15 128GB | Chính hãng VN/A</h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              iPhone 15 128GB is equipped with a 6.1-inch Dynamic Island screen
              with Super Retina XDR display technology for a superior visual
              experience. The phone has an anti-fouling glass bottom surface and
              5 color versions to choose from: Pink, Yellow, Green, Blue and
              black.
            </p>
            <p className="price">$899.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={prodcompare} alt="conpare" />
              </Link>
              <Link>
                <img src={view} alt="view" />
              </Link>
              <Link>
                <img src={addcart} alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link to=':id' className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="wishlist"></img>
            </Link>
          </div>
          <div className="product-image">
            <img
              src={s23}
              className="img-fluid"
              alt="productImage"
            />
            <img
              src={s23f}
              className="img-fluid"
              alt="productImage"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Samsung</h6>
            <h5 className="product-title">Samsung Galaxy S23 Ultra 256GB</h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              After the successful landing of Samsung Galaxy S22, the next
              Flagship phones - Samsung Galaxy S23 Ultra phones are highly
              sought after by Samfans. Elegant and luxurious design combined
              with breakthroughs in technology has created Samsung's flagship
              flagship product.
            </p>
            <p className="price">$990.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={prodcompare} alt="conpare" />
              </Link>
              <Link>
                <img src={view} alt="view" />
              </Link>
              <Link>
                <img src={addcart} alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link to=':id' className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="wishlist"></img>
            </Link>
          </div>
          <div className="product-image">
            <img
              src={xiaomi}
              className="img-fluid"
              alt="productImage"
            />
            <img
              src={xiaomif}
              className="img-fluid"
              alt="productImage"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Xiaomi</h6>
            <h5 className="product-title">Xiaomi Redmi Note 12 8GB 128GB</h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Xiaomi Redmi Note 12 8GB 128GB shines with an extremely trendy
              square border appearance and powerful performance thanks to the
              impressive Snapdragon 685 chip. The image display quality of the
              Redmi Note 12 Gold is also quite sharp through the modern 120Hz
              AMOLED panel. Not only that, the device also owns a cluster of 3
              cameras with up to 50MP clarity along with a 5000mAh battery and
              33W fast charging to help meet all user needs.
            </p>
            <p className="price">$699.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={prodcompare} alt="conpare" />
              </Link>
              <Link>
                <img src={view} alt="view" />
              </Link>
              <Link>
                <img src={addcart} alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link to=':id' className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="wishlist"></img>
            </Link>
          </div>
          <div className="product-image">
            <img
              src={oppo}
              className="img-fluid"
              alt="productImage"
            />
            <img
              src={oppof}
              className="img-fluid"
              alt="productImage"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Oppo</h6>
            <h5 className="product-title">OPPO Reno10 5G 8GB 256GB</h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              OPPO Reno 10 phone possesses extremely powerful performance when
              equipped with MediaTek Dimensity 7050 chipset. The device's image
              quality is sharp and smooth thanks to its modern 3D AMOLED panel
              with FHD + 2412 resolution. × 1080 pixels with 120Hz refresh rate.
              Besides, Reno 10 also possesses a few other advantages such as
              5000mAh battery capacity with SUPERVOOC 67W fast charging and
              sharp 64MP camera cluster to help enhance the user experience.
            </p>
            <p className="price">$399.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={prodcompare} alt="conpare" />
              </Link>
              <Link>
                <img src={view} alt="view" />
              </Link>
              <Link>
                <img src={addcart} alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link to=':id' className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="wishlist"></img>
            </Link>
          </div>
          <div className="product-image">
            <img
              src={vivo}
              className="img-fluid"
              alt="productImage"
            />
            <img
              src={vivof}
              className="img-fluid"
              alt="productImage"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Vivo</h6>
            <h5 className="product-title">Vivo V27e 8GB 256GB</h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Vivo V27e owns MediaTek Helio G99 chip, standard 8GB RAM and 128GB
              ROM, users can also choose an upgraded configuration version with
              12GB RAM and 256GB memory. The phone has a screen size of 6.62
              inches, AMOLED panel. Besides, Vivo V27e is also equipped with 3
              cameras, 64MP main lens, 4600mAh battery capacity, perforated
              screen design containing a 32MP selfie camera.
            </p>
            <p className="price">$799.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={prodcompare} alt="conpare" />
              </Link>
              <Link>
                <img src={view} alt="view" />
              </Link>
              <Link>
                <img src={addcart} alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link to=':id' className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="wishlist"></img>
            </Link>
          </div>
          <div className="product-image">
            <img
              src={real}
              className="img-fluid"
              alt="productImage"
            />
            <img
              src={realf}
              className="img-fluid"
              alt="productImage"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Realme</h6>
            <h5 className="product-title">realme 10 8GB 256GB</h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Realme 10 is the next new product that realme possesses a
              luxurious design and powerful configuration. Specifically, the
              realme 10 phone is equipped with a 6.4-inch screen with Super
              AMOLED panel, 90Hz refresh rate, providing vivid display and
              smooth movement. The phone configuration is also impressive with
              Helio G99 chip, large RAM memory and 5000mAh battery for long-term
              use.
            </p>
            <p className="price">$298.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={prodcompare} alt="conpare" />
              </Link>
              <Link>
                <img src={view} alt="view" />
              </Link>
              <Link>
                <img src={addcart} alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      
    </>
  );
};

export default ProductCard;
