const DropDownBox = (props : any):JSX.Element => {
    return (
        <>
            <button className="DropDownItem">{props.items}</button>
        </>
    );
}

export default DropDownBox;