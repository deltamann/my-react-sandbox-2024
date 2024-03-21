import ContentBlock from "../common/ContentBlock"

export type WorkProp = {
    title: string,
    company: string,
    link?: string,
    start: string,
    finish?: string,
    responsibilities: string[],
    achievements: string[],
}

const WorkCard = ({ detail }: { detail: WorkProp }) => {
  return (
    <div className="WorkCard-Wrapper">
        <div className="WorkCard-content">
            <h2>{detail.title}</h2>
            <p className="WorkCard-CompanyName">{detail.company}</p>
            <p className="WorkCard-Duration">{detail.start} - {detail.finish || 'Present'}</p>
            <div className="WorkCard-Details">
                <div className="WorkCard-Roles">
                    <ContentBlock content={{level: 2, title: 'Roles:', list: detail.responsibilities}} />
                </div>
                <div className="WorkCard-Achievements">
                    <ContentBlock content={{level: 2, title: 'Achievements:', list: detail.achievements}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard