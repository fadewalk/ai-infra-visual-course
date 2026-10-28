#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""课程更新日志生成器
用法：python3 tools/gen_changelog.py
从 git 提交历史生成 changelog.html（与站点同风格）。课程更新后运行一次即可。
"""
import subprocess, html, re, glob, os

def git_log():
    out = subprocess.run(
        ['git','log','--date=short','--pretty=format:%ad%x09%h%x09%s'],
        capture_output=True, text=True).stdout
    entries=[]
    for line in out.splitlines():
        parts=line.split('\t',2)
        if len(parts)!=3: continue
        date,sha,subj=parts
        m=re.match(r'^(\w+)(?:\(([^)]*)\))?:\s*(.*)',subj)
        typ=m.group(1) if m else 'other'
        desc=m.group(3) if m else subj
        entries.append({'date':date,'sha':sha,'typ':typ,'desc':html.escape(desc)})
    return entries

def page_count():
    return len([f for f in glob.glob('**/*.html',recursive=True) if '.git' not in f])

TYPE_META={
    'feat':('功能','#059669'),
    'docs':('文档','#2563eb'),
    'fix':('修复','#dc2626'),
    'chore':('维护','#6b7280'),
    'other':('其他','#d97706'),
}

def render(entries, n_pages):
    by_date={}
    for e in entries: by_date.setdefault(e['date'],[]).append(e)
    sections=''
    for date in sorted(by_date,reverse=True):
        items=''
        for e in by_date[date]:
            tm=TYPE_META.get(e['typ'],TYPE_META['other'])
            scope=f'<span style="color:var(--muted)">[{html.escape(e["typ"])}]</span> ' if e['typ']=='other' else ''
            items+=(f'<div style="display:flex;gap:10px;align-items:baseline;padding:7px 0;border-bottom:1px dashed var(--border)">'
                    f'<span style="font-size:11px;color:var(--muted);white-space:nowrap">{e["sha"]}</span>'
                    f'<span style="font-size:11px;border-radius:999px;padding:0 9px;border:1px solid {tm[1]};color:{tm[1]};white-space:nowrap">{tm[0]}</span>'
                    f'<span style="font-size:13.5px">{scope}{e["desc"]}</span></div>')
        sections+=(f'<h2 style="font-size:16px;margin:26px 0 6px">{date}</h2>'
                   f'<div style="background:var(--card);border:1px solid var(--border);border-radius:12px;padding:6px 16px">{items}</div>')
    latest=entries[0]['date'] if entries else '–'
    return f'''<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>更新日志 · AI Infra 可视化学习课程</title>
<style>
  :root{{
    --bg:#f6f7f9; --fg:#1a1d23; --muted:#5c6470; --card:#ffffff; --border:#e2e5ea;
    --blue:#2563eb; --green:#059669; --orange:#d97706; --red:#dc2626; --chip:#eef1f5;
  }}
  @media (prefers-color-scheme: dark){{
    :root{{ --bg:#1b212b; --fg:#dce2ea; --muted:#9aa5b1; --card:#242c38; --border:#3b4654; --chip:#2b3440; }}
  }}
  *{{box-sizing:border-box}}
  body{{margin:0;background:var(--bg);color:var(--fg);font-family:system-ui,-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;line-height:1.7}}
  .wrap{{max-width:900px;margin:0 auto;padding:20px 16px 72px}}
  a{{color:var(--blue);text-decoration:none}}
  a:hover{{text-decoration:underline}}
  .hero{{padding:28px 0 14px;border-bottom:1px solid var(--border);margin-bottom:6px}}
  .hero h1{{font-size:26px;margin:0 0 6px}}
  .hero p{{color:var(--muted);font-size:13px;margin:0}}
  @media(max-width:720px){{
    .wrap{{padding:14px 12px 56px}}
    .hero h1{{font-size:22px}}
  }}
</style>
</head>
<body>
<div class="wrap">
  <div class="hero">
    <h1>课程更新日志</h1>
    <p>共 {len(entries)} 个提交 · 最近更新 {latest} · 当前 {n_pages} 个页面 · <a href="index.html">← 返回课程目录</a></p>
  </div>
  {sections}
  <p style="margin-top:40px;font-size:12px;color:var(--muted);border-top:1px solid var(--border);padding-top:12px">本页由 <code>tools/gen_changelog.py</code> 从 git 提交历史自动生成；课程更新后运行 <code>python3 tools/gen_changelog.py</code> 重新生成并提交。</p>
</div>
</body>
</html>'''

if __name__=='__main__':
    entries=git_log()
    html=render(entries,page_count())
    with open('changelog.html','w') as f:
        f.write(html)
    print(f'changelog.html generated: {len(entries)} commits, {page_count()} pages')
