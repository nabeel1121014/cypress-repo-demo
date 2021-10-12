import HomePage from '../pageObjects/homePage'
import CareersPage from '../pageObjects/careersPage'

describe('User Visit careers page and validate filters and job openings', () => {
    const homePage = new HomePage();
    const careersPage = new CareersPage();
    const AUTOMATION_JOB_TITLE = "QA Automation Engineer";

    beforeEach(() => {
        homePage.visit().waitPageLoading();
    });

    it('User can view only  1 qa automation open job', () => {
        homePage.clickCareersLink()
        careersPage.waitPageLoading().validateAmountOfOpenings(AUTOMATION_JOB_TITLE, 1);
    });

    it('User can filter open jobs by title "Automation"', () =>{
        const filterValue= "Automation"
        homePage.clickCareersLink();
        careersPage.waitPageLoading().typeInFilterInput(filterValue).validateFilterResults(filterValue);
    });
});
