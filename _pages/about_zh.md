---
permalink: /zh/
title: ""
excerpt: "郑力凡，东南大学软件工程博士生。研究方向：LLMs、Agents、VLA、WAM。"
author_profile: false
html_lang: zh-CN
---
<section id="about" class="hero-panel" aria-labelledby="profile-name">
  <div class="hero-copy">
    <h1 id="profile-name" class="hero-title">郑力凡 <span lang="en">Lifan Zheng</span></h1>
    <p class="hero-subtitle">软件工程博士生</p>
    <p class="hero-affiliation">东南大学 <span>中国南京</span></p>
    <p class="hero-intro">我目前是东南大学软件工程博士生，师从<a href="https://liufancs.github.io/">刘帆</a>教授。我也有幸曾与<a href="https://t1ans1r.github.io/">田雨</a>研究员合作。进入东南大学之前，我曾在浙江大学担任研究助理，并在中南大学获得计算社会学硕士学位。</p>
    <p class="hero-note">从人文社科走向工程，依然珍视对人与世界的好奇。</p>
    <div class="research-line"><span>研究方向</span><ul aria-label="研究方向">{% for interest in site.data.profile.research_interests %}<li>{{ interest }}</li>{% endfor %}</ul></div>
    <div class="text-links hero-links"><a href="mailto:z1ivan@seu.edu.cn">邮箱</a><a href="https://scholar.google.com/citations?user=GDaqEpYAAAAJ">Google Scholar</a><a href="https://github.com/z1ivan">GitHub</a><a href="https://orcid.org/0000-0001-6633-4570">ORCID</a><a href="https://www.linkedin.com/in/zheng-lifan-b42369318">LinkedIn</a></div>
  </div>
  <figure class="hero-portrait"><img src="{{ site.author.avatar | relative_url }}" alt="郑力凡的插画头像" width="480" height="480" loading="eager" fetchpriority="high"><figcaption>做工程，也保有人文的好奇。</figcaption></figure>
</section>

<section id="news" class="home-section" aria-labelledby="news-heading">
  <h2 id="news-heading">近况</h2>
  <div class="event-list">
    <div class="event-item"><time datetime="2026-10">2026.10</time><p>MAI 团队获 <a href="{{ '/zh/competitions/metafine-2026/' | relative_url }}">MetaFine Open Competition</a> 冠军。</p></div>
    <div class="event-item"><time datetime="2026-04">2026.04</time><p>论文被 <strong>ACL 2026</strong> 接收（Findings +2）。</p></div>
    <div class="event-item"><time datetime="2025-11">2025.11</time><p>论文被 <strong>AAAI 2026</strong> 录用。</p></div>
    <div class="event-item"><time datetime="2024-01">2024.01</time><p>论文被 <strong>Engineering Applications of Artificial Intelligence</strong> 录用。</p></div>
  </div>
</section>

{% include competitions.html %}
{% include publications.html %}

<section id="education" class="home-section" aria-labelledby="education-heading">
  <h2 id="education-heading">教育与经历</h2>
  <div class="timeline">
    <div class="timeline-item"><p class="timeline-date">2026.03 — 至今</p><div><h3>东南大学</h3><p>软件工程博士生</p></div></div>
    <div class="timeline-item"><p class="timeline-date">2024.12 — 2025.12</p><div><h3>浙江大学</h3><p>计算社会科学研究中心，研究助理</p></div></div>
    <div class="timeline-item"><p class="timeline-date">2021.09 — 2024.07</p><div><h3>中南大学</h3><p>计算社会学硕士</p></div></div>
    <div class="timeline-item"><p class="timeline-date">2017.09 — 2021.07</p><div><h3>山西大学</h3><p>劳动与社会保障学士</p></div></div>
  </div>
</section>

<div class="background-columns">
  <section id="honors" class="home-section" aria-labelledby="honors-heading">
    <h2 id="honors-heading">荣誉与奖项</h2>
    <ul class="plain-list"><li><span class="list-date">2026</span><span><a href="#competitions">MetaFine Open Competition 总冠军</a><br>MAI 团队</span></li><li><span class="list-date">2023</span><span>中南大学年度优秀学生</span></li><li><span class="list-date">2021</span><span>山西省优秀毕业生、优秀毕业论文</span></li></ul>
  </section>
  <section id="services" class="home-section" aria-labelledby="services-heading">
    <h2 id="services-heading">学术服务</h2>
    <p class="service-entry"><strong>会议审稿</strong><br>ACL Rolling Review</p>
    <p class="service-entry"><strong>期刊审稿</strong><br>Knowledge-Based Systems</p>
  </section>
</div>

<section id="contact" class="home-section contact-section" aria-labelledby="contact-heading">
  <h2 id="contact-heading">欢迎来信。</h2>
  <p>欢迎交流研究想法，也期待新的合作。</p>
  <a class="contact-email" href="mailto:z1ivan@seu.edu.cn">z1ivan@seu.edu.cn</a>
</section>
