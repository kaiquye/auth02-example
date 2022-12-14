import { Router } from 'express';
import { HttpAdapter } from '../../../../../utils/adapters/httpAdapter';
import UserController from '../controller/user.controller';
import { CreateUserDto } from '../dto/createUser.dto';
import { dtoValidator } from '../../../../../shared/middlewares/validador.transfer.object';
import { LoginUserDto } from '../dto/loginUser.dto';
import AuthMiddleware from '../../../../../shared/middlewares/auth.middleware';
import RefreshTokenMiddleware from '../../../../../shared/middlewares/refreshToken.middleware';

const userRoutes = Router();

userRoutes.post(
  '/create',
  AuthMiddleware,
  dtoValidator(CreateUserDto, 'BODY'),
  HttpAdapter(UserController.create, 'add-user-infos'),
);
userRoutes.post(
  '/login',
  dtoValidator(LoginUserDto, 'BODY'),
  HttpAdapter(UserController.login, 'not-user-infos'),
);
userRoutes.post(
  '/refresh-token',
  RefreshTokenMiddleware,
  HttpAdapter(UserController.refreshToken, 'add-user-infos'),
);

export default userRoutes;
