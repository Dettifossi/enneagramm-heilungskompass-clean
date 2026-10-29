# Beispiel-Befehle (Pfade/Namen anpassen). Frames liegen in frames/ (9x16 DE), framesL/ (16x9 DE), framesE/ (9x16 EN), framesLE/ (16x9 EN).
# ACHTUNG: Pfade mit Sonderzeichen (z. B. typografischer Apostroph im Songnamen) immer in "..." setzen.
SONG="$HOME/Downloads/<Song>.wav"; T=<Gesamtdauer in s>
# 1) Werbefassung (Marketing, Hochformat/Querformat, mit App-Block), Ausgabe nach ~/Documents/Marketing/
ffmpeg -v error -y -framerate 25 -i frames/f%05d.jpg -i "$SONG" -filter_complex "[1:a]afade=t=in:d=0.6,afade=t=out:st=$(python3 -c "print($T-3.5)"):d=3.5,atrim=0:$T[a]" -map 0:v -map "[a]" -c:v libx264 -crf 19 -preset medium -pix_fmt yuv420p -c:a aac -b:a 192k -t $T -map_chapters -1 -map_metadata -1 -dn -movflags +faststart ~/Documents/Marketing/<Name>_DE_9x16.mp4
# 2) App-Fassung (OHNE App-Block = nur die ersten N Bilder, Hochformat, klein). N = Frames bis Ende der Schlussfrage.
ffmpeg -v error -y -framerate 25 -i "frames/f%05d.jpg" -i "$SONG" -filter_complex "[0:v]scale=720:1280:flags=lanczos,fade=t=out:st=<N/25-1.1>:d=1.1[v];[1:a]afade=t=in:d=0.6,afade=t=out:st=<N/25-2.5>:d=2.5,atrim=0:<N/25>[a]" -map "[v]" -map "[a]" -c:v libx264 -crf 27 -preset slow -pix_fmt yuv420p -c:a aac -b:a 128k -frames:v <N> -map_chapters -1 -map_metadata -1 -dn -movflags +faststart inapp/<name>-de.mp4
sips -Z 720 -s format jpeg -s formatOptions 82 frames/f00300.jpg --out inapp/<name>-de-poster.jpg   # Poster: Bild mit fertigem Text waehlen
# 3) Teilen-Fassung (Marketing-Hochformat klein): ffmpeg -i <Name>_DE_9x16.mp4 -vf scale=720:1280 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 96k -map_chapters -1 -map_metadata -1 -dn -movflags +faststart share-<name>-de.mp4
# 4) Homepage-Fassung (Querformat OHNE App-Block, 1280x720, crf 26) wie 2) mit framesL/ und scale=1280:720
# 5) R2: npx wrangler r2 object put kompass-assets/assets/videos/<datei> --file <pfad> --content-type video/mp4 --remote   (Poster: image/jpeg)

# PRUEFEN (Pflicht vor jedem Upload): nur Video + Audio, beide gleich lang, KEINE weiteren Spuren.
# ffprobe -v error -show_entries stream=codec_type,duration -show_entries format=duration -of csv=p=0 datei.mp4
# Erwartet: "video,<s>" "audio,<s>" und die Gesamtdauer; jede dritte Zeile (data/text) ist ein Fehler.
# Ursache (29.10.2026): Song-WAVs enthalten ein Kapitel ueber die ganze Songlaenge; ffmpeg schreibt es als Textspur
# in die MP4 -> Safari/QuickTime zeigen die Songlaenge (3 Min.) und danach Schwarz. Gegenmittel: -map_chapters -1 -map_metadata -1 -dn.
