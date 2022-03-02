import React, { Fragment, useState, useEffect } from "react";
import Breadcrumb from "../../common/breadcrumb";
import CKEditors from "react-ckeditor-component";
import Swal from "sweetalert2";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Button,
} from "reactstrap";

import one from "../../../assets/images/pro3/1.jpg";
import user from "../../../assets/images/user.png";
import axios from "axios";
import api from "../../../services/api";
const Add_product = (props, { afterPaste, onBlur, onChange }) => {
  // const {
  //   storeProducts
  // } = props;

  const [categories, setCategories] = useState([]);
  const [qtd, setQuantity] = useState(0);
  const [size, setSize] = useState("");
  // const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [photo, setPhoto] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [price, setPrice] = useState("");
  const [openDiscount, setOpenDiscount] = useState(false);
  const [dummyimgs, setDummyimgs] = useState([
    { img: user },
    { img: user },
    { img: user },
    { img: user },
    { img: user },
    { img: user },
  ]);

  const priceMask = (e) => {
    var numb = e.match(/\d/g);

    if (numb) {
      numb = numb.join("");

      let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        useGrouping: true,
      });

      const formatPrice = dollarUS.format(parseInt(numb) / 100);
      setPrice(formatPrice);
      return formatPrice;
    } else {
      setPrice("");
      return "";
    }
  };

  useEffect(() => {
    api
      .get("categories")
      .then((res) => {
        const data = res.data;
        var dataFormat = [];

        if (data) {
          data.map(function (item) {
            dataFormat.push({
              category: item.name,
            });
          });
          if (dataFormat) {
            setCategories(dataFormat);
          }
        }
      })
      .catch((error) => {
        console.log(error);
        console.log("error");
      });
  }, []);

  const IncrementItem = () => {
    if (qtd < 9) {
      setQuantity(qtd + 1);
    } else {
      return null;
    }
  };
  const DecreaseItem = () => {
    if (qtd > 0) {
      setQuantity(qtd - 1);
    } else {
      return null;
    }
  };
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const _handleImgChange = (e, i) => {
    e.preventDefault();
    let reader = new FileReader();
    const image = e.target.files[0];
    reader.onload = () => {
      dummyimgs[i].img = reader.result;
      setFile({ file: file });
      setDummyimgs(dummyimgs);
    };
    reader.readAsDataURL(image);
  };

  const onChangeDesc = (e) => {
    const data = e.editor.getData();
    setDescription(data);
    console.log(data);
  };

  const handleValidSubmit = (e) => {
    e.preventDefault();
    
    const p = e.target.price.value;
    const price = p.replace(/\D/g, '')
    const barcode = e.target.barcode.value;
    const arcticleNumber = e.target.arcticleNumber.value;
    const top_products = e.target.top_products.value;
    const discount = e.target.discount.value;
    const name = e.target.name.value;
    const alias_color = e.target.alias_color.value;
    const type = "fake";
    const uri_image =
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.missnails.com.br%2Funhas%2Fstar-nail%2Facrygel-star-nails-28g&psig=AOvVaw1O-2ncWAq_AcOpR3-FOKMu&ust=1642476359115000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDk4LHrt_UCFQAAAAAdAAAAABAD";
    const id_category = 1;

    var bodyFormData = new FormData();

    bodyFormData.append("price", price);
    bodyFormData.append("barcode", barcode);
    bodyFormData.append("arcticleNumber", arcticleNumber);
    bodyFormData.append("size", size);
    bodyFormData.append("type", type);
    bodyFormData.append("qtd", qtd);
    bodyFormData.append("description", description);
    bodyFormData.append("color", color);
    bodyFormData.append("alias_color", alias_color);
    bodyFormData.append("name", name);
    bodyFormData.append("top_products", top_products);
    bodyFormData.append("discount", discount);
    bodyFormData.append("uri_image", uri_image);
    bodyFormData.append("image", imgUrl);
    bodyFormData.append("id_category", id_category);

    axios({
      method: "post",
      url: `http://65.21.146.141:3333/products`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        const { data } = res;
        Swal.fire({
          title: "Success!",
          text: data,
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error)
        Swal.fire({
          icon: "error",
          title: "Server error...",
          text: error,
          footer: "Contact support",
        });
        console.log(error);
        console.log("error");
      });
  };

  return (
    <Fragment>
      <Breadcrumb title="Add Product" parent="Physical" />

      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Add Product</h5>
              </CardHeader>
              <CardBody>
                <Row className="product-adding">
                  <Col xl="5">
                    <div className="add-product">
                      <Row>
                        <Col xl="9 xl-50" sm="6 col-9">
                          <img
                            src={photo ? photo : one}
                            alt=""
                            className="img-fluid image_zoom_1 blur-up lazyloaded"
                          />
                        </Col>
                        <Col xl="3 xl-50" sm="6 col-3">
                          <ul className="file-upload-product">
                            {dummyimgs.map((res, i) => {
                              return (
                                <li key={i}>
                                  <div className="box-input-file">
                                    <Input
                                      className="upload"
                                      type="file"
                                      onChange={(e) => _handleImgChange(e, i)}
                                    />
                                    <img
                                      alt=""
                                      src={res.img}
                                      style={{ width: 50, height: 50 }}
                                    />
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col xl="7">
                    <Form
                      className="needs-validation add-product-form"
                      onSubmit={handleValidSubmit}
                    >
                      <div className="form form-label-center">
                        {/* Name */}
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Name:
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <Input
                              className="form-control"
                              name="name"
                              id="name"
                              type="text"
                              required
                            />
                          </div>
                          <div className="valid-feedback">Looks good!</div>
                        </FormGroup>

                        {/* Type */}
                        {/* <FormGroup className="form-group row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Type:
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <select
                              name="type"
                              value={type}
                              onChange={(e) => setType(e.target.value)}
                              className="form-control digits"
                              id="type"
                            >
                              <option value={null}></option>
                              <option value={1}>Gel</option>
                              <option value={2}>Eletronic</option>
                              <option value={3}>Powder</option>
                              <option value={4}>Liquid</option>
                            </select>
                          </div>
                        </FormGroup> */}

                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Top product:
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                              <Label className="d-block">
                                <Input
                                  className="radio_animated"
                                  id="top_products_yes"
                                  value={true}
                                  type="radio"
                                  name="top_products"
                                />
                                Yes
                              </Label>
                              <Label className="d-block">
                                <Input
                                  className="radio_animated"
                                  id="top_products_no"
                                  value={false}
                                  type="radio"
                                  name="top_products"
                                  defaultChecked
                                />
                                No
                              </Label>
                            </FormGroup>
                          </div>
                          <div className="valid-feedback">Looks good!</div>
                        </FormGroup>

                        {/* Price (CHF) */}
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Price (Dólar):
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <Input
                              className="form-control mb-0"
                              name="price"
                              id="price"
                              type="text"
                              value={price}
                              onChange={(e) => priceMask(e.target.value)}
                              required
                            />
                          </div>
                          <div className="valid-feedback">Looks good!</div>
                        </FormGroup>

                        {/*Has Discount*/}
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Has discount:
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                              <Label className="d-block">
                                <Input
                                  className="radio_animated"
                                  id="has_discount_yes"
                                  value={true}
                                  type="radio"
                                  onChange={(e) => setOpenDiscount(true)}
                                  name="has_discount"
                                />
                                Yes
                              </Label>
                              <Label className="d-block">
                                <Input
                                  className="radio_animated"
                                  id="has_discount_no"
                                  value={false}
                                  type="radio"
                                  onChange={(e) => setOpenDiscount(false)}
                                  name="has_discount"
                                  defaultChecked
                                />
                                No
                              </Label>
                            </FormGroup>
                          </div>
                          <div className="valid-feedback">Looks good!</div>
                        </FormGroup>
                        {openDiscount && (
                          <>
                            {/* Discount */}
                            <FormGroup className="form-group mb-3 row">
                              <Label className="col-xl-3 col-sm-4 mb-0">
                                How much is the discount:
                              </Label>
                              <div className="col-xl-2 col-sm-2">
                                <FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                                  <Input
                                    className="form-control mb-0"
                                    name="discount"
                                    id="discount"
                                    type="number"
                                    max="100"
                                    maxLength={3}
                                    pattern="(100)|[1-9]\d?"
                                    required
                                  />
                                </FormGroup>
                              </div>
                              (%)
                              <div className="valid-feedback">Looks good!</div>
                            </FormGroup>

                            {/* Discount time*/}
                            <FormGroup className="form-group mb-3 row">
                              <Label className="col-xl-3 col-sm-4 mb-0">
                                The discount will be available:
                              </Label>
                              <div className="col-xl-3 col-sm-3">
                                <FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                                  <Input
                                    className="form-control mb-0"
                                    name="discount"
                                    id="discount"
                                    type="date"
                                    required
                                  />
                                </FormGroup>
                              </div>
                              until
                              <div className="col-xl-3 col-sm-3">
                                <FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                                  <Input
                                    className="form-control mb-0"
                                    name="discount"
                                    id="discount"
                                    type="date"
                                    required
                                  />
                                </FormGroup>
                              </div>
                              <div className="valid-feedback">Looks good!</div>
                            </FormGroup>
                          </>
                        )}

                        {/* Images */}
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Images:
                          </Label>
                          <input
                            accept="image/*"
                            // style={{ display: "none" }}
                            style={{ marginLeft: "15px" }}
                            id="photo"
                            multiple
                            required
                            // value={photo}
                            onChange={(e) => {
                              var output = document.getElementById("photo");
                              output.src = URL.createObjectURL(
                                e.target.files[0]
                              );
                              output.onload = function () {
                                URL.revokeObjectURL(output.src);
                              };
                              console.log("qwdqwd", e.target.files);
                              setPhoto(output.src);
                              setImgUrl(e.target.files[0]);
                            }}
                            type="file"
                          />
                          {/* <label
                            color="primary"
                            htmlFor="photo"
                            className="col-xl-3 col-sm-4 mb-0"
                          >
                            Add Images
                          </label> */}
                        </FormGroup>
                        </div>

                        {/* Article number */}
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                          Article number:
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <Input
                              className="form-control"
                              name="arcticleNumber"
                              id="text"
                              required
                            />
                          </div>
                          <div className="invalid-feedback offset-sm-4 offset-xl-3">
                            Please choose Valid Code.
                          </div>
                        </FormGroup>
                    
{/* Product Code */}
<FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Product Code:
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <Input
                              className="form-control"
                              name="barcode"
                              id="barcode"
                              type="text"
                              required
                            />
                          </div>
                          <div className="invalid-feedback offset-sm-4 offset-xl-3">
                            Please choose Valid Code.
                          </div>
                        </FormGroup>
                      {/* Size */}
                      <FormGroup className="form-group row">
                        <Label className="col-xl-3 col-sm-4 mb-0">Size:</Label>
                        <div className="col-xl-3 col-sm-2">
                          <select
                            name="size"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            className="form-control digits"
                            id="size"
                          >
                            <option value={null}></option>
                            <option>5(g)</option>
                            <option>15(g)</option>
                            <option>25(g)</option>
                            <option>30(g)</option>
                            <option>50(g)</option>
                            <option>300(g)</option>
                            <option>75(ml)</option>
                            <option>30(ml)</option>
                            <option>15(ml)</option>
                            <option>100(ml)</option>
                            <option>150(ml)</option>
                            <option>200(ml)</option>
                            <option>250(ml)</option>
                            <option>500(ml)</option>
                            <option>1(L)</option>
                            <option>5(L)</option>
                            <option>12(ml)</option>
                            <option>55(ml)</option>
                            <option>90(ml)</option>
                            <option>60(ml)</option>
                            <option>110(ml)</option>
                          </select>
                        </div>
                      </FormGroup>

                      {/* Weight */}
                      <FormGroup className="form-group row">
                        <Label className="col-xl-3 col-sm-4 mb-0">
                          Weight:
                        </Label>
                        <div className="col-xl-3 col-sm-2">
                          <Input
                            className="form-control"
                            name="weight"
                            id="weight"
                            type="number"
                            required
                          />
                        </div>
                      </FormGroup>

                      {/* Height */}
                      <FormGroup className="form-group row">
                        <Label className="col-xl-3 col-sm-4 mb-0">
                          Height:
                        </Label>
                        <div className="col-xl-3 col-sm-2">
                          <Input
                            className="form-control"
                            name="height"
                            id="height"
                            type="number"
                            required
                          />
                        </div>
                      </FormGroup>

                      {/* Total Products  (QTD) */}
                      <FormGroup className="form-group row">
                        <Label className="col-xl-3 col-sm-4 mb-0">
                          Total Products:
                        </Label>
                        <fieldset className="qty-box ml-0">
                          <div className="input-group bootstrap-touchspin">
                            <div className="input-group-prepend">
                              <Button
                                className="btn btn-primary btn-square bootstrap-touchspin-down"
                                type="button"
                                onClick={DecreaseItem}
                              >
                                <i className="fa fa-minus"></i>
                              </Button>
                            </div>
                            <div className="input-group-prepend">
                              <span className="input-group-text bootstrap-touchspin-prefix"></span>
                            </div>
                            <Input
                              className="touchspin form-control"
                              type="text"
                              name="qtd"
                              value={qtd}
                              onChange={handleChange}
                            />
                            <div className="input-group-append">
                              <span className="input-group-text bootstrap-touchspin-postfix"></span>
                            </div>
                            <div className="input-group-append ml-0">
                              <Button
                                className="btn btn-primary btn-square bootstrap-touchspin-up"
                                type="button"
                                onClick={IncrementItem}
                              >
                                <i className="fa fa-plus"></i>
                              </Button>
                            </div>
                          </div>
                        </fieldset>
                      </FormGroup>

                      {/* Color */}
                      <FormGroup className="form-group row">
                        <Label className="col-xl-3 col-sm-4 mb-0">Color:</Label>
                        <div className="col-xl-8 col-sm-7">
                          <select
                            name="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="form-control digits"
                            id="color"
                          >
                            <option value={null}></option>
                            <option>RED</option>
                            <option>ORANGE</option>
                            <option>YELLOW</option>
                            <option>GREEN</option>
                            <option>BLUE</option>
                            <option>INDIGO</option>
                            <option>VIOLET</option>
                            <option>BLACK</option>
                            <option>WHITE </option>
                          </select>
                        </div>
                      </FormGroup>

                      {/* Alias Color */}
                      <FormGroup className="form-group mb-3 row">
                        <Label className="col-xl-3 col-sm-4 mb-0">
                          Alias Color:
                        </Label>
                        <div className="col-xl-8 col-sm-7">
                          <Input
                            className="form-control"
                            name="alias_color"
                            id="alias_color"
                            type="text"
                            required
                          />
                        </div>
                        <div className="valid-feedback">Looks good!</div>
                      </FormGroup>

                      {/* Categories */}
                      <FormGroup className="form-group row">
                        <Label className="col-xl-3 col-sm-4 mb-0">
                          Categories:
                        </Label>
                        <div className="col-xl-8 col-sm-7">
                          <select
                            value={category}
                            name="category"
                            onChange={(e) => setCategory(e.target.value)}
                            className="form-control digits"
                            id="category"
                          >
                            <option></option>
                            {categories.map((cat) => (
                              <option>{cat.category}</option>
                            ))}
                          </select>
                        </div>
                      </FormGroup>

                      <FormGroup className="form-group row">
                        <Label className="col-xl-3 col-sm-4">
                          Add Description:
                        </Label>
                        <div className="col-xl-8 col-sm-7 description-sm">
                          <CKEditors
                            activeclassName="p10"
                            name="description"
                            content={description}
                            events={{
                              blur: onBlur,
                              afterPaste: afterPaste,
                              change: onChangeDesc,
                            }}
                          />
                        </div>
                      </FormGroup>

                      <div className="offset-xl-3 offset-sm-4">
                        <Button type="submit" color="primary">
                          Add
                        </Button>
                        <Button type="button" color="light">
                          Discard
                        </Button>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

// const mapStateToProps = (state) => {

// };

// const mapDispatchToProps = {
//   storeProducts: productAction.storeProducts
// };

export default Add_product;
