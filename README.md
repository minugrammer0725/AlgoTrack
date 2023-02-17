# AlgoTrack
AlgoTrack is a full-stack application that allows users to create flashcards for studying algorithms and leetcode problems. 
The app is built using React, Typescript, with a Node.js Express server and MySQL database. 
It also utilizes TypeORM, Tanstack react-query, and Material UI.

## Screenshots
#### Main App
<img src="https://user-images.githubusercontent.com/74132431/219790934-35ca3792-a94c-4051-b842-0d12d54450c9.png" width="840" height="480">

#### Flashcard
<img src="https://user-images.githubusercontent.com/74132431/219790311-8ea6b5ce-df8d-4b65-bfeb-359caac0bdae.png" width="600" height="400">

#### Form
<img src="https://user-images.githubusercontent.com/74132431/219791523-ebd79ea9-5462-4a44-9a89-5ea055369978.png" width="360" height="400">




## Getting Started
To get started with AlgoTrack, follow these instructions:

### Prerequisites
- Node.js (v14.16.0 or higher)
- MySQL Database
- npm (or yarn) package manager

### Installing
1. Clone the repository to your local machine
```
git clone https://github.com/minugrammer0725/AlgoTrack.git
```
2. Install dependencies using npm or yarn. First install all the frontend dependencies.
```
npm install
```
Navigate to the backend directory to install backend dependencies as well.
```
cd backend
npm install
```
3. Create a `.env` file in the backend root directory, and configure the following info.
```
PORT=<PORT#>
MYSQL_USER=<username>
MYSQL_PASSWORD=<password>
MYSQL_DB=<DBname>
```
Note that you need to first create the DB that you wish to connect in MySQL.

4. Let's first run the server by running this command in backend directory.
```
npm run dev
```
The development server should be running at `http://localhost:3000`.

5. Navigate back to the root directory and run this command.
```
cd ..
npm run dev
```
You can now view the application by clicking on the provided link.

![image](https://user-images.githubusercontent.com/74132431/219784358-0cc8d3f3-9813-4722-86c6-8492fc079a2a.png)


## Features
- Flashcard to study algorithm/leetcode problems.
- CRUD operations on flashcards.
- Assign due date and status to prioritize flashcards.
- Counter to keep track of progress.

## Built With
- React
- Typescript
- Node.js
- Express
- MySQL
- TypeORM
- TanStack Query
- Material UI

### Acknowledgements
- Inspiration: Task Todo-List App by Manik(Cloudaffle) from Udemy.
