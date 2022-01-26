import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  constructor() {
    super();
    console.log("Hello constructor called!");
    this.state = {
      articles: this.articles,
      loading: false,
      page:1
    };
  }
  // fetching the APi key
   async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=8f298774375c430a9a7a5d1ae3e6e410&page=1"
    let data = await fetch(url); //yeh intezaar krega iss promise ke resolve hone ka
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }
  //function for the previous click button
  handlePrevClick = ()=>{
   console.log("Previous");
  }
  //function for the next click button
  handleNextClick = async ()=>{
    console.log("Next");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8f298774375c430a9a7a5d1ae3e6e410&page=${this.state.page - 1}`;
    let data = await fetch(url); //yeh intezaar krega iss promise ke resolve hone ka
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
    this.setState({
      page: this.page - 1,
      articles: parsedData.articles
    })

  }
  render() {
    return (
      <div className="container">
        <h2 style={{ display: "block", textAlign: "center" }}>
          News Forever Top Headlines
        </h2>
        <div className="row">
          {this.state.articles.map((element) => {
             return <div className="col-md-3 mx-4 my-2" key={element.url}>
              <NewsItem
                title={element?element.title.slice(0,40):""}
                desc={element?element.description.slice(0,75):""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          })}
        </div>
        <div className="container">
            <button type="button" className="btn1" onClick={this.handlePrevClick}><b>&larr;Previous</b></button>
            <button type="button" className="btn2" onClick={this.handleNextClick}><b>Next&rarr;</b></button>
        </div>
      </div>
      
    );
  }
}
export default News;
