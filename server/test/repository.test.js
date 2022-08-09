import server from '../src/index.js'
import chai from 'chai'
import chaiHttp from 'chai-http'

chai.should()
chai.use(chaiHttp)


describe('Repository API', () => {
    describe('Get api/v1/repo/trending', () => {
        it('Trending repositories', (done) => {
            chai.request(server)
                .get('/api/v1/repo/trending?currentPage=1')
                .end((err, response) => {
                    response.should.have.status(200)
                    response.body.items.should.be.a('array')
                    response.body.items.length.should.be.eq(10)
                })
                done()
        })
    })

    describe('Get /api/v1/repo/search', () => {
        it('Search repository list', (done) => {
            chai.request(server)
                .get('/api/v1/repo/search?searchKeyword=hello&per_page=10')
                .end((err, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('array')
                    response.body.length.should.be.eq(10)
                })
                done()
        })
    })

    describe('Get /api/v1/repo/details', () => {
        it('Search repository list', (done) => {
            chai.request(server)
                .get('/api/v1/repo/details?repoName=mikepenz/LollipopShowcase')
                .end((err, response) => {
                    // console.log(response);
                    response.should.have.status(200)
                    response.body.should.have.property('avatarUrl')
                    response.body.should.have.property('description')
                    response.body.description.should.be.a('array')
                })
                done()
        })
    })
})