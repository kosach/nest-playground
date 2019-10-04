import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository){}

    singUp(authCredentialsDto: AuthCredentialsDto){
        return this.userRepository.singUp(authCredentialsDto);
    }

    signIn(authCredentialsDto: AuthCredentialsDto){
        const result = this.userRepository.create()
    }
}
