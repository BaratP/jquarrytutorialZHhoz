$(document).ready(function () {
    let kep;let szamlalo=0;let feketeSzamlalo=0;
    //létrehozol egy divet a html kódodban és beállítod cssel a szélességét meg a hosszát
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            //létrehozod a diveket és adsz nekik id-t ami alapján eléred majd őket
            kep='<div id="'+i+''+j+'"></div>';
            //össsze lehet vonni 2 lépést a formázást és az 500x500 mezőhöz adást adást
            //()mit.appendto(hova) .css ({idejohet a formazas , vel elválasztva})
            //ahhoz hogy könnyen tudd pozicionálni az elemeket az 500x500 meződet állítsd relatívra ezeket pedig absolute ra
            //és akkor csak top meg left-tel tudod helyezni az elemeket egyszerűen
            $(kep).appendTo('#jatekter').css({
                position: 'absolute',
                top: (i*50),
                left: (j*50),
                width: 40,
                height: 40,
                background: 'rgb(0,128,0)'
            });
            //ezzel tudsz a diveknek funkciót adni hogy mi történjen ha rá kattintasz.
            $('div[id="'+i+''+j+'"]').click(function () {
                //ha zöld akkor átállítja kékre
                if ($('div[id="'+i+''+j+'"]').css('background-color')==='rgb(0, 128, 0)') $('div[id="'+i+''+j+'"]').css({background: 'blue'})
                //ha nem zöld akkor állítsa feketére (ha fekete és feketére állítja azzal nincsen gond
                else {
                    $('div[id="'+i+''+j+'"]').css({background: 'rgb(0,0,0)'})
                }
                feketeSzamlalo=0
                //megkeresem hogy a divek között mennyinek a háttere fekete
                for (let i = 0; i < 10; i++) {
                    for (let j = 0; j < 10; j++) {
                        if ($('div[id="'+i+''+j+'"]').css('background-color')==='rgb(0, 0, 0)') {
                            feketeSzamlalo++;
                        }
                    }
                }
                //ezzel írod át a szöveget
                $('#feketek').text(feketeSzamlalo);
            })
        }
    }
    // setInterval(funkció_neve,ms) vagy setInterval(function () {ide megy a kód;többsoros},ms).
    // Ezzel a funkcióval tudod meghívni az 1 paraméterben kapott funkciót a 2. paraméterben kapott időközönként 1000=1sec
    setInterval(function () {
        szamlalo++
        console.log(szamlalo);
    },1000)
});