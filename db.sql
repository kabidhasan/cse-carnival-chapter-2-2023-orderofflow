CREATE TABLE Users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  profile_picture_url VARCHAR(255),
  education VARCHAR(255),
  phone_number VARCHAR(20)
);

CREATE TABLE Experts (
  expert_id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  profile_picture_url VARCHAR(255),
  country VARCHAR(255),
  educational_qualification VARCHAR(255),
  ielts_score DECIMAL(5, 2),
  gre_score DECIMAL(5, 2),
  toefl_score DECIMAL(5, 2),
  crash_course BOOLEAN,
  one_time_session BOOLEAN,
  document_review BOOLEAN,
  available BOOLEAN,
  phone_number VARCHAR(20)
);

CREATE TABLE Appointments (
  appointment_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES Users(user_id),
  expert_id INT REFERENCES Experts(expert_id),
  appointment_date TIMESTAMP NOT NULL,
  status VARCHAR(255) NOT NULL,
  fee DECIMAL(10, 2) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  item TEXT  -- Added the 'item' column of data type TEXT
);

