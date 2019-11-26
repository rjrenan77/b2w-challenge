import request from 'supertest';
import app from '../../src/app';

describe('Planet', () => {
  it('should be able to register a planet and your characteristics', async () => {
    const response = await request(app)
      .post('/planet')
      .send({
        name: 'tatooine',
        climate: 'cold',
        ground: 'gray',
        appearances: 5,
      });

    expect(response.body).toHaveProperty('planet');
  });
});
