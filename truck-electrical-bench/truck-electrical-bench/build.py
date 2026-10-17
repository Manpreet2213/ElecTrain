#!/usr/bin/env python3
"""Builds docs/index.html (one self-contained page) from src/."""
import glob, os
here = os.path.dirname(os.path.abspath(__file__))
src = lambda *p: os.path.join(here, 'src', *p)
page = open(src('page.html'), encoding='utf-8').read()
js = 'const SH=[];\n'
js += ''.join(open(f, encoding='utf-8').read() for f in sorted(glob.glob(src('data', 's*.js'))))
js += open(src('data', 'zidx.js'), encoding='utf-8').read()
js += open(src('engine.js'), encoding='utf-8').read()
js += open(src('ui.js'), encoding='utf-8').read()
html = ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
        '<style>body{margin:0}[hidden]{display:none!important}img{max-width:100%}</style>\n'
        + page.replace('<div class="wrap">', '</head>\n<body>\n<div class="wrap">', 1)
        + '\n<script>\n' + js + '\n</script>\n</body>\n</html>\n')
os.makedirs(os.path.join(here, 'docs'), exist_ok=True)
open(os.path.join(here, 'docs', 'index.html'), 'w', encoding='utf-8').write(html)
print('docs/index.html', len(html), 'bytes')
