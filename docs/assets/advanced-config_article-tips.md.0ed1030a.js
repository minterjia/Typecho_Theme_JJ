import{_ as a,o as e,c as s,O as l}from"./chunks/framework.915160cd.js";const o="/Typecho_Theme_JJ/images/advanced-config/article-tips/文章首图01.jpg",t="/Typecho_Theme_JJ/images/advanced-config/article-tips/todo列表01.jpg",n="/Typecho_Theme_JJ/images/advanced-config/article-tips/回复可见01.jpg",i="/Typecho_Theme_JJ/images/advanced-config/article-tips/iframe支持01.jpg",p="/Typecho_Theme_JJ/images/advanced-config/article-tips/目录树01.jpg",q=JSON.parse('{"title":"文章小技巧","description":"","frontmatter":{},"headers":[],"relativePath":"advanced-config/article-tips.md","filePath":"advanced-config/article-tips.md"}'),r={name:"advanced-config/article-tips.md"},c=l('<h1 id="文章小技巧" tabindex="-1">文章小技巧 <a class="header-anchor" href="#文章小技巧" aria-label="Permalink to &quot;文章小技巧&quot;">​</a></h1><blockquote><p>一些提高使用舒适度的功能</p></blockquote><h2 id="文章首图" tabindex="-1">文章首图 <a class="header-anchor" href="#文章首图" aria-label="Permalink to &quot;文章首图&quot;">​</a></h2><p>掘金的文章页展示，在顶部会有一张首图用于引流之类的，我这边也把这个功能弄过来了，在编辑文章时在底部自定义字段中可以填入图片链接地址以实现这个效果。</p><p><img src="'+o+`" alt="" data-fancybox="gallery"></p><p>首图除了在文章页展示，它还会用于文章缩略图展示，且优先级最高。</p><h2 id="自定义缩略图" tabindex="-1">自定义缩略图 <a class="header-anchor" href="#自定义缩略图" aria-label="Permalink to &quot;自定义缩略图&quot;">​</a></h2><p>这个优先级小于文章首图，配置也和首图一样，在文章底部自定义字段中。</p><p>但是缩略图只作用于文章列表，不影响文章内容。</p><h2 id="文章主题切换" tabindex="-1">文章主题切换 <a class="header-anchor" href="#文章主题切换" aria-label="Permalink to &quot;文章主题切换&quot;">​</a></h2><p>在编辑文章的时候，我们可以针对每一篇文章使用喜欢的主题！</p><p>在编辑文章的自定义字段区域，有一个主题选择，一共有 14 个主题：</p><ul><li>掘金</li><li>github</li><li>smartblue</li><li>cyanosis</li><li>channing-cyan</li><li>fancy</li><li>v-green</li><li>mk-cute</li><li>qklhk-chocolate</li><li>orange</li><li>scrolls-light</li><li>vuepress</li><li>nico</li><li>devui-blue</li></ul><p>默认为 <strong>掘金</strong> 主题</p><h2 id="todo-列表" tabindex="-1">todo 列表 <a class="header-anchor" href="#todo-列表" aria-label="Permalink to &quot;todo 列表&quot;">​</a></h2><p>用于处理一些已完成和未完成的事情</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">x</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> 这是一个选中的 todo 图标</span></span>
<span class="line"><span style="color:#A6ACCD;">[ ] 这是一个未选中的 todo 图标</span></span></code></pre></div><p><img src="`+t+`" alt="" data-fancybox="gallery"></p><h2 id="回复可见" tabindex="-1">回复可见 <a class="header-anchor" href="#回复可见" aria-label="Permalink to &quot;回复可见&quot;">​</a></h2><p>用于一些内容，比如回复之后才能看到。</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">hide</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">这里放要隐藏的内容</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">/hide</span><span style="color:#89DDFF;">]</span></span></code></pre></div><p><img src="`+n+`" alt="" data-fancybox="gallery"></p><h2 id="iframe-支持" tabindex="-1">iframe 支持 <a class="header-anchor" href="#iframe-支持" aria-label="Permalink to &quot;iframe 支持&quot;">​</a></h2><p>有时候我们希望页面内嵌一些外链，比如视频，代码 codePen 这些，这个功能在之前是没有的，为此在 2.0 加入了对它的样式支持。</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">## </span><span style="color:#FFCB6B;">这是一个 b 站视频</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">&lt;iframe src=&quot;//player.bilibili.com/player.html?aid=824033998&amp;bvid=BV1Ug4y1W7Ha&amp;cid=1070035335&amp;page=1&quot; scrolling=&quot;no&quot; border=&quot;0&quot; frameborder=&quot;no&quot; framespacing=&quot;0&quot; allowfullscreen=&quot;true&quot;&gt; &lt;/iframe&gt;</span></span></code></pre></div><p><img src="`+i+'" alt="" data-fancybox="gallery"></p><p>不知道为什么 CodePen 不支持 iframe 内嵌了，可能是我的方式不对，上个 b 站的也是一样，反正是对 iframe 做了样式支持</p><h2 id="目录树" tabindex="-1">目录树 <a class="header-anchor" href="#目录树" aria-label="Permalink to &quot;目录树&quot;">​</a></h2><p>v2.2.2 版本重构了目录树，实现了<strong>高保真掘金目录树</strong>，为此它的展示逻辑和掘金相同，最大嵌套层级是 3 层，但是这个 3 层不是说必须从 h2-h4，而是嵌套深度只有 3 层，你可以 h3-h5 这种形式。</p><p><img src="'+p+'" alt="" data-fancybox="gallery"></p>',30),d=[c];function h(m,g,u,_,f,y){return e(),s("div",null,d)}const k=a(r,[["render",h]]);export{q as __pageData,k as default};