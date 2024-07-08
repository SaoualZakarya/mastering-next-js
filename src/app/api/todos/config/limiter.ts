import { RateLimiter } from "limiter";

// This is the configuration file for the request limiter 
export const limiter = new RateLimiter({
    tokensPerInterval:3,
    interval:"min",
    fireImmediately:true
})