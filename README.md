
# Universal API caller and Test

## disconnect the git repo
Cloudflare Workers -> Settings -> Build 

## install dependencies in ```package.json```

## store API_KEY in Cloudflare Workers -> Settings -> Variables and Secrets, then use it with
```const apiKey = c.env.API_KEY;```

## write the api calling function in src/worker/index.ts

```javascript
import { Context } from "hono";
//import xxxApi from 'xxxApiPackage';

const xxxApiCaller = async function(c: Context) {

// ... ...

}
```

## set a route for use apiCaller
```app.get("/api/xxxapi", (c) => xxxApiCaller(c));```

## add a button 
name: **Test XXX API**,   
onClick function: ```fetch("/api/xxxapi")```  
and then show the response in ```src/react-app/App.tsx```

## re-connect the git repo 
Cloudflare Workers -> Settings -> Build

## add a section for ```xxxapi``` in ```README.md```, Click Commit changes... button 

## Cloudflare starts to build

## click the deployed web app url

## click the button: ```Test XXX API```

## check the page, console and Cloudflare Workers -> Observability

