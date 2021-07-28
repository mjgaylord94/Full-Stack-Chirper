CREATE USER
	'chirprapp'@'localhost'
IDENTIFIED BY 'chirpchirp';

GRANT ALL PRIVILEGES
ON chirperdb.*
TO 'chirprapp'@'localhost';

ALTER USER 'chirprapp'@'localhost' IDENTIFIED WITH mysql_native_password BY 'chirpchirp'