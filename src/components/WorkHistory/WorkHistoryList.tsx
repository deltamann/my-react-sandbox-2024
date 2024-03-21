import WorkCard, { WorkProp } from "./WorkCard"

export type WorkHistoryListProps = {
    list: WorkProp[],
}

const WorkHistoryList = ({ list }: WorkHistoryListProps) => {
  return (
    <div className="WorkHistoryList-Wrapper">
        <div className="WorkHistoryList-Content">
            {list.map(w => (
                <WorkCard detail={w} />
            ))}
        </div>
    </div>
  )
}

export default WorkHistoryList