//to jest plik glowny


var dokumentGotowy = function () {
    clippy.load('Clippy', function (agent) {
            agent.show();

        setInterval(function () {

            agent.moveTo(Math.floor(Math.random() * $(window).width()) + 100, Math.floor(Math.random() * $(window).height()) + 100);
            agent.speak('CZY POKAZAC CI JAK SIE KLIKA W KUTACZA?');
            agent.gestureAt(200, 200);
        }, 4000)

    });
};

$(document).ready(dokumentGotowy);


