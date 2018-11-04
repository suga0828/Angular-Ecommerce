import { ExampleRoutingModule } from './example-routing.module';

describe('ExampleRoutingModule', () => {
  let exampleRoutingModule: ExampleRoutingModule;

  beforeEach(() => {
    exampleRoutingModule = new ExampleRoutingModule();
  });

  it('should create an instance', () => {
    expect(exampleRoutingModule).toBeTruthy();
  });
});
