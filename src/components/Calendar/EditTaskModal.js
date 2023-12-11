import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../pages/Calendar/calendar.css';


const CForm = ({ updateTask, task }) => {
    const [id, setId] = React.useState("");
    const [storage, setStorage] = React.useState("");
    const [pickUpMan, setpickUpMan] = React.useState("");
    const [deliveryMan, setDeliveryMan] = React.useState("");
    const [status, setStatus] = React.useState("");

    
    React.useEffect(() => {
        setId(task?.id || "");
        setStorage(task?.fromStorage_id || "");
        setpickUpMan(task?.pickupMan_SSN || "");
        setDeliveryMan(task?.deliveryMan_SSN || "");
        setStatus(task?.status || "");
    }, [task]);

    const handleSubmit = async (e) => {
        e.prtaskDefault();
        await updateTask({
           id,
            pickUpMan,
            deliveryMan,
            status
          });
          setStorage("");
          setpickUpMan("");
          setDeliveryMan("");
          setStatus("");
        // toggle();
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="fw-lighter">Kho đến</label>
                        <input
                            type="text"
                            value={storage}
                            required={false}
                            placeholder="Name"
                            className="form-control mb-2"
                            onChange={(el) => setStorage(el.target.value)}
                        />
                    </div>
                </div>
                
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="fw-lighter">Trạng thái</label>
                        <select
                            value={status}
                            required={false}
                            className="form-control mb-2"
                            onChange={(el) => setStatus(el.target.value)}
                        >
                            <option value={status}>{status}</option>
                            {["Đã giao", "Huỷ đơn"].map((item, id) => (
                                <option key={id} value={item.value}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label className="fw-lighter">Shipper nhận</label>
                        <input
                            type="text"
                            required={false}
                            value={pickUpMan}
                            placeholder="Start"
                            className="form-control mb-2"
                            onChange={(el) => setpickUpMan(el.target.value)}
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label className="fw-lighter">Shipper giao</label>
                        <input
                            type="text"
                            required={false}
                            value={deliveryMan}
                            placeholder="Start"
                            className="form-control mb-2"
                            onChange={(el) => setDeliveryMan(el.target.value)}
                        />
                    </div>
                </div>
                
            </div>
            <div className="d-grid">
                <button className="btn edit" type="submit">
                    Lưu thay đổi
                </button>
            </div>
        </form>
    )
}


const EditTaskModal = ({ task, toggle, visible, updateTask }) => {
    return (
        <>
            {visible && <div className="modal-backdrop fade show"></div>}
            <div className={"modal fade " + (visible ? "show d-block" : "")}>
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Task</h5>
                            <button
                                type="button"
                                onClick={toggle}
                                className="btn-close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <CForm updateTask={updateTask} task={task} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditTaskModal;