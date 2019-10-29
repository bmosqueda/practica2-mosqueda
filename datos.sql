CREATE TABLE `datos` (
  `id` int(8) unsigned NOT NULL auto_increment,
  `nombre` varchar(70) default NULL,
  `direccion` varchar(120) default NULL,
  `fechaCreacion` timestamp NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO datos(nombre, direccion, fechaCreacion)
VALUES('Brandon Mosqueda', 'Semirecumbent #23, Nepal', '2015-12-09'),
      ('Alejandro González', 'Swindle #70, Jamaica', '2020-05-03'),
      ('Floyd Giesbrecht', 'Employed #38, Uzbekistan', '2028-01-17');

ALTER TABLE datos ADD COLUMN telefono VARCHAR(10) DEFAULT NULL AFTER direccion; 