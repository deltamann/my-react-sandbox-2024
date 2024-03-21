export type ContentProp = {
    title: string,
    level: 1 | 2 | 3
    description?: string[] | JSX.Element[],
    list?: string[],
};

const ContentBlock = ( {content}: {content : ContentProp}) => {
    const outputTitle = (content: ContentProp) => {
        switch (content.level) {
            case 1:
                return (<h2>{content.title}</h2>)
            case 2:
                return (<h3>{content.title}</h3>)
            case 3:
                return (<h4>{content.title}</h4>)
        }
    }

    const outputContent = (content: ContentProp) => {
        let output: JSX.Element[] = [];
        if (content.description) {
            content.description.forEach(s => {
                output.push((<p>{s}</p>))
            });
        }
        if (content.list) {
            output.push((<ul>
                {content.list.map(s => (<li>{s}</li>))}
            </ul>));
        }
        return output;
    } 

    return (
        <div className="ContentBlock-Wrapper">
            <div className="ContentBlock-MainContent">
                {outputTitle(content)}
                {outputContent(content)}
            </div>
        </div>
    );
}

export default ContentBlock;