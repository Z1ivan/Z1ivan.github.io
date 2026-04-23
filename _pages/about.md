---
permalink: /
title: ""
excerpt: ""
author_profile: false
html_lang: en
redirect_from: 
  - /about/
  - /about.html
---
<span class="anchor" id="about"></span>

<div class="hero-panel">
  <div class="hero-top">
    <img class="hero-avatar" src="{{ site.author.avatar | relative_url }}" alt="Lifan Zheng avatar" loading="eager">
    <div class="hero-main">
      <p class="hero-title">Lifan Zheng</p>
      <p class="hero-subtitle">Ph.D. Student, Software Engineering · Southeast University</p>
      <p class="hero-meta">Nanjing, China</p>
      <div class="hero-affiliation">
        {% if site.school_logo and site.school_logo != "" %}
        <img class="school-logo" src="{{ site.school_logo | relative_url }}" alt="Southeast University logo" loading="lazy">
        {% endif %}
        <span class="school-logo-fallback">SEU</span>
      </div>

      <p class="hero-intro">I am supervised by Prof. <a href="https://liufancs.github.io/"><strong>Fan Liu</strong></a>. Fortunately, I cooperated with <a href="https://t1ans1r.github.io/"><strong>Yu Tian</strong></a>. I previously worked as a Research Assistant at Zhejiang University and received my M.A. in Computational Sociology from Central South University.</p>

      <div class="chip-list">
        <span class="chip">LLMs</span>
        <span class="chip">AI Agents</span>
        <span class="chip">Representation Learning</span>
        <span class="chip">Social Simulation</span>
      </div>

      <p class="hero-links"><a href="mailto:z1ivan@seu.edu.cn">Email</a> · <a href="https://scholar.google.com/citations?user=GDaqEpYAAAAJ">Google Scholar</a> · <a href="https://github.com/z1ivan">GitHub</a> · <a href="https://orcid.org/0000-0001-6633-4570">ORCID</a> · <a href="https://www.linkedin.com/in/zheng-lifan-b42369318">LinkedIn</a></p>
    </div>
  </div>
</div>

<span class="anchor" id="news"></span>

# <span class="lang-en">News</span><span class="lang-zh">动态</span>
<div class="event-list">
  <div class="event-item"><span class="event-date">2026.04</span><span class="event-desc"> Paper accepted by <strong>ACL 2026</strong> (Findings +2).</span></div>
  <div class="event-item"><span class="event-date">2025.11</span><span class="event-desc"> Paper accepted by <strong>AAAI 2026</strong>.</span></div>
  <div class="event-item"><span class="event-date">2024.01</span><span class="event-desc"> Paper accepted by <strong>Engineering Applications of Artificial Intelligence</strong>.</span></div>
</div>

<span class="anchor" id="publications"></span>

# <span class="lang-en">Publications</span><span class="lang-zh">论文</span>
## <span class="lang-en">Selected Publications</span><span class="lang-zh">精选论文</span>
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

## <span class="lang-en">All Publications</span><span class="lang-zh">全部论文</span>
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

# <span class="lang-en">Projects</span><span class="lang-zh">项目</span>
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
    <p><a href="{{ project.link }}"><span class="lang-en">Project Link</span><span class="lang-zh">项目链接</span></a></p>
    {% endif %}
  </div>
{% endfor %}
</div>

<span class="anchor" id="honors"></span>

# <span class="lang-en">Honors and Awards</span><span class="lang-zh">荣誉与奖项</span>
- *2023.11:* Outstanding Student of the Year, Central South University
- *2021:* Outstanding Graduate of Shanxi Province, Outstanding Graduation Thesis

<span class="anchor" id="education"></span>

# <span class="lang-en">Education</span><span class="lang-zh">教育背景</span>
- *2026.03 - present:* PhD in Software Engineering, Southeast University
- *2024.12 - 2025.12:* Research Assistant, Computational Social Science Research Center, Zhejiang University
- *2021.09 - 2024.07:* M.A. in Computational Sociology, Central South University
- *2017.09 - 2021.07:* B.M. in Labor and Social Security, Shanxi University

<span class="anchor" id="services"></span>

# <span class="lang-en">Academic Services</span><span class="lang-zh">学术服务</span>
- Conference Reviewer: ACL Rolling Review
- Journal Reviewer: KBS

<span class="anchor" id="contact"></span>

# <span class="lang-en">Contact</span><span class="lang-zh">联系</span>
- <span class="lang-en">Email</span><span class="lang-zh">邮箱</span>: [z1ivan@seu.edu.cn](mailto:z1ivan@seu.edu.cn)
- <span class="lang-en">For collaboration, feel free to contact me with your research topic and timeline.</span><span class="lang-zh">如需合作，欢迎邮件联系并附上研究主题与时间安排。</span>
- <span class="lang-en">Acknowledgements</span><span class="lang-zh">致谢</span>: [<span class="lang-en">View dedicated page</span><span class="lang-zh">查看独立页面</span>](/acknowledgements/)
