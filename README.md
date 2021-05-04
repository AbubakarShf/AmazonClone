# Q.How i run this in my pc?

### 1. Simply download this project go inside project directory and open cmd/gitbash. Write **npm install** and hit enter. It will install all required dependencies.

### 2. Now we have to create the database and change configuration of firebase in AmazonClone>src>.firebase>Firebase.js . For that

    1.Go on https://firebase.google.com/
    2.Create FirStore DataBase.

![alt text](https://www.linkpicture.com/q/click-create-database.jpg "AbubarShf")
3.Give it name **products**.

    4.Specify the collection-type/fields and click on save.

![alt text](https://i.ibb.co/hMMPqXV/add-specific-fields.jpg "AbubakarShf")

    5. Now, Click on *ProjectDatabase* setting.

![alt text](https://i.ibb.co/2cxg62q/config-settings.jpg "AbubakarShf")

    6. Now, Click on higlighted icon *</>*.

![alt text](https://i.ibb.co/XDzt4Jm/crate-web-App.jpg "AbubakarShf")

    7. Click on config and copy that code.

![alt text](https://i.ibb.co/wyQcbjn/647764.jpg "AbubakarShf")

    8. At the end, paste that code in in replacement of the old code in AmazonClone>src>.firebase>Firebase.js . Carefully!

```javascript
    apiKey: "AIzaSyCf3H8NCnV4FfEguVVvaKuM2uti7okaPrY",
    authDomain: "clone-ffc29.firebaseapp.com",
    projectId: "clone-ffc29",
    storageBucket: "clone-ffc29.appspot.com",
    messagingSenderId: "530829000076",
    appId: "1:530829000076:web:0fd77c3bbe3e1f7bb2aaa9",
```

    9. Then your file will look like this.

```javascript
import firebase from "firebase";
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCf3H8NCnV4FfEguVVvaKuM2uti7okaPrY",
    authDomain: "clone-ffc29.firebaseapp.com",
    projectId: "clone-ffc29",
    storageBucket: "clone-ffc29.appspot.com",
    messagingSenderId: "530829000076",
    appId: "1:530829000076:web:0fd77c3bbe3e1f7bb2aaa9",
});
const DataBase = firebase.firestore();
export { DataBase };
```

    10. Now write npm run in cmd/terminal.
