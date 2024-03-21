import ContentBlock, { ContentProp } from "../components/common/ContentBlock"

type Props = {}

const KeySkillList: ContentProp[] = [
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

const TechSkillList: ContentProp[] = [
    { 
        level: 3,
        title: "Frontend",
        description: ['HTML5, Javascript(ES6)/Typescript, CSS, LESS, SASS, MVC, jQuery, AngularJS, Angular + NgRx, React'],
    },
    { 
        level: 3,
        title: "Backend",
        description: ['PHP, C#, .NET Framework / .NET Core, Python'],
    },
    { 
        level: 3,
        title: "Data Layer",
        description: ['SQL, MySQL'],
    },
    { 
        level: 3,
        title: "Others",
        description: ['Wordpress, Joomla!, Drupal, Stencil.js, Node.js, Git, Microsoft Azure and Power Platform, Business Central AL'],
    },
]

const Skills = () => {
  return (
    <div className="SkillsPage">
        <h1>Key Skills</h1>
        <div className="SkillsPage-Key">
            {KeySkillList.map(s => (<ContentBlock content={s} />))}
        </div>
        <div className="SkillsPage-Tech">
            <h2>Technical Skiils</h2>
            <p>8+ experience in the IT sector, and always learning new technologies fast, including</p>
            <div className="SkillsPage-TechList">
            {TechSkillList.map(s => (<ContentBlock content={s} />))}
            </div>
        </div>
    </div>
  )
}

export default Skills