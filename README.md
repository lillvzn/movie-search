# Movie Search

React SPA to search movies

## Screenshot

![Desktop Screenshot](/images/screenshot.png)

## Installation

_NOTE: You will need to create an account in [themoviedb](https://www.themoviedb.org/) in order to get a valid API key_

1. Close repository

```
    git clone https://github.com/daemonslayer/movie-search.git
```

2. Install required libraries

```
    cd movies-app
    npm install
```

3. Rename .env.example file to .env and add the API key that you've previously created

```
    cp .env.example .env
```

4. Run tests to ensure that everything works well

```
    npm run test
    npm run test:e2e
```

5. Compile assets and start the server

- Development

```
    npm run start
```

- Production

```
    npm run build

    (npm install -g serve)
    serve -s build
```

## Stack

- [react](https://reactjs.org/)
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)
- [@testing-library/react-hooks](https://react-hooks-testing-library.com/)
- [axios](https://github.com/axios/axios)
- [axios-mock-adapter](https://www.npmjs.com/package/axios-mock-adapter)
- [node-sass](https://www.npmjs.com/package/node-sass)
- [react-router](https://v5.reactrouter.com/web/guides/quick-start)
- [styled-components](https://styled-components.com/docs/basics)
- [use-debounce](https://github.com/xnimorz/use-debounce)
- [history](https://github.com/remix-run/history)
- [cypress](https://www.cypress.io/)
