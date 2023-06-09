export type ButtonProps = {
    isSquare?: boolean
}

export type AddButtonProps = {
    onClick?: (event: any) => void
} & ButtonProps


export type ConfigButtonProps = {
    isSelected?: boolean
} & ButtonProps