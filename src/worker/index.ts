import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

import { Context } from "hono";
//import xxxApi from 'xxxApiPackage';

const xxxApiCaller = async function(c: Context) {

  // if there is API_KEY set in Cloudflare Workers -> Settings -> Variables and Secrets, get it with 
  //const apiKey = c.env.API_KEY;
  
  // ... call imported xxxApi
  // ... check if the calling is successful and assign the value to following const isSuccess
  const isSuccess = true;                         // replace it with the real api call result
  // ... get the result of the xxxApi calling and assign the value to following const resStr
  const resStr = 'hahahaha';                       // replace it with the real api call result
  
  if (isSuccess) {
      console.log(resStr);
      return c.json({ resString: resStr });
    
  } else{
    return c.json({ resString: "https://www.google.com" });
  }
  
}


app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

app.get("/api/xxxapi", (c) => xxxApiCaller(c));


export default app;
