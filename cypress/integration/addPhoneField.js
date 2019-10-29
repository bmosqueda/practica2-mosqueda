function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getRandomPhone() {
  return random(1000000000, 9999999999);
}

describe('Campo teléfono', () => {
  var phone = getRandomPhone();

  it('Se muestra el campo teléfono en el formulario de agregar persona', function() {
    cy.visit('http://localhost/directorioPersonas/');
    cy.wait(3000);
    cy.get('#btnAddPerson').click();
    cy.get('input[ng-model="persona.telefono"]').type(phone);
    cy.get('input[ng-model="persona.nombre"]').type('Brandon Mosqueda');
    cy.get('input[ng-model="persona.direccion"]').type('Referenda #88, Lebanon');
    cy.get('#btnSavePerson').click();
  });


  it('Hay un registro con el teléfono registrado', function() {
    cy.wait(3000);
    cy.contains(phone);
  });  
});