---
permalink: /zh/
title: ""
excerpt: ""
author_profile: false
html_lang: zh-CN
---
<span class="anchor" id="about"></span>

<div class="hero-panel">
  <div class="hero-top">
    <img class="hero-avatar" src="{{ site.author.avatar | relative_url }}" alt="郑力凡头像" loading="eager">
    <div class="hero-main">
      <p class="hero-title">郑力凡</p>
      <p class="hero-subtitle">东南大学 软件工程博士生</p>
      <p class="hero-meta">南京，中国</p>
      <div class="hero-affiliation">
        {% if site.school_logo and site.school_logo != "" %}
        <img class="school-logo" src="{{ site.school_logo | relative_url }}" alt="Southeast University logo" loading="lazy">
        {% endif %}
        <span class="school-logo-fallback">SEU</span>
      </div>

      <p class="hero-intro">导师为<a href="https://liufancs.github.io/"><strong>刘帆</strong></a>教授。此前我在浙江大学担任研究助理，并在中南大学获得计算社会学硕士学位。</p>

      <div class="chip-list">
        <span class="chip">大语言模型</span>
        <span class="chip">表示学习</span>
        <span class="chip">社会仿真</span>
      </div>

      <p class="hero-links"><a href="mailto:z1ivan@seu.edu.cn">邮箱</a> · <a href="https://scholar.google.com/citations?user=GDaqEpYAAAAJ">Google Scholar</a> · <a href="https://github.com/z1ivan">GitHub</a> · <a href="https://orcid.org/0000-0001-6633-4570">ORCID</a> · <a href="https://www.linkedin.com/in/zheng-lifan-b42369318">LinkedIn</a></p>
    </div>
  </div>
</div>

<span class="anchor" id="news"></span>

# 动态
<div class="event-list">
  <div class="event-item"><span class="event-date">2025.11</span><span class="event-desc"> 论文被 <strong>AAAI 2026</strong> 接收。</span></div>
  <div class="event-item"><span class="event-date">2024.01</span><span class="event-desc"> 论文被 <strong>Engineering Applications of Artificial Intelligence</strong> 接收。</span></div>
</div>

<span class="anchor" id="publications"></span>

# 论文
## 精选论文
{% for pub in site.data.publications %}
{% if pub.selected %}
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">{{ pub.badge }}</div><img src='{{ pub.image | relative_url }}' alt="{{ pub.image_alt }}" loading="lazy" decoding="async" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

{{ pub.title }}

{{ pub.authors }}

*{{ pub.venue }}*, {{ pub.year }}

{{ pub.summary }}

[[Paper]]({{ pub.paper_url | relative_url }}){% if pub.code_url %} [[Code]]({{ pub.code_url }}){% endif %}

</div>
</div>
{% endif %}
{% endfor %}

## 全部论文
<div class="publication-list">
{% for pub in site.data.publications %}
  <div class="publication-item">
    <p class="publication-title">{{ pub.title }}</p>
    <p class="publication-meta">{{ pub.authors | markdownify | remove: '<p>' | remove: '</p>' }} · <em>{{ pub.venue }}</em>, {{ pub.year }}</p>
    <p class="publication-links"><a href="{{ pub.paper_url | relative_url }}">Paper</a>{% if pub.code_url %} · <a href="{{ pub.code_url }}">Code</a>{% endif %}</p>
  </div>
{% endfor %}
</div>

<span class="anchor" id="projects"></span>

# 项目
<div class="project-grid">
{% for project in site.data.projects %}
  <div class="project-card">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <p class="project-tags">
      {% for tag in project.tags %}
      <span>{{ tag }}</span>
      {% endfor %}
    </p>
    {% if project.link %}
    <p><a href="{{ project.link }}">项目链接</a></p>
    {% endif %}
  </div>
{% endfor %}
</div>

<span class="anchor" id="honors"></span>

# 荣誉与奖项
- *2023.11:* 中南大学年度优秀学生
- *2021:* 山西省优秀毕业生、优秀毕业论文

<span class="anchor" id="education"></span>

# 教育背景
- *2026.03 - present:* 东南大学 软件工程博士
- *2024.12 - 2025.12:* 浙江大学 计算社会科学研究中心 研究助理
- *2021.09 - 2024.07:* 中南大学 计算社会学硕士
- *2017.09 - 2021.07:* 山西大学 劳动与社会保障本科

<span class="anchor" id="services"></span>

# 学术服务
- Journal Reviewer: KBS

<span class="anchor" id="contact"></span>

# 联系方式
- 邮箱: [z1ivan@seu.edu.cn](mailto:z1ivan@seu.edu.cn)
- 合作请邮件联系并附上研究主题与时间安排。
- 致谢: [查看独立页面](/zh/acknowledgements/)
