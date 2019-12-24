#! /usr/bin/env python
import bibtexparser
import sys
from bibtexparser.bparser import BibTexParser
from bibtexparser.customization import convert_to_unicode

def quote(s):
    return '"' + s + '"'

title_to_link = dict()
fh = open("_data/pub_links.tsv")
for line in fh:
    fields = line.strip().split('\t')
    title_to_link[fields[0]] = fields[1]

parser = BibTexParser()
parser.customization = convert_to_unicode
bib_database = bibtexparser.load(open("publications.bib"), parser=parser)
max_authors = 8

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
    if quoted_title not in title_to_link:
        sys.stderr.write("Could not find link for " + quoted_title + "\n")
        continue
    if 'journal' not in pub:
        continue
    
    url = title_to_link[quoted_title]
    preprint_flag = 0
    if pub["journal"] == "bioRxiv":
        preprint_flag = 1

    # Write record
    print("- title:", quote(pub['title']))
    
    if truncate_authorlist or len(author_out) > max_authors:
        print("  authors:", ", ".join(author_out[0:max_authors]) + " et al.")
    else:
        print("  authors:", ", ".join(author_out))
    print("  year:", pub['year'])
    print("  preprint:", preprint_flag)
    print("  link:")
    print("    url:", url)
    print("    display:", quote(pub["journal"]))
    print("")
