# DESCRIPTION

A project built for Udemy course: The Complete React Native and Redux Course

# SETUP

This project uses Firebase for authentication and data persistence. To use this app,

1. create an application in Firebase and enable email/password authentication and realtime database
2. create a .config.js file in the root directory that exports an object with your configuration keys as follows:

```
export default {  API_KEY: 'your data here',
  AUTH_DOMAIN: 'your data here',
  DATABASE_URL: 'your data here',
  PROJECT_ID: 'your data here',
  STORAGE_BUCKET: 'your data here',
  MESSEGING_SENDER_ID: 'your data  here'
};
```
