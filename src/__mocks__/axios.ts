import axios from 'axios';

type mockAxiosType = jest.Mocked<typeof axios>;

const mockAxios = jest.genMockFromModule<mockAxiosType>('axios');

mockAxios.create = jest.fn(() => mockAxios)

export default mockAxios