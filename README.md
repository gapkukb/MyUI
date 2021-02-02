1.  图片加载失败后 CSS 样式处理最佳实践 https://www.zhangxinxu.com/wordpress/2020/10/css-style-image-load-fail/
2.  ios safiri 下 a 链接 不支持
    :focus-within，https://www.zhangxinxu.com/wordpress/2020/10/ios-safari-input-button-focus/
3.  文字沿着不规则路径排版布局 https://www.zhangxinxu.com/wordpress/2020/09/svg-text-around-path/
4.  overflow-anchor 滚动锚定 https://www.zhangxinxu.com/wordpress/2020/08/css-overflow-anchor/
5.  巧用 CSS cross-fade()实现背景图像半透明效果
    ，https://www.zhangxinxu.com/wordpress/2020/07/css-cross-fade-background-image-opacity/
6.  使用 CSS text-emphasis 对文字进行强调装饰 https://www.zhangxinxu.com/wordpress/2020/06/css-text-emphasis/
7.  借助 CSS mask 遮罩显著优化 PNG 图片的尺寸https://www.zhangxinxu.com/wordpress/2020/05/css-mask-compress-png-image/
    是否支持鼠标
8.  overscroll-behavior 阻止滚动穿透(滚动到底后，父元素滚动
    ),https://www.zhangxinxu.com/wordpress/2020/01/css-any-hover-media/
9.  inputmode 增强 input 键盘
10. backdrop-filter 简介与苹果 iOS 毛玻璃效果，模糊背景遮罩
11. JS 检测 CSS 属性浏览器是否支持 https://www.zhangxinxu.com/wordpress/2019/11/js-css-supports-detect/
12. 实现 a 元素 href URL 链接自动刷新或新窗口打开 。点击一个链接，如果这个链接浏览器已经打开过，则刷新已经打开的链接窗口
    ；如果这个链接没有打开过，则使用新窗口打开这个链接页面。
    https://www.zhangxinxu.com/wordpress/2019/10/a-href-target-window-blank-refresh/

13. css 长度单位-["em", "ex", "gd", "rem", "vw", "vh", "vm", "ch", "px", "in", "cm", "mm", "pt", "pc", "%"]。
14. Intl 对象完整简介国际化（本地化） https://www.zhangxinxu.com/wordpress/2019/09/js-intl-zh/
15. 常见表单错误名称：form 表单元素内置 3 个验证方法和 1 个属性,checkValidity(), reportValidity(), setCustomValidity()方
    法，1 个属性是 validity 属性。
    1. badInput，输入框里面的值浏览器没办法进行转换。例如'number'类型输入框里面是中文字符
    2. customError 自定义的验证信息。
    3. patternMismatch 和指定的 pattern 正则属性值不匹配。会匹配:invalid 这个 CSS 伪类。
    4. rangeOverflow 超过 max 属性设置的值。同时会匹配 CSS :invalid 和:out-of-range 伪类。
    5. rangeUnderflow 小于 min 属性设置的值。同时会匹配 CSS :invalid 和:out-of-range 伪类。
    6. stepMismatch 输入框当前值和 step 属性值不匹配的时候，同时元素会匹配 CSS :invalid :out-of-range 伪类。
    7. tooLong，长度超出 maxlength 的限制。同时会匹配 CSS :invalid 和:out-of-range 伪类。
    8. tooShort 长度不足 minlength 的限制。同时会匹配 CSS :invalid 和:out-of-range 伪类
    9. typeMismatch 值和类型不匹配。如 type=number 却输入了非数字，会匹配:invalid
    10. valid 当前元素是否完全验证通过，通过会匹配:valid 否则:invalid
    11. valueMissing 元素设置了 required 属性，同时输入框的值为空，会匹配:invalid 这个 CSS 伪类。
16. 与时俱进，拥抱变化，为了更快更强，无外链 CSS 开发走起！图片使用内联
17. svg 压缩工具，压缩无用信息和小数点
18. 本地内联不同的 favicon 区分线上地址，使用 sizes="32x32" 推荐 32 尺寸
19. :not()逻辑伪类，不支持复杂选择器，https://www.zhangxinxu.com/wordpress/2019/07/css-not-pseudo-class/
20. grid 二维布局，flex 一维布局
21. 纯 css 实现滚动指示器 https://www.zhangxinxu.com/wordpress/2019/06/better-css-scroll-indicator/
22. CSS 转场动画 https://www.zhangxinxu.com/wordpress/2019/05/css-transfer-animation/
23. loading 三个点切换 @keyframes dot {33% { content: '.'; } 66% { content: '..'; } 100% {content:"...} }，也可以实现其
    他 css 属性动画
24. video 标签背景色不再是黑色而是透明 mix-blend-mode: screen;screen 滤镜 screen 混合模式，黑色和其他颜色混合变白色
    ，::backdrop 可以让视频全屏时的后面黑色背景变透明
25. Scroll Snap 网页容器滚动停止的时候，浏览器可以自动平滑定位到指定元素的指定位置
    https://www.zhangxinxu.com/wordpress/2019/04/css-scroll-snap-event-element-detect/
26. fieldset[disabled]禁用 form 下所有控件
    https://www.zhangxinxu.com/wordpress/2019/04/disabled-all-form-elements/,如果需要某个控件不被禁用，则使用 legend 包
    裹该控件
27. 根据子元素不同个数，展示不同的 UI 布局。 https://www.zhangxinxu.com/wordpress/2019/03/nth-last-child-css-layout/
28. compareDocumentPosition 两个元素对比前后关系
29. link rel=alternate 网站换肤功能最佳实现
    https://www.zhangxinxu.com/wordpress/2019/02/link-rel-alternate-website-skin/
30. document.scrollingElement 设置容器滚动位置，不需要区分 document.body 和 document.documentElement
31. 纯 CSS 实现打印机效果
32. box-decoration-break 布局中，总会存在元素 box 盒子断开的情况 box-decoration-break 可以决定断开时候的渲染表现。
    https://www.zhangxinxu.com/wordpress/2019/01/css-css3-box-decoration-break/
33. placeholder-shown 伪类实现 Material Design 占位符交互效果, 聚焦后文字移动到输入框上边
34. 纯 css 数据上报 利用:active:before{content:url(remote.jpg?id=xxx)}的动态产生图片请求实现
    ，https://www.zhangxinxu.com/wordpress/2018/12/css-data-report-html-validate/
35. HandBrake 将 MP4 免费压缩 webm
36. CSS filter:hue-rotate 色调旋转滤镜实现按钮批量生产
    https://www.zhangxinxu.com/wordpress/2018/11/css-filter-hue-rotate-button/. 兼容 ie 写法
    https://codepen.io/AmeliaBR/details/xGuBr

        ```
        -webkit-filter: hue-rotate(30deg);
        filter:url("data:image/svg+xml,url('data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' %3E%3Cfilter %3E%3CfeColorMatrix type='hueRotate' values='30' /%3E%3C/filter%3E%3C/svg%3E%23huerotate')");
        filter:hue-rotate(30deg);
        ```

37. 使用 css url 内联 svg 代码，需要对 svg 进行部分转义
38. 凡是需要滚动的地方都加一句 scroll-behavior:smooth 增加滚动体验，reset.css html, body { scroll-behavior:smooth; }
    scrollIntoView()方法让元素进入视区 ,if (typeof window.getComputedStyle(document.body).scrollBehavior == 'undefined')
    { // 传统的 JS 平滑滚动处理代码... }
39. DataTransfer 对象 任意拖拽 https://www.zhangxinxu.com/wordpress/2018/09/drag-drop-datatransfer-js/
40. 获取剪切板中的图片 上传 https://www.zhangxinxu.com/wordpress/2018/09/ajax-upload-image-from-clipboard/
41. 利用剪切板 JS API 优化输入框的粘贴体验 https://www.zhangxinxu.com/wordpress/2018/09/js-clipboard-api-paste-input/
42. wbr 和 br，wbr 让英文单词优雅智能换行 https://www.zhangxinxu.com/wordpress/2018/09/html-wbr-word-break/
43. 渐变虚框及边框滚动动画的纯 CSS 实现 https://www.zhangxinxu.com/wordpress/2018/08/css-gradient-dashed-border/
44. 浏览器原生支持 JS Base64 编码解码 ,btoa 源自于“binary to ASCII” 表示二进制转为字符，atob(解码)和 btoa(编码) 两个
    api，中文需要先编码 ,btoa(unescape(encodeURIComponent(str))) ， decodeURIComponent(escape(atob(base64)))
    https://www.zhangxinxu.com/wordpress/2018/08/js-base64-atob-btoa-encode-decode/
45. 为什么弹框或浮层一定要有关闭按钮总结总结下，4 个原因，依次权重我觉得越来越高！

    1. 视觉平衡（只针对弹框）；
    2. 符合用户习惯；
    3. 交互一致性；
    4. 提高无障碍访问（尤其没有确定，取消按钮的特殊弹框）；

    对于一些定制性比较强的弹框或浮层，设计师会把关闭按钮去掉，因 为丑。此时，我们该如何权衡呢？是说服设计师改设计呢，还
    是自己妥协？其实有个两全其美的方法，那就是你自己悄悄在右上 角放一个关闭按钮，默认 opacity 透明度为 0，键盘 focus 时
    候透明度变成 1 即可！

46. 自定义交互要增加
    touch-action:auto;|none;|pan-x;|pan-left;|pan-right;|pan-y;|pan-up;|pan-down;|pinch-zoom;|manipulation; , 减少移动端
    点击延迟 html|body:touch-action:manipulation(safari 只支持 auto|manipulation 两个属性,manipulation 只允许进行滚动和
    持续缩放操作，事件监听增加 passive:false)
47. 在 iOS Safari 浏览器下，网页左右边缘滑动会自动跳到前一个或后一个浏览的网页，有没有什么办法可以阻止
    body{overscroll-behavior-x: none }

48. https://l-ui.com/content/apis/range.html range 范围选择
49. CSS3 animation 属性中的 steps 功能，定义动画帧的步长
    ，https://www.zhangxinxu.com/wordpress/2018/06/css3-animation-steps-step-start-end/

50. 突破本地离线存储 5M 限制的 JS 库 localforage
    https://www.zhangxinxu.com/wordpress/2018/06/js-localforage-localstorage-indexdb/
51. 前端实现定制的 GIF 表情，https://www.zhangxinxu.com/wordpress/2018/05/js-custom-gif-generate/
52. CSS :default 伪类选择器，不支持 ie，现代浏览器支持很好，匹配 select option 和 radio 的默认选项设置样式。不受 js 后期
    设置影响。https://www.zhangxinxu.com/study/201803/css-selector-default.html
53. 滚动容器尺寸变化子元素视觉上位置不变 JS 实现 利用 document.elementsFromPoint api
54. CSS content 换行实现字符点点点 loading 效果
    https://www.zhangxinxu.com/wordpress/2016/11/css-content-pre-animation-character-loading/
55. SVG 粘滞融合分享菜单 https://www.zhangxinxu.com/wordpress/2017/12/svg-filter-fuse-gooey-effect/
56. 我是如何实现 electron 的在线升级热更新功能的？
    https://www.zhangxinxu.com/wordpress/2017/06/how-electron-online-update-hot-fix/
57. **_判断路由(路由器)是否存在上一页_**https://www.zhangxinxu.com/wordpress/2017/02/js-page-url-document-referrer/
58. 基于 CSS3 column 多栏布局实现水平滑页翻页交互
    https://www.zhangxinxu.com/wordpress/2017/02/css3-multiple-column-layout-read-horizontal/
59. **_基于 CSS color 属性的静态 UI 组件重构策
    略_**https://www.zhangxinxu.com/wordpress/2016/11/development-ui-component-based-on-css-color/
60. @font-face { font-family: YH; src: local("microsoft yahei"),local("Microsoft Yahei");},.demo{font-family: YH} 简化
    css 字体调用，unicode-range 指定部分特殊字符使用不同的字体
    。https://www.zhangxinxu.com/wordpress/2016/11/css-unicode-range-character-font-face/
61. form 表单中 fieldset 表示组，legend 表示组的标题，还能实现特殊布
    局https://www.zhangxinxu.com/wordpress/2016/11/html-fieldset-legend-element-css-layout/
62. 基于类名进行 js css 交互。常用交互控制类 active, disabled, checked, selected,.on,.in,.out
63. 巧用浏览器 CSS 属性值的不兼容向下兼容 hack 技巧
    https://www.zhangxinxu.com/wordpress/2016/10/browser-css-property-down-compatible-hack-technology/
64. 金额前的货币符号不同颜色大小和间距的实现方案：::first-letter
65. 基于 vw 的响应式布局

    ```
    html {
        font-size: 16px;
    }

    @media screen and (min-width: 375px) {
        html {
            /* iPhone6的375px尺寸作为16px基准，414px正好18px大小, 600 20px */
            font-size: calc(100% + 2 * (100vw - 375px) / 39);
            font-size: calc(16px + 2 * (100vw - 375px) / 39);
        }
    }
    @media screen and (min-width: 414px) {
        html {
            /* 414px-1000px每100像素宽字体增加1px(18px-22px) */
            font-size: calc(112.5% + 4 * (100vw - 414px) / 586);
            font-size: calc(18px + 4 * (100vw - 414px) / 586);
        }
    }
    @media screen and (min-width: 600px) {
        html {
            /* 600px-1000px每100像素宽字体增加1px(20px-24px) */
            font-size: calc(125% + 4 * (100vw - 600px) / 400);
            font-size: calc(20px + 4 * (100vw - 600px) / 400);
        }
    }
    @media screen and (min-width: 1000px) {
        html {
            /* 1000px往后是每100像素0.5px增加 */
            font-size: calc(137.5% + 6 * (100vw - 1000px) / 1000);
            font-size: calc(22px + 6 * (100vw - 1000px) / 1000);
        }
    }

    ```

66. appearence 加强 ui 表现，比如 a 标签用作按钮时：appearence:button
67. 伪元素表单控件默认样式重置与自定义大全
    https://www.zhangxinxu.com/wordpress/2013/06/%e4%bc%aa%e5%85%83%e7%b4%a0-%e8%a1%a8%e5%8d%95%e6%a0%b7%e5%bc%8f-pseudo-elements-style-form-controls/
68. 通过获取 gpu 来更准确判断设备型号 https://segmentfault.com/a/1190000010157682
