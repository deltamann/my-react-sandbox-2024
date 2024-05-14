import ContentBlock from "../common/ContentBlock"
import './WorkCard.css'

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
            <div className="WorkCard-Content">
                <h2>{detail.title}</h2>
                <p>
                    <span className="WorkCard-CompanyName">
                        {
                            detail.link
                                ? <a href={detail.link} rel="noreferrer" target="_blank">{detail.company}</a>
                                : detail.company
                        }
                    </span>&nbsp;&nbsp;
                    <span className="WorkCard-Duration">{detail.start} - {detail.finish || 'Present'}</span>
                </p>
                <hr />
                <div className="WorkCard-Details">
                    <div className="WorkCard-Roles">
                        <ContentBlock content={{ level: 2, title: 'Roles:', list: detail.responsibilities }} />
                    </div>
                    <div className="WorkCard-Achievements">
                        <ContentBlock content={{ level: 2, title: 'Achievements:', list: detail.achievements }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard