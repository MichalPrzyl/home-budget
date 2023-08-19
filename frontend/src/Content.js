import CategoryApp from "./Category";
import AnotherApp from "./Another";

const Content = (props) => {

    const getContent = (tab) => {
        if (tab=="category"){
            return <CategoryApp />
        }
        else if (tab=="second"){
            return <AnotherApp />
        }
    }
    
    return <div className={props.className}>{getContent(props.tab)}</div>;
}

export default Content;