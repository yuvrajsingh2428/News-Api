import rateLimit from "express-rate-limit";


export const limiter = rateLimit({
    windowMs: 60 * 60 * 1000,   // 1 min
    limit:100,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
})