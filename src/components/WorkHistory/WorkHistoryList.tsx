import { useEffect } from "react"
import WorkCard, { WorkProp } from "./WorkCard"
import './WorkHistoryList.css'

export type WorkHistoryListProps = {
    list: WorkProp[],
}

const WorkHistoryList = ({ list }: WorkHistoryListProps) => {
  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = []; 
    const cardList = document.querySelectorAll('.WorkHistoryList-Card');

    cardList.forEach((c, i) => {
      const t = setTimeout(() => {c.classList.add('appear')}, (200 * i));
      timeouts.push(t);
    });

    return () => {
      timeouts.forEach(t => clearTimeout(t));
    }
  }, [])
  
  
  return (
    <div className="WorkHistoryList-Wrapper">
        <div className="WorkHistoryList-Content">
            {list.map(w => (
              <div className="WorkHistoryList-Card"><WorkCard detail={w} /></div>
            ))}
        </div>
    </div>
  )
}

export default WorkHistoryList