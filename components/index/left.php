<div class="left">
  <nav class="head head-nav">
    <a href="#" class="nav-item active">热门</a>
    <a href="#" class="nav-item">最新</a>
    <a href="#" class="nav-item">热榜</a>
  </nav>
  <?php $this->need("components/index/skeleton.php");?>
  <div id="article-list-wrap" class="hide">
    <?php while ($this->next()) : ?>
      <?php $this->need("components/default/mini-article-card.php");?>
    <?php endwhile; ?>
  </div>
  <div class="auto-load">
    <?php $this->pageLink("上一页",'prev');?>
    <?php $this->pageLink("下一页",'next');?>
    <img src="<?php themeUrl('static/images/tool/section-loading.gif');?>" alt="加载中">
  </div>
</div>