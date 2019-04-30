var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	news = [
				{
					'url':'https://www.cnn.com/2018/10/25/sport/johan-bruyneel-lance-armstrong-cycling-tour-de-france-lifetime-ban-spt-intl/',
					'title':"Lance Armstrong's former team manager gets lifetime ban from cycling",
					'description':"(CNN)Johan Bruyneel, a former team manager to Lance Armstrong, has had his 10-year ban from cycling increased to a lifetime ban following an investigation by the World Anti-Doping Agency (WADA).",
					'source':'cnn',
					'urlToImage':'https://cdn.cnn.com/cnnnext/dam/assets/181025105422-bruyneel-armstrong-exlarge-169.jpg',
					'digest':"3RjuEomJo2601syZbU70HA==\n",
					'reason':"Recommend"
				},
				{
					'url':'https://www.cnn.com/2018/10/25/sport/johan-bruyneel-lance-armstrong-cycling-tour-de-france-lifetime-ban-spt-intl/',
					'title':"Lance Armstrong's former team manager gets lifetime ban from cycling",
					'description':"(CNN)Johan Bruyneel, a former team manager to Lance Armstrong, has had his 10-year ban from cycling increased to a lifetime ban following an investigation by the World Anti-Doping Agency (WADA).",
					'source':'cnn',
					'urlToImage':'https://cdn.cnn.com/cnnnext/dam/assets/181025105422-bruyneel-armstrong-exlarge-169.jpg',
					'digest':"3RjuEomJo2601syZbU70HA==\n",
					'time':"Today",
					'reason':"Hot"
				}
			];
	res.status(200).json(news);
  	res.send('respond with a resource');
});

module.exports = router;
