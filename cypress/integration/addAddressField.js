describe('Campo dirección agregado en la vista principal', () => {
  it('Se muestra el campo dirección en la tabla principal', function() {
    cy.visit('http://localhost/directorioPersonas/');
    cy.wait(3000);
    cy.get('thead').contains('Dirección');
  });

  it('No está el campo fecha', function() {
    cy.get('th').each(($el, index, $list) => {
      cy.get($el).should('not.have.text', 'Fecha')
    });
  }); 
});