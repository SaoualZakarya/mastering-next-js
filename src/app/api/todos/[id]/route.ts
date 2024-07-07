import { NextResponse } from 'next/server';

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

export async function  GET(req:Request)  {

    const id = req.url.slice(req.url.lastIndexOf('/') + 1 ) ;

    const data = await fetch( DATA_SOURCE_URL + "/" + id ) ;
    
    const todo:Todo = await data.json() ;

    if(!todo || Object.keys(todo).length === 0){
        return NextResponse.json({"message":"Todo not found"})
    } 

    return NextResponse.json(todo)
}

