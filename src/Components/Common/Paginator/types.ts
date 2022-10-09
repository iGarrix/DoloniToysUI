export interface IPaginatorProps {
    total: number,
    inititalPage?: number,
    onPaginate: (e: number) => void,
}
