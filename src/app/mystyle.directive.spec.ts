import { MystyleDirective } from './mystyle.directive';


describe('MystyleDirective', () => {
  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('')
    };
    const directive = new MystyleDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
