import Empty from "@components/common/Empty/Empty";
import Heading from "@components/common/Heading/Heading";
import Loading from "@components/common/Loading/Loading";
import ProductInfo from "@components/eCommerce/ProductInfo/ProductInfo";
import useOrders from "@hooks/useOrders";
import { Button, Modal, Table } from "react-bootstrap";

const Orders = () => {
  const {
    showModal,
    handleClose,
    orderDeatails,
    loading,
    error,
    placeOrdersFullInfo,
    handleDelete,
    handleShow,
  } = useOrders();

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <div style={{ maxHeight: "400px", overflowY: "auto" }}>
          {orderDeatails.map((item) => {
            return (
              <Modal.Body key={item.id}>
                <ProductInfo
                  title={item.title}
                  img={item.img}
                  price={item.price}
                  direction="row"
                />
              </Modal.Body>
            );
          })}
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Heading title="Orders" />
      <Loading status={loading} error={error} type={"tabla"}>
        {placeOrdersFullInfo.length === 0 ? (
          <Empty section="Order Table" />
        ) : (
          <Table>
            <thead>
              <tr>
                <th>Orders Number</th>
                <th>Items</th>
                <th>Total Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {placeOrdersFullInfo.map((order, index) => {
                return (
                  <tr key={order?.id}>
                    <td>{++index}</td>
                    <td style={{ cursor: "pointer" }}>
                      {`${order.placeOrders.length} Items(s)/`}
                      <span
                        onClick={() => {
                          handleShow(order.id);
                        }}
                        style={{
                          textDecoration: "underline",
                          cursor: "pointre",
                        }}
                      >
                        Product Details
                      </span>
                    </td>
                    <td>{order.totalPrice}</td>
                    <td style={{ cursor: "pointer" }}>
                      <span
                        onClick={() => {
                          handleDelete(order.id);
                        }}
                        style={{
                          textDecoration: "underline",
                          cursor: "pointre",
                        }}
                      >
                        Delete
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </Loading>
    </>
  );
};

export default Orders;
