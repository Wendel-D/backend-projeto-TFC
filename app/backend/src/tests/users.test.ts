import * as chai from 'chai';
import * as sinon from 'sinon';
import * as bcryptjs from 'bcryptjs';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
import {
    admin,
    users,
    password,
    email,
    invalidEmail,
    incorrectPassword,
} from './mocks/users.mock';
import Users from '../database/models/Users.model';

chai.use(chaiHttp);

const { expect } = chai;

describe('testes /login ok', () => {
    let chaiHttpResponse: Response;

    before(async () => {
        sinon
            .stub(Users, "findOne")
            .resolves(
                users as Users);
    });

    after(() => {
        (Users.findOne as sinon.SinonStub).restore();
    })

    it('login teste', async () => {
        chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send(admin)

        expect(chaiHttpResponse.body).to.have.property('token');
        expect(chaiHttpResponse.status).to.be.equal(200)
    })

    
});

describe('Testes /login invalido', () => {
    let chaiHttpResponse: Response;
    
    before(async () => {
        sinon
            .stub(Users, "findOne")
            .resolves(
                users as Users);
    });
    
    after(() => {
        (Users.findOne as sinon.SinonStub).restore();
    })
    
    it('email invalido', async  () =>{
        chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send(invalidEmail);
    
        expect(chaiHttpResponse.body.message).to.be.equal('Invalid email or password');
        expect(chaiHttpResponse.status).to.be.equal(401);
    })

    it('senha incorreta', async () => {
        chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send(incorrectPassword);

        expect(chaiHttpResponse.body.message).to.be.equal('Invalid email or password');
        expect(chaiHttpResponse.status).to.be.equal(401);
    });

    it('email ausente', async () => {
        chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send(password);

        expect(chaiHttpResponse.body.message).to.be.equal('All fields must be filled');
        expect(chaiHttpResponse.status).to.be.equal(400);
    });

    it('Senha ausente', async () => {
        chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send(email);

        expect(chaiHttpResponse.body.message).to.be.equal('All fields must be filled');
        expect(chaiHttpResponse.status).to.be.equal(400);
    });
})
