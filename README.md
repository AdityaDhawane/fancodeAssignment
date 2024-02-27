# fancodeAssignment

For Problem 1. 
The solution which I've implemented is optimizing the SQL query from left Join to Inner Join, as it increases the performance.
Tried installing Redis for caching but was facing issues in my local machine, hence wasn't able to implement it.

For Problem 2.
I've updated the query for adding new fields.

For Problem 3.
I've added a new Table: News, which will have matchId & tourId as FK as creating seperate tables for match-news or tour-news would increase redundancy.
So, the current design populates the table based on the createNews API which has payload like this:
{
    "title": "Exciting News for English Premiere League 2022!",
    "description": "New sponsor announced for English Premiere League 2022.",
    "news_type": "tour",
    "id": 4
}
Based on news_type, the Insert query populates the tour_id or the match_id because in the functional requirement it is clearly mentioned : 
"News can be created for a match or a tour."
Also, I've created other required Get APIs for News table as per the Technical requirement.

I've also written test.js for the newly created news.js routing file.
