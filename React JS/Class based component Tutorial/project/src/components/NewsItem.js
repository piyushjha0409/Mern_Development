import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, desc, imageUrl, newsUrl} = this.props;
        return (
            <>
            {/* you have to make the card on your own */}
            <div className='cards' style={{width:"18rem"}}>
                <div className='image'>
                <img src={!imageUrl?"https://newsapi.org/v2/top-headlines?country=in&apiKey=8f298774375c430a9a7a5d1ae3e6e410":imageUrl} className='card-img' alt=".."/>
                </div>
                <div className='title'>
                 <h1>{title}...</h1>
                </div>
                <div className='desc'>
                <p>{desc}...</p>
                <a className='btn-read' target='_blank' href={newsUrl}>Read more</a>
                </div>
            </div>
            </>
         
        )
    }
}

export default NewsItem
