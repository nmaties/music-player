## Orange Music Player

In order to make this app work follow these steps:

1. `npm i` - to install all the node dependencies
2. `npm run start` - to start the application on port 3000 at this address `localhost:3000`
3. `npm run test` - to run all the tests

4. All the songs have a valid url which comes from my google drive account, every link has a share limit of 100 (from Google Drive).
Do not try to refresh multiple times the application because:
```
if (song link (GET) requests > 100) {
    return multiple errors;
}
```