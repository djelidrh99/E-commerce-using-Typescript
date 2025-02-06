import { useAppDispatch, useAppSelector } from "@store/Hooks/hooks";
import { deletePlaceOrder, resetPlaceOrdersStatus } from "@store/placeOrders/placeOrderSlice";
import { deletePlaceOrderThunk } from "@store/placeOrders/thunk/deletePlaceOrderThunk";
import { getOrdersThunk } from "@store/placeOrders/thunk/getOrdersThunk";
import { TplaceOrderProduct } from "@type/type";
import { useEffect, useState } from "react";



const useOrders = () => {
    const [showModal, setShowModal] = useState(false);
    const [orderDeatails, setOrderDeatails] = useState<TplaceOrderProduct[]>([]);
  const dispatch = useAppDispatch();
  const { placeOrdersFullInfo, loading, error } = useAppSelector(
    (state) => state.placeOrders
  );

  

  useEffect(() => {
    const promise = dispatch(getOrdersThunk());
    return () => {
      promise.abort();
      dispatch(resetPlaceOrdersStatus())
    };
  }, [dispatch]);

  const handleShow = (id:number) => {
    const order = placeOrdersFullInfo.find((order) => order.id === id);
    setOrderDeatails([...order?.placeOrders || [] ]);
    setShowModal(true);

  };

  const handleClose = () => setShowModal(false);

  const handleDelete = (id:number) => {
    dispatch(deletePlaceOrderThunk(id))
    dispatch(deletePlaceOrder(id))
    
  }

  
    return {showModal,
handleClose,
orderDeatails,
loading,
error,
placeOrdersFullInfo,
handleDelete,
handleShow}
}

export default useOrders