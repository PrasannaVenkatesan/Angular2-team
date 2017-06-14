import { TeamPage } from './app.po';

describe('team App', () => {
  let page: TeamPage;

  beforeEach(() => {
    page = new TeamPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
