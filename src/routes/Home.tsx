import ContentBlock, { ContentProp } from "../components/common/ContentBlock"

type Props = {}

const content: ContentProp = {
    level: 1,
    title: "Personal Summary",
    description: [`I have a background in software engineering and specialize in website and online application development, with more than 8 years of working experience. Currently, I am looking for roles that can help me gain more skills and experience in various industries, as well as improve my knowledge in the Information Technology sector.`
    ,`I am a good listener and communicator, organized, and has proven experience in maintaining and managing business websites and large web applications. I pay attention to small details, which aids in finding issues and solving problems. I am also open-minded to recommendations and feedback, always willing to learn and improve myself in both personal and professional aspects.`]
}

const SkillList: ContentProp[] = [
    { 
        level: 2,
        title: "Motivated:",
        list: [
            'Willing to learn new technologies and improve personal skills.',
            'Committed to a task assigned, either from others or self-initiated.',
            'Learned a variety of technical skills in a working environment and still actively learning.',
        ]
    },
    { 
        level: 2,
        title: "Teamwork:",
        list: [
            'Strong believer that teamwork is important in achieving a goal.',
            'Provided critical feedbacks and suggestions in code reviews.',
            'Supported multiple development teams across company.',
        ]
    },
    { 
        level: 2,
        title: "Communications:",
        list: [
            'Good in written communications and writing comments/documentations.',
            'Active listening, attend to details and clarify understanding before starting a task.',
            'Multilingual, able to speak English and Chinese fluently.',
        ]
    },
    { 
        level: 2,
        title: "Problem Solving:",
        list: [
            'Persistent problem solver and observant in details.',
            'Identified critical bugs in development.',
            'Explore creative solutions to resolve tough problems.',
        ]
    },
]

const Home = (props: Props) => {
    return (
        <div className="HomePage">
            <div className="HomePage-Summary">
                <h1>Vincent Yu</h1>
                <ContentBlock content={content} />
            </div>
        </div>
    )
}

export default Home