-- ============================================
-- SUPABASE SCHEMA FOR DRP VENTURES
-- Run this in the Supabase SQL Editor
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- PERSONA CONTENT TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS persona_content (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  language TEXT NOT NULL CHECK (language IN ('nl', 'en', 'sv')),
  persona TEXT NOT NULL CHECK (persona IN ('scrum-master', 'agile-coach', 'team-manager')),
  content JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Ensure unique combination of language + persona
  UNIQUE(language, persona)
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_persona_content_lang_persona
ON persona_content(language, persona);

-- ============================================
-- UPDATED_AT TRIGGER
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_persona_content_updated_at
  BEFORE UPDATE ON persona_content
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

ALTER TABLE persona_content ENABLE ROW LEVEL SECURITY;

-- Allow public read access (for the website)
CREATE POLICY "Allow public read access" ON persona_content
  FOR SELECT
  USING (true);

-- Allow authenticated users to insert/update/delete
CREATE POLICY "Allow authenticated insert" ON persona_content
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated update" ON persona_content
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated delete" ON persona_content
  FOR DELETE
  TO authenticated
  USING (true);

-- ============================================
-- ADMIN USERS TABLE (optional, for role-based access)
-- ============================================

CREATE TABLE IF NOT EXISTS admin_users (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  role TEXT DEFAULT 'editor' CHECK (role IN ('admin', 'editor')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Only allow authenticated users to read their own record
CREATE POLICY "Users can read own admin record" ON admin_users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);
