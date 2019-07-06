import React, { useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

const Footer = () => {

    const displayMe = (results) => {
        for (var i = 0; i < results.length; i++) {
            var temp = {}
        };
    }
    const searchAll = () => {
        // Making a request via axios for reddit's "webdev" board. The page's HTML is passed as the callback's third argument
        axios.get("https://www.goodreads.com/quotes/tag/time").then(function (response) {
            // Load the HTML into cheerio and save it to a variable
            // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
            var $ = cheerio.load(response.data);
            var results = [];

            // An empty array to save the data that we'll scrape

            // With cheerio, find each p-tag with the "title" class
            // (i: iterator. element: the current element)
            $("div.quoteText").each(function (i, element) {
                // Save the text of the element in a "title" variable
                var text = $(element).text();

                // In the currently selected element, look at its child elements (i.e., its a-tags),
                // then save the values for any "href" attributes that the child elements may have
                var link = $(element)
                    .children("a")
                    .attr("href");
                var author = $(element).children("span").attr("authorOrTitle");

                console.log(link + " " + text + " " + author);
                // Save these results in an object that we'll push into the results array we defined earlier
                results.push({
                    title: text,
                    link: link,
                    author: author
                });
            });
            // Log the results once you've looped through each of the elements found with cheerio
            displayMe(results);
        });
    }


    useEffect(() => {
        searchAll();
        // eslint-disable-next-line
    }, [])
    return (

        <div>
            <footer className="page-footer blue lighten-1">
                <div className="container">
                    <div className="row">
                        <div className="col l12 m12 s12 center">
                            <h6 className="white-text">{} </h6>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container center">
                        © 2019 Copyright
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
