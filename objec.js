function Main() {
    this.execute = function () {


        // Exercise I
        let musicAlbum = {
            Title: 'Pon Di Gaza',
            Author: 'Vybz Kartel',
            Label: 'Adidjaheim/Notnice',
            releaseDate: 'September 22, 2009',
            Songs: ['Want My Weed', 'Struggle', 'Life We Living', 'Romping Shop', 'Like A movie',],
        };
        console.log(musicAlbum);

        //Exercise II
        let newalbum = {
            title: "pon di gaza 2",
            artist: "vybz kartel",
            thelabelcompanyname: "Tad's Record",
            thereleaseyear: "2010",
            songs: ["can't get over me", "Mr. Officer", "GO GO Club", "Come breed me "],
        };

        // Excercise III
        function showinfo(newalbum) {
            return (newalbum.title + newalbum.songs);
        }

        showinfo(newalbum);

    }
}
new Main().execute();
