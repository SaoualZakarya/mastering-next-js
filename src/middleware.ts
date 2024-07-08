import { NextResponse } from "next/server";

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

    // const regex = new RegExp('/api/*')
    // if(regex.test(req.url)){ 
    // }
    // if (req.url.includes('/api/')){
    // }

    // console.log('middleware')
    // console.log(req.method)
    // console.log(req.url)
    // console.log(origin)
    return NextResponse.next()
    
}

export const config ={
    matcher:'/api/:path*'
}