import ContentBlock, { ContentProp } from "../components/common/ContentBlock"

type Props = {}

const content: ContentProp = {
    level: 1,
    title: "Personal Summary",
    description: [`I have a background in software engineering and specialize in website and online application development, with more than 8 years of working experience. Currently, I am looking for roles that can help me gain more skills and experience in various industries, as well as improve my knowledge in the Information Technology sector.`
    ,`I am a good listener and communicator, organized, and has proven experience in maintaining and managing business websites and large web applications. I pay attention to small details, which aids in finding issues and solving problems. I am also open-minded to recommendations and feedback, always willing to learn and improve myself in both personal and professional aspects.`]
}

const education: ContentProp = {
    level: 1,
    title: "Education",
    description: [(<span><strong>Bachelor of Software Engineering</strong> - University of Auckland, 2009</span>)]
}

const Home = (props: Props) => {
    return (
        <div className="HomePage">
            <div className="HomePage-Summary">
                <h1>Vincent Yu</h1>
                <ContentBlock content={content} />
            </div>
            <div className="HomePage-Education">
                <ContentBlock content={education} />
            </div>
        </div>
    )
}

export default Home