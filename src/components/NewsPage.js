import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import Loading from './loading';
import InfiniteScroll from 'react-infinite-scroll-component';

import blankImage from './static/img/blankimage.png';

export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 8, // Number of articles to fetch per request
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    const { country, category, pageSize } = this.props;
    const { page } = this.state;

    this.setState({ loading: true });

    try {
  
      let url = "";
      const apiKey = process.env.REACT_APP_NEWS_API_KEY;

    if (country.toLowerCase() === "in") {
      // Indian category-wise with specific sources
      url = `https://newsapi.org/v2/everything?q=India%20${category}&sources=the-hindu,the-times-of-india,hindustan-times,ndtv-news,india-today,the-indian-express,business-standard,the-economic-times,deccan-chronicle,scroll-in&language=en&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    } else {
      // General top-headlines for other countries
      url = `https://newsapi.org/v2/top-headlines?q=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    }


      
      let data = await fetch(url);
      let parsedData = await data.json();

      

      this.setState({
        articles: [...this.state.articles, ...(parsedData.articles || [])],
        totalResults: parsedData.totalResults || 0,
        loading: false,
      });


    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  };

  fetchMoreData = () => {
    this.setState(
      { page: this.state.page + 1 },
      this.fetchNews
    );
  };

  render() {
    const { articles, loading, totalResults } = this.state;

    return (
      <>
        <h2 style={{ textAlign: "center", margin: "20px 0" }}>
          Here are the top news : {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}
        </h2>

        <InfiniteScroll
          dataLength={articles.length}
          next={this.fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              {Array.from({ length: 8}).map((_, index) => (
                <Loading key={index} />
              ))}
            </div>
          }
        >
          <div
            className="newsitems"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              justifyContent: "center",
            }}
          >
            {articles.length > 0 ? (
              articles.map((element, index) => (
                <NewsItem
                  key={element.url || index}
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage || blankImage}
                  newsurl={element.url}
                />
              ))
            ) : (
              !loading && <p>No news articles available.</p>
            )}
          </div>
        </InfiniteScroll>
      </>
    );
  }
}


