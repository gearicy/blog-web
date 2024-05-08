export default interface IComment {
    id?: number
    articleId?: number
    nickName: string
    content: string
    createTime?: Date
    status?: number,
    isOwner: number
}