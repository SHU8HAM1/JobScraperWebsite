# Job Scraper Website

## Motive
This website is create to scrape the data from different websites and display them all in a single place. This website was created to make job search easier for students like me.
The end goal is to scrape the data from any local website such that students can apply for jobs easily.

## Dependencies

To run this project, you need to have Django and React installed.

Please refer to these websites for instructions on how to download:

- Django: https://docs.djangoproject.com/en/5.1/topics/install/
- React: https://react.dev/learn/installation

In addition, please download Axios using 
```npm install axios@latest```

and Django REST Framework, Virtual Environment(Optional), BeautifulSoup
```pip install "Your dependency"```
The name for the dependencies listed above is djangorestframework, venv, bs4, respectively.

## How to Run the project

If you want to run it on a virtual environment, then in your local cmd first navigate to backend and type 
```venv\Scripts\activate```
Then you can run the django server by simply typing
```python manage.py runserver``` in your command prompt. 
This will kickstart the backend API from where the frontend gets the data

Then navigate to web-app/my-app and run 
```npm start``
Then you can visit your website on "localhost:300"

## Preview



## Next Steps

Next step is to scrape data from other websites like Indeed, Glassdoor, etc. 
