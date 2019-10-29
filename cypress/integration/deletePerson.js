describe('Delete person', () => {
  it('Delete from table pushing delete button', () => {
    cy.visit('http://localhost/directorioPersonas/')
    
    // Tiempo que necesita angular para renderizar los componentes
    cy.wait(3000);
    
    cy.get('.btn-delete:first').click();
  });
});