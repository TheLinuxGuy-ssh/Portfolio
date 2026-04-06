#!/bin/sh
for file in ./*.ttf ./*.otf ; do
  font=`basename "$file"`
  echo "$font"
  woff2_compress "$font"
done
exit 0   
