import { Router, Request, Response } from 'express'
import multer from 'multer'

import uploadConfig from './config/upload'
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router()

const upload = multer(uploadConfig)

// criar orfanato
routes.post('/orphanages', upload.array('images'), OrphanagesController.create)

// listar orfanatos
routes.get('/orphanages', OrphanagesController.index)

// detalhes do orfanato
routes.get('/orphanages/:id', OrphanagesController.show)
export default routes