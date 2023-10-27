import React, { useEffect,useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { BiGitCompare } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
const SignleProduct = () => {
  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  
  const { id } = useParams(); // Lấy ID sản phẩm từ URL bằng 'useParams'
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
        setError(error);
        setLoading(false);
      });
  }, [id]); // Sử dụng 'id' thay vì 'match.params.id'
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: product ? product.image : "", // Kiểm tra product trước khi sử dụng
  };
  // Kiểm tra trạng thái tải dữ liệu
if (loading) {
  return <div>Loading...</div>;
}

// Xử lý khi có lỗi
if (error) {
  return <div>Có lỗi xảy ra. Vui lòng thử lại sau.</div>;
}

  

  
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div className="">
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="orther-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src={product.image}
                    className="img-fluid"
                    alt=""
                  ></img>
                </div>
                <div>
                  <img
                    src={product.image}
                    className="img-fluid"
                    alt=""
                  ></img>
                </div>
                <div>
                  <img
                    src={product.image}
                    className="img-fluid"
                    alt=""
                  ></img>
                </div>
                <div>
                  <img
                    src={product.image}
                    className="img-fluid"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
            <div className="col-6">
              
              <div className="main-product-details">
              {loading ? (
        <p>Đang tải...</p>
      ) : product ? (
                <><div className="border-bottom">
                      <h3 className="title">
                        {product.productTitle}
                      </h3>
                    </div><div className="border-bottom py-3">
                        <p className="price">$ {product.price}</p>
                        <div className="d-flex align-items-center gap-10">
                          <ReactStars
                            count={5}
                            size={24}
                            value={product.rating}
                            edit={false}
                            activeColor="#ffd700" />
                          <p className="mb-0 t-review">( 2 Reviews )</p>
                        </div>
                        <a className="review-btn" href="#review">
                          Write a Review
                        </a>
                      </div><div className="py-3">
                        <div className="d-flex gap-10 align-items-center my-2">
                          <h3 className="product-heading">Type :</h3>
                          <p className="product-data">Phone</p>
                        </div>
                        <div className="d-flex gap-10 align-items-center my-2">
                          <h3 className="product-heading">Brand :</h3>
                          <p className="product-data">{product.brand}</p>
                        </div>
                        <div className="d-flex gap-10 align-items-center my-2">
                          <h3 className="product-heading">Categories :</h3>
                          <p className="product-data">
                            smart phone, headphones, mini speaker, our stone
                          </p>
                        </div>
                        <div className="d-flex gap-10 align-items-center my-2">
                          <h3 className="product-heading">Tags :</h3>
                          <p className="product-data">mobile laptop apple phone</p>
                        </div>
                        <div className="d-flex gap-10 align-items-center my-2">
                          <h3 className="product-heading">SKU :</h3>
                          <p className="product-data">SKU027</p>
                        </div>
                        <div className="d-flex gap-10 align-items-center my-2">
                          <h3 className="product-heading">Availability :</h3>
                          <p className="product-data">541 in Stock</p>
                        </div>
                        <div className="d-flex gap-10 flex-column mt-2 mb-3">
                          <h3 className="product-heading">Size :</h3>
                          <div className="d-flex flex-wrap gap-15">
                            <span className="badge border border-1 bg-white text-dark border-secondary">
                              S
                            </span>
                            <span className="badge border border-1 bg-white text-dark border-secondary">
                              M
                            </span>
                            <span className="badge border border-1 bg-white text-dark border-secondary">
                              L
                            </span>
                            <span className="badge border border-1 bg-white text-dark border-secondary">
                              XL
                            </span>
                          </div>
                        </div>
                        <div className="d-flex gap-10 flex-column mt-2 mb-3">
                          <h3 className="product-heading">Color :</h3>
                          <Color />
                        </div>
                        <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                          <h3 className="product-heading">Quantity :</h3>
                          <div className="">
                            <input
                              type="number"
                              name=""
                              min={1}
                              max={10}
                              className="form-control w-100"
                              style={{ with: "70px" }}
                              id="" />
                          </div>
                          <div className="d-flex align-items-center gap-30 ms-5">
                            <button className="button boder-0">Add to Cart</button>
                            <button to="/signup" className="button signup">
                              Buy It Now
                            </button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-15">
                          <div><a href=""><BiGitCompare className="fs-5 me-2" />Add to Compare</a></div>
                          <div><a href=""><AiOutlineHeart className="fs-5 me-2" />Add to WishList</a></div>
                        </div>
                        <div className="d-flex gap-10 flex-column my-3">
                          <h3 className="product-heading">Shipping & Returns :</h3>
                          <p className="product-data">
                            Free shipping and returns available on all order! <br />
                            We ship all US domestic orders within{" "}
                            <b>5-10 business days!</b>
                          </p>
                        </div>
                        <div className="d-flex gap-10 align-items-center my-3">
                          <h3 className="product-heading">Product Link:</h3>
                          <a href="javascript:void(0);" onClick={() => { copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"); } }>
                            Copy Product Link
                          </a>
                        </div>
                      </div></>
                ) : (
                  <p>Không tìm thấy sản phẩm</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Review</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                    <a href="">Write a Review</a>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write A Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        className="w-100 form-control"
                        rows="6"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button boder-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Dũng Cô Đơn 69</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor, sit amet consectetur adipisicing efit.
                      Tenetur nisi similique illum aut perferendis voluptas,
                      quisquam obcaecati qui nobis officia. Voluptatibus in
                      harum delenitilabore maxime officia esse eos? Repallat?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SignleProduct;
