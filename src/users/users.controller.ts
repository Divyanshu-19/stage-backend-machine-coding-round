import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  UseGuards,
  Request,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './users.services';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(
    @Body()
    createUserDto: {
      email: string;
      password: string;
      username: string;
    },
  ) {
    return this.userService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    return this.userService.login(loginDto.email, loginDto.password);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('list')
  async getMyList(@Request() req) {
    return this.userService.getMyList(req.user.userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('list')
  async updateMyList(
    @Request() req,
    @Body() myList: { contentId: string; contentType: string }[],
  ) {
    return this.userService.updateMyList(req.user.userId, myList);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('list/:contentId')
  async deleteFromMyList(
    @Request() req,
    @Param('contentId') contentId: string,
  ) {
    return this.userService.deleteFromMyList(req.user.userId, contentId);
  }
}
