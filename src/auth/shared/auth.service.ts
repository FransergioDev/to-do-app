import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/shared/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(userEmail: string, userPassword: string) {
    const user = await this.usersService.getByEmail(userEmail);
    if (user && user.password === userPassword) {
      const { _id, name, email } = user;
      return { id: _id, name, email };
    }

    return null;
  }
}
