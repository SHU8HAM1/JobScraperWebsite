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
```npm start```
Then you can visit your website on "localhost:300"

## Preview

<img width="1094" alt="#1" src="https://github.com/user-attachments/assets/306e4d6a-05b4-48bf-b13b-0c59009221e6">

**<p style="text-align:center;">Open the website</p>**

<img width="592" alt="#2" src="https://github.com/user-attachments/assets/ab83b4d9-0cd8-43ec-9854-50dc47693663">

**<p style="text-align:center;">Search for the jobs you are looking for</p>**

<img width="1079" alt="#3" src="https://github.com/user-attachments/assets/a882ab4f-a0b2-4951-93b0-4e821e72b6d8">

**<p style="text-align:center;">Click search and you will see a loading screen for a fraction of a second before the items load</p>**

<img width="1120" alt="#4" src="https://github.com/user-attachments/assets/1944cfc7-189a-45cc-9d73-0846826e6c05">

**<p style="text-align:center;">If you want to apply to a job, just click on the card</p>**

<img width="604" alt="#5" src="https://github.com/user-attachments/assets/8a25c27a-ce6b-4b03-824e-c81e7ab25820">

**<p style="text-align:center;">Then it will take you to the job link</p>**

## Next Steps

Next step is to scrape data from other websites like Indeed, Glassdoor, etc. 
