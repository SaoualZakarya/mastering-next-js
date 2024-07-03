type Result = {
    pageid:string,
    title:string,
    extract:string,
    thumbnail ?: {
        source:string,
        width:number,
        height:numer
    }
}

type SearchResult = {
    query ?:{
        pages ?: Result[] ,
    }
} 