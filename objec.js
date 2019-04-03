function Main() {
    this.execute = function () {



        let musicAlbum = {
            Title: 'Pon Di Gaza',
            Author: 'Vybz Kartel',
            Label: 'Adidjaheim/Notnice',
            releaseDate: 'September 22, 2009',
            Songs: ['Want My Weed', 'Struggle', 'Life We Living','Romping Shop','Like A movie',],
        };
        console.log(musicAlbum);


        let newalbum = {
			title: "pon di gaza 2",
			artist: "vybz kartel",
			thelabelcompanyname: "notnice",
			thereleaseyear : "2010",
			songs: ["ghetto people","where im from", "dont run ", "wicked people"],
		};

		// excercise 3
		function showinfo (album2){
			return (newalbum.title + newalbum.songs);
		}

		showinfo(newalbum);

    }
}
new Main().execute();