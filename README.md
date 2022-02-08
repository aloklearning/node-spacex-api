# SpaceX Script Interface

- Welcome to this project. This project will help you get the data via our own created interface, which then calls the SpaceX API.
- This project is purely based on `NodeJS` and `ExpressJS`.
- We have also added video of exploration one of the queryable data **(which can be found inside the parent folder of this project)** on the local host doing these task:
    - Listing down the items of the queryable data
    - Checking the details of the items separately
- This project depends on the [SpaceX API](https://docs.spacexdata.com/#) to perform it's task which is provided by [Sentiance](http://sentiance.com/).

## Initial Setup

- For running the application on your system, you  must have `npm` installed, and the `node`. To download the same you can visit [NodeJS](https://nodejs.org/en/download/) and [Get NPM](https://www.npmjs.com/get-npm)
- After having done with the installation of the prerequisites, go into the project and remove `node_modules` and `package-lock.json`
- When done run this command `npm install && npm run nodemoon` or `npm install && npm run start`
- Your app will run on the localserver, probably on `3000`. You can then test the API for the functionalities

## Assumptions

- I sorta struggle on getting the clear meaning of the `Script Interface`, so I used my assumptions of getting the SpaceX API data by using our scripted API. **[If this was not the asked requirement, then I will more than happy to give out the new project with the more clear explanation of the requirement. Apologies for any inconveniences]**
- Assuming that the reviewer has the access to my code, so he/she can get the routes, which is required to get the data. For your convenience, the `baseURL` is `/spacex/api/v1/`. 
- Since the statement said, that to return information on **any of the queryable types**, I have listed down API for every items from the docs, right from `Capsules` to `Ships`. 
- I have not added any API for returning `App Info` from the `info` folder, assuming that it won't be that required in the user perscpective. So returning only data about the company from `info` folder from the docs
- I have assumed that no other query or route is required except the listed one in the docs. For example, `Dragons` only have two APIs, these are, `All Dragons` and `One Dragon`, so I have made the API to get these only. No extra layer added to the content. **[If it is required from my side, as an extra step of requirement, would be happy to provide that too. Provided more explanation on the requirements]**
- Since all of the SpaceX API was `GET` operation only, so I created all the APIs in `GET` operation too. Ofcourse, I have used `query param` to get one data of the queryable type. **[If it is required from my side, as an extra step of requirement, would be happy to provide that too. Provided more explanation on the requirements]**
- Naming convention of the routes are the assumptions from my side.


# Libraries/Packages Used

- Have used [nodemon](https://www.npmjs.com/package/nodemon), which helps us to make changes in the code, and refresh the server `real-time`. `node server.js` is not an efficient solution when it comes to saving changes and refreshing the server
- Have used [cors](https://www.npmjs.com/package/cors), which helps us enable `CORS` with vairous options, and also removes `CORS restrictions` on the server for the API
- Used [axios](https://www.npmjs.com/package/axios), which is probably the best package for performing `HTTP Request` based operation on `NodeJS` application
- [express](https://www.npmjs.com/package/express), the most important tool for performing the functionality on the `NodeJS` projects. It is incomplete to work without this package, since, it provides the backend application framework to the `NodeJS` environment.
