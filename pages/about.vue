<template>
	<div class="back-image"></div>
    <div class="container">
        <section class="about-title">
            <span>对酒当歌，人生几何？</span>
        </section>
        <section class="about-content">
            <div class="profile">
                <div class="avatar"><img src="~/assets/images/yyf.jpeg" alt="gearicy" width="100%" height="100%"></div>
                <div class="profile__title">基本信息</div>
                <ul class="base-info">
                    <li>姓名：gearicy</li>
                    <li>昵称：小贰 / 峰子</li>
                    <li>性别：男</li>
                    <li>年龄：1991年生</li>
                    <li>婚姻：已婚</li>
                    <li>籍贯：湖北 黄石 阳新</li>
                    <li>身高：177cm</li>
                    <li>体重：62kg</li>
                    <li>学校：阳新兴国高中 湖北师范学院</li>
                    <li>职业：码农 程序员</li>
                </ul>
                <div class="profile__title">联系方式</div>
                <ul class="base-info">
                    <li>扣扣：281542025</li>
                    <li>扣群：752322915</li>
                    <li>微信：icoomn</li>
                    <li>邮箱：aaron.yyf@qq.com</li>
                </ul>
                <div class="profile__title">兴趣爱好</div>
                <div class="base-info" style="text-align:justify;">
                    编程 篮球 电子游戏 动漫 跑酷 美剧 不正经 美食 英语 粤语 听歌
                </div>
            </div>
            <div class="introduce">
                <h3>博客开发</h3>
                <p>
                    其实很早就有开发一个自己个人博客的想法，但是一直没有付诸行动，如今大家能看到此页面，说明我的博客终于是上线啦，撒花～～
                    在开发这个博客之前，我都是在知乎上写些东西，但是吧，平台规则限制，时不时就有些文章或者回答被屏蔽了，所以还是有一个自己
                    的内容空间好啊！！！
                </p>
                <p>
                    整个博客网站由本人独立开发完成，页面 UI 方面参考了很多其他人的博客风格，最终呈现了这个样子。一个美观的页面对于用户的体
                    验影响是非常大的，所以尽量把页面做得美观我觉得是很有必要的。
                </p>
                <p>
                    开发使用的技术，用户端由于考虑到 SEO ，所以做了 SSR，使用的 Nuxt3 框架。管理后台则是使用的 VUE3 + TypeScript +
                    ElementPlus。至于后端 API 的话则是使用的 NodeJs + NestJs + Prisma，数据库使用的是 Sqlite 。
                </p>
                <p>
                    自己一个人从 0 到 1开发一个项目还是很爽的，所有东西都由自己决定，想要怎么设计，怎么改，都行。当然要做的东西也很多：框架
                    搭建，页面样式，数据库设计，API接口开发，测试联调，域名&备案，项目打包发布，服务器&部署，SEO推广等等。这一切都搞定之后，
                    收获的则是满满的成就感。
                </p>

                <h3>个人经历（万字长文）</h3>
                <p>
                    1991年生，湖北黄石阳新人，目前居住在武汉，算起来干开发也10来年了，算是个老司机。但是技术而言，也不敢说自己多厉害，刚好够
                    养家糊口而已。
                </p>
                <p>
                    2009年毕业于阳新兴国高中，高考成绩很差，志愿报的湖北工业大学的专科。本打算复读一年（想搞个本科）， 所以湖工招生办打电话来
                    确认的时候，我推辞掉了他们的录取名额。快要开学的时候，我反悔了，不想复读了，家人也没有逼我，不过此时湖工的录取也推辞了，搞
                    得就没学校读了，有点尴尬。后来湖北师范学院的自考招生办给我打电话，说他们那里招生没有要求，而且毕业后还可以拿到本科证。在没
                    有其它选择的情况下，于是就去湖师读了自考本科。报的是电子商务专业，而实际授课都是编程相关的，我到现在都不确定这个专业属不属
                    于计算机类。反正就这样，误打误撞进入了编程领域！
                </p>
                <p>
                    大学三年，我主修的编程语言是 C# 和 SQL， 当时学校的课程有 PHP，C#，PS设计 这个三个方向，老师让大家选一个方向主修，进行深
                    入学习，其他的可学可不学。我当时就选择了 C#，既然是后端开发，肯定少不了数据库，所以 SQL 也是主修课程。现在我觉得挺奇怪的，
                    为什么当时没有 JAVA 课程？
                </p>
                <p>
                    2012年毕业离校，和同学一起来了武汉，合租了一个老房子，然后就开始了投简历，找工作。当时也有同学毕业后选择了参加培训，他们大概
                    是觉得在学校学的那点东西出来很难找到工作，对自己没信心吧。在他们那了解到，去培训学校（武汉北大青鸟）也需要一笔不小的费用，记得
                    当时好像是培训半年一万多。听到这个数字，我就忍不住感概，他们是真有钱。 
                </p>
                <p>
                    我的面试还算顺利吧，一个星期确定了工作，一家小型的传媒公司，岗位是 .Net 开发工程师，薪资 1800/月。当时对工作也没啥追求，一心
                    只想着能找到工作就行，因为我也对自己没信心。入职后公司 IT 部门的人员配置：3个后端 + 2个美工+ 2个设计。此时正是 jQuery 风靡
                    一时的时候，不存在前后端分离，所以当时前端的岗位名称为：美工。美工的职责也很简单，就是把设计人员做出来的网页效果图进行切图，然
                    后编写成静态的 HTML，甚至不用写 JS 代码。这也就是后来一些前端开发人员调侃自己是切图仔的由来。
                </p>
                <p>
                    入职刚开始的半年压力是真的大，有时候甚至想逃离，不会的东西太多了。当时公司所用的技术 Asp.net MVC + Linq + ORM + JS + jQuery
                    等等我是全都不会，因此每天下班回家后我都会看书学习，来填补自己的知识空缺。还好当时带我的师傅人很好，教了我很多东西，虽然他经常被
                    我搞的无语，但过后还是会给我讲解我不懂的知识点，非常感谢他！
                </p>
                <p>
                    这第一家公司我做了两年多点的时间，这两年期间成长了很多，JS 和 CSS 也是在这两年里学会的。虽然是后端，但是由于美工不会 JS，所以所
                    有的页面交互都由后端程序员完成，在这两年里我写了大量的 JS 代码。当然 .Net 相关的知识也没有落下～
                </p>
                <p>
                    时间来到2015年，机缘巧合入职了一家外企，面试了 4 轮，印象很深。为什么说机缘巧合呢？因为就我这稀烂的英语水平和学历，能入职外企真的
                    是很幸运。是什么原因我最终能通过面试呢？第一，公司负责人听说我是阳新人，倍感亲切，你懂的。第二，我有写博客的习惯，在我的简历中我附上
                    了我的博客地址，面试官看了我的文章，对我表示认可。第三，国外华人对我进行视频面试的时候，我回答的还算可以。第四，岗位要求写的是要招
                    一个会前端的 .Net 开发工程师。就这样，各种 BUFF 加持之下，成功入职了。
                </p>
                <p>
                    纯英文办公，里面的一切都是英文的，操作系统，软件，文档等等，交流用的最多的是电子邮件（outlook），开始很不适应，怕自己在这呆不下去。
                    所以从入职开始，我就逼着自己学习英语。不管怎么说，在公司待的这几年，英语总归是有进步的。
                </p>
                <p>
                    后来开始进入项目组，视频面试我的马来华人，也来了武汉这边主导项目的开发。他非常平易近人，而且中文讲的也特别好，所以交流这块没有什么压
                    力，私下里还经常一起出去吃饭看电影什么的。
                </p>
                <p>
                    第一个项目成功交付后，他对我的表现还是比较满意的，帮我在武汉负责人那里说了好话，后来我又跟着他做了几个项目。期间去过新加坡，马来西亚，
                    印尼，因为项目交付需要研发工程师一起到现场做实施，还有就是有时候过去出差，做需求讲解。印象比较深的是自己一个人去印尼的时候，入关被宰，
                    坐车被宰，妈蛋。去了印尼几次，没有哪一次海关不找我茬的～～
                </p>
                <p>
                    再后来，新加坡分公司那边项目人手不够，找武汉这边借人，然后我就被借调过去了，为期半年。当然，是征询过我意见的。确定了人员之后公司帮忙申
                    请了 EP，新家坡那边也帮忙租了组屋。
                </p>
                <p>
                    春节过后，2017年春，我就直接去了新加坡那边，进入了新的项目组。到了新环境，明显的不适应，跟之前出差住酒店完全不同。当地的很多规则，以
                    及生活常识都不知道，只能慢慢适应。而且我的直属上级是个印度人，交流障碍可想而知，本来英语就不行，再加上他那口音，直接凉凉。我时常分不清
                    他到底讲的是英语还是印度语。搞笑的是有一次我问他密码，他告诉我说： one to nine, 然后我输入 129，发现不行，告诉他说密码错误，他疑惑
                    的跑过来，在我的键盘上按下了 123456789 真是大写的尴尬～。后来遇到需求上的内容，我听不懂的，就让他写邮件给我，这样算是解决了沟通问题。
                </p>
                <p>
                    在新加坡项目一切都进行的很顺利，当项目接近尾声的时候，通知说可能需要我跟着一起去越南那边给客户做实施，问我有没有意见。我能有什么意见，反
                    正也没去过越南，欣然答应。但是计划赶不上变化，最终没能去成越南。原因是武汉这边接了一个大项目，急需人手，我被紧急召回了，哈哈：）
                </p>
                <p>
                    回武汉后，项目真的很大，公司扩招了一批人，专门来做这个项目。组员中光是测试就超过10人，我看到需求文档的时候惊呆了，4000多页，真就是一本
                    书啊。项目排期，开发计划定的是 3 年。之后的时间里，几个小组长绝大多数时候都在开需求会议，他们理解了需求之后再分派给组员。也就是这段时间，
                    项目组的成员加班非常严重，几乎每天都是晚上 9 点才下班。这样坚持了半年之后，我感觉扛不住了，想想 3 年的开发周期，这样下去根本看不到头啊。
                    于是乎萌生了想走的念头，后面最终提了离职，2018年离开了这家公司……
                </p>
                <p>
                    这家公司对于我技术的成长帮助同样是很大的，接触和学习到了不少的新东西。后端开发方面：Log4net / EF / Silverlight / WCF / WebService
                     / 盘古分词 / Lucene.net / Nhibernate / AutoMapper / SQL Reporter / VBA Excel宏 等等。前端开发方面： Bootstrap / KendoUI 
                     / AngularJs / Typescript 等等。
                </p>
                <p>
                    既然离职了，肯定得找新的工作。休息了一段时间过后，开始投简历参加面试了。说来也巧，正好这个时候我之前的同事找到我，说他们那边新成立项目组，需
                    要人手，问我要不要过去。后来去他们公司通过面谈了解了基本情况，老板想开发一个理财类的APP平台，通过和银行合作，把各个银行的直营类理财产品全都
                    汇总到这一个APP应用里面。市面上目前想要买哪家银行的理财产品，就需要下载哪家银行的APP，这样对于用户来说非常的麻烦，而且用户也无法直观的对比各
                    个银行的理财产品，从而进行筛选。
                </p>     
                <p>
                    既然用户有这方面需求，于是老板就萌生了这个想法。主要是老板有银行这方面的资源，所以想干这个事。基本情况了解了之后，我选择加入了他们。老板也比较
                    爽快，我入职没有试用期，直接就签了劳动合同。团队规模比较小，总共也就8个人，技术选型采用的 swift + webview 套壳的方式实现的。当时我的工作内
                    容和上家公司差不多，全栈开发，H5和后端接口都需要写。
                </p>
                <p>
                    后来这个项目做的很辛苦，因为和银行对接接口真是太难了。一是人家银行不怎么重视你，很多时候工作进度得不到保障，二是银行数据安全性要求很高，验签，
                    加密，防攻击这些，搞死个人，而且每个银行还不太一样。期间也经常出差，需要去银行那边常驻，待得最久的是杭州和北京，分别都住了几个月。北京当时是
                    和玖富集团合作，玖富旗下的悟空理财那个时候很火。老板和玖富那边有关系，所以他们答应在他们的应用中开放一个入口给我们，将我们的应用集成到他们的
                    APP中。
                </p>
                <p>
                    一切感觉都在有条不紊的进行着，但是到2019春节的时候，老板在群里通知说团队解散，节后不用来上班了，就很突然。后面公司给了一部分补偿，并多交了1个
                    月社保。哦豁，干了 1 年多点的时间，又失业了，有点被动。后来我也关注过项目的情况，搜索项目的官网和APP，发现都下架了，应该是彻底凉凉了。 
                </p>
                <p>
                    我和同事都失业了，我本打算是重新找工作的，但同事找我聊天，说要不要尝试下一起做一个自己的产品，先不找工作了。之后他跟我详细讲了他的想法，以及
					想要做的产品和一些相关准备。因为我当时买了房，加上还贷款，身上其实没什么钱，并不足以支撑我和他一起创业做项目。然后我就和他说了我目前的情况，
					他了解后，提出了一个方案：他每个月支付我一笔钱，维持我的基本开销，然后和他一起做这个项目，项目开发完成后，我可以去找工作，不过后期还是要一起
					维护这个项目（无偿），项目如果盈利了，会给我分红，当然我拿点小头。他这个方案提出来，我就没有了后顾之忧，果断就同意了。
				</p>
				<p>
					后来我们租了两个工位，因为一致觉得在家办公效率得不到保障，还是有个固定办公地点比较好。项目开发其实挺快的，前端用的 VUE，后端用的 .Net，差不
					多三个月的时间第一版就开发完成了，后来找了两个销售跑线下推广。理想很丰满，现实很骨感，推广下来的效果和预期相差太大。后面一边优化升级，一边挖
					掘客户，又过去了一个月，然而并没有明显成效。 
                </p>
				<p>
					此时我提出了去找工作，因为项目开发基本已经完成了，开发上工作量不多，推广方面我也帮不上什么忙，在这呆着他每月还要支援我钱，所以我觉得此时去找
					工作更合适一些。同事也同意了，因为客观来看，我确实没必要全天在这呆着，后面主要是看产品销售推广的情况了，有需求我帮忙修改维护就行了。
				</p>
				<p>
					这个时候是2019年6月，开始投简历了。有面试的时候我就去面试，没有面试我就还是去同事那边。一周多时间确定了工作，华为外包(前端开发)，签的中软国
					际的合同。你问我为什么去外包？一是当时急着找工作，手上也没有满意的 offer， 二是薪水相对来说较高。当然，加班也确实是严重，干了不到三个月就跑
					路了，哈哈哈！因为满三个月就要给我转正了，转正了再辞职就比较麻烦。
				</p>
				<p>
					这里和大家聊聊在华为外包的工作情况，上班地点在光谷八路未来科技城，每天早晚有班车固定接送，需刷卡。工作环境和银行类似，无外网，但可以使用手机，
					工作区内不准拍照，所有电脑不准插U盘，反正就是公司资产受到严格保护，生怕你泄露重要资料，源码等，入职培训的时候就会和你讲这些规矩。一周五天，
					一，三，五强制加班到晚上8点半，这是我最不能接受的点，没事干也要待到8点半，就很无语。我进的项目组，本身加班也严重，算上一三五强制加班，基本上
					就等于天天加班。不过加班会给你算时间，满8小时算一天，之后可以申请调休，不想调休的可以直接给你算成钱。
				</p>
				<p>
					当时进的项目组，项目已经成型了，进去也是属于维护，加需求，改BUG这些。期间不停的做报表，各种统计，图表。一款新机发布，就要立马出数据报表，什么销
					量图，客户故障机数量图这些，因为上级领导要看新机的各项数据，用来分析新机的市场行情。技术这块，后端用的 java，前端则是用的 jQuery + Echarts。每
					天早上都会开一个简短的晨会，反馈一下前一天的进度，有时候也会有技术分享会。
				</p>
				<p>
					其实从我提离职到我真正离开，期间经历了半个月的时间。因为工作要交接，需要找人接手我的活，还有就是领导想留我，所以拖延了半个月。因为我前后端都会，
					表现出来的工作能力他们还是非常认可的。我说我离开的原因是因为加班太严重了，他们则说给我调岗，换一个加班少的项目组，反正半个月期间找我谈过好几次
					话。直属上级，项目经理，人事专员，另外一个项目组的负责人，他们分别找我谈了一次话，搞得我都尴尬了。但是换个项目组，一三五还是得强制加班到8点半，
					说是公司制度没法改变，这我就接受不了了，然后就离职了！
				</p>
				<p>
					未写完，待续……
				</p>
            </div>
        </section>
    </div>
    <client-only>
        <xe-backtop v-if="getPlatform() === 'PC'"></xe-backtop>
    </client-only>
</template>

<script lang="ts" setup>
    useHead({
        title: '关于'
    })
</script>

<style scoped>@import url("~/assets/styles/about.css");</style>