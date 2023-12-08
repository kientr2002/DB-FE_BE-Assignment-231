import React from 'react'
import { makeStyles } from '@mui/styles';
import TaskRoute from './TaskRoute'

const useStyles = makeStyles(() => ({
  container: {
    padding: '20px',
  },
  taskroute: {
    margin: '20px'
  },
  title: {
    fontWeight: '700',
    background: 'linear-gradient(180deg, #426DEC 0%, #86C991 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }
}))
const TaskRoutes = ({handleChangePage}) => {
  const styles = useStyles()
  let routeList = [
    {taskID: 'R11A', routeName: 'Tuyến đường A', status: 'Đã giao'},
    {taskID: 'R11B', routeName: 'Tuyến đường B', status: 'Đã giao'},
    {taskID: 'R11C', routeName: 'Tuyến đường C', status: 'Đã giao'},
    {taskID: 'R11D', routeName: 'Tuyến đường D', status: 'Đang giao'},
    {taskID: 'R11E', routeName: 'Tuyến đường E', status: 'Chưa giao'},
    {taskID: 'R11F', routeName: 'Tuyến đường F', status: 'Chưa giao'},
  ];
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>TUYẾN ĐƯỜNG</h3>
      {routeList.map((route, idx) => (
        <TaskRoute className={styles.taskroute} key={idx} taskID={route.taskID} routeName={route.routeName} status={route.status} handleChangePage={handleChangePage}/>
      ))}
      {/* <TaskRoute taskID="R11A" routeName={routeList[1].routeName} status={routeList[1].status} /> */}

    </div>
  )
}
export default TaskRoutes;