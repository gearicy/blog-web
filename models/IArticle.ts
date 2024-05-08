interface IArticleList {
    id: number
    title: string
    intro: string
    coverImg: string
    viewCount: number
    createTime: Date
    commentCount: number
    categoryId: number
    categoryName: string
}

interface IArticleRecommend {
    id: number
    title: string
    intro: string
    coverImg: string
    createTime: Date
}

interface IArticleDetail {
    id: number
    title: string
    coverImg: string
    viewCount: number
    intro: string
    keyword: string
    html: string
    createTime: Date
    updateTime: Date
    commentCount: number
    categoryName: string
    categoryId: number
}

export type { IArticleList, IArticleRecommend, IArticleDetail }