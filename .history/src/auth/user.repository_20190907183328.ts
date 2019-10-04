import { Repository, EntityRepository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async singUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const {username, password} = authCredentialsDto;
        const salt = await bcrypt.genSalt();
        const user = new User();
        user.username = username;
        user.password = await this.hashPassword1(password, salt);
        user.salt = salt;
        try {
            await user.save();
        } catch (error) {
            if (error.code == 23505) {
                throw new ConflictException('Username already exists');
            } else {throw new InternalServerErrorException(); }
        }
    }

    private async hashPassword1(password: string, salt: string){
        return bcrypt.hashPassword(password, salt);
    }
}
