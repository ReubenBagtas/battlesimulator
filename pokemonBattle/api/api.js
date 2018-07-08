module.exports = (app) => {

    app.get('/api/returnApples',
        (request, response)=>{

            response.json({apples: 'apples'});

        })


}