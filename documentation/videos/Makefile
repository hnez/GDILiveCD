WEBM_FILES := $(wildcard *.webm)
SNAPSHOT_FILES := $(patsubst %.webm, %.jpg, $(WEBM_FILES))
H264_FILES := $(patsubst %.webm, %.mp4, $(WEBM_FILES))

.PHONY: all
all: $(SNAPSHOT_FILES) $(H264_FILES)

.PHONY: clean
clean:
	rm -f $(SNAPSHOT_FILES) $(H264_FILES)

%.jpg: %.webm
	ffmpeg -ss 00:00:01 -i $< -frames:v 1 -qscale:v 3 $@

%.mp4: %.webm
	ffmpeg -i $< -c:v libx264 -preset medium $@
