import { Test } from "@nestjs/testing";
import { UserRepository} from './user.repository'

const mockCredentialsDto = { }
describe('UserRepository', () =>{
    let userRepository;

    beforeEach(async () => {
         const module = await Test.createTestingModule({
            providers: [
                UserRepository,
            ],
         }).compile();
         userRepository = await module.get<UserRepository>(UserRepository);
    });

    describe('signUp', () => {

    });
})