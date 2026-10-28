---
permalink: /
title: ""
excerpt: "Lifan Zheng — research on LLMs, Agents, VLA, and WAM."
author_profile: false
html_lang: en
redirect_from:
  - /about/
  - /about.html
---
<section id="about" class="hero-panel" aria-labelledby="profile-name">
  <div class="hero-copy">
    <h1 id="profile-name" class="hero-title">Lifan Zheng <span lang="zh-CN">郑力凡</span></h1>
    <p class="hero-subtitle">PhD student in Software Engineering</p>
    <p class="hero-affiliation">Southeast University <span>Nanjing, China</span></p>
    <p class="hero-intro">I am a PhD student at Southeast University, advised by Prof. <a href="https://liufancs.github.io/">Fan Liu</a>. I have also had the opportunity to collaborate with <a href="https://t1ans1r.github.io/">Yu Tian</a>. Previously, I was a Research Assistant at Zhejiang University and received my M.A. in Computational Sociology from Central South University.</p>
    <p class="hero-note">My path to engineering began in the social sciences. I carry that curiosity with me.</p>
    <div class="research-line"><span>Research interests</span><ul aria-label="Research interests">{% for interest in site.data.profile.research_interests %}<li>{{ interest }}</li>{% endfor %}</ul></div>
    <div class="text-links hero-links"><a href="mailto:z1ivan@seu.edu.cn">Email</a><a href="https://scholar.google.com/citations?user=GDaqEpYAAAAJ">Scholar</a><a href="https://github.com/z1ivan">GitHub</a><a href="https://orcid.org/0000-0001-6633-4570">ORCID</a><a href="https://www.linkedin.com/in/zheng-lifan-b42369318">LinkedIn</a></div>
  </div>
  <figure class="hero-portrait"><img src="{{ site.author.avatar | relative_url }}" alt="Lifan Zheng's illustrated portrait" width="480" height="480" loading="eager" fetchpriority="high"><figcaption>Engineering, with a humanist's curiosity.</figcaption></figure>
</section>

<section id="news" class="home-section" aria-labelledby="news-heading">
  <h2 id="news-heading">Recently</h2>
  <div class="event-list">
    <div class="event-item"><time datetime="2026-10">2026.10</time><p>Champion of the <a href="{{ '/competitions/metafine-2026/' | relative_url }}">MetaFine Open Competition</a> (Team MAI).</p></div>
    <div class="event-item"><time datetime="2026-04">2026.04</time><p>Papers accepted by <strong>ACL 2026</strong> (Findings +2).</p></div>
    <div class="event-item"><time datetime="2025-11">2025.11</time><p>Paper accepted by <strong>AAAI 2026</strong>.</p></div>
    <div class="event-item"><time datetime="2024-01">2024.01</time><p>Paper accepted by <strong>Engineering Applications of Artificial Intelligence</strong>.</p></div>
  </div>
</section>

{% include competitions.html %}
{% include publications.html %}

<section id="education" class="home-section" aria-labelledby="education-heading">
  <h2 id="education-heading">Education & experience</h2>
  <div class="timeline">
    <div class="timeline-item"><p class="timeline-date">2026.03 — present</p><div><h3>Southeast University</h3><p>PhD in Software Engineering</p></div></div>
    <div class="timeline-item"><p class="timeline-date">2024.12 — 2025.12</p><div><h3>Zhejiang University</h3><p>Research Assistant, Computational Social Science Research Center</p></div></div>
    <div class="timeline-item"><p class="timeline-date">2021.09 — 2024.07</p><div><h3>Central South University</h3><p>M.A. in Computational Sociology</p></div></div>
    <div class="timeline-item"><p class="timeline-date">2017.09 — 2021.07</p><div><h3>Shanxi University</h3><p>B.M. in Labor and Social Security</p></div></div>
  </div>
</section>

<div class="background-columns">
  <section id="honors" class="home-section" aria-labelledby="honors-heading">
    <h2 id="honors-heading">Honors & awards</h2>
    <ul class="plain-list"><li><span class="list-date">2026</span><span><a href="#competitions">MetaFine Open Competition Champion</a><br>Team MAI</span></li><li><span class="list-date">2023</span><span>Outstanding Student of the Year<br>Central South University</span></li><li><span class="list-date">2021</span><span>Outstanding Graduate of Shanxi Province<br>Outstanding Graduation Thesis</span></li></ul>
  </section>
  <section id="services" class="home-section" aria-labelledby="services-heading">
    <h2 id="services-heading">Academic service</h2>
    <p class="service-entry"><strong>Conference reviewer</strong><br>ACL Rolling Review</p>
    <p class="service-entry"><strong>Journal reviewer</strong><br>Knowledge-Based Systems</p>
  </section>
</div>

<section id="contact" class="home-section contact-section" aria-labelledby="contact-heading">
  <h2 id="contact-heading">Let's be in touch.</h2>
  <p>I welcome conversations and research collaborations.</p>
  <a class="contact-email" href="mailto:z1ivan@seu.edu.cn">z1ivan@seu.edu.cn</a>
</section>
