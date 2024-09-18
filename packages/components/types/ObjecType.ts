export type ObjectType = {
    [key:string]:any
}

export type OptionType = Partial<{
    label:string | number,
    value:string | number,
    id: string | number,
    dec:string | number,
    color:string | null
}> 