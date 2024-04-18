import { Test, TestingModule } from '@nestjs/testing';
import { PayGrpcController } from './pay-grpc.controller';
import { PayGrpcService } from './pay-grpc.service';

describe('PayGrpcController', () => {
  let controller: PayGrpcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PayGrpcController],
      providers: [PayGrpcService],
    }).compile();

    controller = module.get<PayGrpcController>(PayGrpcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
