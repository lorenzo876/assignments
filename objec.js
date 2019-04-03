function Main() {
    this.execute = function () {


        // Exercise I
        let musicAlbum = {
            title: 'Pon Di Gaza',
            artist: 'Vybz Kartel',
            label: 'Adidjaheim/Notnice',
            releaseDate: 'September 22, 2009',
            songs: ['Want My Weed', 'Struggle', 'Life We Living', 'Romping Shop', 'Like A movie',],
        };
        console.log(musicAlbum);

        //Exercise II
        let newalbum = {
            title: "pon di gaza 2",
            artist: "vybz kartel",
            label: "Tad's Record",
            thereleaseDate: "2010",
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
