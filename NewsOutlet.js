// The News Outlets are subscribers to the news in different languages
class NewsOutlet {
	// We will set the language when we instantiate the news outlet
	constructor(language = "en") {
		this.language = language;
		this.data = "";
		this.news = "";
		// For this example we'll use my API key, but please go to 
		// https://yandex.com/ and sign up to get your own
		this.apiKey = "trnsl.1.1.20190807T020501Z.f95163fde699ac87.1f9b3df7b5d7c045104d21249dc322086ee38004";
		this.translateUrl = "https://translate.yandex.net/api/v1.5/tr.json/translate";
	}
	
	receive(data) {
		this.data = data;
		var urlParamList = "?";
		urlParamList += "key=" + this.apiKey;
		urlParamList += "&text=" + this.data;
		urlParamList += "&lang=" + this.language;
		var self = this;
		
		// Translate after receiving
		jQuery.ajax({
		 url: this.translateUrl + urlParamList,
		 contenttype: "application/json",
		 datatype: "json",
		 success: function(result) {
			self.news = result.text[0];
			self.reportTheNews();
		 }
		});
		
	}
	
	reportTheNews() {
		// A shady workaround for our HTML efforts!
		let elemId = this.language + "1";
		document.getElementById(elemId).innerText = this.news;
	}
	
}