import WorkHistoryList from "../components/WorkHistory/WorkHistoryList"
import WorkList from "../content/WorkList.json"


const WorkHistory = () => {
  return (
    <div className="WorkHistory-Wrapper">
        <div className="WorkHistory-Content">
            <h1>Work/Career History</h1>
            <WorkHistoryList list={WorkList.list} />
        </div>
    </div>
  )
}

export default WorkHistory