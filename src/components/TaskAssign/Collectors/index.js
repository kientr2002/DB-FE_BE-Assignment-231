import React from 'react';
import "./Button.css";

export const Collectors = ({childToParent}) => {
  const vehicles = [
    {id: 'V50', name: '50G-123.53'},
    {id: 'V51', name: '53G-758.13'}
  ]
  const collectors = [
    {id: 'C1002', name: 'VÕ VĂN A'},
    {id: 'C1004', name: 'PHẠM NGỌC C'},
    {id: 'C1006', name: 'NGUYỄN NHẬT E'},
  ]
  // const handleSubmit = ({childToParent}) => {
  // }
  return (
      // <form onSubmit={handleSubmit()}>
      <form method='post' id="collector_form" style={{fontSize: '1.5em', padding: "0 2rem"}}>
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label">ID-Router:</label>
          <div class="col-sm-7">
              <p>R11A - Router A</p>
          </div>
        </div>

        <div class="row mb-3">
            <label class="col-sm-3 col-form-label">Phương tiện:</label>
            <div class="col-sm-7">
                <select name="area" class="form-control">
                    <option value="" selected>Chọn phương tiện</option>
                    {vehicles.map((vehicle) => (
                      <option value={vehicle.id}> {vehicle.name} </option>
                    ))}
                    {/* <option value="V51"> 53G-758.13 </option> */}
                </select>
            </div>
          </div>

        <div class="row mb-3">
            <label class="col-sm-3 col-form-label">Collector:</label>
            <div class="col-sm-7">
                <select name="Janitor" class="form-control">
                    <option value="" selected>Chọn Collector</option>
                    {collectors.map((collector) => (
                      <option value={collector.id}> {collector.name} </option>
                    ))}
                    {/* <option value="C1002"> VÕ VĂN A </option>
                    <option value="C1004"> PHẠM NGỌC C </option> */}
                </select>
            </div>
        </div>

        <div class="row mb-3">
          <label class="col-sm-3 col-form-label">Timestamp:</label>
          <div class="col-sm-7">
              <input type="time" name="Time" class="form-control"/>
          </div>
        </div>

        <div class="row mb-3">
          <label class="col-sm-3 col-form-label">Ghi chú</label>
            <div class="col-sm-7 row-mb-2" >
                <input type="text" id="Note" name="Note" class="form-control" placeholder="Ghi chú" />
            </div>
        </div>

        <div class="clearfix">
          {/* <button class="confirm" href="" onClick={() => childToParent('route')}>Confirm</button> */}
        </div>
      </form>
    // </div>
  )
}