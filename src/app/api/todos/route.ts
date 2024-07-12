import { NextResponse } from 'next/server';

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

const API_KEY : string = process.env.DATA_API_KEY as string ;

 export async function  GET(req:Request)  {
    const data = await fetch(DATA_SOURCE_URL) ;

    if(!data.ok){
        throw new Error(`Failed to fetch data from ${DATA_SOURCE_URL}`);
    }
    
    const todos:Todo[] = await data.json()

    console.log(todos)

    return NextResponse.json(todos)
}

export async function  DELETE(req:Request)  {
    const {id} : Partial<Todo>  = await req.json() ;
    if(!id){
        return NextResponse.json({"message":"Todo id is required"})
    }
    await fetch(`${DATA_SOURCE_URL}/${id}`, 
        {
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'API-key': API_KEY  
            }
        }, 
    ) ;
    return NextResponse.json({"message":`Todo ${id} has been deleted`})
}

export async function  POST(req:Request)  {
    const {userId,title} : Partial<Todo>  = await req.json() ;
    if(!userId || !title){
        return NextResponse.json({"message":"Missing required data"})
    }
    const res = await fetch(`${DATA_SOURCE_URL}`, 
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'API-key': API_KEY  
            },
            body:JSON.stringify({
                userId,
                title,
                complete:false
            })
        }, 
    ) ;

    const newTodo:Todo = await res.json() ;

    return NextResponse.json(newTodo)
}

export async function  PUT(req:Request)  {
    const {userId,title,id,complete} : Todo  = await req.json() ;
    if(!userId || !title || !id || typeof(complete) !== 'boolean' ){
        return NextResponse.json({"message":"Missing required data"})
    }
    const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                'API-key': API_KEY  
            },
            body:JSON.stringify({
                userId,
                title,
                complete
            })
        }, 
    ) ;

    const updatedTodo:Todo = await res.json() ;

    return NextResponse.json(updatedTodo)
}
