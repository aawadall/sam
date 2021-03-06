// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event, context) => {
    try {
        // const ret = await axios(url);
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world',
                event: event,
                context: context
                //location: ret.data.trim()
            })
        }
    } catch (err) {
        console.log(err);
        return {
            error: err
        };
    }

    return response
};

exports.anotherHandler = async (event, context) => {
    try {
        if (event.httpMethod == 'GET')
        {
            response = {
                'statusCode': 200,
                'body' : JSON.stringify({
                    message: 'hello from function <anotherHandler>',
                    method: 'GET'
                })    
            }
        }
        else if (event.httpMethod == 'POST' )
        {
            response = {
                'statusCode': 200,
                'body': JSON.stringify({
                    method: 'POST'
                })
            }
        }
        else
        {
            response = {
                'statusCode': 400,
                'body': JSON.stringify({
                    messge: 'Unhandled method',
                    method: event.httpMethod
                })

            }
        }
    } catch (err) {
        console.error(`Error Mesaage ${err}`);
        return err;
        
    }
    return response;
}