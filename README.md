# Denny-BnB
<h2>About</h2>

Denny BnB is a booking platform for repeat Airbnb guests, allowing them to book directly with the host and bypass Airbnb booking fees.
It runs on a Django Rest Framework backend with a detached React frontend to call the API. The Django is served with Gunicorn and the React build files are served
with Nginx, which also proxies to the Gunicorn backend. Everything is then spun up into images with a Docker Compose file, which runs on AWS EC2.
