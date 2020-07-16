beforeEach(() => {
  cy.visit("http://localhost:3000/");
});

describe("Form Tests", () => {
  describe("Name", () => {
    it("can be written into", () => {
      const field = cy.get("[data-cy=name]");

      field.type("Amado Guerrero");

      field.should("have.value", "Amado Guerrero");
    });

    it("errors show up", () => {
      const field = cy.get("[data-cy=name]");

      field.type("AA");

      cy.get("[data-cy=name-error]").invoke("text").should("not.be", "");
    });
  });

  describe("Email", () => {
    it("can be written into", () => {
      const field = cy.get("[data-cy=email]");

      field.type("amado4884@gmail.com");

      field.should("have.value", "amado4884@gmail.com");
    });

    it("errors show up", () => {
      const field = cy.get("[data-cy=email]");

      field.type("aaaaaaaa");

      cy.get("[data-cy=email-error]").invoke("text").should("not.be", "");
    });
  });

  describe("Password", () => {
    it("can be written into", () => {
      const field = cy.get("[data-cy=password]");

      field.type("aaaaaaaaaa");

      field.should("have.value", "aaaaaaaaaa");
    });

    it("errors show up", () => {
      const field = cy.get("[data-cy=password]");

      field.type("aaaa");

      cy.get("[data-cy=password-error]").invoke("text").should("not.be", "");
    });
  });

  describe("Role", () => {
    it("can be changed", () => {
      const field = cy.get("[data-cy=role]");

      field.select("Full Stack Developer");

      field.should("have.value", "Full Stack Developer");
    });

    it("errors show up", () => {
      const field = cy.get("[data-cy=role]");

      field.select("Full Stack Developer");
      field.select("ROLE");

      cy.get("[data-cy=role-error]").invoke("text").should("not.be", "");
    });
  });

  describe("Start Date", () => {
    it("can be changed", () => {
      const field = cy.get("[data-cy=startDate]");

      field.type("2020-07-06");

      field.should("have.value", "2020-07-06");
    });

    it("errors show up", () => {
      const field = cy.get("[data-cy=startDate]");

      field.type("2020-07-06");
      field.clear();

      const error = cy.get("[data-cy=startDate-error]");

      const errorValue = error.invoke("text");
      if (
        errorValue ===
          'this must be a `date` type, but the final value was: `Invalid Date` (cast from the value `""`).' ||
        errorValue === "You must provide a start date."
      ) {
        return true;
      } else return false;
    });
  });

  describe("End Date", () => {
    it("can be changed", () => {
      const field = cy.get("[data-cy=endDate]");

      field.type("2020-07-06");

      field.should("have.value", "2020-07-06");
    });

    it("errors show up", () => {
      const field = cy.get("[data-cy=endDate]");

      field.type("2020-07-06");
      field.clear();

      const error = cy.get("[data-cy=endDate-error]");

      const errorValue = error.invoke("text");
      if (
        errorValue ===
          'this must be a `date` type, but the final value was: `Invalid Date` (cast from the value `""`).' ||
        errorValue === "You must provide an end date."
      ) {
        return true;
      } else return false;
    });
  });

  describe("Reason", () => {
    it("can be written into", () => {
      const field = cy.get("[data-cy=reason]");

      field.type("Amado Guerrero");

      field.should("have.value", "Amado Guerrero");
    });

    it("errors show up", () => {
      const field = cy.get("[data-cy=reason]");

      field.type("AA");
      field.clear();

      cy.get("[data-cy=reason-error]").invoke("text").should("not.be", "");
    });
  });

  describe("Terms of Service", () => {
    it("can be changed", () => {
      const field = cy.get("[data-cy=tos]");

      field.check();

      field.should("be.checked");

      field.uncheck();

      field.should("not.be.checked");
    });
  });

  describe("Submit Button", () => {
    it("is disabled by default", () => {
      const field = cy.get("[data-cy=submit]");

      field.should("be.disabled");
    });

    it("is ONLY enabled if all other fields are filled and without errors", () => {
      cy.get("[data-cy=submit]").should("be.disabled");

      cy.get("[data-cy=name]").type("Amado Guerrero");
      cy.get("[data-cy=name-error]").invoke("text").should("be", "");
      cy.get("[data-cy=email]").type("amado4884@gmail.com");
      cy.get("[data-cy=email-error]").invoke("text").should("be", "");
      cy.get("[data-cy=password]").type("aaaaaaa");
      cy.get("[data-cy=password-error]").invoke("text").should("be", "");
      cy.get("[data-cy=role]").select("Full Stack Developer");
      cy.get("[data-cy=role-error]").invoke("text").should("be", "");
      cy.get("[data-cy=startDate]").type("2020-07-06");
      cy.get("[data-cy=startDate-error]").invoke("text").should("be", "");
      cy.get("[data-cy=endDate]").type("2020-07-06");
      cy.get("[data-cy=endDate-error]").invoke("text").should("be", "");
      cy.get("[data-cy=reason]").type("AAAAAAAAAA");
      cy.get("[data-cy=reason-error]").invoke("text").should("be", "");
      cy.get("[data-cy=tos]").check();
      cy.get("[data-cy=tos-error]").invoke("text").should("be", "");

      cy.get("[data-cy=submit]").should("be.enabled");
    });

    it("User can submit form after correct inputs", () => {
      cy.get("[data-cy=submit]").should("be.disabled");

      cy.get("[data-cy=name]").type("Amado Guerrero");
      cy.get("[data-cy=name-error]").invoke("text").should("be", "");
      cy.get("[data-cy=email]").type("amado4884@gmail.com");
      cy.get("[data-cy=email-error]").invoke("text").should("be", "");
      cy.get("[data-cy=password]").type("aaaaaaa");
      cy.get("[data-cy=password-error]").invoke("text").should("be", "");
      cy.get("[data-cy=role]").select("Full Stack Developer");
      cy.get("[data-cy=role-error]").invoke("text").should("be", "");
      cy.get("[data-cy=startDate]").type("2020-07-06");
      cy.get("[data-cy=startDate-error]").invoke("text").should("be", "");
      cy.get("[data-cy=endDate]").type("2020-07-06");
      cy.get("[data-cy=endDate-error]").invoke("text").should("be", "");
      cy.get("[data-cy=reason]").type("AAAAAAAAAA");
      cy.get("[data-cy=reason-error]").invoke("text").should("be", "");
      cy.get("[data-cy=tos]").check();
      cy.get("[data-cy=tos-error]").invoke("text").should("be", "");

      cy.get("[data-cy=submit]").should("be.enabled");
      cy.get("[data-cy=submit]").click();

      cy.wait(2000);

      cy.get("[data-cy=user-id]").invoke("text").should("not.be", "");
      cy.get("[data-cy=user-created]").invoke("text").should("not.be", "");
      cy.get("[data-cy=user-name]").invoke("text").should("be", "Amado Guerrero");
      cy.get("[data-cy=user-email]").invoke("text").should("be", "amado4884@gmail.com");
      cy.get("[data-cy=user-password]").invoke("text").should("be", "aaaaaaa");
      cy.get("[data-cy=user-role]").invoke("text").should("be", "Full Stack Developer");
      cy.get("[data-cy=user-startDate]").invoke("text").should("be", "2020-07-06");
      cy.get("[data-cy=user-endDate]").invoke("text").should("be", "2020-07-06");
      cy.get("[data-cy=user-reason]").invoke("text").should("be", "AAAAAAAAAA");
      cy.get("[data-cy=user-tos]").invoke("text").should("be", "Yes");
    });
  });
});
