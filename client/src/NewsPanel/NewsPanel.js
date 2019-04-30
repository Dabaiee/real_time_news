import './NewsPanel.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import _ from 'lodash';

class NewsPanel extends React.Component{
	constructor(){
		super();
		this.state= {news:null};
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount(){
		this.loadMoreNews();
		this.loadMoreNews = _.debounce(this.loadMoreNews, 400);
		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll(){
		let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
		if ((window.innerHeight + scrollY) >= (document.body.offsetHeight -80)){
			//console.log('Loading more news');
			this.loadMoreNews();
		}
	}
/**/
	loadMoreNews(){
		let url = 'http://localhost:3000/news';

		fetch(url, {
		  method: 'GET', 
		  cache: 'no-cache'
		})
		.then(
			res => res.json()
		)          
		.then((news) => {
				this.setState({
					news: this.state.news? this.state.news.concat(news) : news,
				})
			}).catch(error => console.error('Error:', error));
	}

	renderNews() {
	    var news_list = this.state.news.map(function(news) {
		    return(
		    	// eslint-disable-next-line
	        	<a className='list-group-item' href="#">
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