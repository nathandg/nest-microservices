import { Test, TestingModule } from '@nestjs/testing';
import { PayGrpcService } from './pay-grpc.service';

describe('PayGrpcService', () => {
  let service: PayGrpcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PayGrpcService],
    }).compile();

    service = module.get<PayGrpcService>(PayGrpcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
