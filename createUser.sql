CREATE USER
	'chirprapp'@'localhost'
IDENTIFIED BY 'chirpchirp';

GRANT ALL PRIVILEGES
ON chirperdb.*
TO 'chirprapp'@'localhost';