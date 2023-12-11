import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../pages/Calendar/calendar.css';

const CTask = ({task}) => {
  return (
    <div className="row justify-content-center">
    <div className="col-md-6 taskd">
      ID: {task.id}
    </div>
    <div className="col-md-6 taskd">
      Giá thành: {task.fare}
    </div>
    <div className="col-md-12 taskd">
      Ngày shipper nhận hàng: {task.pickUpDate}
    </div>
    <div className="col-md-6 taskd">
      Ngày Shipper nhận hàng dự kiến: {task.expected_pickUpDate}
    </div>
    <div className="col-md-6 taskd">
      Ngày shipper giao hàng: {task.deliveryDate}
    </div>
    <div className="col-md-6 taskd">
      Ngày hoàn thành giao dự kiến: {task.expected_deliveryDate}
    </div>
    <div className="col-md-6 taskd">
      Từ kho nguồn: {task.pickUpDate}
    </div>
    <div className="col-md-6 taskd">
      Trạng thái: {task.status}
    </div>
    <div className="col-md-6 taskd">
      SSN shipper nhận: {task.pickupMan_SSN}
    </div>
    <div className="col-md-6 taskd">
      SSN shipper gửi: {task.deliveryMan_SSN}
    </div>
    <div className="col-md-6 taskd">
      SSN người gửi: {task.sender_SSN}
    </div>
    <div className="col-md-6 taskd">
      SSN người nhận: {task.receiver_SSN}
    </div>
    <div className="col-md-6 taskd">
      Loại hàng: {task.product_type}
    </div>
  </div>
  );
}

const ShowTaskModal = ({ visible, task, update, toggle, erase }) => {
  let b = new Date(task?.startDate);

// const pog = true;
  return (
    <>
      {visible && <div className="modal-backdrop fade show"></div>}
      <div className={"modal fade " + (visible ? "show d-block" : "")}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{task?.name}</h5>
              <button
                type="button"
                onClick={toggle}
                className="btn-close"
              ></button>
            </div>
            <div className="modal-body">
              <CTask task={task}/>
            </div>
            <div className="modal-footer">
              <button className="btn rounded-pill edit" onClick={update}>
                Chỉnh sửa
              </button>
              <button className="btn rounded-pill delete" onClick={erase}>
                Xoá
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// END: Show Task Modal
export default ShowTaskModal;