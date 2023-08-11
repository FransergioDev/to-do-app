import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './shared/local-auth.guard';
import { AuthService } from './shared/auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  /*Old method: Método que só tratada a autenticação de forma local mas sem criar token
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req: any) {
    return req.user;
  }*/
}
