import React from 'react';
import "./Button.css";
export const Janitors = ({childToParent}) => {
  const areas = [
    {id: 'Q10', name: 'Quận 10'},
    {id: 'Q2', name: 'Quận 2'},
    {id: 'Q1', name: 'Quận 1'},
    {id: 'Q5', name: 'Quận 5'},
    {id: 'TD', name: 'Thủ Đức'},
  ]
  const trollers = [
    {id: 'T100', name: "T100"},
    {id: 'T101', name: "T101"},
    {id: 'T102', name: "T102"},
  ]
  const janitors = [
    {id: 'J1024', name: 'NGUYỄN VĂN A'},
    {id: 'J1005', name: 'NGUYỄN THỊ B'}
  ]
  const mcps = [
    {id: 'MCP10-Q10', name: "MCP Lý Thường Kiệt Quận 10"},
    {id: 'MCP1-Q5', name: "MCP Nguyễn Tri Phương Quận 5"},
  ]
  return (
    // <div className={styles.container}>
      <form method="post" style={{fontSize: '1.5em', padding: "0 2rem"}}>
        <div class="row mb-3">
            <label class="col-sm-3 col-form-label">Khu vực:</label>
            <div class="col-sm-7">
                <select name="area" class="form-control">
                    <option value="" selected>Chọn khu vực</option>
                    {areas.map((area) => (
                      <option value={area.id}>{area.name}</option>
                    ))}
                    {/* <option value="Q10"> Quận 10 </option>
                    <option value="TD"> Thủ Đức </option> */}
                </select>
            </div>
        </div>

        <div class="row mb-3">
            <label class="col-sm-3 col-form-label">Troller:</label>
            <div class="col-sm-7">
                <select name="Troller" class="form-control">
                    <option value="" selected>Chọn troller</option>
                    {trollers.map((troller) => (
                      <option value={troller.id}>{troller.name}</option>
                    ))}
                    {/* <option value="T100"> T100 </option>
                    <option value="T101"> T101 </option> */}
                </select>
            </div>
        </div>

        <div class="row mb-3">
            <label class="col-sm-3 col-form-label">Janitor:</label>
            <div class="col-sm-7">
                <select name="Janitor" class="form-control">
                    <option value="" selected>Chọn Janitor</option>
                    {janitors.map((janitor) => (
                      <option value={janitor.id}>{janitor.name}</option>
                    ))}
                    {/* <option value="J1024"> NGUYỄN VĂN A </option>
                    <option value="J1005"> TRẦN THỊ B </option> */}
                </select>
            </div>
        </div>

        <div class="row mb-3">
            <label class="col-sm-3 col-form-label">MCP tiếp nhận:</label>
            <div class="col-sm-7">
                <select name="MCP" class="form-control">
                    <option value="" selected>Chọn MCP</option>
                    {mcps.map((mcp) => (
                      <option value={mcp.id}>{mcp.name}</option>
                    ))}
                    {/* <option value="MCP10-Q10"> MCP Lý Thường Kiệt Quận 10 </option>
                    <option value="MCP1-Q5"> MCP Nguyễn Tri Phương Quận 5 </option> */}
                </select>
            </div>
        </div>

        <div class="row mb-3">
            <label class="col-sm-3 col-form-label">Thời gian:</label>
            <div class="col-sm-7">
                <input type="time" name="Time" class="form-control" />
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