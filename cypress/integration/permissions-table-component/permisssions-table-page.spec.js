describe('Permissions Table UI', () => {
    it('Should return true when title component was correct', () => {
        cy.visit('/')

        cy.contains("Tabela de Permissões").should('to.have.length', 1)
    })
    it('Disabling the checkbox all must disable all checkbox in the column', () => {
        cy.visit('/')        
        
        cy.get("[data-cy=allcheckbox-col0]").uncheck();

        cy.get("[data-cy=checkbox-sm1-col0-i1]").should('not.be.checked');
        cy.get("[data-cy=checkbox-sm1-col0-i2]").should('not.be.checked');
        cy.get("[data-cy=smcheckbox-sm1-col0]").should('not.be.checked');
       
        cy.get("[data-cy=checkbox-sm2-col0-i3]").should('not.be.checked');
        cy.get("[data-cy=checkbox-sm2-col0-i4]").should('not.be.checked');
        cy.get("[data-cy=checkbox-sm2-col0-i5]").should('not.be.checked');
        cy.get("[data-cy=smcheckbox-sm2-col0]").should('not.be.checked');

        cy.get("[data-cy=checkbox-sm3-col0-i6]").should('not.be.checked');
        cy.get("[data-cy=checkbox-sm3-col0-i7]").should('not.be.checked');
        cy.get("[data-cy=checkbox-sm3-col0-i8]").should('not.be.checked');
        cy.get("[data-cy=checkbox-sm3-col0-i9]").should('not.be.checked');
        cy.get("[data-cy=smcheckbox-sm3-col0]").should('not.be.checked');

        cy.get("[data-cy=checkbox-sm4-col0-i10]").should('not.be.checked');
        cy.get("[data-cy=smcheckbox-sm4-col0]").should('not.be.checked');
    })
    it('Disable the checkbox of the "Análise" module must disable all checkbox of the sub modules', () => {
        cy.visit('/')        

        cy.get("[data-cy=smcheckbox-sm1-col0]").uncheck();

        cy.get("[data-cy=checkbox-sm1-col0-i1]").should('not.be.checked');
        cy.get("[data-cy=checkbox-sm1-col0-i2]").should('not.be.checked');
    })
    it('Disable the checkbox of the "Contas" module must disable all checkbox of the sub modules', () => {
        cy.visit('/')        

        cy.get("[data-cy=smcheckbox-sm2-col0]").uncheck();

        cy.get("[data-cy=checkbox-sm2-col0-i3]").should('not.be.checked');
        cy.get("[data-cy=checkbox-sm2-col0-i4]").should('not.be.checked');
        cy.get("[data-cy=checkbox-sm2-col0-i5]").should('not.be.checked');
    })
    it('Disable the checkbox of the "Customização" module must disable all checkbox of the sub modules', () => {
        cy.visit('/')        

        cy.get("[data-cy=smcheckbox-sm3-col0]").uncheck();

        cy.get("[data-cy=checkbox-sm3-col0-i6]").should('not.be.checked');
        cy.get("[data-cy=checkbox-sm3-col0-i7]").should('not.be.checked');
        cy.get("[data-cy=checkbox-sm3-col0-i8]").should('not.be.checked');
        cy.get("[data-cy=checkbox-sm3-col0-i9]").should('not.be.checked');
    })
    it('Disable the checkbox of the "Financeiro" module must disable all checkbox of the sub modules', () => {
        cy.visit('/')        

        cy.get("[data-cy=smcheckbox-sm4-col0]").uncheck();

        cy.get("[data-cy=checkbox-sm4-col0-i10]").should('not.be.checked');
    })
    it('Should disable checkbox of all modules when disabling all corresponding sub modules', () => {
        cy.visit('/')        

        cy.get("[data-cy=checkbox-sm1-col0-i1]").uncheck();
        cy.get("[data-cy=checkbox-sm1-col0-i2]").uncheck();
        cy.get("[data-cy=smcheckbox-sm1-col0]").should('not.be.checked');
       
        cy.get("[data-cy=checkbox-sm2-col0-i3]").uncheck();
        cy.get("[data-cy=checkbox-sm2-col0-i4]").uncheck();
        cy.get("[data-cy=checkbox-sm2-col0-i5]").uncheck();
        cy.get("[data-cy=smcheckbox-sm2-col0]").should('not.be.checked');

        cy.get("[data-cy=checkbox-sm3-col0-i6]").uncheck();
        cy.get("[data-cy=checkbox-sm3-col0-i7]").uncheck();
        cy.get("[data-cy=checkbox-sm3-col0-i8]").uncheck();
        cy.get("[data-cy=checkbox-sm3-col0-i9]").uncheck();
        cy.get("[data-cy=smcheckbox-sm3-col0]").should('not.be.checked');

        cy.get("[data-cy=checkbox-sm4-col0-i10]").uncheck();
        cy.get("[data-cy=smcheckbox-sm4-col0]").should('not.be.checked');
    })
    it('While all modules are disabled the checkbox "Todos" should be disabled', () => {
        cy.visit('/')        

        cy.get("[data-cy=smcheckbox-sm1-col0]").uncheck();
        cy.get("[data-cy=allcheckbox-col0]").should('not.be.checked');
        cy.get("[data-cy=smcheckbox-sm1-col0]").check();
        cy.get("[data-cy=allcheckbox-col0]").should('be.checked');

        cy.get("[data-cy=smcheckbox-sm2-col0]").uncheck();
        cy.get("[data-cy=smcheckbox-sm3-col0]").uncheck();
        cy.get("[data-cy=smcheckbox-sm4-col0]").uncheck();
        cy.get("[data-cy=allcheckbox-col0]").should('not.be.checked');
        cy.get("[data-cy=smcheckbox-sm2-col0]").check();
        cy.get("[data-cy=smcheckbox-sm3-col0]").check();
        cy.get("[data-cy=smcheckbox-sm4-col0]").check();
        cy.get("[data-cy=allcheckbox-col0]").should('be.checked');
    })
    it('Clicking the collapse button of each module must change between the "notCollapse" and "collapse" class', () => {
        cy.visit('/')        
        cy.get("[data-cy=groupCollapse-sm1]").should('have.class', 'notCollapse');        
        cy.get("[data-cy=btnCollapse-sm1]").click();
        cy.get("[data-cy=groupCollapse-sm1").should('have.class', 'collapse');   

        cy.get("[data-cy=groupCollapse-sm2]").should('have.class', 'notCollapse');        
        cy.get("[data-cy=btnCollapse-sm2]").click();
        cy.get("[data-cy=groupCollapse-sm2").should('have.class', 'collapse');    

        cy.get("[data-cy=groupCollapse-sm3]").should('have.class', 'notCollapse');        
        cy.get("[data-cy=btnCollapse-sm3]").click();
        cy.get("[data-cy=groupCollapse-sm3").should('have.class', 'collapse');    

        cy.get("[data-cy=groupCollapse-sm4]").should('have.class', 'notCollapse');        
        cy.get("[data-cy=btnCollapse-sm4]").click();
        cy.get("[data-cy=groupCollapse-sm4").should('have.class', 'collapse');    
    })
    it('Start with all checked checkbox', () => {
        cy.visit('/')        

        cy.get(":checkbox").should('be.checked');
    })
    it('Register button should exist', () => {
        cy.visit('/')  
        
        cy.contains("CADASTRAR").should('to.have.length', 1);
    })
})