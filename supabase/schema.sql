-- Enable UUID generation
create extension if not exists "pgcrypto";

-- orders
create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  division text not null,
  district text not null,
  thana text not null,
  address text not null,
  bundle_qty int not null,
  price_bdt int not null,
  status text not null default 'pending',
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  created_at timestamptz not null default now()
);

-- products
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  price_bdt int not null,
  weight_grams int not null,
  image_url text,
  active bool not null default true,
  seasonal bool not null default false
);

-- blacklisted_phones
create table if not exists blacklisted_phones (
  phone text primary key,
  reason text,
  created_at timestamptz not null default now()
);