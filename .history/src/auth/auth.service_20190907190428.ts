import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtToken: JwtService,
        ){}

    async singUp(authCredentialsDto: AuthCredentialsDto) {
        return this.userRepository.singUp(authCredentialsDto);
    }

    async signIn(authCredentialsDto: AuthCredentialsDto) {
        const username = await this.userRepository.validateUserPassword(authCredentialsDto);
        if(!username){
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload = { username };
        const accessToken = await this.jwtToken.sign(payload)
    }
}
