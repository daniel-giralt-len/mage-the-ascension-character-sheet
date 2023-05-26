
export const formInteractionStyling = ({isDelete = false, readOnly = false}) =>{
    if(readOnly){
        return ''
    }
    return `
    :hover {
        background: ${isDelete ? 'red' : 'blue'};
    }
    :active {
        background: yellow;
    }
`}