import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async singUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const {username, password} = authCredentialsDto;
        const user = new User();
        user.username = username;
        user.password = password;
        try {
            await user.save();
        } catch (error) {
            console.log(error.code);
        }
    }
}
