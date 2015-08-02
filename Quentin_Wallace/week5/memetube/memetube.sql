
CREATE DATABASE memetube;

\c memetube

CREATE TABLE videos (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(80) NOT NULL,
  description VARCHAR(200),
  video_id VARCHAR(100)
);

INSERT INTO videos (title, description, video_id)
VALUES ('New SPECTRE Trailer','Watch the new trailer for SPECTRE. A cryptic message from the past sends James Bond on a rogue mission to Mexico City and eventually Rome.', 'LTDaET-JweU');


<iframe width="560" height="315" src="https://www.youtube.com/embed/LTDaET-JweU" frameborder="0" allowfullscreen></iframe>