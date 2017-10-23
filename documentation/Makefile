MD_FILES := $(wildcard *.md)
HTML_FILES := $(patsubst %.md, %.html, $(MD_FILES))
TITLE := "GdiCD Tutorial"

MDCOMPILER= pandoc

.PHONY: all
all: $(HTML_FILES) index.html videos

.PHONY: videos
videos:
	cd videos; make

.PHONY: watch
watch:
	inotify-hookable -w . -c make

index.html: tutorial.html
	cp $< $@

%.html: %.md
	$(MDCOMPILER) -T ${TITLE} -o $@ $< -H style.html.inc

force_look:
	true
