let news = new News;
let enOutlet = new NewsOutlet("en");
let ptOutlet = new NewsOutlet("pt");
let arOutlet = new NewsOutlet("ar");
let newsElements = [];

news.addSubscriber(enOutlet);
news.addSubscriber(ptOutlet);
news.addSubscriber(arOutlet);

var defaultBreaking = function() {
	var breaking = document.getElementsByClassName("breaking");
	for (let item of breaking) { item.innerText = "Type some news..."; }
}

var sendNews = function() {
	let theNews = document.getElementById("sourceNews").value;
	news.transmit(theNews);
	news.observers.forEach(function(o){
		o.reportTheNews();
	});
}



