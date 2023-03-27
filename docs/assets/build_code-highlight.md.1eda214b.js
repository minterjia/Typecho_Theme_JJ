import{_ as s,o as l,c as a,N as n}from"./chunks/framework.90e2d99a.js";const A=JSON.parse('{"title":"代码高亮","description":"","frontmatter":{},"headers":[],"relativePath":"build/code-highlight.md"}'),p={name:"build/code-highlight.md"},o=n(`<h1 id="代码高亮" tabindex="-1">代码高亮 <a class="header-anchor" href="#代码高亮" aria-label="Permalink to &quot;代码高亮&quot;">​</a></h1><p>由于代码种类非常之多，我只能在尽量少的脚本大小情况下，支持常见的一些代码类型，但是并不是所有的代码类型我都支持，如果你需要高亮的代码刚好不在支持范围内，可以通过自己构建的方式，引入对应的代码高亮支持，然后构建自己的主题。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>采用的 highlight.js 实现的代码高亮</p></div><h2 id="支持的代码类型" tabindex="-1">支持的代码类型 <a class="header-anchor" href="#支持的代码类型" aria-label="Permalink to &quot;支持的代码类型&quot;">​</a></h2><ul><li>bash</li><li>c</li><li>csharp</li><li>cpp</li><li>css</li><li>go</li><li>xml</li><li>json</li><li>java</li><li>javascript</li><li>less</li><li>markdown</li><li>php</li><li>phpTemplate</li><li>python</li><li>pythonRepl</li><li>rust</li><li>scss</li><li>sql</li><li>shell</li><li>typescript</li><li>webAssembly</li><li>yaml</li><li>http</li><li>nginx</li><li>apache</li><li>dockerfile</li></ul><h2 id="加入需要的代码高亮" tabindex="-1">加入需要的代码高亮 <a class="header-anchor" href="#加入需要的代码高亮" aria-label="Permalink to &quot;加入需要的代码高亮&quot;">​</a></h2><p>找到脚本文件：<code>/src/modules/article_content/hljs.ts</code></p><p>import 引入你需要的语音类型，然后在<code>languages</code>对象中加入引入的类型，重新打包主题即可使用。</p><p><strong>例：</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> hljs </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">highlight.js/lib/core</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> bash </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">highlight.js/lib/languages/bash</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">LanguageFn</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">highlight.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Languages</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#A6ACCD;font-style:italic;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LanguageFn</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> languages</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Languages</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  bash</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//批量注册</span></span>
<span class="line"><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">keys</span><span style="color:#A6ACCD;">(languages)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">hljs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerLanguage</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">languages</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> hljs</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,10),e=[o];function t(c,i,r,D,y,F){return l(),a("div",null,e)}const h=s(p,[["render",t]]);export{A as __pageData,h as default};
