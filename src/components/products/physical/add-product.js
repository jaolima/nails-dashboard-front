import React, { Fragment, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import CKEditors from "react-ckeditor-component";
// import { connect } from "react-redux";
// import * as productAction from "../../../actions/products.action";
import api from "../../../services/api";

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

const Add_product = (props, { afterPaste, onBlur, onChange }) => {
  // const {
  //   storeProducts
  // } = props;

  const [qtd, setQuantity] = useState(0);
  const [size, setSize] = useState("");
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [photo, setPhoto] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [dummyimgs, setDummyimgs] = useState([
    { img: user },
    { img: user },
    { img: user },
    { img: user },
    { img: user },
    { img: user },
  ]);

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

  //	image upload
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
    const price = e.target.price.value;
    const barcode = e.target.barcode.value;
    const top_products = e.target.top_products.value;
    const discount = e.target.discount.value;
    const name = e.target.name.value;
    const alias_color = e.target.alias_color.value;
    const uri_image = imgUrl;
    const id_category = 1;

    console.log("target", e.target);
    api
      .post("products", {
        price,
        barcode,
        size,
        type,
        qtd,
        description,
        color,
        alias_color,
        name,
        top_products,
        discount,
        uri_image,
        id_category
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
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
                        <FormGroup className="form-group row">
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
                              <option value={1}>Gel</option>
                              <option value={2}>Eletronic</option>
                              <option value={3}>Powder</option>
                              <option value={4}>Liquid</option>
                            </select>
                          </div>
                        </FormGroup>

                        {/* Top product */}
                        <div className="form-group row">
                          <Label className="col-xl-3 col-md-4">
                            Top product:
                          </Label>
                          <Row>
                            <Col xl="3" sm="4"></Col>
                            <Col xl="9" sm="8">
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
                            </Col>
                          </Row>
                        </div>

                        {/* Price (CHF) */}
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Price (CHF):
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <Input
                              className="form-control mb-0"
                              name="price"
                              id="price"
                              type="number"
                              required
                            />
                          </div>
                          <div className="valid-feedback">Looks good!</div>
                        </FormGroup>

                        {/* Discount */}
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Discount (%):
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <Input
                              className="form-control mb-0"
                              name="discount"
                              id="discount"
                              type="number"
                              maxLength={3}
                              pattern="[+-]?\d+(?:[.,]\d+)?"
                              required
                            />
                          </div>
                          <div className="valid-feedback">Looks good!</div>
                        </FormGroup>

                        {/* Images */}
                        <FormGroup className="form-group mb-3 row">
                        <Label className="col-xl-3 col-sm-4 mb-0">
                            Images:
                          </Label>
                        <input
                            accept="image/*"
                            style={{ display: "none" }}
                            id="photo"
                            multiple
                            // value={photo}
                            onChange={(e) => {
                              console.log('test')
                              var output = document.getElementById("photo");
                              output.src = URL.createObjectURL(
                                e.target.files[0]
                              );
                              output.onload = function () {
                                URL.revokeObjectURL(output.src);
                              };
                              setPhoto(output.src);
                              setImgUrl('https://uploads.metropoles.com/wp-content/uploads/2020/09/02142841/WhatsApp-Image-2020-09-01-at-16.00.54-768x1024.jpeg')
                            }}
                            type="file"
                          />
                          <label color="primary" htmlFor="photo" className="col-xl-3 col-sm-4 mb-0">
                            Add Images
                          </label>

                       
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
                              type="number"
                              required
                            />
                          </div>
                          <div className="invalid-feedback offset-sm-4 offset-xl-3">
                            Please choose Valid Code.
                          </div>
                        </FormGroup>
                      </div>

                      {/* Size */}
                      <FormGroup className="form-group row">
                        <Label className="col-xl-3 col-sm-4 mb-0">Size:</Label>
                        <div className="col-xl-8 col-sm-7">
                          <select
                            name="size"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            className="form-control digits"
                            id="size"
                          >
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                            <option>Extra Large</option>
                          </select>
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
                            <option>Blue</option>
                            <option>Red</option>
                            <option>Green</option>
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
                            <option>test</option>
                            <option>test 1</option>
                            <option>test 2</option>
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
