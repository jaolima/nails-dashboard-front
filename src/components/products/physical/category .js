import React, { Fragment, useState, useEffect } from "react";
import Breadcrumb from "../../common/breadcrumb";
import "react-toastify/dist/ReactToastify.css";
import Datatable from "../../common/datatable";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import api from "../../../services/api";

const Category = () => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [openTable, setOpenTable] = useState(false);

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };
  const handleValidSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;

    api.post("/categories", { name: name }).then((res) => {
      const {name} = res.data;
      setOpenTable(false);
      console.log(name)
      setCategories([...categories, {category: name }]);
      setOpenTable(true);
    });
  };
  console.log(categories, "categories");

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
            setOpenTable(true);
          }
        }
      })
      .catch((error) => {
        console.log(error);
        console.log("error");
      });
  }, []);

  return (
    <Fragment>
      <Breadcrumb title="Category" parent="Physical" />
      {/* <!-- Container-fluid starts--> */}
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Products Category</h5>
              </CardHeader>
              <CardBody>
                <div className="btn-popup pull-right">
                  <Button
                    type="button"
                    color="primary"
                    onClick={onOpenModal}
                    data-toggle="modal"
                    data-original-title="test"
                    data-target="#exampleModal"
                  >
                    Add Category
                  </Button>
                  <Modal isOpen={open} toggle={onCloseModal}>
                    <ModalHeader toggle={onCloseModal}>
                      <h5
                        className="modal-title f-w-600"
                        id="exampleModalLabel2"
                      >
                        Add category
                      </h5>
                    </ModalHeader>
                    <Form onSubmit={handleValidSubmit}>
                      <ModalBody>
                        <FormGroup>
                          <Label
                            htmlFor="recipient-name"
                            className="col-form-label"
                          >
                            Name :
                          </Label>
                          <Input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                          />
                        </FormGroup>
                        {/* <FormGroup>
                          <Label
                            htmlFor="message-text"
                            className="col-form-label"
                          >
                            Category Image :
                          </Label>
                          <Input
                            className="form-control"
                            id="validationCustom02"
                            type="file"
                          />
                        </FormGroup> */}
                      </ModalBody>
                      <ModalFooter>
                        <Button type="submit" color="primary">
                          Save
                        </Button>
                        <Button
                          type="button"
                          color="secondary"
                          onClick={() => onCloseModal("VaryingMdo")}
                        >
                          Close
                        </Button>
                      </ModalFooter>
                    </Form>
                  </Modal>
                </div>
                <div className="clearfix"></div>
                <div id="basicScenario" className="product-physical">
                  {openTable && (
                    <Datatable
                      myData={categories}
                      multiSelectOption={false}
                      pageSize={10}
                      pagination={true}
                      class="-striped -highlight"
                    />
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* <!-- Container-fluid Ends--> */}
    </Fragment>
  );
};

export default Category;
