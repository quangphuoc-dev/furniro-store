import React, { useEffect, useState } from "react";
import {
    Button,
    Col,
    Input,
    InputNumber,
    Pagination,
    Rate,
    Row,
    Select,
} from "antd";
import { CarOutlined, SafetyCertificateOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import {
    actFetchAllImgsProducts,
    actFetchAllProducts,
    actFetchProductById,
} from "../redux/features/productSlice";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { actAddProductToCarts } from "../redux/features/cartSlice";
import { makeRandomId } from "../utils/makeRandomId";
import {
    actAddComment,
    actFetchAllComments,
    actFetchAllCommentsCalcuStarAverage,
    setNewPage,
} from "../redux/features/commentSlice";
import { actFetchUserById } from "../redux/features/userSlice";
import dayjs from "dayjs";
import { ROUTES } from "../constants/routes";

const schema = Yup.object().shape({
    size: Yup.string().required("Please choose size"),
    color: Yup.string().required("Please choose color"),
});
const schemaBoxReview = Yup.object().shape({
    star: Yup.string().required("Please choose start"),
});

const ProductItem = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const { productInfo } = useSelector((state) => state.product);
    const { imgURL, size, color, name, brands, id } = productInfo;
    const { imgsProducts } = useSelector((state) => state.product);
    const { userInfo } = useSelector((state) => state.user);
    const { fullName, user, phoneNumber, email, avatarURL } = userInfo;
    const { comments } = useSelector((state) => state.comment);
    const { commentsCalcuStarAverage } = useSelector((state) => state.comment);
    const { pagination } = useSelector((state) => state.comment);
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    const { products } = useSelector((state) => state.product);

    const [quantityProduct, setQuantityProduct] = useState(1);
    const [isShowBoxReview, setIsShowBoxReview] = useState(false);

    const methods = useForm({
        defaultValues: {
            size: "",
            color: "",
        },
        resolver: yupResolver(schema),
    });
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = methods;

    const {
        handleSubmit: handleSubmitBoxReview,
        control: controlBoxReview,
        formState: { errors: errorsBoxReview },
    } = useForm({
        defaultValues: {
            star: "",
            comment: "",
        },
        resolver: yupResolver(schemaBoxReview),
    });

    const imgsProduct = imgsProducts.find(
        (item) => item.id === productInfo.imgProductId
    );
    const [largeImg, setLargeImg] = useState(imgsProduct?.imgProduct1);
    const handleChangeImg = (imgPath) => {
        setLargeImg(imgPath);
    };

    useEffect(() => {
        setLargeImg(imgsProduct?.imgProduct1);
    }, [imgsProduct]);

    useEffect(() => {
        dispatch(actFetchProductById(params.productId));
        dispatch(actFetchUserById(userInfo.id));
        dispatch(actFetchAllImgsProducts());

        dispatch(
            actFetchAllComments({
                _page: 1,
                _limit: pagination.limitPerPage,
                ...params,
            })
        );
        dispatch(actFetchAllCommentsCalcuStarAverage(params));
        // eslint-disable-next-line
    }, []);

    useEffect(
        () => {
            dispatch(
                actFetchAllProducts({
                    ...params,
                    _sort: "star",
                    _order: "asc",
                    brands: productInfo.brands,
                })
            );
        },
        // eslint-disable-next-line
        /*..*/
        [productInfo.brands]
    );
    // const productsListRelated = products; //viết như này sẽ lỗi, phải clone ra
    const productsClone = [...products];
    const indexThisProduct = productsClone.findIndex((product) => {
        return parseFloat(params.productId) === product.id;
    });
    productsClone.splice(indexThisProduct, 1);
    const relatedProductList = productsClone.slice(0, 4);

    const onValid = (formValueOrder) => {
        dispatch(
            actAddProductToCarts({
                ...productInfo,
                ...formValueOrder,
                quantity: quantityProduct,
                idProduct: productInfo.id,
                id: makeRandomId(),
            })
        );
    };

    const onValidBoxReview = (formValueBoxReview) => {
        const valueCommentBox = {
            ...formValueBoxReview,
            nameProduct: name,
            idProduct: id,
            brands,
            fullName,
            userName: user,
            phoneNumber,
            email,
            avatarURL,
            dateComment: dayjs(new Date()).format("DD/MM/YYYY"),
        };
        // console.log(productInfo, "productInfo");

        if (isLogin) {
            console.log(valueCommentBox, "valueCommentBox");
            dispatch(actAddComment(valueCommentBox));
        } else {
            alert("You must be logged in to comment! ");
            navigate(ROUTES.LOGIN_PAGE);
        }
        setIsShowBoxReview(!isShowBoxReview);
    };

    // để gọi ra comments đúng với sp đc comments
    // chú ý truyền vô params cái id là id của sp => fil ra
    useEffect(() => {
        dispatch(
            actFetchAllComments({
                ...params,
                _page: 1,
                _limit: pagination.limitPerPage,
                idProduct: params.productId,
            })
        );
        dispatch(
            actFetchAllCommentsCalcuStarAverage({
                ...params,
                idProduct: params.productId,
            })
        );
        // eslint-disable-next-line
    }, [params.productId]);

    let sumStar = 0;
    let result = 0;

    // Kiểm tra commentsCalcuStarAverage có tồn tại và là một mảng không
    if (
        Array.isArray(commentsCalcuStarAverage) &&
        commentsCalcuStarAverage.length > 0
    ) {
        commentsCalcuStarAverage.forEach((comment) => {
            sumStar += parseFloat(comment?.star);
        });

        // Tính trung bình và làm tròn kết quả
        result = Math.round(sumStar / commentsCalcuStarAverage.length);
    } else {
        // Xử lý trường hợp khi commentsCalcuStarAverage không tồn tại hoặc là một mảng rỗng
        console.log("Không có bình luận hoặc dữ liệu bình luận không hợp lệ.");
    }

    // useEffect(() => {
    //   const productUpdate = {
    //     ...productInfo,
    //     star: result,
    //   };
    //   dispatch(actUpdateProductById({ id: params.productId, productUpdate }));
    //   // eslint-disable-next-line
    // }, [result]);

    const formatNumber = (num) => {
        let numString = "";
        while (num > 0) {
            let div = num % 1000;
            num = Math.floor(num / 1000);
            if (num !== 0) {
                if (div < 10) {
                    div = "00" + div;
                } else if (div < 100) {
                    div = "0" + div;
                }
                numString = "." + div + numString;
            } else {
                numString = div + numString;
            }
        }
        return numString;
    };

    const onChangeQuantityProduct = (value) => {
        setQuantityProduct(value);
    };

    const handleToggleBoxReview = () => {
        setIsShowBoxReview(!isShowBoxReview);
    };

    const handleChangePage = (newPage) => {
        dispatch(setNewPage(newPage));
        dispatch(
            actFetchAllComments({
                _page: newPage,
                _limit: pagination.limitPerPage,
                idProduct: params.productId,
                ...params,
            })
        );
    };

    // };

    const renderComments = (comments) => {
        return comments.map((comment) => {
            return (
                <div
                    key={comment.id}
                    className="detail-product-card-comment__review--item"
                >
                    <div className="detail-product-card-comment__review--avatar-user">
                        <img src={comment?.avatarURL} alt="" />
                    </div>
                    <div className="detail-product-card-comment__review--grp-right">
                        <div className="detail-product-card-comment__review--user-name">
                            <p>{comment?.fullName}</p>
                        </div>
                        <div className="detail-product-card-comment__review--star">
                            <Rate value={comment?.star} />
                        </div>
                        <div className="detail-product-card-comment__review--comment">
                            <p>{comment?.comment}</p>
                        </div>
                        <div className="detail-product-card-comment__review--date-comment">
                            <p>Ngày: {comment?.dateComment}</p>
                        </div>
                    </div>
                </div>
            );
        });
    };

    const renderRelatedProductList = (relatedProductList) => {
        return relatedProductList.map((product) => {
            return (
                <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    xl={6}
                    className="detail-product-card-bottom__related-products-grp-item"
                >
                    <img
                        className="detail-product-card-bottom__related-products-grp-item--img"
                        src={product.imgURL}
                        alt=""
                    />
                    <div className="detail-product-card-bottom__related-products-grp-item--name">
                        <p>{product?.name}</p>
                    </div>
                    <div className="detail-product-card-bottom__related-products-grp-item--price">
                        <p>{formatNumber(product?.price)}</p>
                    </div>
                </Col>
            );
        });
    };

    // return (
    //     <div className="detail-product-card-wrapper">
    //         <div className="detail-product-card-container">
    //             <div className="detail-product-card-top-wrapper">
    //                 <Row className="detail-product-card-top">
    //                     <Col
    //                         xs={24}
    //                         sm={24}
    //                         md={24}
    //                         lg={12}
    //                         xl={12}
    //                         className="detail-product-card-top__img-grp"
    //                     >
    //                         <div className="detail-product-card-top__large-img">
    //                             <img
    //                                 src={largeImg ? largeImg : imgURL}
    //                                 alt=""
    //                             />
    //                         </div>
    //                         <div className="detail-product-card-top__img-small-grp">
    //                             {!!imgsProduct?.imgProduct1 && (
    //                                 <img
    //                                     src={imgsProduct?.imgProduct1}
    //                                     alt=""
    //                                     onClick={() => {
    //                                         handleChangeImg(
    //                                             imgsProduct?.imgProduct1
    //                                         );
    //                                     }}
    //                                 />
    //                             )}

    //                             {!!imgsProduct?.imgProduct2 && (
    //                                 <img
    //                                     src={imgsProduct?.imgProduct2}
    //                                     alt=""
    //                                     onClick={() => {
    //                                         handleChangeImg(
    //                                             imgsProduct?.imgProduct2
    //                                         );
    //                                     }}
    //                                 />
    //                             )}

    //                             {!!imgsProduct?.imgProduct3 && (
    //                                 <img
    //                                     src={imgsProduct?.imgProduct3}
    //                                     alt=""
    //                                     onClick={() => {
    //                                         handleChangeImg(
    //                                             imgsProduct?.imgProduct3
    //                                         );
    //                                     }}
    //                                 />
    //                             )}
    //                         </div>
    //                     </Col>

    //                     <Col
    //                         xs={24}
    //                         sm={24}
    //                         md={24}
    //                         lg={12}
    //                         xl={12}
    //                         className="detail-product-card-top__information-product-grp"
    //                     >
    //                         <form
    //                             onSubmit={handleSubmit(onValid)}
    //                             style={{
    //                                 width: "100%",
    //                                 display: "flex",
    //                                 flexDirection: "column",
    //                                 textAlign: "center",
    //                                 alignItems: "center",
    //                                 justifyContent: "center",
    //                             }}
    //                         >
    //                             <div className="detail-product-card-top__product-name">
    //                                 <h3>{productInfo.name}</h3>
    //                             </div>
    //                             <div className="detail-product-card-top__product-price">
    //                                 <h3>{formatNumber(productInfo.price)}</h3>
    //                             </div>
    //                             <div className="detail-product-card-top__product-color">
    //                                 <div className="detail-product-card-top__product-color-title">
    //                                     <h5>Size:</h5>
    //                                 </div>
    //                                 <div className="detail-product-card-top__product-color-selected">
    //                                     <Controller
    //                                         control={control}
    //                                         name="size"
    //                                         render={({ field }) => {
    //                                             return (
    //                                                 <Select
    //                                                     {...field}
    //                                                     style={{
    //                                                         width: "100%",
    //                                                     }}
    //                                                     placeholder="Choose an color..."
    //                                                     allowClear
    //                                                     // onChange={handleChangeSelectBox}
    //                                                     options={[
    //                                                         {
    //                                                             value: `${size?.size1}`,
    //                                                             label: `${size?.size1}`,
    //                                                         },
    //                                                         {
    //                                                             value: `${size?.size2}`,
    //                                                             label: `${size?.size2}`,
    //                                                         },
    //                                                         {
    //                                                             value: `${size?.size3}`,
    //                                                             label: `${size?.size3}`,
    //                                                         },
    //                                                         {
    //                                                             value: `${size?.size4}`,
    //                                                             label: `${size?.size4}`,
    //                                                         },
    //                                                         {
    //                                                             value: `${size?.size5}`,
    //                                                             label: `${size?.size5}`,
    //                                                         },
    //                                                         {
    //                                                             value: `${size?.size6}`,
    //                                                             label: `${size?.size6}`,
    //                                                         },
    //                                                         {
    //                                                             value: `${size?.size7}`,
    //                                                             label: `${size?.size7}`,
    //                                                         },
    //                                                         {
    //                                                             value: `${size?.size8}`,
    //                                                             label: `${size?.size8}`,
    //                                                         },
    //                                                         {
    //                                                             value: `${size?.size9}`,
    //                                                             label: `${size?.size9}`,
    //                                                         },
    //                                                     ]}
    //                                                 />
    //                                             );
    //                                         }}
    //                                     />
    //                                     {!!errors.size?.message && (
    //                                         <i
    //                                             style={{
    //                                                 color: "red",
    //                                                 padding: "0px 10px",
    //                                             }}
    //                                         >
    //                                             {errors.size?.message}
    //                                         </i>
    //                                     )}
    //                                 </div>
    //                             </div>
    //                             <div className="detail-product-card-top__product-material">
    //                                 <div className="detail-product-card-top__product-material-title">
    //                                     <h5>Color:</h5>
    //                                 </div>
    //                                 <div className="detail-product-card__product-material-selected">
    //                                     <Controller
    //                                         control={control}
    //                                         name="color"
    //                                         render={({ field }) => {
    //                                             return (
    //                                                 <Select
    //                                                     style={{
    //                                                         width: "100%",
    //                                                     }}
    //                                                     {...field}
    //                                                     placeholder={
    //                                                         "Choose an option..."
    //                                                     }
    //                                                     allowClear
    //                                                     // onChange={handleChangeSelectBox}
    //                                                     options={[
    //                                                         {
    //                                                             value: `${color}`,
    //                                                             label: `${color}`,
    //                                                         },
    //                                                     ]}
    //                                                 />
    //                                             );
    //                                         }}
    //                                     />
    //                                     {!!errors.color?.message && (
    //                                         <i
    //                                             style={{
    //                                                 color: "red",
    //                                                 padding: "0px 10px",
    //                                             }}
    //                                         >
    //                                             {errors.color?.message}
    //                                         </i>
    //                                     )}
    //                                 </div>
    //                             </div>
    //                             <div className="detail-product-card-top__product-quantity-grp">
    //                                 <div className="detail-product-card-top__quantity-title">
    //                                     <p>Pre-Order</p>
    //                                 </div>
    //                                 <div className="detail-product-card-top__product-quantity-grp-bottom">
    //                                     <div className="detail-product-card-top__product-quantity">
    //                                         <Controller
    //                                             control={control}
    //                                             name="quantity"
    //                                             render={({ field }) => {
    //                                                 return (
    //                                                     <InputNumber
    //                                                         {...field}
    //                                                         className="detail-product-card-top__product-quantity--number"
    //                                                         style={{
    //                                                             width: 62,
    //                                                             borderRadius: 0,
    //                                                         }}
    //                                                         min={1}
    //                                                         max={99}
    //                                                         defaultValue={1}
    //                                                         value={
    //                                                             quantityProduct
    //                                                         }
    //                                                         onChange={
    //                                                             onChangeQuantityProduct
    //                                                         }
    //                                                     />
    //                                                 );
    //                                             }}
    //                                         />
    //                                     </div>
    //                                     {!!errors.quantity?.message && (
    //                                         <p style={{ color: "red" }}>
    //                                             {errors.quantity?.message}
    //                                         </p>
    //                                     )}

    //                                     <div className="detail-product-card-top__btn-add-cart">
    //                                         <Button htmlType="submit">
    //                                             Add to cart
    //                                         </Button>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </form>

    //                         <div className="detail-product-card-top__shipping-warranty-grp">
    //                             <div className="detail-product-card-top__shipping">
    //                                 <span>
    //                                     <CarOutlined />
    //                                 </span>
    //                                 <p>Free Shipping</p>
    //                             </div>

    //                             <div className="detail-product-card-top__warranty-return">
    //                                 <span>
    //                                     <SafetyCertificateOutlined />
    //                                 </span>
    //                                 <p>Warranty & Return</p>
    //                             </div>
    //                         </div>
    //                     </Col>
    //                 </Row>
    //             </div>

    //             <div className="detail-product-card-bottom-wrapper">
    //                 <Row className="detail-product-card-bottom">
    //                     <div
    //                         style={{ paddingLeft: 20, paddingRight: 20 }}
    //                         className="detail-product-card-bottom__related-products-grp"
    //                     >
    //                         <Col
    //                             xs={24}
    //                             sm={24}
    //                             md={24}
    //                             lg={24}
    //                             className="detail-product-card-bottom__related-products-grp--title"
    //                         >
    //                             <h3>Related products</h3>
    //                         </Col>

    //                         <Row className="detail-product-card-bottom__related-products-grp-item-grp">
    //                             {renderRelatedProductList(relatedProductList)}
    //                         </Row>
    //                     </div>
    //                 </Row>
    //             </div>

    //             <div className="detail-product-card-comment-wrapper">
    //                 <div className="detail-product-card-comment">
    //                     <div className="detail-product-card-comment__name-product">
    //                         <p>Reviews product: {productInfo.name}</p>
    //                     </div>

    //                     <div className="detail-product-card-comment__star-average">
    //                         <div className="detail-product-card-comment__star-average--star">
    //                             <div className="detail-product-card-comment__star-average--title-review">
    //                                 <p>Star average:</p>
    //                             </div>
    //                             <div className="detail-product-card-comment__star-average--star-avg">
    //                                 <Rate value={result} />
    //                             </div>
    //                             <div className="detail-product-card-comment__star-average--number-of-reviews">
    //                                 <p>
    //                                     {commentsCalcuStarAverage?.length}{" "}
    //                                     reviews
    //                                 </p>
    //                             </div>
    //                         </div>
    //                         <div className="detail-product-card-comment__star-average--grp-btn-open-review-box">
    //                             <div className="detail-product-card-comment__star-average--question">
    //                                 <p>Have you been used this product yet?</p>
    //                             </div>
    //                             <div className="detail-product-card-comment__star-average--btn">
    //                                 <Button onClick={handleToggleBoxReview}>
    //                                     Send your review
    //                                 </Button>
    //                             </div>
    //                         </div>
    //                     </div>

    //                     <div
    //                         className={`detail-product-card-comment__box-review-wrapper ${
    //                             isShowBoxReview
    //                                 ? "detail-product-card-comment__show-box"
    //                                 : ""
    //                         }`}
    //                     >
    //                         <form
    //                             className="detail-product-card-comment__box-review"
    //                             onSubmit={handleSubmitBoxReview(
    //                                 onValidBoxReview
    //                             )}
    //                         >
    //                             <div className="detail-product-card-comment__box-review--img-product">
    //                                 <img
    //                                     src={largeImg ? largeImg : imgURL}
    //                                     alt=""
    //                                 />
    //                             </div>
    //                             <div className="detail-product-card-comment__box-review--name-product">
    //                                 <p>{productInfo.name}</p>
    //                             </div>
    //                             <div
    //                                 className="detail-product-card-comment__box-review--your-rate"
    //                                 style={{
    //                                     display: "flex",
    //                                     flexDirection: "column",
    //                                 }}
    //                             >
    //                                 <Controller
    //                                     control={controlBoxReview}
    //                                     name="star"
    //                                     render={({ field }) => {
    //                                         return (
    //                                             <Rate
    //                                                 style={{
    //                                                     display: "flex",
    //                                                     justifyContent:
    //                                                         "center",
    //                                                 }}
    //                                                 {...field}
    //                                             />
    //                                         );
    //                                     }}
    //                                 />
    //                                 {!!errorsBoxReview.star?.message && (
    //                                     <p
    //                                         style={{
    //                                             color: "red",
    //                                             padding: "0px 10px",
    //                                         }}
    //                                     >
    //                                         {errorsBoxReview.star?.message}
    //                                     </p>
    //                                 )}
    //                             </div>
    //                             <div className="detail-product-card-comment__box-review--comment">
    //                                 <Controller
    //                                     control={controlBoxReview}
    //                                     name="comment"
    //                                     render={({ field }) => {
    //                                         return (
    //                                             <Input
    //                                                 placeholder="Please enter your review about this product..."
    //                                                 {...field}
    //                                             />
    //                                         );
    //                                     }}
    //                                 />
    //                             </div>
    //                             <div className="detail-product-card-comment__box-review--btn-done">
    //                                 <Button htmlType="submit">Done</Button>
    //                             </div>
    //                         </form>
    //                     </div>

    //                     <div className="detail-product-card-comment__filter-star">
    //                         <div className="detail-product-card-comment__filter-star--title">
    //                             <p>Lọc xem theo:</p>
    //                         </div>
    //                         <div className="detail-product-card-comment__filter-star--item-grp">
    //                             <div className="detail-product-card-comment__filter-star--item">
    //                                 5 sao
    //                             </div>
    //                             <div className="detail-product-card-comment__filter-star--item">
    //                                 4 sao
    //                             </div>
    //                             <div className="detail-product-card-comment__filter-star--item">
    //                                 3 sao
    //                             </div>
    //                             <div className="detail-product-card-comment__filter-star--item">
    //                                 2 sao
    //                             </div>
    //                             <div className="detail-product-card-comment__filter-star--item">
    //                                 1 sao
    //                             </div>
    //                         </div>
    //                     </div>

    //                     <div className="detail-product-card-comment__reviews-grp">
    //                         <div className="detail-product-card-comment__review">
    //                             {renderComments(comments)}
    //                         </div>
    //                     </div>

    //                     <div className="detail-product-card-comment__reviews-pagination">
    //                         <Pagination
    //                             pageSize={pagination.limitPerPage}
    //                             current={pagination.currentPage}
    //                             total={pagination.total}
    //                             onChange={handleChangePage}
    //                         />
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
    // return (
    //     <div className="detail-product-card-wrapper">
    //         <div className="detail-product-card-container">
    //             <div className="detail-product-card-top-wrapper">
    //                 <div className="flex flex-wrap">
    //                     <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
    //                         <div className="detail-product-card-top__large-img">
    //                             <img
    //                                 src={largeImg ? largeImg : imgURL}
    //                                 alt=""
    //                             />
    //                         </div>
    //                         <div className="detail-product-card-top__img-small-grp flex">
    //                             {imgsProduct?.imgProduct1 && (
    //                                 <img
    //                                     src={imgsProduct?.imgProduct1}
    //                                     alt=""
    //                                     className="w-12 h-12 mr-2 mb-2 cursor-pointer"
    //                                     onClick={() => {
    //                                         handleChangeImg(
    //                                             imgsProduct?.imgProduct1
    //                                         );
    //                                     }}
    //                                 />
    //                             )}
    //                             {imgsProduct?.imgProduct2 && (
    //                                 <img
    //                                     src={imgsProduct?.imgProduct2}
    //                                     alt=""
    //                                     className="w-12 h-12 mr-2 mb-2 cursor-pointer"
    //                                     onClick={() => {
    //                                         handleChangeImg(
    //                                             imgsProduct?.imgProduct2
    //                                         );
    //                                     }}
    //                                 />
    //                             )}
    //                             {imgsProduct?.imgProduct3 && (
    //                                 <img
    //                                     src={imgsProduct?.imgProduct3}
    //                                     alt=""
    //                                     className="w-12 h-12 mr-2 mb-2 cursor-pointer"
    //                                     onClick={() => {
    //                                         handleChangeImg(
    //                                             imgsProduct?.imgProduct3
    //                                         );
    //                                     }}
    //                                 />
    //                             )}
    //                         </div>
    //                     </div>
    //                     <div className="w-full lg:w-1/2">
    //                         <form
    //                             onSubmit={handleSubmit(onValid)}
    //                             className="flex flex-col justify-center items-center"
    //                         >
    //                             <div className="text-center mb-4">
    //                                 <h3 className="text-xl font-bold">
    //                                     {productInfo.name}
    //                                 </h3>
    //                                 <p className="text-lg">
    //                                     {formatNumber(productInfo.price)}
    //                                 </p>
    //                             </div>
    //                             <div className="mb-4">
    //                                 <h5 className="font-bold">Size:</h5>
    //                                 <div className="w-full">
    //                                     <Controller
    //                                         control={control}
    //                                         name="size"
    //                                         render={({ field }) => (
    //                                             <Select
    //                                                 className="w-full"
    //                                                 {...field}
    //                                                 placeholder="Choose a color..."
    //                                                 allowClear
    //                                                 options={[
    //                                                     {
    //                                                         value: `${color}`,
    //                                                         label: `${color}`,
    //                                                     },
    //                                                 ]}
    //                                             />
    //                                         )}
    //                                     />
    //                                 </div>
    //                                 {!!errors.size?.message && (
    //                                     <p className="text-red-500">
    //                                         {errors.size?.message}
    //                                     </p>
    //                                 )}
    //                             </div>
    //                             <div className="mb-4">
    //                                 <h5 className="font-bold">Color:</h5>
    //                                 <div className="w-full">
    //                                     <Controller
    //                                         control={control}
    //                                         name="color"
    //                                         render={({ field }) => (
    //                                             <Select
    //                                                 {...field}
    //                                                 className="w-full"
    //                                                 placeholder="Choose a color..."
    //                                                 options={[
    //                                                     {
    //                                                         value: color,
    //                                                         label: color,
    //                                                     },
    //                                                 ]}
    //                                             />
    //                                         )}
    //                                     />
    //                                 </div>
    //                                 {!!errors.color?.message && (
    //                                     <p className="text-red-500">
    //                                         {errors.color?.message}
    //                                     </p>
    //                                 )}
    //                             </div>
    //                             <div className="mb-4">
    //                                 <h5 className="font-bold">Pre-Order</h5>
    //                                 <div className="flex items-center">
    //                                     <div className="mr-4">
    //                                         <Controller
    //                                             control={control}
    //                                             name="quantity"
    //                                             render={({ field }) => (
    //                                                 <InputNumber
    //                                                     {...field}
    //                                                     className="w-16 h-12"
    //                                                     min={1}
    //                                                     max={99}
    //                                                     defaultValue={1}
    //                                                     value={quantityProduct}
    //                                                     onChange={
    //                                                         onChangeQuantityProduct
    //                                                     }
    //                                                 />
    //                                             )}
    //                                         />
    //                                     </div>
    //                                     {!!errors.quantity?.message && (
    //                                         <p className="text-red-500">
    //                                             {errors.quantity?.message}
    //                                         </p>
    //                                     )}
    //                                     <div>
    //                                         <Button htmlType="submit">
    //                                             Add to cart
    //                                         </Button>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </form>
    //                         <div className="mb-4">
    //                             <div className="flex">
    //                                 <div className="mr-4">
    //                                     <CarOutlined />
    //                                 </div>
    //                                 <p>Free Shipping</p>
    //                             </div>
    //                             <div className="flex">
    //                                 <div className="mr-4">
    //                                     <SafetyCertificateOutlined />
    //                                 </div>
    //                                 <p>Warranty & Return</p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
    return (
      <div className="p-4 bg-white shadow-lg rounded-lg">
          <div className="container mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="flex flex-col items-center">
                      <img
                          className="w-full max-w-sm rounded-lg"
                          src={largeImg || imgURL}
                          alt=""
                      />
                      <div className="flex space-x-2 mt-2">
                          {imgsProduct?.imgProduct1 && (
                              <img
                                  className="w-16 h-16 rounded-lg cursor-pointer"
                                  src={imgsProduct.imgProduct1}
                                  alt=""
                                  onClick={() => handleChangeImg(imgsProduct.imgProduct1)}
                              />
                          )}
                          {imgsProduct?.imgProduct2 && (
                              <img
                                  className="w-16 h-16 rounded-lg cursor-pointer"
                                  src={imgsProduct.imgProduct2}
                                  alt=""
                                  onClick={() => handleChangeImg(imgsProduct.imgProduct2)}
                              />
                          )}
                          {imgsProduct?.imgProduct3 && (
                              <img
                                  className="w-16 h-16 rounded-lg cursor-pointer"
                                  src={imgsProduct.imgProduct3}
                                  alt=""
                                  onClick={() => handleChangeImg(imgsProduct.imgProduct3)}
                              />
                          )}
                      </div>
                  </div>
                  <div className="flex flex-col items-center">
                      <form
                          onSubmit={handleSubmit(onValid)}
                          className="w-full flex flex-col items-center justify-center space-y-4"
                      >
                          <h3 className="text-2xl font-bold">{productInfo.name}</h3>
                          <h3 className="text-xl text-gray-700">{formatNumber(productInfo.price)}</h3>
                          <div className="w-full">
                              <h5 className="text-lg font-medium">Size:</h5>
                              <Controller
                                  control={control}
                                  name="size"
                                  render={({ field }) => (
                                      <Select
                                          {...field}
                                          className="w-full mt-2"
                                          placeholder="Choose a size..."
                                          options={size ? Object.values(size).map((value) => ({
                                              value: value,
                                              label: value,
                                          })) : []}
                                      />
                                  )}
                              />
                              {errors.size?.message && (
                                  <i className="text-red-500 px-2">{errors.size.message}</i>
                              )}
                          </div>
                          <div className="w-full">
                              <h5 className="text-lg font-medium">Color:</h5>
                              <Controller
                                  control={control}
                                  name="color"
                                  render={({ field }) => (
                                      <Select
                                          {...field}
                                          className="w-full mt-2"
                                          placeholder="Choose a color..."
                                          allowClear
                                          options={[
                                              {
                                                  value: `${color}`,
                                                  label: `${color}`,
                                              },
                                          ]}
                                      />
                                  )}
                              />
                              {errors.color?.message && (
                                  <i className="text-red-500 px-2">{errors.color.message}</i>
                              )}
                          </div>
                          <div className="w-full">
                              <h5 className="text-lg font-medium">Quantity:</h5>
                              <div className="flex items-center space-x-4">
                                  <Controller
                                      control={control}
                                      name="quantity"
                                      render={({ field }) => (
                                          <InputNumber
                                              {...field}
                                              className="w-16"
                                              min={1}
                                              max={99}
                                              defaultValue={1}
                                              value={quantityProduct}
                                              onChange={onChangeQuantityProduct}
                                          />
                                      )}
                                  />
                                  {errors.quantity?.message && (
                                      <p className="text-red-500">{errors.quantity.message}</p>
                                  )}
                              </div>
                          </div>
                          <Button
                              htmlType="submit"
                              className="w-full bg-blue-500 text-white py-5 text-center rounded-lg mt-4"
                          >
                              Add to cart
                          </Button>
                      </form>
                      <div className="w-full flex justify-between items-center mt-4">
                          <div className="flex items-center space-x-2">
                              <CarOutlined className="text-xl" />
                              <p>Free Shipping</p>
                          </div>
                          <div className="flex items-center space-x-2">
                              <SafetyCertificateOutlined className="text-xl" />
                              <p>Warranty & Return</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Related products</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {renderRelatedProductList(relatedProductList)}
                  </div>
              </div>
              <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Reviews product: {productInfo.name}</h3>
                  <div className="flex flex-col items-center">
                      <div className="flex items-center space-x-2">
                          <p>Star average:</p>
                          <Rate value={result} />
                          <p>{commentsCalcuStarAverage?.length} reviews</p>
                      </div>
                      <div className="mt-4">
                          <p>Have you used this product yet?</p>
                          <Button onClick={handleToggleBoxReview} className="mt-2">
                              Send your review
                          </Button>
                      </div>
                  </div>
                  <div className={`mt-4 ${isShowBoxReview ? 'block' : 'hidden'}`}>
                      <form
                          className="flex flex-col items-center space-y-4"
                          onSubmit={handleSubmitBoxReview(onValidBoxReview)}
                      >
                          <img className="w-16 h-16 rounded-lg" src={largeImg || imgURL} alt="" />
                          <p>{productInfo.name}</p>
                          <div className="w-full">
                              <Controller
                                  control={controlBoxReview}
                                  name="star"
                                  render={({ field }) => (
                                      <Rate {...field} className="flex justify-center" />
                                  )}
                              />
                              {errorsBoxReview.star?.message && (
                                  <p className="text-red-500">{errorsBoxReview.star.message}</p>
                              )}
                          </div>
                          <Controller
                              control={controlBoxReview}
                              name="comment"
                              render={({ field }) => (
                                  <input
                                      type="text"
                                      className="w-full border border-gray-300 p-2 rounded-lg"
                                      placeholder="Please enter your review about this product..."
                                      {...field}
                                  />
                              )}
                          />
                          <Button htmlType="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
                              Done
                          </Button>
                      </form>
                  </div>
              </div>
              <div className="mt-8">
                  <h3 className="text-lg font-bold">Filter reviews by:</h3>
                  <div className="flex space-x-2 mt-2">
                      <div className="cursor-pointer">5 stars</div>
                      <div className="cursor-pointer">4 stars</div>
                      <div className="cursor-pointer">3 stars</div>
                      <div className="cursor-pointer">2 stars</div>
                      <div className="cursor-pointer">1 star</div>
                  </div>
              </div>
              <div className="mt-8">
                  {renderComments(comments)}
              </div>
              <div className="mt-8 flex justify-center">
                  <Pagination
                      pageSize={pagination.limitPerPage}
                      current={pagination.currentPage}
                      total={pagination.total}
                      onChange={handleChangePage}
                  />
              </div>
          </div>
      </div>
  );
};

export default ProductItem;
