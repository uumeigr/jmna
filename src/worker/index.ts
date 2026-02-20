import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

import { Context } from "hono";
//import xxxApi from 'xxxApiPackage';

const xxxApiCaller = async function(c: Context) {

  // ... call the xxxApi
  // ... check if the calling is successful
  // ... get the result of the xxxApi calling
  const isSuccess = true;       // replace it with the real api call result in
  const resStr = 'hahahaha';     // replace it with the real api call result
  
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
