import { v4 as uuidv4 } from "uuid";
function chillHop() {
	return [
		{
			name: "Dance Of The Sugar Plum Fairies",
			cover:
				"https://t3.ftcdn.net/jpg/02/44/02/20/360_F_244022052_Ev9kjmGn1VWl58TMoNAdVerpR6iFPJrU.jpg",
			artist: "Kevin MacLeod",
			audio: "https://christmassongs-npressinc.s3.us-west-1.amazonaws.com/DanceOfTheSugarPlumFairies.mp3",
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: true,
		},
		{
			name: "Jingle Bells",
			cover:
				"https://freesvg.org/img/christmas-bells.png",
			artist: "Kevin MacLeod",
			audio: "https://christmassongs-npressinc.s3.us-west-1.amazonaws.com/JingleBells(Vocals).mp3",
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Carol Of The Bells",
			cover:
				"https://p0.piqsels.com/preview/823/497/196/bells-christmas-decor-christmas-decorations-hanging.jpg",
			artist: "Audionautix",
			audio: "https://christmassongs-npressinc.s3.us-west-1.amazonaws.com/Carol+Of+The+Bells.mp3",
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Deck The Halls",
			cover:
				"https://live.staticflickr.com/4008/4210990759_5e0e1305d8_b.jpg",
			artist: "Kevin MacLeod",
			audio: "https://christmassongs-npressinc.s3.us-west-1.amazonaws.com/DeckTheHalls(Vocals).mp3",
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Joy To The World",
			cover:
				"https://freesvg.org/img/primary-homepage.png",
			artist: "Audionautix",
			audio: "https://christmassongs-npressinc.s3.us-west-1.amazonaws.com/silentNight(JoytoTheWorld).mp3",
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "We Wish You A Merry Christmas",
			cover:
				"https://cdn.pixabay.com/photo/2020/10/25/15/12/merry-christmas-5684519_1280.png",
			artist: "Audionautix",
			audio: "https://christmassongs-npressinc.s3.us-west-1.amazonaws.com/whishYouAMerryChristmas.mp3",
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: false,
		},
		//ADD MORE HERE
	];
}

export default chillHop;
