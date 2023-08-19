import Category from "./Category";
import Another from "./Another";

const Content = (props) => {

    const getContent = (tab) => {
        if (tab=="category"){
            return <Category />
        }
        else if (tab=="second"){
            return <Another />
        }
    }
    
    return getContent(props.tab);
}

export default Content;