module.exports  = app=>{
    // app.cache = new Cache();
    app.once('server',server=>{
        console.log(server,'server');
    });
    // console.log(app.mysql,'234');
    app.on('error',(err,ctx)=>{
        console.log(err,'err');
    });

    app.on('request',ctx=>{
        console.log(ctx,'request');
    });

    app.on('response',ctx=>{
        const used = Date.now() - ctx.starttime;
        console.log(used,'response');
    });
    
}
