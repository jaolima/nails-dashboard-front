import React, { Fragment, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import CKEditors from "react-ckeditor-component";
import { connect } from "react-redux";
import * as productAction from "../../../actions/products.action";
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

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(1);
  const [color, setColor] = useState(1);
  const [category, setCategory] = useState(1);

  const [file, setFile] = useState();
  const [dummyimgs, setDummyimgs] = useState([
    { img: user },
    { img: user },
    { img: user },
    { img: user },
    { img: user },
    { img: user },
  ]);

  const IncrementItem = () => {
    if (quantity < 9) {
      setQuantity(quantity + 1);
    } else {
      return null;
    }
  };
  const DecreaseItem = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
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

  const handleChangeSelect = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "size":
        setSize(value);
      case "color":
        setColor(value);
      case "category":
        setCategory(value);
    }
  };

  const handleValidSubmit = (v) => {
    v.preventDefault();
    const name = v.target.productName.value;
    const price = v.target.price.value;
    const productCode = v.target.productCode.value;
    const aliasColor = v.target.aliasColor.value;

    console.log(price, productCode, name, aliasColor, size, color, category);
    console.log("vvvv", v.target);
    // api
    // .post('products', {
    //   name,
    //   price,
    //   productCode
    // })
    // .then((res) => {
    //  console.log(res)
    // })
    // .catch((error) => {
    //   console.log(error)
    //   console.log("error")
    // });
    console.log("submit");
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
                            src={one}
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
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Name :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <Input
                              className="form-control"
                              name="productName"
                              id="validationCustom01"
                              type="text"
                              required
                            />
                          </div>
                          <div className="valid-feedback">Looks good!</div>
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Price :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <Input
                              className="form-control mb-0"
                              name="price"
                              id="validationCustom02"
                              type="number"
                              required
                            />
                          </div>
                          <div className="valid-feedback">Looks good!</div>
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Product Code :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <Input
                              className="form-control "
                              name="productCode"
                              id="validationCustomUsername"
                              type="number"
                              required
                            />
                          </div>
                          <div className="invalid-feedback offset-sm-4 offset-xl-3">
                            Please choose Valid Code.
                          </div>
                        </FormGroup>
                      </div>
                      <Form>
                        {/* Size */}
                        <FormGroup className="form-group row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Size :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <select
                              name="size"
                              onChange={handleChangeSelect}
                              className="form-control digits"
                              id="exampleFormControlSelect1"
                            >
                              <option>Small</option>
                              <option>Medium</option>
                              <option>Large</option>
                              <option>Extra Large</option>
                            </select>
                          </div>
                        </FormGroup>

                        {/* Color */}
                        <FormGroup className="form-group row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Color :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <select
                              onChange={handleChangeSelect}
                              className="form-control digits"
                              id="exampleFormControlSelect1"
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
                            Alias Color :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <Input
                              className="form-control "
                              name="aliasColor"
                              id="validationCustomUsername"
                              type="number"
                              required
                            />
                          </div>
                        </FormGroup>

                        {/* Total Products  (QTD) */}
                        <FormGroup className="form-group row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Total Products :
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
                                value={quantity}
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

                        {/* Categories */}
                        <FormGroup className="form-group row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Categories :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <select
                              name="category"
                              onChange={handleChangeSelect}
                              className="form-control digits"
                              id="exampleFormControlSelect1"
                            >
                              <option>test</option>
                            </select>
                          </div>
                        </FormGroup>

                        <FormGroup className="form-group row">
                          <Label className="col-xl-3 col-sm-4">
                            Add Description :
                          </Label>
                          <div className="col-xl-8 col-sm-7 description-sm">
                            <CKEditors
                              activeclassName="p10"
                              events={{
                                blur: onBlur,
                                afterPaste: afterPaste,
                                change: onChange,
                              }}
                            />
                          </div>
                        </FormGroup>
                      </Form>
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
