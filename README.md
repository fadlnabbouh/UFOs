# UFOs

## Overview 

The purpose of this project was to create a webpage that hosts data on UFO sightings. In order to provide a more in-depth analysis, the UFO sighting data was displayed in a dynamic table and users were provided with filtering functionality, allowing them to search by Date, City, State, Country, and Shape of UFO.

## Results

The webpage initially loads with all of the UFO sighting data already loaded into a table. Along the side of the table are five search bars that will allow a user to filter by Date of sighting, City, State, Country, and Shape of UFO. Placeholder text is provided to indicate how a search term should be formated in each filter. An image of what the site looks like is here: ![initial_picture](https://github.com/fadlnabbouh/UFOs/blob/main/Images/initial_pic.png)

In order to filter the table, a user may enter their filter term into an input bar. Pressing enter on the keyboard or clicking anywhere on the webpage will allow the table to filter by the search terms. For example, to search by the state California, a user can filter by "ca" in the State bar. ![image_2](https://github.com/fadlnabbouh/UFOs/blob/main/Images/image_2.png)

Likewise, a user can search by all other filters individually, such as date: ![image_3](https://github.com/fadlnabbouh/UFOs/blob/main/Images/image_3.png)

Finally, a user can combine more than one filter to have a more in-depth analysis. In this case, I searched by the state California AND by the date 1/2/2010. ![image_4](https://github.com/fadlnabbouh/UFOs/blob/main/Images/image_4.png)

In order to reset the table, the filters simply need to be erased and enter pressed or with a click of the mouse anywhere on the webpage.


## Summary 

One drawback to the website is it's inability to retrieve new information. For example, it doesn't currently collect, retrieve new data from other sources, or have a way for new data to be collected and stored from users of the website. One solution to this would be to write a script to automate collection of data through webscraping or collect data from an API. Alternatively, the website could solicit and display user data by collecting information on new UFO sightings from users. The information could include the Date, City, State, Country, Shape, Duration, and comments, and then display the data at the bottom of the table in a new row. 

Another improvement to the webpage is to provide users with a dropdown for each filter instead of soliciting that information from them. This will provide the user with the ability to see which filters are available to them and improve their ability to analyze the table. Currently, if a user searches for a country that doesn't exist or uses the wrong format (such as searching for "US" or "USA" instead of "us"), the table will provide no data. Having a dropdown menu will significantly improve the user experience.
