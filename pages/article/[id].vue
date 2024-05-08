<template>
	<!-- 内容 -->
    <div class="container">
        <div class="banner">
            <img :src="'/api/' + article.coverImg" :alt="article.title">
            <div class="poster-info">
                <div class="poster-title">{{article.title}}</div>
                <ul class="poster-performance">
                    <li class="performance__item"><span class="yyc yy-bear"></span> <span>gearicy</span></li>
                    <li class="performance__item"><span class="yyc yy-date"></span> <span>{{dateFormat(article.createTime)}}</span></li>
                    <li class="performance__item"><span class="yyc yy-fire"></span> <span>{{article.viewCount}}</span></li>
                    <li class="performance__item"><span class="yyc yy-comment"></span> <span>{{article.commentCount}}</span></li>
                    <li class="performance__item"><span class="yyc yy-heart"></span> <span>YYF</span></li>
                </ul>
            </div>
        </div>
        <div class="poster-wrap">
            <div class="poster-content" v-html="article.html"></div>
            <div class="poster-update">
                <span>本文最后更新于 {{dateFormat(article.updateTime)}}</span>
                <span><NuxtLink :to="`/article/list/${article.categoryId}/1`">{{article.categoryName}}</NuxtLink></span>
            </div>
            <!-- <client-only>
                <div class="poster-tips" v-if="getPlatform() === 'PC'">各位看官，如果觉得我的文章对您有帮助，请鼓励鼓励吧～～</div>
                <div class="poster-tips" v-else>如果文章对您有帮助，请鼓励鼓励吧～～</div>
            </client-only>
            <div class="poster-like">
                <img src="~/assets/images/pay-wechat.png" alt="微信收款">
                <img src="~/assets/images/pay-ali.png" alt="支付宝收款">
            </div> -->
            <div class="poster-notice">
                <span>作者：gearicy YYF</span>
                <span>声明：转载请注明文章出处</span>
                <span>地址：https://www.gearicy.top/article/{{article.id}}</span>
            </div>
            
            <div class="poster-comment">
                <div class="comment-title">
                    <span class="yyc yy-edit"></span>
                    <span>评论</span>
                </div>
				<div class="comment-nickname-wrapper">
					<input type="text" v-model="comment.nickName" class="comment-nickname" placeholder="昵称（最多8个字）">
				</div>
                <div class="comment-input">
                    <textarea ref="commentInput" name="comment" v-model="comment.content" cols="30" rows="10" placeholder="写下点什么..."></textarea>
                </div>
                <div class="comment-submit">
                    <div class="comment-emoji" @click="showEmoji = !showEmoji" :class="{'comment-emoji-active': showEmoji}">
                        <span class="yyp yy-emoji-flash" v-if="showEmoji"></span>
                        <span class="yyp yy-emoji" v-else></span>
                    </div>
                    <div class="comment-btn" @click="submitComment(false)">提交</div>
                </div>
                <div class="comment-emoji-list" v-show="showEmoji">
                    <div class="emoji-item" v-for="(item, index) in emoji" :key="index" @click="addEmoji(item)">{{item}}</div>
                </div>
            </div>

			<div class="comment-none" v-if="article.commentCount === 0"><i>来发第一个评论啦～</i></div>
			<div class="comment-list" v-else>
                <div class="comment-total">Comments | {{article.commentCount}} 条评论</div>
				<div class="comment-list__item" v-for="(item, index) of commentList" :key="item.id">
					<div class="comment-item-info">
						<div class="info-left">
							<span class="nickname">{{item.nickName}}</span>
                            <span class="ownertag" v-if="item.isOwner === 1">站长</span>
							<span class="datetime">{{ dateFormat(item.createTime!) }}</span>
						</div>
                        <div class="info-right" @click="onReply(item.nickName)">#{{ (currentPage - 1) * 6 + index + 1 }} 回复</div>
					</div>
					<div class="comment-item__content" v-html="item.content"></div>
				</div>
            </div>
            <div class="paging" v-if="pageTotal > 1">
                <button class="paging__button" @click="pagingPrev" :disabled="currentPage === 1">上一页</button>
                <div class="paging__size">{{ currentPage }} / {{pageTotal}}</div>
                <button class="paging__button" @click="pagingNext" :disabled="currentPage === pageTotal">下一页</button>
            </div>
        </div>
    </div>
    <client-only>
		<xe-toast v-model="toastShow">{{ toastText }}</xe-toast>
		<xe-dialog v-model="dialogShow">
			<div class="dialog-title">回复：{{currentNickName}}</div>
			<div class="dialog-bodys">
				<div class="comment-nickname-wrapper">
					<input type="text" v-model="reply.nickName" class="comment-nickname" placeholder="昵称（最多8个字）">
				</div>
                <div class="comment-input">
                    <textarea name="reply" v-model="reply.content" cols="30" rows="10" placeholder="写下点什么..."></textarea>
                </div>
			</div>
			<div class="dialog-foots">
				<button type="button" @click="dialogShow = false">取消</button>
				<button type="button" @click="submitComment(true)" :disabled="loading">{{loading ? 'Loading' : '提交'}}</button>
			</div>
		</xe-dialog>
    </client-only>
</template>

<script lang="ts" setup>
import { IArticleDetail } from 'models/IArticle'
import IComment from 'models/IComment';
import Prism from 'prismjs'

const emoji = [
    '😊', '😀', '😂', '😭', '🥸', '🥱', '🫠', '😘', '😚', '😜', '🤪',
    '😋', '🤨', '🤫', '🤔', '😮‍💨', '🙄', '😎', '😱', '😤', '😡', '😵‍💫',
    '🤕', '😴', '🫣', '😍', '🤩', '😉', '😅', '😷', '🤬', '😵', '🥺',
    '👍', '👏', '🎉', '💋', '🧨', '🌹', '🎄', '💀', '👻', '💩', '💣'
]
const showEmoji = ref(false)
const commentInput = ref<HTMLTextAreaElement>()
const insertTextAtCursor = (commentInput:HTMLTextAreaElement | undefined, text: string) => {
    if (commentInput) {
        let startPos = commentInput.selectionStart; // 获取光标起始位置
        let endPos = commentInput.selectionEnd; // 获取光标结束位置
    
        // 将字符插入到光标位置
        comment.content = comment.content.substring(0, startPos) + text + comment.content.substring(endPos);
    
        // 重新获取焦点
        commentInput.focus();
    }
}
const addEmoji = (item: string) => {
    insertTextAtCursor(commentInput.value, item)
}



const route = useRoute()
const id = route.params.id
const article = await useServerRequest<IArticleDetail>(`web-article/${id}`)

useHead({
    title: article.title,
    meta: [
        { name: 'keywords', content: article.keyword },
        { name: 'description', content: article.intro },
    ]
})

onMounted(async () => {
    await nextTick(() => {
        Prism.highlightAll()

        /**
         * 由于 markdown 生成的 a 标签无法添加 target="_blank" 属性
         * 所以在此处通过 js 添加
         * 注意：此段代码必须放在 onMounted 生命周期内
         */
        const content = document.querySelector('.poster-content')
        const aTags = content?.querySelectorAll('a')
        if (aTags && aTags.length > 0) {
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].setAttribute('target', '_blank')
            }
        }
    })
})

const pageTotal = ref(0)
const currentPage = ref(1)
const commentList = ref<IComment[]>([])
const pageSize = 6
const getCommentList = async () => {
    const result = await useServerRequest<{ list:IComment[], total: number }>('web-comment', { query: { articleId: article.id, pageIndex: currentPage.value, pageSize } })
    commentList.value = result.list
    pageTotal.value = Math.ceil(result.total / pageSize)
}
const pagingPrev = async () => {
    if (currentPage.value > 1) {
        currentPage.value -= 1
        getCommentList()
    }
}
const pagingNext = async () => {
    if (currentPage.value < pageTotal.value) {
        currentPage.value += 1
        getCommentList()
    }
}
getCommentList()


// 评论
const comment = reactive<IComment>({
    articleId: article.id,
    status: 0,
    content: '',
    nickName: '',
    isOwner: 0
})

// 回复
const reply = reactive<IComment>({
    articleId: article.id,
    status: 0,
    content: '',
    nickName: '',
    isOwner: 0
})
const currentNickName = ref('')
const onReply = (nickName: string) => {
	currentNickName.value = nickName
	dialogShow.value = true
}

const toastShow = ref(false)
const toastText = ref('')

const checkData = (comment: IComment) => {
	if (!comment.nickName) {
		return { result: false, msg: '请填写昵称！' }
	}
	if (comment.nickName.length > 8) {
		return { result: false, msg: '昵称最多只能填写8个字！' }
	}
	if (!comment.content) {
		return { result: false, msg: '请填写评论！' }
	}
	return { result: true, msg: '' }
}

const loading = ref(false)
const submitComment = async (isReply: boolean) => {
	const check = isReply ? checkData(reply) : checkData(comment)
	if (!check.result) {
		toastText.value = check.msg
		toastShow.value = true
		return
	}

    // 移除用户输入的html标签，防止 js 注入
    const noHTMLContent = isReply ? reply.content.replace(/<\/?[^>]*>/g, '') : comment.content.replace(/<\/?[^>]*>/g, '')

    // 回复时，加上 @昵称
	const mention = `<span class="mention">@${currentNickName.value}</span> ${noHTMLContent}`
    
	const bodyParams:IComment = isReply ? {...reply, content: mention } : { ...comment, content: noHTMLContent }
    loading.value = true
    const commentResult = await useServerRequest<IComment>('web-comment', { body: { ...bodyParams }, method: 'POST' })
    loading.value = false
	if (commentResult.id) {
		isReply ? (reply.content = '') : (comment.content = '')
		toastText.value = '评论提交成功，等待站长审核！'
		dialogShow.value = false
		toastShow.value = true
	} else {
		toastText.value = '评论提交失败！'
		toastShow.value = true
	}
}

const dialogShow = ref(false)
</script>

<style scoped>@import url("~/assets/styles/article.css");</style>