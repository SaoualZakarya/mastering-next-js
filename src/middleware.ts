import { NextResponse } from "next/server";

// This is the allowed list that we will use as cors 
// So we don't need to install cors 
const allowedOrigins = process.env.NODE_ENV === 'production' ? 
    ['https://yoursite.com','https://www.yoursite.com']
    : ['http://localhost:3000','http://127.0.0.1:3000']

export function middleware (req:Request) {

    const origin = req.headers.get('origin')

    if (origin && !allowedOrigins.includes(origin) ){
        return new NextResponse(null,{
            status:400,
            statusText:'Bad Request',
            headers:{
                'Content-Type':'text/plain'
            }
        })
    }

    // With this regex you can do the same as < the config and matcher >
    // To specify in which routes the middleware will be applied
    // const regex = new RegExp('/api/*')
    // if(regex.test(req.url)){ 
    // }
    // if (req.url.includes('/api/')){
    // }

    // console.log('middleware')

    return NextResponse.next()
    
}

// This will specify in which route the middleware will be applied
// Because by default the middleware will be applied on the whole
// Routes of the application
export const config ={
    matcher:'/api/:path*'
}