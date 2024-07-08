import { NextResponse } from 'next/server';
import { limiter } from '../config/limiter';


const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

type Props = {
    params:{
        id:string
    }
}

export async function  GET(req:Request,{params:{id}}:Props)  {

    const origin = req.headers.get('origin')

    const remaining = await limiter.removeTokens(1);
    console.log('remaining',remaining)
    if( remaining <= 0 ){
        return new NextResponse(null,{
            status:429,
            statusText:"Too many requests",
            headers:{ 
                'Access-Control-Allow-Origin': origin || '*',
                'Content-Type':'text/plain'
            }
        })
    }

    // const id = req.url.slice(req.url.lastIndexOf('/') + 1 ) ;

    const data = await fetch( DATA_SOURCE_URL + "/" + id ) ;
    
    const todo:Todo = await data.json() ;

    if(!todo || Object.keys(todo).length === 0){
        return NextResponse.json({"message":"Todo not found"})
    } 

    return NextResponse.json(todo)
}

