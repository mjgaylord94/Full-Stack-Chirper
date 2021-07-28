create database chirperdb;

use chirperdb;

create table users (
	id int not null auto_increment primary key,
    name varchar(50) not null,
    image varchar(500) not null,
    _created datetime default current_timestamp
);

drop table if exists chirps;

create table chirps (
	id int not null auto_increment primary key,
    userid int not null,
    chirpText varchar(300) not null,
    _created datetime default current_timestamp,
    foreign key (userid) references users(id)
);

INSERT INTO users (name, image) VALUES
('Oroku', 'https://ami.animecharactersdatabase.com/uploads/chars/5688-1280951159.jpg'),
('Shoukichi', 'https://m.media-amazon.com/images/S/aplus-media/vc/0961ae9a-57db-44b4-8e44-94c87bff35dd.__CR0,0,1748,1748_PT0_SX220_V1___.jpg'),
('Gonta', 'https://ami.animecharactersdatabase.com/uploads/chars/5688-815818309.jpg'),
('Jiji','https://i.pinimg.com/originals/aa/98/f7/aa98f7cbdf68c550dc364c42fb0b7d3d.png'),
('Lady_Eboshi','https://i.pinimg.com/736x/8a/1a/7e/8a1a7e0f72a13fb0a2618b646aa81670.jpg'),
('Yubaba','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMp4OFMGHftvD20CXBSl7nqOVbzLHqtIdcMQ&usqp=CAU'),
('Sophie','https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-howls-moving-castle-grandma-sophie.jpg');

INSERT INTO chirps (userid, chirpText) VALUES
(1, "But the true art of transforming can only be practiced by foxes, raccoons and a few cats."),
(2, "What if the humans leveled the entire forest? Then where are we gonna go?"),
(3, "The world is crawling with humans! Like roaches! We need to destroy as many as we can!!"),
(4, "Well pardon me, Miss Snooty Cat!"),
(5, "Cut off a wolf's head and it still has the power to bite."),
(6, "Oh, Haku's bleeding all over the carpet."),
(7, "Yes, I'm the scariest witch of them all—the kind that cleans!");