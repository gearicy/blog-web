export default interface IResponse<T> {
    code: string
    data: T
    tips: string
}