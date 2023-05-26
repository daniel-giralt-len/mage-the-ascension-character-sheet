
export const formInteractionStyling = ({isDelete = false, readOnly = false}) =>{
    if(readOnly){
        return ''
    }
    return `
    :hover {
        background: ${isDelete ? '#9a1818' : '#27189a'};
    }
    :active {
        background: #719a18;
    }
`}