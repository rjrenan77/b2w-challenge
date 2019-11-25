import app from "./src/app";

app.get("/", (req,res)=>{
  res.json("deu tudo certo");
})


app.listen(3333, ()=>{
  console.log("Server node rodando na porta 3333 - B2W Challenge");
});