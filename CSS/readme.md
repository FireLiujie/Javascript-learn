Normalize.css 是一种 CSS reset 的替代方案。它在默认的 HTML 元素样式上提供了跨浏览器的高度一致性。相比与传统的 CSS reset,Normalize.css 是一种现代的、为 HTML5 准备的优质替代方案(https://necolas.github.io/normalize.css/7.0.0/normalize.css)

### 简单的 flex 布局

首先要有个容器，并设置 display:flex;display:-webkit-flex;该容器有以下六个属性：
flex-direction(元素排列方向)
row, row-reverse, column, column-reverse
flex-wrap(换行)
nowrap, wrap, wrap-reverse
flex-flow(以上两者的简写)
flex-direction||flex-wrap
justify-content(水平对齐方式)
flex-start, flex-end, center, space-around, space-between
align-items(垂直对齐方式)
stretch, flex-start, flex-end, center, baseline
align-content(多行垂直对齐方式)
stretch, flex-start, flex-end, center, space-between, space-around

### 项目的属性：

order 排列顺序，数值，默认 0
"integer"
flex-grow 定义放大比例，默认 0.即如果存在剩余空间，也不放大。
"number"
flex-shrink 定义缩小比例，默认 1，如果所有项目的 flex-shrink 属性都为 1，当空间不足时，都将等比例缩小.如果一个项目的 flex-shrink 属性为 0，其他项目都为 1，则空间不足时，前者不缩小
"number"
flex-basis 定义项目占据的主轴空间，默认 auto.会根据 flex-direction 定义的主轴（水平或者垂直），定义项目本来的大小，跟 width 或者 height 一样
flex 推荐，以上三个的缩写，默认 0 1 auto
"flex-grow" "flex-shrink" "flex-basis"
align-self 单个项目有与其他项目不一样的对齐方式，可覆盖 align-items
"auto","flex-start","flex-end","center","baseline","stretch"

1.flex-direction
row (从左往右)默认
row-reverse(从右往左)
column(从上往下)
column-reverse(从下往上)
2.flex-wrap
nowrap (不换行)默认
wrap (换行，且往下一行换)
wrap-reverse (换行，且往上一行换)
3.flex-flow,是 flex-direction 和 flex-wrap 的简写形式。
flex-flow: || ;
4.justify-content
flex-start
flex-end
center
space-between
space-around
5.align-items
stretch 默认
flex-start
flex-end
center
baseline 项目第一行文字的基准线对齐
6.align-content
stretch 默认
flex-start
flex-end
center
space-between
space-around
7.flex-grow
定义了放大比例，默认为 0，即如果存在剩余空间，也不会放大。但是，如果所有项目的 flex-grow 属性为 1，则他们将等分剩余空间（如果有的话），如果其中一个为 2，则他是其他项目的 2 倍宽度。
8.flex-shink
定义了项目的缩小比例，即如果空间不足，项目将缩小。如果有一个项目的 flex-shink 为 0，其他都为 1，空间不足时，前者不缩小。
9.align-self,定义项目自己的对齐方式
auto
flex-start
flex-end
center
baseline
stretch

### flex-grow 的计算方法

比如剩余空间为 x，三个元素的 flex-grow 分别为 a,b,c。设 sum 为 a+b+c.那么三个元素将得到剩余空间分别是 x _ a / sum,x _ b / sum,x _ c / sum.
for example:
父元素宽度为 500px，三个子元素的 width 分别为 100px,150px,100px.
于是剩余空间为 150px
三个元素的 flex-grow 分别是 1,2,3，越是 sum 为 6
则三个元素所得到的多余空间分别是:
150 _ 1 / 6 = 25px
150 _ 2 / 6 = 50px
150 _ 3 / 6 = 75px
三个元素的最终宽度分别为 125px,200px,175px

## 注意：

当所有元素的 flex-grow 之和小于 1 的时候，上面式子中的 sum 将会使用 1 来参与计算，而不论它们的和是多少。也就是说，当所有的元素的 flex-grow 之和小于 1 的时候，剩余空间不会全部分配给各个元素
另外，flex-grow 还会受到 max-width 的影响。如果最终 grow 后的结果大于 max-width 指定的值，max-width 的值将会优先使用。同样会导致父元素有部分剩余空间没有分配
flex-shrink 的计算方式
for example:
父元素 500px。三个子元素分别设置为 150px,200px,300px
三个子元素的 flex-shrink 值分别为 1,2,3
首先，计算子元素溢出多少：150 + 200 + 300 - 500 = -150px
那这-150px 将由三个元素的分别收缩一定的量来弥补
具体的就算方式为：每个元素收缩的权重为其 flex-shrink 乘以其宽度
所以总权重为 1 _ 150 + 2 _ 200 + 3 _ 300 = 1450
三个元素分别收缩：
150 _ 1(flex-shrink) _ 150(width) / 1450 = -15.5
150 _ 2(flex-shrink) _ 200(width) / 1450 = -41.4
150 _ 3(flex-shrink) \* 300(width) / 1450 = -93.1
注意
如果当所有元素的 flex-shrink 之和小于 1 时，并不会收缩所有的空间，而只会收缩 flex-shrink 之和相对于 1 的比例的空间。
flex-shrink 也会受到 min-width 的影响。
