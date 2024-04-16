import { Test, TestingModule } from '@nestjs/testing';
import { MsProductsController } from './ms-products.controller';
import { MsProductsService } from './ms-products.service';

describe('MsProductsController', () => {
  let msProductsController: MsProductsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsProductsController],
      providers: [MsProductsService],
    }).compile();

    msProductsController = app.get<MsProductsController>(MsProductsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msProductsController.getHello()).toBe('Hello World!');
    });
  });
});
