cd "$(dirname "$0")"
N=1368
base=9800
for mode in port land en land-en; do
  for w in 0 1 2 3 4 5; do a=$((w*228)); b=$(((w+1)*228)); [ $w -eq 5 ] && b=$N; node cap.mjs $a $b $((base+w)) $mode > cap_${mode}_$w.log 2>&1 & done; wait; base=$((base+10))
done
echo FINISHED > render.done
