CREATE TABLE IF NOT EXISTS NovaSphere_bqdm (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(255),
    targetAudience TEXT,
    mainFeatures TEXT[],
    techStack TEXT[],
    logoPrompt TEXT,
    colorScheme VARCHAR(255)
);