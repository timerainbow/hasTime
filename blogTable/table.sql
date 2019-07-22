----------------------------------------
--------------博主信息表-----------------
----------------------------------------
DROP TABLE IF EXISTS `blogger`;
CREATE TABLE `blogger` (
	`id` char(32) CHARACTER SET gbk NOT NULL DEFAULT '',
	`username` varchar(64) NOT NULL,
	`password` varchar(64) NOT NULL,
	`gender` varchar(16) NOT NULL,
	`age` varchar(32) NOT NULL,
	`profession` varchar(32) NOT NULL,
	`telephone` varchar(32)  NOT NULL,
	`email` varchar(32) NOT NULL,
	`introduction` varchar(255) NOT NULL,
	`createtime` datetime  NOT NULL,
	`updatetime` datetime  NOT NULL,
	PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

----------------------------------------
---------------博客内容表----------------
----------------------------------------
DROP TABLE IF EXISTS `blog_content`;
CREATE TABLE `blog_content` (
	`blog_content_id` char(32) NOT NULL,
	`content` text NOT NULL,
	`createtime` datetime NOT NULL,
	`updatetime` datetime NOT NULL,
	PRIMARY KEY (`blog_content_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

----------------------------------------
---------------博客信息表----------------
----------------------------------------
DROP TABLE IF EXISTS `blog`;
CREATE TABLE `blog` (
	`blogid` char(32) NOT NULL,
	`title` varchar(255) NOT NULL,
	`bloginfo` varchar(255) NOT NULL,
	`readtimes` int(255) NOT NULL,
	`kinds` char(64) NOT NULL,
	`content` char(255) NOT NULL,
	`createtime` datetime NOT NULL,
	`updatetime` datetime NOT NULL,
	PRIMARY KEY (`blogid`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

----------------------------------------
---------------博客类别表----------------
----------------------------------------
DROP TABLE IF EXISTS `blog_category`;
CREATE TABLE `blog_category` (
	`category_id` char(32) NOT NULL,
	`category_name` varchar(40) NOT NULL,
	`blogid` char(32) NOT NULL,
	`createtime` datetime NOT NULL,
	`updatetime` datetime NOT NULL,
	PRIMARY KEY (`category_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;




