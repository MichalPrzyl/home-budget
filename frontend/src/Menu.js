import Category from "./Category";

const Menu = (props) => {
    const changeTab = (e) => {
        props.setTab(e);
    }

    return (
        <>
            <div className={props.className}>
                <div onClick={(e)=>changeTab('category')}>Kategorie</div>
                <div onClick={(e)=>changeTab('second')}>Druga zakładka</div>
                <div>test3</div>
                <div>test4</div>
            </div>
        </>
    )
}

export default Menu;