import {Router } from 'express'
import AuthController from '../controllers/AuthController.js'
import authMiddleware from '../middleware/Authenticate.js'
import ProfileController from '../controllers/ProfileController.js'
import NewsController from '../controllers/NewsController.js'
import redisCache from '../config/redis.config.js'




const router = Router()

router.post("/auth/register", AuthController.register)
router.post("/auth/login", AuthController.login)
router.get("/send-email", AuthController.sendTestEmail);


//profile routes
router.get("/profile", authMiddleware, ProfileController.index)  // private route
router.put("/profile/:id", authMiddleware, ProfileController.update)  // private route

//News routes
router.get("/news", redisCache.route(),NewsController.index  )
router.post("/news", authMiddleware, NewsController.store)
router.get("/news/:id", NewsController.show)
router.put("/news/:id", authMiddleware, NewsController.update)
router.delete("/news/:id", authMiddleware, NewsController.destroy)



export default router