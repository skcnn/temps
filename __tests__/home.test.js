const request = require('supertest')
import { app } from '../index'

describe('testing endpoints', ()=>{
    test('it should return 200', async ()=>{
        const res = await request(app).get('/')
        expect(res.statusCode).toBe(200)
    })
    test('it should return hello', async ()=>{
        const res = await request(app).get('/')
        expect(res.body).toEqual({message: "hello"})
    })
})