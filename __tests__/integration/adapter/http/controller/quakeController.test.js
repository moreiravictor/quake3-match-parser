import request from 'supertest'
import app from '../../../../../src/app.js'

describe('Controller which provides parsed informations of log archive', () => {
    it('should parse the whole file', async () => {

        const res = await request(app)
            .get('/games')

        expect(res.status).toBe(200)
    }),
    it('should return a single parsed game', async () => {

        const res = await request(app)
            .get('/games/1')
            
        expect(res.status).toBe(200)
    })
})