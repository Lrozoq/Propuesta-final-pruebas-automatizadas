import CreateTag from "../../pages/CreateTag";
import LoginPage from "../../pages/LoginPage";

const timestamp = Date.now();

const CONSTANTS = {
    TAG_DATA_FILE: "../e2e/v5.47.1/scenarios/poolDataA-priori/data/6.tagsManagement_Functionality/mock_data_tags.json",
  };

describe("Management tags on website", () => {
    beforeEach(() => {
        // Given that I am logged into my Ghost account
        LoginPage.visitLoginPage();
        LoginPage.fillEmailLogin();
        LoginPage.fillPasswordLogin();
        LoginPage.clickFormLogin();
    });
    it("Create new tag", () => {
        cy.request({
            method: "GET",
            url: "https://my.api.mockaroo.com/tags_api.json?key=04f62920",
            responseType: "text"
          }).then(request => {
            request.body.forEach(tag=>{
            CreateTag.newTag(tag.name, tag.color.substring(1,tag.color.length), tag.slug, tag.description);
            cy.contains(tag.name).eq(0).should("exist");
            });
        });
    });

    it("Delete tag", () => {
        cy.request({
            method: "GET",
            url: "https://my.api.mockaroo.com/tags_api.json?key=04f62920",
            responseType: "text"
          }).then(request => {
            request.body.forEach(tag=>{
            CreateTag.newTag(tag.name, tag.color, tag.slug, tag.description);
            CreateTag.deleteTag(tag.name);
            cy.contains(tag.name).eq(0).should("exist");
    });
    });
});
});
