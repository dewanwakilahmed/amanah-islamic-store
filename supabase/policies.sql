-- Enable Row Level Security on all three tables
alter table orders enable row level security;
alter table products enable row level security;
alter table blacklisted_phones enable row level security;

-- ORDERS --
-- Public can insert (submit order form)
create policy "Public can insert orders"
  on orders for insert
  to anon
  with check (true);

-- Only service role can select, update, delete
create policy "Service role full access on orders"
  on orders for all
  to service_role
  using (true)
  with check (true);

-- PRODUCTS --
-- Public can read active products
create policy "Public can read active products"
  on products for select
  to anon
  using (active = true);

-- Only service role can write products
create policy "Service role full access on products"
  on products for all
  to service_role
  using (true)
  with check (true);

-- BLACKLISTED_PHONES --
-- Public can select (for blacklist check on form submit)
create policy "Public can read blacklist"
  on blacklisted_phones for select
  to anon
  using (true);

-- Only service role can insert/update/delete blacklist entries
create policy "Service role full access on blacklist"
  on blacklisted_phones for all
  to service_role
  using (true)
  with check (true);