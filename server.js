var express = require('express')
var app = express()
var cors = require('cors')
app.use(cors())

const mockSecrets = [
    {
        id: 'leet1337',
        passphrase: 'leet',
        secret: 'this is a compete secret. I fucked your mom',
    }, {
        id: 'wewewe',
        secret: 'card code is 89238492384'
    }
]
var corsOptions = {
    origin: 'http://localhost:3000',
   
  }
const findSecret = (secretId) => {
    const secret = mockSecrets.find((secret) => secret.id === secretId);
    if (!secret) {
        throw { message: 'secret not found', code: 404 };
    }
    return secret;
}
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.post('/secret', (req, res) => res.status(200).send('Not supported yet'));

app.get('/secret/:secretId', (req, res, next) => {
   
    
    try {
        const secretId = req.params.secretId;
        const passphrase = req.params.passphrase;
        
        const secret = findSecret(secretId);
        // console.log(secret);
        if (secret.passphrase && !passphrase) {
            throw { message: 'passphrase needed', code: 403 }; 
        }

        if (secret.passphrase && secret.passphrase != passphrase) {
            throw { message: 'secret not found', code: 404 }; 
        }

        return res.status(200).json(secret);
    } catch (error) {
        return res.status(error.status || 500).json(error.message || error);
    }
    
});

app.set('port', 8080);
 
app.listen(app.get('port'), () => {
    console.log(`server starts at ${app.get('port')}`)
});