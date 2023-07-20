# Exposure

Exposure is an image sharing site where artists can upload and sell the rights to their images. Users can purchase image rights and upload their own images.

Check out exposure at: https://exposure-y13f.onrender.com/

![ezgif com-video-to-gif](https://github.com/mattmcburnett/exposure/assets/110564751/b6709255-69c6-454b-83ff-d07cc2728e21)


## Technologies and Frameworks
<div>
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"/>
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"/>
  <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"/>
  <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white"/>
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>
</div>


## Getting Started

To get a local copy up and running follow these simple example steps.

1. Clone this repository

2. Install dependencies

      ```bash
      pipenv install -r requirements.txt
      ```

3. Create a **.env** file with your environment variables based on this example:

   SECRET_KEY=your_secret_key
   DATABASE_URL=your_db_url
   SCHEMA=your_schema_name

   S3_BUCKET=your_bucket_name
   S3_KEY=your_key
   S3_SECRET=your_secret_key

4. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

5. To set up the front end, cd into react-app in another terminal. Then install dependencies and start the app:

   ```bash
   npm install
   ```

   ```bash
   npm start
   ```



## Features

### Sign Up

Users can sign up with their information.

![Screenshot 2023-07-17 at 10 37 45 AM](https://github.com/mattmcburnett/exposure/assets/110564751/f9489157-a62c-4b47-86cb-fff1623ac9df)

### Log In

Users can log in with valid credentials.

![Screenshot 2023-07-17 at 10 38 00 AM](https://github.com/mattmcburnett/exposure/assets/110564751/81e47737-563e-4403-92c3-c281ce867e1a)

### Upload an Image

Users can upload an image and set the licensing price.

![Screenshot 2023-07-17 at 10 38 37 AM](https://github.com/mattmcburnett/exposure/assets/110564751/b12dce7b-711c-43e1-9a8f-0e08c35513c4)

### Edit an Image

Users can edit their image information and pricing.

![Screenshot 2023-07-17 at 10 39 01 AM](https://github.com/mattmcburnett/exposure/assets/110564751/f701b596-0025-4546-b4da-72a08211cea1)

### Delete an Image

Users can delete their image.

![Screenshot 2023-07-17 at 10 39 16 AM](https://github.com/mattmcburnett/exposure/assets/110564751/8a4ae495-e69b-4a73-a6eb-77db6c950470)

### Add and Remove a License from Your Cart

Users can add image licenses to their shopping cart and remove them.

![Screenshot 2023-07-17 at 10 39 53 AM](https://github.com/mattmcburnett/exposure/assets/110564751/2ea71ab6-1492-45c1-987e-5ca99ac49b45)

### Purchase a License

Users can purchase a license on the checkout page.

![Screenshot 2023-07-17 at 10 40 15 AM](https://github.com/mattmcburnett/exposure/assets/110564751/f8a1f4b5-2de4-4e82-bbc2-19e9cbb685d5)

### Cancel a License

Users can cancel specific licenses.

![Screenshot 2023-07-17 at 10 41 00 AM](https://github.com/mattmcburnett/exposure/assets/110564751/844d8896-e432-4c8e-8e31-9843dc9f195f)

### Comment on an Image

Users can comment on an image.

![Screenshot 2023-07-17 at 10 42 14 AM](https://github.com/mattmcburnett/exposure/assets/110564751/9040a20e-8dd8-410f-a952-7e02c96f73a6)

### Delete Comment

Users can delete their own comments.


## Roadmap

1. Add image likes
2. Add messaging capabilities for users
3. Implement categories for image types


## Contact
📬 Email me at mattmcburnett@gmail.com
