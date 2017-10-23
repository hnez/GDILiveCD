# Vorwort

Moin,

diese Anleitung soll euch durch die Einrichtung
der Informatik Live CD führen.

Die Live CD enthält ein Debian GNU/Linux basiertes
Betriebssystem, auf dem bereits alle Programme,
die in den Übungen und zum Folgen der Vorlesung
benötigt werden, vorinstalliert sind.

Die Verwendung der Live CD ist nicht verpflichtend.
Sie ist nur eine Hilfestellung um schnellstmöglich
eine funktionierende Entwicklungsumgebung zu bekommen.

# Installation der Virtualisierungsumgebung

Da es bei der Installation eines weiteren Betriebssystems
auf einem Computer leicht zu Problemen und Datenverlust
kommen kann, ist es empfehlenswert, das Betriebssystem
zuerst in einer virtuellen Maschine auszuprobieren.

Eine freie Virtualisierungsumgebung für verschiedene
Betriebssysteme ist VirtualBox.

Die jeweils aktuelle Version lässt sich auf der
[Website](https://www.virtualbox.org/wiki/Downloads)
der Entwickler herunterladen.

Die folgenden Videos sollen euch durch die
Installation von Virtualbox und die Einrichtung
der virtuellen Maschine helfen.
Sollten die Videos nicht korrekt dargestellt werden
öffnet bitte eine der folgenden Playlisten
für
[Windows](playlist_windows.m3u) oder
[Mac](playlist_mac.m3u)
im [VLC Player](https://www.videolan.org/).
Oder lade diese Website in einer aktuellen Firefox
oder Chrome Version.

<video controls preload="none" poster="videos/vboxdl.jpg">
  <source src="videos/vboxdl.webm" type="video/webm">
  <source src="videos/vboxdl.mp4" type="video/mp4">
</video>

Nach dem Download muss das Programm installiert…

<div class="osdiverse">
<div class="osoption osredmond">
<video controls preload="none" poster="videos/vboxinst_redmond1.jpg">
<source src="videos/vboxinst_redmond1.webm" type="video/webm">
<source src="videos/vboxinst_redmond1.mp4" type="video/mp4">
</video>
<p>…und die Windows Sicherheitsfragen bestätigt werden.</p>
<video controls preload="none" poster="videos/vboxinst_redmond2.jpg">
<source src="videos/vboxinst_redmond2.webm" type="video/webm">
<source src="videos/vboxinst_redmond2.mp4" type="video/mp4">
</video>
</div>
<div class="osoption osmac">
<video controls preload="none" poster="videos/vboxinst_mac1.jpg">
<source src="videos/vboxinst_mac1.webm" type="video/webm">
<source src="videos/vboxinst_mac1.mp4" type="video/mp4">
</video>
<p>…und die Sicherheitsabfrage bestätigt werden.</p>
<video controls preload="none" poster="videos/vboxinst_mac2.jpg">
<source src="videos/vboxinst_mac2.webm" type="video/webm">
<source src="videos/vboxinst_mac2.mp4" type="video/mp4">
</video>
</div>
<div class="osoption osunix">
<p>Die Programme, die wir brauchen, lassen sich unter aktuellen Distributionen
auch problemlos lokal installieren.</p>
<p>Hier geht es wirklich nur darum ahnungslosen Windows-Usern Starthilfe zu geben.</p>
<p>Wenn irgendwas nicht funktioniert, schreib einfach der Mail-Adresse am Ende der Seite.</p>
<p>Die Zeit, die du jetzt nicht mit der Installation verbringen musst könntest du doch damit
verbringen herzlich über diese armen Windows-User zu lachen, oder?</p>
<p>Das ist zumindest eine meiner liebsten Beschäftigungen. Hahahaha…</p>
</div>
</div>

# Anlegen der virtuellen Maschine

Nachdem VirtualBox erfolgreich installiert wurde,
kann die Live CD
[heruntergeladen](https://leonard.goehrs.eu/gdicd_0.2.1_becquerel.iso)
werden.

Anschließend muss in VirtualBox eine neue Maschine eingerichtet werden
und das CD-Abbild als Startmedium ausgewählt werden.

Das CD-Abbild wird bei jedem Start der Maschine benötigt und
sollte deshalb nicht gelöscht werden.

_Hinweis:_ Sollte die Option `Debian 64-bit` nicht zur Auswahl stehen,
kann auch `Debian 32-bit` verwendet werden.

<video controls preload="none" poster="videos/createvm.jpg">
  <source src="videos/createvm.webm" type="video/webm">
  <source src="videos/createvm.mp4" type="video/mp4">
</video>

Anschließend kann die Maschine gestartet und das beim Anlegen der VM
erstellte Festplattenabbild als Speicherort für Daten, die auch nach einem
Neustart der Maschine nicht verloren gehen, sollen, eingerichtet werden.

Der Eintrag zum Starten der CD muss mit der Enter Taste ausgewählt werden.

<video controls preload="none" poster="videos/firststart.jpg">
  <source src="videos/firststart.webm" type="video/webm">
  <source src="videos/firststart.mp4" type="video/mp4">
</video>

Um zu testen, ob das Einrichten der Festplatte erfolgreich war,
kann nun ein Texteditor geöffnet werden…

<video controls preload="none" poster="videos/secondstart.jpg">
  <source src="videos/secondstart.webm" type="video/webm">
  <source src="videos/secondstart.mp4" type="video/mp4">
</video>

# Das erste C-Programm

…und der Text

    #include <stdio.h>

    int main(int argc, char **argv)
    {
      printf("Hallo Welt!\n");

      return(0);
    }

in eine Datei mit dem Namen `hello_world.c`
gespeichert werden.

<video controls preload="none" poster="videos/safefile.jpg">
  <source src="videos/safefile.webm" type="video/webm">
  <source src="videos/safefile.mp4" type="video/mp4">
</video>

Nach einem Neustart der Maschine sollte der zuvor erstellte
Ordner sich noch auf dem Desktop befinden.
Wenn dem nicht so ist, ist wahrscheinlich etwas schief gegangen.

Jetzt soll die vor dem Neustart ertsellte Datei dem Compiler
übergeben werden, der aus ihr ein Programm erzeugt.

Das Vorgehen dazu ist auch im nächsten Video zu sehen.

Dazu wird das Terminal geöffnet und mittels `cd` in
das richtige Verzeichnis gewechselt.

Dazu wird `cd` der Name des Ordners übergeben, in den gewechselt werden
soll.
Um nicht den gesamten Ordnernamen tippen zu müssen, kann die _Tab_ Taste(&#8633;)
verwendet werden.
Bei einmaligem Drücken vervollständigt diese soweit wie möglich selbst
und bei zweimaligem Drücken gibt sie mögliche Vervollständigungen an.

Mit `ls` können die im aktuellen Ordner enthaltenen Dateien angezeigt werden.

Zum Übersetzen der Quelldatei hallo.c wird der C-Compiler `gcc` verwendet.
Diesem werden die Optionen -Wall und -o hallo sowie die Quelldatei übergeben.
-Wall sorgt dafür, dass der Compiler auf mehr mögliche Fehler im Quellcode hinweist.
-o hallo sorgt dafür, dass das entstehende Programm in der Datei hallo gespeichert wird.

Anschließend wird die erzeugte Datei mit dem Aufruf `./hallo`
aufgerufen.
Der Zusatz ./ ist notwendig, um der Kommandozeile zu zeigen, dass
hallo ein Programm im aktuellen Ordner ist und kein anderweitig Installiertes.

<video controls preload="none" poster="videos/compile.jpg">
  <source src="videos/compile.webm" type="video/webm">
  <source src="videos/compile.mp4" type="video/mp4">
</video>

# Einrichtung eines Arduino

Solltet ihr bereits ein Arduino Mikrocontrollerboard besitzen,
dann könnt ihr dieses mit der virtuellen Maschine verbinden
(unter Board muss der Name des jeweiligen Arduino Boards ausgewählt werden)…

<video controls preload="none" poster="videos/arduinosetup.jpg">
  <source src="videos/arduinosetup.webm" type="video/webm">
  <source src="videos/arduinosetup.mp4" type="video/mp4">
</video>

…und ein Beispielprogramm an den Arduino übertragen werden.

<video controls preload="none" poster="videos/arduinoul.jpg">
  <source src="videos/arduinoul.webm" type="video/webm">
  <source src="videos/arduinoul.mp4" type="video/mp4">
</video>
