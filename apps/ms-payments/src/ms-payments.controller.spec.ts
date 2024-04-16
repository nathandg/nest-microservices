import { Test, TestingModule } from '@nestjs/testing';
import { MsPaymentsController } from './ms-payments.controller';
import { MsPaymentsService } from './ms-payments.service';

describe('MsPaymentsController', () => {
  let msPaymentsController: MsPaymentsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsPaymentsController],
      providers: [MsPaymentsService],
    }).compile();

    msPaymentsController = app.get<MsPaymentsController>(MsPaymentsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msPaymentsController.getHello()).toBe('Hello World!');
    });
  });
});
