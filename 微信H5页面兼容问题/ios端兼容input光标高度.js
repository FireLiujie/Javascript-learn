/**
 * 问题详情描述：input输入框光标，在安卓手机上显示没问题，但是在苹果手机上，当点击输入的时候，光标的高度和父盒子的高度一样
 * 出现原因分析：通常我们习惯用height属性设置行间的高度和line-height属性设置行间的距离（行高），当点击输入的时候，光标的高度就自动和父盒子的高度一样了。(谷歌浏览器的设计原则，还有一种可能就是当没有内容的时候光标的高度等于input的line-height的值，当有内容时，光标从input的顶端到文字的顶部)
 * 解决办法：高度height和行高line-height内容用padding撑开
 */

/**
 * 例如：
 * .content{
 *     float:left;
 *     box-sizing:border-box;
 *     height:88px;
 *     width: calc(100% - 240px);
 *     .content-input{
 *         display:block;
 *         box-sizing: border-box;
 *         width: 100%;
 *         color: #333;
 *         font-size: 28px;
 *         // line-height: 88px;
 *         padding-top: 20px;
 *         padding-bottom: 20px;
 *     }
 * }
 */
