import './NewsPanel.css';

import React from 'react';

import NewsCard from '../NewsCard/NewsCard';

class NewsPanel extends React.Component{
	constructor(){
		super();
		this.state= {news:null};
	}

	componentDidMount(){
		this.loadMoreNews();
	}

	loadMoreNews(e){
		this.setState({
			news:[
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
					'reason':"Recommend"
				}
			]
		});
	}

	renderNews() {
	    var news_list = this.state.news.map(function(news) {
		    return(
		    	//eslint-disable-next-line
		        <a className='list-group-item' key={news.digest} href="#">
		          <NewsCard news={news} />
		        </a>
		    );
		});

	    return(
		     <div className="container-fluid">
		        <div className='list-group'>
		        	{news_list}
		        </div>
		     </div>
	    );
  	}

	render() {
	    if (this.state.news) {
	        return(
		         <div>
		            {this.renderNews()}
		         </div>
	        );
	    } else {
	    	return(
		        <div>
			         <div id='msg-app-loading'>
			         	Loading
			         </div>
		        </div>
	      	);
	    }
  	}
}
export default NewsPanel;