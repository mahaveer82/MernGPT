# MernGPT

This is a full-stack MERN (MongoDB, Express, Typescript, Node.js) application that replicates a simple chatbot similar to ChatGPT. 
Users can interact with the chatbot, ask questions, and receive responses. I was adding jwt token authentication features for security purpose's and hash password also.

#Important

My Model was working completely fine like ChatGpt but i cannot buy the api key that's why model can't be send response back.

## Features

- Real-time chat interface.
- Text-based conversation with the chatbot.
- Responses powered by GPT-3.5 or a similar language model.

## Screenshots
1) Authentication and Authorization
   When user logout
   ![when_logout](https://github.com/mahaveer82/MernGPT/assets/77223066/24b72ee5-3174-418d-a143-9bea20793898)


   When user login
  ![when_login](https://github.com/mahaveer82/MernGPT/assets/77223066/f5965232-2c6f-4c4b-ae15-8f33d5373d6e)


1) SignUp Page
  ![signup_user](https://github.com/mahaveer82/MernGPT/assets/77223066/07df6538-c35a-4c90-a3e9-db929e49c846)


2) Chat Section
  ![chat_interface](https://github.com/mahaveer82/MernGPT/assets/77223066/e205546a-291e-4d73-ade7-b575f5c0efc1)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mern-chatbot-clone.git
   ```

2. For Backend
   ```bash
   cd Backend
   npm install
   ```
   
3. For Frontend
   ```bash
   cd Frontend
   npm install
   ```
4. Go to .env file & add your secret
   1. OpenAI Api key
   2. MongoDB URL
   3. JWT Secret
   4. Cookie Secret
      
5. Both Frontend & Backend side use this command
   ```bash
   npm run dev
   ```
and enjoy the app!
