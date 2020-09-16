#! /usr/bin/env python

'''
Converts BibTex citations to YAML format.
New publications may be added by appending their BibTex citation to ./publications.bib.
After running the script, the YAML data output may be inserted into ../_data/publication_list.yml to appear on the website.
'''

import bibtexparser
import sys
from bibtexparser.bparser import BibTexParser
from bibtexparser.customization import convert_to_unicode


def quote(s):
    return '"' + s + '"'

parser = BibTexParser()
parser.customization = convert_to_unicode
bib_database = bibtexparser.load(open("publications.bib"), parser=parser)

for pub in reversed(bib_database.entries):
    author_list = pub['author'].split(" and ")
    author_out = list()

    truncate_authorlist = False

    for a in author_list:
        if a.strip() == "others":
            truncate_authorlist = True
            break

        if a.find(",") != -1:
            (last, first) = a.split(",")
            author_out.append(first.strip() + " " + last.strip())
        else:
            author_out.append(a)
    quoted_title = quote(pub['title'])

    url = pub['url'] if 'url' in pub else ''

    # Write record
    print("- title:", quote(pub['title']))
    print("  authors:", ", ".join(author_out))
    print("  url:", url)
    print("")
