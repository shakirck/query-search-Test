# query-search-Test

Tech Stack Used : MERN - MongoDB , Express , React , Node.Js
* ## [Project Demo : Deployed ](https://admitkard-static-client.shakirck.vercel.app/)
* ## [Video Link For Project Setup and Demo](https://drive.google.com/file/d/1iDmJd-PcwFFpGDoENWNJrrno_HW3k15e/view?usp=sharing)
## Quick Start
```
$ git clone https://github.com/shakirck/query-search-Test.git
$ cd query-search-Test
```
### Setup Server

```sh
$ cd server
$ npm install 
$ npm start
```
### Setup Client

```sh
$ cd client
$ npm install 
$ npm start
```

## API Docs
* #### Get All Questions
  * **/api/questions**
  * **Method : GET **
  * **Example** 
  ```javascript
    const response = awati fetch('/api/questions/');
    const data = response.json();
  ```
  * **Response**
  ```Javascript
  {
    "message": "all question",
    "queries": [
        {
            "topic": "Us Admission",
            "tags": [
                "University"
            ],
            "_id": "5f5cb75372e92c2865335e4a",
            "query": "What are the top engineering colleges in the USA ?",
            "createdAt": "2020-09-12T11:56:03.617Z",
            "updatedAt": "2020-09-12T11:56:03.617Z",
            "__v": 0
        },
        {
            "topic": "Uk Admission",
            "tags": [
                "University"
            ],
            "_id": "5f5cb73172e92c2865335e49",
            "query": "How can i go to london for university admission",
            "createdAt": "2020-09-12T11:55:29.133Z",
            "updatedAt": "2020-09-12T11:55:29.133Z",
            "__v": 0
        }
    ]
  }
  ```
* #### Get All Questions
  * **/api/questions**
  * **Method : POST **
  * **Example** 
  ```javascript
    const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(queryData),
  });

    const data =await response.json();
  ```
  * **Response**
    ```Javascript
    {
    "message": "Query Added"
    }
    ```
