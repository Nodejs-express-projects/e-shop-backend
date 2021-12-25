module.exports = (app) =>{

app.get('/catalog/:id',function(request,reply,next){
    
    reply.send({attach:true});

    next();


})


}