-- ============================================================
-- MOROKOT CAFE — Supabase Database Setup
-- Run this in: Supabase Dashboard > SQL Editor
-- ============================================================

drop table if exists menu_items;

create table menu_items (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  description text not null,
  price numeric(10,2) not null,
  category text not null check (category in ('drinks','food','snacks','specials')),
  image_url text,
  tag text,
  available boolean not null default true,
  created_at timestamptz default now()
);

alter table menu_items enable row level security;

create policy "Public read" on menu_items for select using (true);
create policy "Admin full access" on menu_items for all using (true) with check (true);

-- Storage bucket for menu images
insert into storage.buckets (id, name, public)
values ('menu-images', 'menu-images', true)
on conflict (id) do nothing;

create policy "Public image read" on storage.objects for select using (bucket_id = 'menu-images');
create policy "Admin image upload" on storage.objects for insert with check (bucket_id = 'menu-images');
create policy "Admin image delete" on storage.objects for delete using (bucket_id = 'menu-images');

-- Seed data
insert into menu_items (name, description, price, category, tag) values
  ('Cambodian Iced Coffee', 'Strong brewed coffee over ice with sweetened condensed milk. Rich, bold, and refreshing.', 2.50, 'drinks', 'Best Seller'),
  ('Fresh Coconut Juice', 'Young coconut served fresh, straight from the shell. Ice cold and natural.', 2.00, 'drinks', null),
  ('Lemon Soda', 'Freshly squeezed lemon with soda water and a hint of salt. A local favourite.', 1.50, 'drinks', null),
  ('Sugarcane Juice', 'Freshly pressed sugarcane juice, served ice cold. Sweet and energising.', 1.50, 'drinks', null),
  ('Nom Banh Chok', 'Cambodian rice noodles with green fish curry sauce, fresh vegetables and herbs.', 3.00, 'food', 'Morning Special'),
  ('Bai Sach Chrouk', 'Grilled pork over steamed rice with pickled daikon and cucumber. Classic breakfast.', 3.50, 'food', 'Popular'),
  ('Khmer Noodle Soup', 'Pork and rice noodle soup with fresh bean sprouts, banana blossom, and herbs.', 3.00, 'food', null),
  ('Fried Rice', 'Cambodian-style fried rice with egg, spring onion and your choice of protein.', 3.50, 'food', null),
  ('Num Pang (Baguette)', 'Crispy Cambodian baguette filled with pâté, pickled vegetables and fresh herbs.', 2.00, 'snacks', null),
  ('Fried Banana', 'Ripe banana dipped in light batter, deep fried golden. Crispy outside, soft inside.', 1.00, 'snacks', null),
  ('Grilled Corn', 'Charcoal-grilled corn brushed with butter and seasoning. Smoky and sweet.', 1.50, 'snacks', null),
  ('Instant Noodle Cup', 'Hot instant noodles — quick, cheap, and satisfying any time of day or night.', 1.00, 'snacks', '24hr Fav');
