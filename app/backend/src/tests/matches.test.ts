import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { Response } from 'superagent';
import Matches from '../database/models/Matches.model';
import { matchesList } from './mocks/matches.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('testes Matches', () => {
    let chaiHttpResponse: Response;

    before(async () => {
        sinon
            .stub(Matches, "findAll")
            .resolves(
                matchesList as unknown as Matches[]);
    });

    after(() => {
        (Matches.findAll as sinon.SinonStub).restore();
    })

    it('teste /matches getAll', async () => {
        chaiHttpResponse = await chai
            .request(app)
            .get('/matches')

        expect(chaiHttpResponse.body).to.be.deep.equal(matchesList)
        expect(chaiHttpResponse.status).to.be.equal(200)
    });

    it('teste filtro inProgress=true', async () => {
        chaiHttpResponse = await chai
            .request(app)
            .get('/matches/?inProgress=true')

        expect(chaiHttpResponse.body).to.be.an('array')
        expect(chaiHttpResponse.status).to.be.equal(200)
    });
    it('teste filtro inProgress=false', async () => {
        chaiHttpResponse = await chai
            .request(app)
            .get('/matches/?inProgress=false')

        expect(chaiHttpResponse.body).to.be.an('array')
        expect(chaiHttpResponse.status).to.be.equal(200)
    });
});